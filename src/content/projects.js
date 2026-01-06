export const projects = [
  {
    name: "Geo Dispatch Platform",
    description: "Web portal for dispatching field teams with routing and geofencing.",
    stack: ["Leaflet",  "PostGIS", "FastAPI"],
    // links: { github: "https://github.com/example/geo-dispatch", demo: "#" }
  },
  {
    name: "Data Pipelines Suite",
    description: "ETL/ELT pipelines on Airflow + Kafka with SLA/SLO monitoring.",
    stack: ["Airflow", "Kafka", "PostGIS", "Docker"],
    links: { github: "https://github.com/aliaksandrgis/airquality-suite", demo: "https://air.naviodev.com" }
  },
  {
    name: "Mobile Field Toolkit",
    description: "Cross-platform field app with offline maps and checklists.",
    stack: ["Android", "iOS"],
    // links: { github: "https://github.com/example/field-toolkit", demo: "#" }
  }
];
