import { createServer, Model } from "miragejs";

createServer({
  models: {
    projects: Model,
    services: Model,
  },

  seeds(server) {
    server.create("project", {
      id: 1,
      tag: "residential",
      address: "Throsby s58",
      imgURL: [
        "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1602774895672-b553538bceb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("project", {
      id: 2,
      tag: "renovation",
      address: "Moncrieff s8",
      imgURL: [
        "https://images.unsplash.com/photo-1604014238245-6ee85bbee7ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("project", {
      id: 3,
      address: "Moncrieff s8",
      tag: "commercial",
      imgURL: [
        "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("project", {
      id: 4,
      address: "Moncrieff s8",
      tag: "residential",
      imgURL: [
        "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("project", {
      id: 5,
      address: "Moncrieff s8",
      tag: "residential",
      imgURL: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("project", {
      id: 6,
      address: "Moncrieff s8",
      tag: "multi-units",
      imgURL: [
        "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    });
    server.create("service", {
      id: 1,
      title: "residential",
      desc: [
        "So we design homes accordingly taking into consideration factors such as the occupants’ personalities, living habits and social lives, rather than simply applying a cookie cutter methodology.",
      ],
      details: [
        "Building Design",
        "Custom New Homes",
        "Architectural Drafting",
        " BASIX Certificates (single dwellings)",
        "3D Illustrations",
        "Marketing floor plans",
        "DA Submissions and handing the process",
        "Site Analysis and help with understanding your site constraints"],
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    server.create("service", {
      id: 2,
      title: "commercial",
      desc: [
        "So we design homes accordingly taking into consideration factors such as the occupants’ personalities, living habits and social lives, rather than simply applying a cookie cutter methodology.",
      ],
      details: [
        "Whether creating a new commercial property or refurbishing an existing building, we pride ourselves on creating inspirational designs that are functional, aesthetically pleasing and a strong reflection of our commercial clients’ brands.",
      ],
      src: "https://images.unsplash.com/photo-1627750673161-02af15c7c722?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    server.create("service", {
      id: 3,
      title: "renovation",
      desc: [
        "So we design homes accordingly taking into consideration factors such as the occupants’ personalities, living habits and social lives, rather than simply applying a cookie cutter methodology.",
      ],
      details: [
        "Renovations and Extension Plans",
        "Architectural Drafting",
        "Virtual Reality",
        "3D Illustrations",
        "Marketing floor plans",
        "DA Submissions and handing the process",
        "Site Analysis and help with understanding your site constraints",
      ],
      src: "https://images.unsplash.com/photo-1670589953882-b94c9cb380f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    server.create("service", {
      id: 4,
      title: "interiors",
      desc: [
        "So we design homes accordingly taking into consideration factors such as the occupants’ personalities, living habits and social lives, rather than simply applying a cookie cutter methodology.",
      ],
      details: [
        "Color & Material Selections",
        "Fixtures, Fittings and Appliance Selections",
        "Virtual Reality",
        "Electrical and Lighting Plans",
        "3D Illustrations",
        "Exterior Color & Material Schemes",
        "Interior & Exterior Scheduling",
        "Window Furnishing Selections",
      ],
      src: "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    server.create("service", {
      id: 5,
      title: "multi-Residential",
      desc: [
        "So we design homes accordingly taking into consideration factors such as the occupants’ personalities, living habits and social lives, rather than simply applying a cookie cutter methodology.",
      ],
      details: [
        "Building Design",
        "Custom New Homes",
        "Architectural Drafting",
        " BASIX Certificates (single dwellings)",
        "3D Illustrations",
        "Marketing floor plans",
        "DA Submissions and handing the process",
        "Site Analysis and help with understanding your site constraints",
      ],
      src: "https://images.unsplash.com/photo-1698362695891-8628b6ff6802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/projects", (schema, request) => {
      return schema.projects.all();
    });

    this.get("/projects/:id", (schema, request) => {
      const id = request.params.id;
      return schema.projects.find(id);
    });
    this.get("/services", (schema, request) => {
      return schema.services.all();
    });

    this.get("/services/:title", (schema, request) => {
      const title = request.params.title;
      return schema.services.where((service) => service.title === title);
    });
  },
});
