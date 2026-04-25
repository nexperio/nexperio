export type Tool = {
  slug: string
  num: string
  tag: string
  title: string
  subtitle: string
  /** 1-2 sentences for cards & meta description */
  description: string
  audience: string
  inputs: string[]
  outputs: string[]
  useCases?: string[]
  /** Optional motto/quote */
  philosophy?: string
  /** Live subdomain URL (when deployed) */
  href?: string
  /** Wix legacy URL (fallback while migrating) */
  legacy: string
}

export const TOOLS: Tool[] = [
  {
    slug: 'p-l',
    num: '01',
    tag: 'Finance',
    title: 'Monitorer votre P&L',
    subtitle: 'Un bilan clair de votre business',
    description:
      "Diagnostiquer la santé financière de votre e-commerce en quelques minutes. À partir de vos données opérationnelles : un état complet de la rentabilité, des charges et des ratios essentiels.",
    audience:
      "E-commerçants et gestionnaires qui veulent piloter leur rentabilité et optimiser leur allocation budgétaire — sans Excel, sans approximation.",
    inputs: [
      'Revenus et volumes de vente',
      'Coûts de revient (COGS, logistique)',
      'Dépenses marketing, tech et fixes',
      'Investissements initiaux',
    ],
    outputs: [
      'CA, marge brute, dépenses, résultat net',
      'Tableau détaillé des charges',
      'Ratios essentiels (rentabilité, coût moyen, part marketing)',
    ],
    useCases: [
      'Piloter le ROI marketing',
      'Anticiper les seuils de rentabilité',
      'Comparer plusieurs périodes ou scénarios commerciaux',
    ],
    href: 'https://pl.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/p-l',
  },
  {
    slug: 'lifetime-value',
    num: '02',
    tag: 'LTV',
    title: 'Lifetime Value',
    subtitle: 'Votre miroir stratégique',
    description:
      "Combien rapporte vraiment un client. Combien il coûte à acquérir. La vérité du ratio LTV/CAC, en 5 paramètres.",
    audience:
      "Entrepreneurs et responsables e-commerce qui veulent optimiser la rentabilité client — au-delà du simple coût d'acquisition.",
    inputs: [
      'Panier moyen',
      "Fréquence d'achat",
      'Durée de vie client',
      'Marge',
      "Coût d'acquisition (CAC)",
    ],
    outputs: [
      'LTV réelle',
      'CA généré par client',
      'Marge nette par client',
      'Ratio LTV/CAC',
    ],
    philosophy:
      "Si le ratio est faible, l'outil identifie les axes à activer : rétention, marge ou coût d'acquisition.",
    href: 'https://clv.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/analyser-lifetime-value',
  },
  {
    slug: 'codes-promo',
    num: '03',
    tag: 'Promo',
    title: 'Générateur de codes promo',
    subtitle: "Une promo bien pensée, c'est une vente en plus. Pas une marge en moins.",
    description:
      "Créez des codes promotionnels personnalisés, adaptés à vos contraintes business. Préfixe, format, conditions, durée — tout est paramétrable, l'historique est intégré.",
    audience:
      "E-commerçants et responsables marketing qui veulent dynamiser les ventes sans rogner sur la marge.",
    inputs: [
      'Préfixe du code',
      'Format (chiffres, lettres, combinaison)',
      'Type de remise (montant fixe ou %)',
      "Montant minimum d'achat",
      "Nombre maximum d'utilisations",
      'Période de validité',
      'Produits ou catégories exclus',
    ],
    outputs: ["Code unique prêt à l'emploi", 'Historique des codes générés'],
    useCases: [
      'Distribution par email, affichage ou impression',
      'Suivi et ajustement via historique intégré',
      'Fidélisation intelligente sans destruction de marge',
    ],
    href: 'https://promo.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/generer-des-codes-promo',
  },
  {
    slug: 'qr-codes',
    num: '04',
    tag: 'On→Offline',
    title: 'Générateur de QR codes',
    subtitle: 'Un lien. Un scan. Une action.',
    description:
      "Connectez vos supports physiques au digital en 10 secondes. URL, message ou contact — un QR code optimisé pour le scan, prêt à imprimer.",
    audience:
      "Entreprises et commerces qui ont besoin de relier leurs supports physiques (flyers, packaging, vitrines) à un contenu numérique sans complexité technique.",
    inputs: ['URL, message ou informations de contact'],
    outputs: ["QR code téléchargeable, prêt à imprimer ou afficher", 'Conseils de lisibilité'],
    useCases: [
      'Flyers et brochures',
      'Emballages produits',
      'Vitrines et écrans numériques',
      'Gobelets, badges, supports événementiels',
    ],
    philosophy: "Pas d'app à installer. Pas de designer requis. C'est tout ce qu'il faut.",
    href: 'https://qr.nexperio.tech',
    legacy: 'https://www.nexperio.com/la-trousse/creer-qrcodes',
  },
  {
    slug: 'simulateur-prix-dynamique',
    num: '05',
    tag: 'Pricing',
    title: 'Simulateur de prix dynamique',
    subtitle: 'Un prix réaliste, aligné avec vos données business',
    description:
      "En 2 minutes, le prix optimal pour votre produit. Pas un tarif théorique — un prix calé sur vos vraies données, ajustable en temps réel avec des curseurs.",
    audience:
      "Propriétaires de boutiques e-commerce qui veulent optimiser leur stratégie tarifaire sans perdre en marge ni en volume.",
    inputs: [
      'Prix actuel du produit',
      'Coût de production',
      'Marge visée ou volume cible',
      'Niveau de pression concurrentielle',
      'Valeur perçue par les clients',
    ],
    outputs: [
      'Prix optimal recommandé',
      'Impact simulé sur les ventes',
      'Impact sur la marge bénéficiaire',
      "Impact sur le chiffre d'affaires",
    ],
    useCases: [
      'Tester plusieurs scénarios avec curseurs',
      "Visualiser instantanément l'effet d'un changement de prix",
      'Ajuster face à la concurrence ou à la valeur perçue',
    ],
    href: 'https://nexperio.github.io/dynamic-pricing/',
    legacy: 'https://www.nexperio.com/la-trousse/simulateur-prix-dynamique',
  },
  {
    slug: 'analyse-marge-produit',
    num: '06',
    tag: 'Marge',
    title: 'Analyse de marge produit',
    subtitle: 'Vos produits au scanner financier',
    description:
      "Identifier les produits qui margent vraiment, et ceux qui saignent en silence. Pour arrêter les hémorragies cachées dans votre catalogue.",
    audience:
      "E-commerçants qui veulent vérifier la rentabilité réelle de chaque référence et optimiser leur catalogue.",
    inputs: [
      'Prix de vente',
      "Coût d'achat",
      'Quantités vendues',
      'Frais annexes (logistique, marketing, plateformes)',
    ],
    outputs: [
      'Marge brute unitaire',
      'Profit global par référence',
      'Taux de rentabilité',
      'Alertes et recommandations',
    ],
    useCases: [
      'Identifier les produits sous-performants',
      'Repérer les coûts à optimiser',
      'Réaligner les prix ou volumes',
    ],
    philosophy: "Un produit qui se vend, c'est bien. Un produit qui marge, c'est vital.",
    href: 'https://nexperio.github.io/margin-analyzer/',
    legacy: 'https://www.nexperio.com/la-trousse/analyse-marge-produit',
  },
  {
    slug: 'guide-des-tailles',
    num: '07',
    tag: 'Mode',
    title: 'Guide des tailles',
    subtitle: 'Conversion +. Satisfaction +. Retours −.',
    description:
      "Aidez vos clients à trouver la bonne taille avant l'achat. Moins de retours, plus de conversions, plus de satisfaction.",
    audience:
      "E-commerçants vendant des produits où la taille est critique : mode, chaussures, accessoires.",
    inputs: ['Sélection de morphologie', 'Mesures du client (simplifiées)'],
    outputs: ['Recommandation de taille personnalisée'],
    useCases: [
      'Réduire les retours liés aux mauvaises tailles',
      "Augmenter la confiance avant l'achat",
      'Adapter en sur-mesure au catalogue (prototype)',
    ],
    philosophy:
      "Un client hésitant sur la taille n'achète pas. Une mauvaise taille livrée, c'est un retour, un mécontentement, une perte sèche.",
    href: 'https://nexperio.github.io/guide-tailles/',
    legacy: 'https://www.nexperio.com/la-trousse/guide-des-tailles',
  },
]

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug)
}
