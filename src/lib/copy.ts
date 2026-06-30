import type { Language } from "@/components/providers/language-provider";

export const copy = {
  zh: {
    navbar: {
      brand: "GPUAI",
      links: [
        { label: "平台能力", href: "#features" },
        { label: "方案层级", href: "#pricing" },
        { label: "客户评价", href: "#testimonials" },
        { label: "平台概览", href: "#about" },
      ],
      signIn: "登录控制台",
      getStarted: "预约演示",
      languageLabel: "EN",
      mobileMenuLabel: "打开导航菜单",
    },
    hero: {
      badge: "企业级 AI 平台",
      titleLine1: "构建可治理、可交付",
      titleLine2: "可规模化的智能系统",
      description:
        "GPUAI 为企业团队提供统一的 AI 基础平台，覆盖模型接入、策略治理、观测审计、全球部署与交付支持，帮助组织在合规前提下更快推动智能能力上线。",
      primaryCta: "预约产品演示",
      secondaryCta: "查看平台概览",
      trustedPrefix: "服务于",
      trustedHighlight: "2,000+",
      trustedSuffix: "支跨区域产品与工程团队",
      highlights: [
        "SOC 2 Type II 控制与端到端加密",
        "多区域部署与 99.99% SLA 目标",
        "统一策略治理与审计留痕",
        "支持公有云、专有云与本地部署",
      ],
    },
    features: {
      eyebrow: "平台能力",
      titlePrefix: "围绕企业交付场景设计的",
      titleHighlight: "核心基础设施",
      description:
        "从模型治理到运行观测，GPUAI 以一致的控制面和清晰的交付边界，帮助安全、平台与业务团队协同推进 AI 上线。",
      items: [
        {
          title: "模型治理与策略控制",
          description: "统一接入多类模型与推理服务，按团队、环境与数据等级配置调用策略、配额与审批流程。",
        },
        {
          title: "低延迟生产运行",
          description: "通过多区域推理路由、弹性扩缩容和缓存策略，为面向客户的关键流程提供稳定响应。",
        },
        {
          title: "企业安全与权限边界",
          description: "支持细粒度访问控制、密钥隔离、传输与存储加密，以及面向合规团队的审计可见性。",
        },
        {
          title: "全球级部署能力",
          description: "支持跨区域故障切换、就近接入与环境隔离，满足国际业务场景下的连续可用需求。",
        },
        {
          title: "全链路观测与审计",
          description: "记录提示、调用、延迟、错误、成本与命中率指标，帮助平台团队建立可追踪的运营基线。",
        },
        {
          title: "集成编排与交付连接",
          description: "通过 API、事件和数据连接器接入现有业务系统、数据平台与内部审批或工单流程。",
        },
      ],
    },
    pricing: {
      eyebrow: "方案层级",
      titlePrefix: "适配不同交付阶段的",
      titleHighlight: "企业方案",
      description:
        "面向试点验证、业务扩展与集团级部署提供分层能力。以下内容仅用于静态展示，不涉及真实计费。",
      mostPopular: "推荐用于规模化落地",
      plans: [
        {
          name: "Pilot",
          period: "/试点阶段",
          description: "用于业务验证、PoC 和首批内部场景上线",
          features: [
            "单业务域接入与基础模型治理",
            "标准观测面板与调用日志",
            "基础权限控制与团队协作",
            "工作日技术支持",
            "上线准备清单与交付模板",
          ],
          cta: "申请试点方案",
        },
        {
          name: "Business",
          period: "/生产阶段",
          description: "适合多团队协作与面向客户的正式业务系统",
          features: [
            "多环境隔离与多区域部署",
            "统一审计、成本追踪与告警",
            "SSO、SAML 与细粒度角色控制",
            "7x12 响应支持与架构评审",
            "标准 SLA 与发布治理能力",
            "常见企业系统集成支持",
          ],
          cta: "预约业务方案演示",
        },
        {
          name: "Enterprise",
          period: "/定制交付",
          description: "适合高合规、高可靠和复杂组织结构的集团级部署",
          features: [
            "专属部署形态与网络隔离方案",
            "私有化或专有云部署支持",
            "高级审计、合规资料包与安全评估配合",
            "24x7 优先支持与技术客户经理",
            "定制集成与迁移规划服务",
            "联合治理与长期平台演进支持",
          ],
          cta: "联系企业方案团队",
        },
      ],
    },
    testimonials: {
      eyebrow: "客户评价",
      titlePrefix: "来自真实交付团队的",
      titleHighlight: "平台反馈",
      description:
        "以下内容仅作静态展示，但整体表达参考企业平台常见的采购、上线与运营关注点。",
      items: [
        {
          role: "TechFlow 首席技术官",
          content: "我们最看重的是治理能力和交付可控性。GPUAI 让平台团队终于能在不牺牲速度的前提下推进 AI 能力进入正式环境。",
        },
        {
          role: "ScaleUp 工程负责人",
          content: "我们把模型接入、策略和观测收敛到了统一平台，跨团队协作边界清晰了很多，交付节奏也更可控。",
        },
        {
          role: "DataViz Pro 创始人",
          content: "对成长型团队来说，最重要的是先把平台基座搭稳。我们用它完成了从试点到第一个客户场景的平滑过渡。",
        },
        {
          role: "Enterprise Corp 产品平台主管",
          content: "我们需要的不只是模型调用能力，还包括权限、日志、可靠性和跨团队管理。GPUAI 在这些基础能力上更接近企业真实需求。",
        },
        {
          role: "NexGen 平台架构师",
          content: "观测和审计能力给了我们足够的运维信心。出了问题能快速定位，扩容时也能看清资源和成本的变化趋势。",
        },
        {
          role: "AI Startup 首席执行官",
          content: "它不是单点能力工具，而是一个可以陪着团队逐步升级的交付平台。对于要长期建设智能系统的组织，这一点很关键。",
        },
      ],
    },
    about: {
      eyebrow: "平台概览",
      titlePrefix: "围绕可靠性、安全性与",
      titleHighlight: "运营透明度",
      titleSuffix: "建立平台基线",
      description:
        "GPUAI 的设计目标不是展示某个单点 AI 能力，而是帮助组织建立一套能长期运行、可被治理且易于扩展的智能平台操作系统。",
      stats: [
        { label: "活跃交付团队" },
        { label: "日均平台调用量" },
        { label: "平台级 SLA 目标" },
        { label: "平均上线效率提升" },
      ],
      trustedBy: "常见于平台工程、数据智能与业务技术团队的联合交付场景",
    },
    cta: {
      titlePrefix: "准备评估你的下一代",
      titleHighlight: "AI 平台架构",
      titleSuffix: "了吗？",
      description:
        "我们可以基于你的部署环境、合规约束和业务阶段，提供一份静态演示版本中的参考落地路径与方案层级说明。",
      primaryCta: "预约架构演示",
      secondaryCta: "联系方案顾问",
      supportPoints: [
        "架构讨论与场景梳理",
        "安全与合规关注点对齐",
        "部署形态与交付边界说明",
      ],
    },
    footer: {
      description:
        "面向企业团队的 AI 平台静态展示页，强调治理、可靠性、部署能力与长期运营可见性。",
      categories: {
        Product: "平台",
        Company: "公司",
        Resources: "资源",
        Legal: "合规",
      },
      links: {
        Product: ["平台能力", "部署架构", "治理与审计", "集成方式", "方案层级"],
        Company: ["平台概览", "客户案例", "合作伙伴", "新闻动态", "联系我们"],
        Resources: ["文档中心", "安全白皮书", "状态页", "支持政策", "服务范围"],
        Legal: ["隐私说明", "数据处理条款", "安全承诺", "合规资料包"],
      },
      copyright: "保留所有权利。",
      status: "静态演示环境正常",
    },
  },
  en: {
    navbar: {
      brand: "GPUAI",
      links: [
        { label: "Platform", href: "#features" },
        { label: "Plans", href: "#pricing" },
        { label: "Reviews", href: "#testimonials" },
        { label: "Overview", href: "#about" },
      ],
      signIn: "Console Sign In",
      getStarted: "Book Demo",
      languageLabel: "中文",
      mobileMenuLabel: "Open navigation menu",
    },
    hero: {
      badge: "Enterprise AI Platform",
      titleLine1: "Build governed, production-ready",
      titleLine2: "intelligent systems at scale",
      description:
        "GPUAI gives enterprise teams a unified AI control plane for model access, policy enforcement, observability, global deployment, and delivery support so organizations can move faster without losing operational control.",
      primaryCta: "Book a Product Demo",
      secondaryCta: "View Platform Overview",
      trustedPrefix: "Used by",
      trustedHighlight: "2,000+",
      trustedSuffix: "product and engineering teams across regions",
      highlights: [
        "SOC 2 Type II controls and end-to-end encryption",
        "Multi-region deployment with 99.99% SLA targets",
        "Centralized policy governance and auditability",
        "Support for public cloud, dedicated cloud, and on-premise",
      ],
    },
    features: {
      eyebrow: "Platform",
      titlePrefix: "Core infrastructure designed for",
      titleHighlight: "enterprise delivery",
      description:
        "From model governance to runtime observability, GPUAI helps platform, security, and product teams operate AI workloads through a shared control surface.",
      items: [
        {
          title: "Model Governance and Policy Control",
          description: "Connect multiple model providers and route usage by team, environment, and data tier with enforceable policies and approval paths.",
        },
        {
          title: "Low-Latency Production Runtime",
          description: "Maintain stable response times for customer-facing workflows through multi-region routing, elastic scaling, and cache-aware execution.",
        },
        {
          title: "Enterprise Security Boundaries",
          description: "Apply fine-grained access controls, key isolation, encryption, and audit visibility that align with enterprise security practices.",
        },
        {
          title: "Global Deployment Readiness",
          description: "Support cross-region failover, locality-aware access, and environment isolation for international product operations.",
        },
        {
          title: "Observability and Audit Trails",
          description: "Track prompts, latency, errors, cost, and usage patterns so platform teams can establish clear operational baselines.",
        },
        {
          title: "Integration and Delivery Connectivity",
          description: "Integrate with internal systems, data platforms, approval flows, and delivery pipelines through APIs, events, and connectors.",
        },
      ],
    },
    pricing: {
      eyebrow: "Plans",
      titlePrefix: "Delivery tiers aligned to",
      titleHighlight: "enterprise maturity",
      description:
        "These tiers are presented for static front-end display only. They illustrate how the platform can be positioned across pilot, production, and enterprise rollout stages.",
      mostPopular: "Recommended for scaled production",
      plans: [
        {
          name: "Pilot",
          period: "/validation stage",
          description: "For PoCs, internal validation, and first controlled launches",
          features: [
            "Single domain rollout with baseline model governance",
            "Standard dashboards and call-level logging",
            "Core access control and team collaboration",
            "Business-hours technical support",
            "Readiness checklist and onboarding templates",
          ],
          cta: "Request Pilot Plan",
        },
        {
          name: "Business",
          period: "/production stage",
          description: "For multi-team delivery and customer-facing production workloads",
          features: [
            "Multi-environment isolation and multi-region rollout",
            "Unified audit, cost tracking, and alerting",
            "SSO, SAML, and fine-grained role controls",
            "Extended support with architecture reviews",
            "Standard SLA and release governance",
            "Common enterprise integrations",
          ],
          cta: "Book Business Demo",
        },
        {
          name: "Enterprise",
          period: "/custom delivery",
          description: "For high-compliance, high-reliability, and large-scale organizations",
          features: [
            "Dedicated deployment and network isolation options",
            "Private cloud or on-premise support",
            "Advanced audit capabilities and compliance artifacts",
            "24x7 priority support and technical account coverage",
            "Custom integration and migration planning",
            "Long-term governance and platform evolution support",
          ],
          cta: "Talk to Enterprise Team",
        },
      ],
    },
    testimonials: {
      eyebrow: "Reviews",
      titlePrefix: "Feedback from teams running",
      titleHighlight: "real delivery programs",
      description:
        "These references are static display content, but they are written to reflect the kinds of concerns enterprise buyers typically evaluate before rollout.",
      items: [
        {
          role: "CTO, TechFlow",
          content: "Governance and delivery control mattered more to us than raw model access. GPUAI helped our platform team move AI workloads into production without losing operational discipline.",
        },
        {
          role: "Head of Engineering, ScaleUp",
          content: "We consolidated model access, policy, and observability into one layer. That made cross-team coordination more predictable and easier to scale.",
        },
        {
          role: "Founder, DataViz Pro",
          content: "As a growing company, we needed a foundation we could trust before scaling usage. GPUAI gave us a cleaner path from pilot to the first customer-facing deployment.",
        },
        {
          role: "Product Platform Lead, Enterprise Corp",
          content: "The value was not only inference access. It was the combination of permissions, auditability, reliability, and shared operating practices across multiple teams.",
        },
        {
          role: "Platform Architect, NexGen",
          content: "The observability layer gave us confidence to operate AI features responsibly. We could measure performance, trace failures, and plan capacity with less guesswork.",
        },
        {
          role: "CEO, AI Startup",
          content: "It behaves like a long-term delivery platform, not just a toolkit. That matters when you are building capabilities that will keep evolving inside the business.",
        },
      ],
    },
    about: {
      eyebrow: "Overview",
      titlePrefix: "Built around reliability, security, and",
      titleHighlight: "operational clarity",
      titleSuffix: "",
      description:
        "GPUAI is designed to help organizations establish a durable AI platform baseline with transparent controls, governed deployment patterns, and infrastructure that can evolve with production use.",
      stats: [
        { label: "Active delivery teams" },
        { label: "Average daily platform calls" },
        { label: "Platform SLA target" },
        { label: "Average launch efficiency gain" },
      ],
      trustedBy: "Commonly evaluated by platform engineering, data intelligence, and business technology teams working together",
    },
    cta: {
      titlePrefix: "Ready to evaluate your next",
      titleHighlight: "AI platform architecture",
      titleSuffix: "?",
      description:
        "We can walk through deployment models, compliance considerations, and delivery boundaries using this static showcase as a reference starting point.",
      primaryCta: "Book Architecture Demo",
      secondaryCta: "Contact a Solutions Advisor",
      supportPoints: [
        "Architecture discussion and scenario mapping",
        "Security and compliance alignment",
        "Deployment and delivery boundary review",
      ],
    },
    footer: {
      description:
        "A static enterprise AI platform showcase focused on governance, reliability, deployment readiness, and long-term operational visibility.",
      categories: {
        Product: "Platform",
        Company: "Company",
        Resources: "Resources",
        Legal: "Compliance",
      },
      links: {
        Product: ["Platform Capabilities", "Deployment Architecture", "Governance", "Integrations", "Plan Tiers"],
        Company: ["Overview", "Customer Stories", "Partners", "News", "Contact"],
        Resources: ["Documentation", "Security Whitepaper", "Status Page", "Support Policy", "Service Scope"],
        Legal: ["Privacy Notice", "Data Processing Terms", "Security Commitments", "Compliance Pack"],
      },
      copyright: "All rights reserved.",
      status: "Static demo environment operational",
    },
  },
} as const;

export function getCopy(language: Language) {
  return copy[language];
}
