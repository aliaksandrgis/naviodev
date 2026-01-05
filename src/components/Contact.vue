<script setup>
import { reactive, ref } from 'vue'
import { contact } from '../content/contact'

const projectTypes = [
  'Web / Backend',
  'Mobile app',
  'Data & ETL / Pipelines',
  'GIS / Geo solutions',
  'Audit / Architecture review',
  'Other'
]

const form = reactive({
  name: '',
  workEmail: '',
  projectType: projectTypes[0],
  message: '',
  portfolio: '' // honeypot
})

const submitting = ref(false)
const status = ref(null)
const statusMessage = ref('')
const copied = ref(false)
const submitEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT || ''

const resetForm = () => {
  form.name = ''
  form.workEmail = ''
  form.projectType = projectTypes[0]
  form.message = ''
  form.portfolio = ''
}

const handleSubmit = async () => {
  status.value = null
  statusMessage.value = ''

  if (form.portfolio.trim()) {
    return
  }

  if (!form.name.trim() || !form.workEmail.trim() || !form.message.trim()) {
    status.value = 'error'
    statusMessage.value = 'Please fill in the required fields.'
    return
  }

  if (!submitEndpoint) {
    status.value = 'error'
    statusMessage.value = 'Contact endpoint is not configured.'
    return
  }

  submitting.value = true

  try {
    const payload = {
      name: form.name.trim(),
      workEmail: form.workEmail.trim(),
      projectType: form.projectType,
      message: form.message.trim()
    }

    const response = await fetch(submitEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok || !result.success) {
      throw new Error(result?.error || 'Unable to send message right now.')
    }

    status.value = 'success'
    statusMessage.value = 'Thanks! Your message has been sent.'
    resetForm()
  } catch (error) {
    status.value = 'error'
    statusMessage.value = error.message || 'Something went wrong. Please try again later.'
  } finally {
    submitting.value = false
  }
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(contact.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (error) {
    copied.value = false
  }
}
</script>

<template>
  <section id="contact" class="section fade-up">
    <div class="section-header">
      <div>
        <p class="badge">Contact</p>
        <h2 class="section-title">Get in touch</h2>
      </div>
    </div>
    <div class="card contact-card">
      <div class="contact-grid">
        <div class="intro">
          <div>
            <p class="muted">Prefer email?</p>
          </div>
          <div class="email-row">
            <a class="email-link" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            <button type="button" class="copy-btn" @click="copyEmail">{{ copied ? 'Copied' : 'Copy' }}</button>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit" lang="en">
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input v-model="form.name" type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input v-model="form.workEmail" type="email" placeholder="name@company.com" required />
            </label>
            <label class="full-row">
              <span>Project type</span>
              <select v-model="form.projectType">
                <option v-for="type in projectTypes" :key="type">{{ type }}</option>
              </select>
            </label>
            <label class="full-row">
              <span>Message</span>
              <textarea v-model="form.message" rows="4" placeholder="Describe the challenge or request" required></textarea>
            </label>
            <label class="honeypot" aria-hidden="true">
              <span>Portfolio (leave empty)</span>
              <input v-model="form.portfolio" type="text" tabindex="-1" autocomplete="off" />
            </label>
          </div>
          <div class="form-footer">
            <button class="button primary" type="submit" :disabled="submitting">
              {{ submitting ? 'Sending?' : 'Send message' }}
            </button>
            <p class="muted note">Response typically within 1 business day</p>
          </div>
          <p v-if="status" class="status" :class="status === 'success' ? 'success' : 'error'">
            {{ statusMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-card {
  padding: 28px;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 24px;
  align-items: stretch;
}

.intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
  align-self: stretch;
}

.email-row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 16px;
  flex-wrap: wrap;
}

.email-link {
  font-weight: 600;
  color: var(--text);
  word-break: break-all;
}

.copy-btn {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: var(--muted);
}

input,
select,
textarea {
  border-radius: 12px;
  border: 1px solid var(--border);
  background: rgba(5, 9, 20, 0.95);
  color: var(--text);
  padding: 12px;
  font-size: 14px;
  font-family: inherit;
}

select {
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #24c7d9 50%),
    linear-gradient(135deg, #24c7d9 50%, transparent 50%);
  background-position: calc(100% - 16px) calc(50% - 2px), calc(100% - 12px) calc(50% - 2px);
  background-size: 5px 5px;
  background-repeat: no-repeat;
}

select option {
  background: #040915;
  color: var(--text);
}

textarea {
  resize: vertical;
}

.full-row {
  grid-column: span 2;
}

.form-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.note {
  font-size: 13px;
}

.honeypot {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

.status {
  font-size: 13px;
  margin: 0;
}

.status.success {
  color: #4ade80;
}

.status.error {
  color: #f87171;
}

@media (max-width: 800px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .intro {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: 18px;
    margin-bottom: 16px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .full-row {
    grid-column: span 1;
  }
  .form-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

