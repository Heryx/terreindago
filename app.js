/**
 * TerreIndago — Interactive Portfolio Logic
 * - Bilingual IT / EN Switcher
 * - Interactive Before/After Geophysical Survey Comparison Slider + GIS Vector Layer Toggle
 * - Subsurface Stratigraphy & Signal Response Canvas Simulator (GPR, Magnetometry, ERT)
 * - Case Study Category Filtering
 * - Consultation Request Handler
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Bilingual Dictionary (IT / EN)
     ========================================================================== */
  const i18nData = {
    it: {
      telemetry_compliance: 'Standard: Linee Guida MiC VPIA & D.Lgs. 36/2023',
      brand_tagline: 'Subsurface & Landscape Archaeology',
      nav_services: 'Metodologie & Servizi',
      nav_simulator: 'Stratigrafia & Segnale',
      nav_portfolio: 'Casi Studio',
      nav_instrumentation: 'Strumentazione',
      nav_contact: 'Contatti & VPIA',
      nav_cta: 'Richiedi Indagine',

      hero_kicker: 'Diagnostica Archeologica & Geotecnologie',
      hero_title: 'Leggere il sottosuolo prima dello scavo, documentare il paesaggio con rigore metrico.',
      hero_lead:
        "TerreIndago integra prospezioni geofisiche ad alta risoluzione, telerilevamento multispettrale e LiDAR, topografia di precisione, sistemi GIS e direzione di scavo stratigrafico per la ricerca scientifica, la tutela e l'archeologia preventiva (VPIA).",
      hero_btn_primary: 'Esplora i Casi Studio',
      hero_btn_secondary: 'Schede Metodologiche',
      metric_1_label: 'Superficie indagata con GPR & Magnetometria',
      metric_2_label: 'Accuratezza planialtimetrica GNSS / Total Station',
      metric_3_label: 'Conformità standard MiC / ICA per VPIA',

      inspector_header_title: 'ISPETTORE MULTISTRATO: VILLA ROMANA RUSTICA',
      badge_before: '01. Ortofoto UAV & Cropmarks',
      badge_after: '02. GPR Time-Slice (-1.2m) & Mag',
      slider_label: 'Sovrapposizione Geofisica:',
      toggle_gis_vectors_on: 'Vettori GIS: ON',
      toggle_gis_vectors_off: 'Vettori GIS: OFF',

      services_kicker: 'Ambiti Operativi Integrati',
      services_title: 'Sei discipline per la conoscenza del territorio e dei monumenti',
      services_subtitle:
        "Dalla diagnostica non invasiva su vasta scala fino al rilievo Laser Scanner 3D dei monumenti e all'indagine stratigrafica diretta, forniamo flussi di lavoro georiferiti completi per Soprintendenze, Università, studi di progettazione ed enti pubblici.",

      service_1_title: "Geofisica Applicata all'Archeologia",
      service_1_desc:
        'Mappatura ad alta risoluzione delle anomalie sepolte tramite Georadar (GPR), magnetometria differenziale Fluxgate/Overhauser e tomografia elettrica di resistività (ERT 2D/3D) per individuare murature, fossati, fornaci, cavità e strutture sepolte senza intaccare il suolo.',
      service_1_caption: 'Indagine Georadar (GPR) in sito archeologico',
      service_1_spec1: 'Elaborazione Time-Slices 3D e inversione profili stratigrafici',
      service_1_spec2: 'Acquisizione in contesti complessi con posizionamento GNSS RTK',
      service_1_spec3: 'Interpretazione archeo-geofisica vettoriale del grado di affidabilità',

      service_2_title: 'Telerilevamento Satellitare (SAR/Ottico) & Change Detection',
      service_2_desc:
        'Elaborazione di dati satellitari radar ad apertura sintetica (SAR Sentinel-1, rapporto di polarizzazione VV/VH) e multispettrali per analisi multitemporali di Change Detection (SSD), individuazione di paleoalvei, cropmarks e monitoraggio delle trasformazioni del territorio.',
      service_2_caption: 'Telerilevamento Satellitare SAR Sentinel-1 & Change Detection (SSD)',
      service_2_spec1: 'Change Detection satellitare multitemporale SAR (Sentinel-1 VV/VH, SSD) e ottica',
      service_2_spec2: 'Analisi serie storiche decennali per tutela preventiva del paesaggio',
      service_2_spec3: 'Indici multispettrali (NDVI, NDRE) da satellite e drone',

      service_7_title: 'Fotogrammetria Structure from Motion (SfM) & Rilievo UAV',
      service_7_desc:
        'Acquisizione aerofotogrammetrica nadirale e obliqua da drone RTK e terrestre con elaborazione Structure from Motion (SfM) / Multi-View Stereo (MVS) per la restituzione di nuvole di punti dense, mesh 3D texturizzate, DEM e ortofoto metriche di scavi e complessi monumentali.',
      service_7_caption: 'Structure from Motion (SfM): camere e modello 3D',
      service_7_spec1: 'Bundle adjustment, orientamento camere con GCP GNSS RTK e ortofoto centimetriche',
      service_7_spec2: 'Documentazione 3D stratigrafica di cantiere, prospetti architettonici e DEM',

      service_3_title: 'Rilievo 3D Immersivo & Gaussian Splatting (3DGS)',
      service_3_desc:
        'Integrazione dei dataset fotogrammetrici SfM con algoritmi neurali di 3D Gaussian Splatting (Radiance Fields) per la generazione di Digital Twin tridimensionali fotorealistici di parchi archeologici e monumenti antichi esplorabili in tempo reale.',
      service_3_caption: 'Rilievo 3D immersivo con 3D Gaussian Splatting',
      service_3_spec1: 'Digital Twin fotorealistici 3DGS navigabili via web in tempo reale',
      service_3_spec2: 'Resa fedele di superfici lapidee, vegetazione e illuminazione complessa',

      service_6_title: 'Rilievo Monumenti con Laser Scanner 3D & Topografia',
      service_6_desc:
        'Scansione 3D ad altissima densità e precisione millimetrica di teatri antichi, anfiteatri, templi e architetture storiche, inquadrata con Stazione Totale e GNSS RTK. Elaborazione di nuvole di punti certificate, piante, sezioni strutturali e modelli HBIM.',
      service_6_caption: 'Nuvola di punti Laser Scanner 3D: Teatro Antico',
      service_6_spec1: 'Nuvole di punti dense (.E57 / .LAS), piante, prospetti e sezioni metriche',
      service_6_spec2: 'Inquadramento topografico, analisi delle deformazioni e modellazione HBIM',

      service_4_title: 'Rilievo LiDAR, Sistemi GIS, Scavo & VPIA',
      service_4_desc:
        'Elaborazione di modelli digitali del terreno (DTM/DEM) da rilievo LiDAR con filtraggio della vegetazione, analisi micro-topografica (Hillshade, SVF, LRM), progettazione di Geodatabase GIS conformi agli standard MiC / ICA e direzione di scavi archeologici e VPIA.',
      service_4_caption: 'DTM da Rilievo LiDAR: micro-rilievo e strutture sepolte',
      service_4_spec1: 'Elaborazione nuvole LiDAR, carte del potenziale e VPIA (D.Lgs. 36/2023)',
      service_4_spec2: 'Direzione di scavo stratigrafico, GIS intra-site e template GNA/ICA',

      sim_kicker: 'Diagnostica Sottosuolo Interattiva',
      sim_title: 'Confronto della risposta geofisica per profondità e target',
      sim_subtitle:
        'Seleziona una metodologia di indagine per visualizzare la firma del segnale (iperboli di riflessione GPR, dipolo magnetico o contrasto di resistività ERT) sulla sezione stratigrafica tipo.',
      sim_tab1_title: 'Georadar Multicanale (GPR 400/200 MHz)',
      sim_tab1_desc:
        'Ideale per murature, pavimentazioni, cavità, cripte e stratigrafie urbane complesse. Restituisce la profondità reale del target tramite analisi di velocità delle onde EM.',
      sim_tab2_title: 'Magnetometria Gradiente Fluxgate / Cesareo',
      sim_tab2_desc:
        'Altissima produttività areale in contesti extraurbani. Rileva fornaci, focolari, strutture in laterizio, buche di palo, fossati ricolmati e tracce termorimanenti (nT/m).',
      sim_tab3_title: 'Tomografia Elettrica 2D/3D (ERT)',
      sim_tab3_desc:
        'Indagine profonda del contatto con il substrato geologico, argini antichi, cisterne, tumuli funerari, porti sepolti e contesti ad elevata presenza argillosa.',
      sim_spec_res: 'Risoluzione Spaziale',
      sim_spec_target: 'Target Primari',
      sim_spec_prod: 'Resa Giornaliera',

      portfolio_kicker: 'Progetti & Campagne sul Campo',
      portfolio_title: 'Casi studio selezionati',
      portfolio_subtitle:
        'Esplora esempi concreti di integrazione tra fotogrammetria Structure from Motion (SfM), Laser Scanner 3D di monumenti, rilievo LiDAR, telerilevamento satellitare SAR, 3D Gaussian Splatting, geofisica GPR e GIS.',
      filter_all: 'Tutti i Progetti (6)',
      filter_geophysics: 'Geofisica (GPR / Mag / ERT)',
      filter_remotesensing: 'SfM, 3DGS, LiDAR & SAR',
      filter_topogis: 'Laser Scanner 3D, Topografia & GIS',
      filter_excavation: 'Scavo & VPIA',

      case1_loc: "Geofisica Applicata all'Archeologia • Acquisizione GPR",
      case1_title: 'Indagini Georadar (GPR) in Contesti Archeologici Monumentali',
      case1_desc:
        "Acquisizione Georadar (GPR) ad alta risoluzione in contesti archeologici complessi e a morfologia articolata. L'elaborazione dei profili B-Scan e la generazione di Time-Slices 3D georiferite permettono di individuare fasi costruttive sepolte, strutture murarie, cavità e livelli di frequentazione antichi senza impatto sul sito.",

      case6_loc: 'Fotogrammetria Structure from Motion • Rilievo Aerofotogrammetrico 3D',
      case6_title: 'Rilievo Fotogrammetrico Structure from Motion (SfM) di Complessi Templari',
      case6_desc:
        'Pianificazione di voli fotogrammetrici da drone (UAV) con griglia di acquisizione nadirale e obliqua, Bundle Adjustment delle prese fotografiche e appoggio topografico su Ground Control Points (GCP) GNSS RTK per la generazione di nuvole di punti dense, modelli 3D metrici, DEM e ortomosaici ad altissima risoluzione.',

      case2_loc: 'Rilievo 3D & Telerilevamento da Drone • Modellazione Avanzata',
      case2_title: 'Rilievo 3D e Modellazione Immersiva tramite Gaussian Splatting (3DGS)',
      case2_desc:
        "Integrazione di rilievi aerofotogrammetrici da drone (UAV) e algoritmi di 3D Gaussian Splatting per la generazione di gemelli digitali tridimensionali fotorealistici di complessi templari e parchi archeologici. Consente l'esplorazione fluida in tempo reale, l'integrazione con nuvole di punti metriche e la valorizzazione scientifica.",

      case3_loc: 'Telerilevamento Satellitare Radar • Change Detection & GIS',
      case3_title: 'Monitoraggio Satellitare SAR Sentinel-1 e Analisi di Change Detection (SSD)',
      case3_desc:
        "Analisi multitemporale decennale (2014–2024) basata su acquisizioni radar ad apertura sintetica Sentinel-1 (AWS-IW-VVVH RGB ratio) ed elaborazione dell'indice Sum of Squared Differences (SSD) per il rilevamento delle variazioni morfologiche, dell'espansione antropica, dell'umidità dei suoli e la tutela preventiva dei paesaggi archeologici.",

      case4_loc: 'Rilievo LiDAR & Analisi Micro-Morfologica • GIS',
      case4_title: 'Rilievo LiDAR e Modello Digitale del Terreno (DTM) per Strutture Sepolte',
      case4_desc:
        "Acquisizione ed elaborazione LiDAR ad altissima densità di punti con filtraggio della copertura vegetale ed estrazione del Modello Digitale del Terreno (DTM/Hillshade). L'analisi micro-topografica ha permesso di individuare chiaramente strutture archeologiche quadrangolari fortificate, recinti, viabilità antica e anomalie morfologiche invisibili a quota campagna.",

      case5_loc: 'Rilievo Architettonico & Topografia 3D • Monumenti Antichi',
      case5_title: 'Rilievo Laser Scanner 3D e Nuvole di Punti di Monumenti Antichi (Teatro)',
      case5_desc:
        'Acquisizione tramite Laser Scanner 3D terrestre ed elaborazione di nuvole di punti metriche ad altissima densità per la documentazione geometrica integrale di un teatro antico (cavea, scalaria, orchestra, proskenion, edificio scenico e pilastri perimetrali). Base metrica certificata per piante, profili, analisi strutturali e restauro.',

      stat_area: 'Metodologia / Strumento',
      stat_depth: 'Profondità / DTM',
      stat_method: 'Output / Sensori',
      stat_res: 'Acquisizione',
      stat_us: 'Sensore',
      stat_accuracy: 'Accuratezza / Serie',
      stat_compliance: 'Algoritmo',
      stat_electrodes: 'Elaborazione',
      stat_resistivity: 'Deliverable',

      eq_kicker: 'Dotazione Strumentale & Software',
      eq_title: 'Tecnologia da campo e pipeline di calcolo',
      eq_subtitle:
        'Operiamo con sensoristica calibrata e pipeline software certificate per garantire ripetibilità del dato, georeferenziazione centimetrica e interoperabilità con gli enti di tutela.',
      eq_col_domain: 'Comparto',
      eq_col_sensors: 'Sistemi & Sensori',
      eq_col_app: 'Applicazione Principale',
      eq_col_out: 'Deliverable Tecnico',
      eq_row1_inst: 'Sistemi GPR ad Alta Risoluzione & Multicanale (200/400/600 MHz)',
      eq_row1_app: 'Mappatura 3D di strutture murarie, pavimentazioni, cavità e stratigrafie sepolte in contesti monumentali, urbani ed extraurbani',
      eq_row2_inst: 'Gradiometri Fluxgate Multi-Sensore su carrello amagnetico + GNSS RTK',
      eq_row2_app: 'Prospezioni estensive ad alta velocità per fornaci, fossati, buche di palo, necropoli e viabilità antica',
      eq_row3_inst: 'Laser Scanner 3D Terrestre, Pipeline Structure from Motion (SfM) & 3D Gaussian Splatting (3DGS)',
      eq_row3_app: 'Nuvole di punti millimetriche, fotogrammetria UAV/terrestre e ricostruzione 3D immersiva di teatri, templi e monumenti antichi',
      eq_row4_inst: 'SAR Sentinel-1 (VV/VH), Ottico Multispettrale & Droni RTK (LiDAR / 5 Bande)',
      eq_row4_app: 'Analisi multitemporale di Change Detection (SSD), monitoraggio archeologico, micro-topografia sotto bosco e indici NDVI/NDRE',
      eq_row5_inst: 'Stazione Totale Robotica 1", Ricevitori GNSS Multi-Costellazione RTK, QGIS/PostGIS',
      eq_row5_app: "Inquadramento geodetico, rilievo stratigrafico di cantiere, geodatabase VPIA conformi al Geoportale Nazionale per l'Archeologia",

      contact_kicker: 'Consulenza Tecnica & Preventivi',
      contact_title: 'Pianifichiamo la tua prossima indagine sul campo',
      contact_desc:
        "Contattaci per valutare il protocollo diagnostico più adatto al tuo sito, richiedere un preventivo per prospezioni geofisiche, fotogrammetria Structure from Motion, Laser Scanner 3D, LiDAR, SAR e 3D Gaussian Splatting o affidare una Verifica Preventiva dell'Interesse Archeologico (VPIA).",
      compliance_box_title: 'Conformità Normativa & Qualifica Professionale',
      compliance_box_text:
        "Tutte le relazioni archeologiche, geofisiche e le banche dati GIS vengono redatte nel pieno rispetto del Codice dei Contratti Pubblici (D.Lgs. 36/2023, All. I.8) e delle Linee Guida dell'Istituto Centrale per l'Archeologia (ICA) per la pubblicazione sul Geoportale Nazionale per l'Archeologia (GNA).",
      contact_label_area: 'Operatività',
      contact_val_area: 'Tutto il territorio nazionale & missioni archeologiche internazionali',

      form_name: 'Nome / Ente / Studio *',
      form_email: 'Email di riferimento *',
      form_service: 'Servizio Richiesto *',
      form_opt_geo: 'Prospezione Geofisica (GPR / Magnetometria / ERT)',
      form_opt_rs: 'Fotogrammetria SfM, LiDAR, Telerilevamento SAR & 3D Gaussian Splatting',
      form_opt_gis: 'Rilievo Monumenti Laser Scanner 3D, Topografia & GIS (Template GNA/ICA)',
      form_opt_vpia: 'VPIA, Assistenza & Scavo Archeologico Stratigrafico',
      form_opt_int: 'Pacchetto Integrato Multi-Disciplinare',
      form_location: 'Comune / Estensione Stimata (ha o m²)',
      form_details: "Inquadramento del sito e obiettivi dell'indagine *",
      form_submit: 'Genera Richiesta Tecnica Preliminare',
      footer_motto: 'Diagnostica non invasiva, fotogrammetria SfM, Laser Scanner 3D, LiDAR, telerilevamento satellitare SAR, 3D Gaussian Splatting, topografia e scavo archeologico.'
    },

    en: {
      telemetry_compliance: 'Standards: Italian MiC VPIA Guidelines & Cultural Heritage GIS',
      brand_tagline: 'Subsurface & Landscape Archaeology',
      nav_services: 'Methods & Services',
      nav_simulator: 'Stratigraphy & Signal',
      nav_portfolio: 'Case Studies',
      nav_instrumentation: 'Equipment',
      nav_contact: 'Contact & VPIA',
      nav_cta: 'Request Survey',

      hero_kicker: 'Archaeological Diagnostics & Geotechnologies',
      hero_title: 'Reading the subsurface before excavation, documenting landscapes with metric rigor.',
      hero_lead:
        'TerreIndago integrates high-resolution geophysical prospection, Structure from Motion (SfM) photogrammetry, 3D Laser Scanning of ancient monuments, LiDAR DTM analysis, Sentinel-1 SAR change detection, 3D Gaussian Splatting, topography, and GIS.',
      hero_btn_primary: 'Explore Case Studies',
      hero_btn_secondary: 'Methodology Specs',
      metric_1_label: 'Area surveyed via GPR & Magnetometry',
      metric_2_label: 'GNSS RTK / Total Station 3D accuracy',
      metric_3_label: 'MiC / ICA GIS standard compliance',

      inspector_header_title: 'MULTILAYER INSPECTOR: ROMAN VILLA RUSTICA',
      badge_before: '01. UAV Orthophoto & Cropmarks',
      badge_after: '02. GPR Time-Slice (-1.2m) & Mag',
      slider_label: 'Geophysical Overlay:',
      toggle_gis_vectors_on: 'GIS Vectors: ON',
      toggle_gis_vectors_off: 'GIS Vectors: OFF',

      services_kicker: 'Integrated Operational Domains',
      services_title: 'Six disciplines for archaeological and monumental intelligence',
      services_subtitle:
        'From large-scale non-invasive prospection, Structure from Motion (SfM), 3D Laser Scanning of ancient monuments, LiDAR micro-topography, and satellite SAR monitoring to direct stratigraphic excavation.',

      service_1_title: 'Applied Archaeological Geophysics',
      service_1_desc:
        'High-resolution mapping of buried anomalies using Ground Penetrating Radar (GPR), Fluxgate/Overhauser differential magnetometry, and 2D/3D Electrical Resistivity Tomography (ERT) to detect walls, ditches, kilns, cavities, and buried structures non-invasively.',
      service_1_caption: 'Ground Penetrating Radar (GPR) survey at archaeological site',
      service_1_spec1: '3D Time-Slice processing and stratigraphic profile inversion',
      service_1_spec2: 'Acquisition in complex terrains with centimeter-grade GNSS RTK positioning',
      service_1_spec3: 'Vector archaeo-geophysical interpretation graded by reliability',

      service_2_title: 'Satellite (SAR/Optical) Remote Sensing & Change Detection',
      service_2_desc:
        'Synthetic Aperture Radar (Sentinel-1 SAR VV/VH polarization ratio) and multispectral satellite processing for multi-temporal Change Detection (SSD), paleochannel detection, and archaeological landscape monitoring.',
      service_2_caption: 'Sentinel-1 SAR Satellite Monitoring & Change Detection (SSD)',
      service_2_spec1: 'Multi-temporal SAR Change Detection (Sentinel-1 VV/VH, SSD) & optical analysis',
      service_2_spec2: 'Decadal time-series analysis for preventive landscape heritage protection',
      service_2_spec3: 'Multispectral vegetation indices (NDVI, NDRE) from satellite and UAV',

      service_7_title: 'Structure from Motion (SfM) Photogrammetry & UAV Survey',
      service_7_desc:
        'Nadir and oblique RTK UAV and terrestrial photogrammetric acquisition with Structure from Motion (SfM) / Multi-View Stereo (MVS) processing to generate dense point clouds, textured 3D meshes, DEMs, and metric orthophotos of excavations and monuments.',
      service_7_caption: 'Structure from Motion (SfM): camera frustums & 3D model',
      service_7_spec1: 'Bundle adjustment, GNSS RTK GCP camera alignment, and sub-centimeter orthophotos',
      service_7_spec2: '3D stratigraphic trench documentation, architectural elevations, and DEMs',

      service_3_title: 'Immersive 3D Survey & Gaussian Splatting (3DGS)',
      service_3_desc:
        'Integration of photogrammetric SfM datasets with neural 3D Gaussian Splatting (Radiance Fields) algorithms to generate photorealistic 3D Digital Twins of archaeological parks and ancient monuments navigable in real time.',
      service_3_caption: 'Immersive 3D survey via 3D Gaussian Splatting',
      service_3_spec1: 'Real-time web-navigable 3DGS photorealistic Digital Twins',
      service_3_spec2: 'High-fidelity rendering of masonry surfaces, vegetation, and complex lighting',

      service_6_title: '3D Laser Scanning of Monuments & Topography',
      service_6_desc:
        'Millimeter-accurate high-density 3D laser scanning of ancient theaters, amphitheaters, temples, and historical architecture, georeferenced via Total Station and GNSS RTK. Certified point clouds, plans, structural cross-sections, and HBIM.',
      service_6_caption: '3D Laser Scanner Point Cloud: Ancient Theater',
      service_6_spec1: 'Dense point clouds (.E57 / .LAS), metric plans, elevations, and sections',
      service_6_spec2: 'Topographic control, structural deformation analysis, and HBIM modeling',

      service_4_title: 'LiDAR Survey, GIS Systems, Excavation & VPIA',
      service_4_desc:
        'High-resolution Digital Terrain Model (DTM/DEM) generation from LiDAR point clouds with vegetation filtering, micro-topographic visualization (Hillshade, SVF, LRM), MiC/ICA-compliant GIS Geodatabases, and stratigraphic excavation / VPIA.',
      service_4_caption: 'LiDAR DTM Hillshade: micro-relief & buried structures',
      service_4_spec1: 'LiDAR point cloud processing, archaeological potential maps & VPIA',
      service_4_spec2: 'Stratigraphic excavation direction, intra-site GIS & GNA/ICA templates',

      sim_kicker: 'Interactive Subsurface Diagnostics',
      sim_title: 'Geophysical response comparison by depth and target',
      sim_subtitle:
        'Select a survey methodology to inspect its physical signal signature (GPR reflection hyperbolas, magnetic dipole, or ERT resistivity contrast) across a reference stratigraphic section.',
      sim_tab1_title: 'Multi-Channel Ground Penetrating Radar (GPR 400/200 MHz)',
      sim_tab1_desc:
        'Optimal for masonry walls, floors, vaults, crypts, and complex urban stratigraphy. Yields true target depth via electromagnetic wave velocity analysis.',
      sim_tab2_title: 'Fluxgate / Cesium Gradient Magnetometry',
      sim_tab2_desc:
        'Ultra-high areal coverage in rural landscapes. Detects kilns, hearths, brick structures, post-holes, backfilled ditches, and thermoremanent anomalies (nT/m).',
      sim_tab3_title: '2D/3D Electrical Resistivity Tomography (ERT)',
      sim_tab3_desc:
        'Deep investigation of bedrock contact, ancient embankments, cisterns, burial mounds, buried harbors, and clay-rich conductive environments.',
      sim_spec_res: 'Spatial Resolution',
      sim_spec_target: 'Primary Targets',
      sim_spec_prod: 'Daily Output',

      portfolio_kicker: 'Field Projects & Campaigns',
      portfolio_title: 'Selected case studies',
      portfolio_subtitle:
        'Explore real-world integrations of Structure from Motion (SfM) photogrammetry, 3D Laser Scanning of ancient monuments, LiDAR micro-topography, Sentinel-1 SAR remote sensing, 3D Gaussian Splatting, GPR geophysics, and GIS.',
      filter_all: 'All Projects (6)',
      filter_geophysics: 'Geophysics (GPR / Mag / ERT)',
      filter_remotesensing: 'SfM, 3DGS, LiDAR & SAR',
      filter_topogis: '3D Laser Scanner, Topography & GIS',
      filter_excavation: 'Excavation & VPIA',

      case1_loc: 'Applied Archaeological Geophysics • GPR Acquisition',
      case1_title: 'Ground Penetrating Radar (GPR) Surveys in Monumental Contexts',
      case1_desc:
        'High-resolution Ground Penetrating Radar (GPR) acquisition in complex monumental archaeological settings. B-Scan profile processing and georeferenced 3D Time-Slices identify buried construction phases, masonry foundations, cavities, and ancient occupation surfaces non-invasively.',

      case6_loc: 'Structure from Motion Photogrammetry • 3D Aerial Survey',
      case6_title: 'Structure from Motion (SfM) Photogrammetric Survey of Temple Complexes',
      case6_desc:
        'UAV photogrammetric flight planning with nadir and oblique acquisition grids, camera Bundle Adjustment, and GNSS RTK Ground Control Point (GCP) georeferencing to produce dense point clouds, metric 3D meshes, DEMs, and ultra-high-resolution orthomosaics.',

      case2_loc: '3D Survey & UAV Remote Sensing • Advanced Modeling',
      case2_title: '3D Survey and Immersive Modeling via 3D Gaussian Splatting (3DGS)',
      case2_desc:
        'Integration of UAV photogrammetric flights and 3D Gaussian Splatting algorithms to generate photorealistic 3D digital twins of temple complexes and archaeological parks, enabling real-time navigation, metric point-cloud integration, and scientific dissemination.',

      case3_loc: 'Satellite Radar Remote Sensing • Change Detection & GIS',
      case3_title: 'Sentinel-1 SAR Satellite Monitoring & Change Detection Analysis (SSD)',
      case3_desc:
        '10-year multi-temporal analysis (2014–2024) using Sentinel-1 Synthetic Aperture Radar (AWS-IW-VVVH RGB ratio) and Sum of Squared Differences (SSD) change detection to track morphological shifts, urban encroachment, soil moisture anomalies, and archaeological landscape preservation.',

      case4_loc: 'LiDAR Survey & Micro-Morphological Analysis • GIS',
      case4_title: 'LiDAR Survey & Digital Terrain Model (DTM) for Buried Structures',
      case4_desc:
        'High-density LiDAR acquisition and vegetation filtering to extract bare-earth Digital Terrain Models (DTM/Hillshade). Micro-topographic analysis clearly revealed quadrangular fortified enclosures, ancient road traces, and subtle morphological features invisible at ground level.',

      case5_loc: 'Architectural Survey & 3D Topography • Ancient Monuments',
      case5_title: '3D Laser Scanner & Point Cloud Survey of Ancient Monuments (Theater)',
      case5_desc:
        'Terrestrial 3D Laser Scanner acquisition and high-density metric point cloud processing for comprehensive geometric documentation of an ancient theater (cavea, scalaria, orchestra, proskenion, stage building, and perimeter pilasters). Certified metric baseline for plans, cross-sections, structural analysis, and restoration.',

      stat_area: 'Methodology / Sensor',
      stat_depth: 'Depth / DTM',
      stat_method: 'Output / Sensors',
      stat_res: 'Acquisition',
      stat_us: 'Sensor',
      stat_accuracy: 'Accuracy / Series',
      stat_compliance: 'Algorithm',
      stat_electrodes: 'Processing',
      stat_resistivity: 'Deliverable',

      eq_kicker: 'Hardware & Software Arsenal',
      eq_title: 'Field instrumentation and processing pipeline',
      eq_subtitle:
        'We operate calibrated sensor arrays and certified software pipelines to ensure data repeatability, centimeter-level georeferencing, and full interoperability with Heritage Authorities.',
      eq_col_domain: 'Domain',
      eq_col_sensors: 'Systems & Sensors',
      eq_col_app: 'Primary Application',
      eq_col_out: 'Technical Deliverable',
      eq_row1_inst: 'Multi-Channel & Dual-Frequency GPR Arrays (200/400/600 MHz)',
      eq_row1_app: '3D mapping of masonry foundations, floors, cavities, and utilities in urban and rural environments',
      eq_row2_inst: 'Multi-Sensor Fluxgate Gradiometers on non-magnetic cart + GNSS RTK',
      eq_row2_app: 'High-speed extensive surveys for kilns, ditches, post-holes, cemeteries, and ancient roads',
      eq_row3_inst: '96-Electrode Multi-Channel ERT Resistivity Meter & FDEM Sensor',
      eq_row3_app: 'Deep 2D/3D tomographies, paleo-geomorphological reconstruction, hypogea, and conductive clay soils',
      eq_row4_inst: 'RTK Drones with LiDAR payload, 5-Band Multispectral, Thermal & 45MP RGB',
      eq_row4_app: 'Under-canopy micro-topography, cropmark analysis (NDVI/NDRE), metric orthophotos, and 3D trench models',
      eq_row5_inst: '1" Robotic Total Station, Multi-Constellation GNSS RTK, QGIS/PostGIS',
      eq_row5_app: 'Geodetic control networks, stratigraphic trench survey, VPIA geodatabases compliant with GNA/ICA standards',

      contact_kicker: 'Technical Consultation & Quotes',
      contact_title: 'Plan your next field campaign with us',
      contact_desc:
        'Get in touch to design the optimal diagnostic protocol for your site, request a quote for geophysical surveys, LiDAR/photogrammetric flights, or commission a Preventive Archaeological Impact Assessment (VPIA).',
      compliance_box_title: 'Regulatory Compliance & Scientific Qualification',
      compliance_box_text:
        'All archaeological and geophysical reports and GIS geodatabases are produced in strict compliance with Italian Public Procurement Code (D.Lgs. 36/2023, Annex I.8) and Central Institute for Archaeology (ICA) templates for the National Geoportal for Archaeology (GNA).',
      contact_label_area: 'Operations',
      contact_val_area: 'Nationwide across Italy & international archaeological missions',

      form_name: 'Name / Institution / Firm *',
      form_email: 'Contact Email *',
      form_service: 'Requested Service *',
      form_opt_geo: 'Geophysical Prospection (GPR / Magnetometry / ERT)',
      form_opt_rs: 'UAV Remote Sensing (LiDAR / Multispectral / Photogrammetry)',
      form_opt_gis: 'Topographic Survey, Laser Scanning & GIS (GNA/ICA Template)',
      form_opt_vpia: 'Preventive Archaeology (VPIA), Monitoring & Stratigraphic Excavation',
      form_opt_int: 'Integrated Multi-Disciplinary Survey Package',
      form_location: 'Municipality / Estimated Area (ha or m²)',
      form_details: 'Site context and survey objectives *',
      form_submit: 'Generate Preliminary Technical Inquiry',
      footer_motto: 'High-precision non-invasive diagnostics, remote sensing, topography, and stratigraphic archaeology.'
    }
  };

  let currentLang = 'it';
  let gisVectorsVisible = true;
  let activeSimMethod = 'gpr';

  /* ==========================================================================
     2. Language Switcher
     ========================================================================== */
  const langBtnIt = document.getElementById('langBtnIt');
  const langBtnEn = document.getElementById('langBtnEn');
  const toggleGisVectorsBtn = document.getElementById('toggleGisVectorsBtn');

  function setLanguage(lang) {
    if (!i18nData[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    langBtnIt.classList.toggle('active', lang === 'it');
    langBtnEn.classList.toggle('active', lang === 'en');

    const dict = i18nData[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key === 'toggle_gis_vectors') {
        el.textContent = gisVectorsVisible ? dict.toggle_gis_vectors_on : dict.toggle_gis_vectors_off;
      } else if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    updateSimulatorMethodUI(activeSimMethod);
  }

  langBtnIt.addEventListener('click', () => setLanguage('it'));
  langBtnEn.addEventListener('click', () => setLanguage('en'));

  /* ==========================================================================
     3. Before/After Geophysical Survey Comparison Slider & GIS Vector Toggle
     ========================================================================== */
  const comparisonViewport = document.getElementById('comparisonViewport');
  const comparisonOverlay = document.getElementById('comparisonOverlay');
  const comparisonHandle = document.getElementById('comparisonHandle');
  const comparisonRange = document.getElementById('comparisonRange');
  const comparisonPercentReadout = document.getElementById('comparisonPercentReadout');
  const gisVectorOverlay = document.getElementById('gisVectorOverlay');

  function setComparisonPosition(percent) {
    const clamped = Math.max(0, Math.min(100, Number(percent)));
    const splitFromLeft = 100 - clamped;
    comparisonOverlay.style.clipPath = `inset(0 0 0 ${splitFromLeft}%)`;
    comparisonHandle.style.left = `${splitFromLeft}%`;
    comparisonRange.value = String(clamped);
    comparisonPercentReadout.textContent = `${Math.round(clamped)}%`;
  }

  comparisonRange.addEventListener('input', (e) => {
    setComparisonPosition(e.target.value);
  });

  let isDraggingSlider = false;

  function handlePointerMove(clientX) {
    const rect = comparisonViewport.getBoundingClientRect();
    const relX = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const splitPercentFromLeft = (relX / rect.width) * 100;
    const geophysicalOverlayCoverage = 100 - splitPercentFromLeft;
    setComparisonPosition(geophysicalOverlayCoverage);
  }

  comparisonViewport.addEventListener('pointerdown', (e) => {
    isDraggingSlider = true;
    comparisonViewport.setPointerCapture(e.pointerId);
    handlePointerMove(e.clientX);
  });

  comparisonViewport.addEventListener('pointermove', (e) => {
    if (!isDraggingSlider) return;
    handlePointerMove(e.clientX);
  });

  comparisonViewport.addEventListener('pointerup', () => {
    isDraggingSlider = false;
  });

  toggleGisVectorsBtn.addEventListener('click', () => {
    gisVectorsVisible = !gisVectorsVisible;
    gisVectorOverlay.classList.toggle('hidden', !gisVectorsVisible);
    toggleGisVectorsBtn.classList.toggle('active', gisVectorsVisible);
    const dict = i18nData[currentLang];
    toggleGisVectorsBtn.textContent = gisVectorsVisible
      ? dict.toggle_gis_vectors_on
      : dict.toggle_gis_vectors_off;
  });

  /* ==========================================================================
     4. Interactive Subsurface Stratigraphy & Signal Response Canvas Simulator
     ========================================================================== */
  const canvas = document.getElementById('subsurfaceCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const simActiveTitle = document.getElementById('simActiveTitle');
  const simFreqBadge = document.getElementById('simFreqBadge');
  const simSpecRes = document.getElementById('simSpecRes');
  const simSpecTarget = document.getElementById('simSpecTarget');
  const simSpecProd = document.getElementById('simSpecProd');

  const simMethodConfigs = {
    gpr: {
      it: {
        title: 'PROFILO RADARGRAMMA B-SCAN & SEZIONE STRATIGRAFICA',
        badge: 'ANTENNA: DUAL 250 / 500 MHz • v = 0.10 m/ns',
        res: '0.05 m × 0.25 m',
        target: 'Murature, Pavimenti, Volte',
        prod: '1.5 – 4.0 ha / giorno'
      },
      en: {
        title: 'B-SCAN RADARGRAM PROFILE & STRATIGRAPHIC SECTION',
        badge: 'ANTENNA: DUAL 250 / 500 MHz • v = 0.10 m/ns',
        res: '0.05 m × 0.25 m',
        target: 'Masonry Walls, Floors, Vaults',
        prod: '1.5 – 4.0 ha / day'
      }
    },
    mag: {
      it: {
        title: 'PROFILO GRADIENTE MAGNETICO VERTICALE (nT/m)',
        badge: 'ARRAY: 5× SONDE FLUXGATE • SENSIBILITÀ 0.1 nT',
        res: '0.12 m × 0.50 m',
        target: 'Fornaci, Fossati, Laterizi',
        prod: '5.0 – 12.0 ha / giorno'
      },
      en: {
        title: 'VERTICAL MAGNETIC GRADIENT PROFILE (nT/m)',
        badge: 'ARRAY: 5× FLUXGATE SENSORS • SENSITIVITY 0.1 nT',
        res: '0.12 m × 0.50 m',
        target: 'Kilns, Ditches, Brick Walls',
        prod: '5.0 – 12.0 ha / day'
      }
    },
    ert: {
      it: {
        title: 'SEZIONE INVERTITA DI RESISTIVITÀ ELETTRICA (Ω·m)',
        badge: 'ARRAY: WENNER-SCHLUMBERGER • 96 ELETTRODI',
        res: '0.50 m – 1.50 m',
        target: 'Cavità Profonde, Paleoalvei, Fondazioni',
        prod: '400 – 900 m lineari / giorno'
      },
      en: {
        title: 'INVERTED ELECTRICAL RESISTIVITY SECTION (Ω·m)',
        badge: 'ARRAY: WENNER-SCHLUMBERGER • 96 ELECTRODES',
        res: '0.50 m – 1.50 m',
        target: 'Deep Cavities, Paleochannels, Foundations',
        prod: '400 – 900 linear m / day'
      }
    }
  };

  function drawStratigraphyCanvas(method) {
    if (!ctx || !canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Stratigraphic background layers
    // Layer 1: Humus / Ploughzone (US 1)
    ctx.fillStyle = '#23201c';
    ctx.fillRect(0, 28, w, 40);

    // Layer 2: Archaeological Collapse & Deposit (US 2)
    ctx.fillStyle = '#2c241d';
    ctx.fillRect(0, 68, w, 95);

    // Layer 3: Geological Substrate / Bedrock (US 3)
    ctx.fillStyle = '#1b222a';
    ctx.fillRect(0, 163, w, h - 163);

    // Subtle depth grid & horizontal stratigraphic boundaries
    ctx.strokeStyle = 'rgba(235, 220, 195, 0.12)';
    ctx.lineWidth = 1;
    [28, 68, 115, 163, 210].forEach((y) => {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    });

    // Depth scale labels on left
    ctx.fillStyle = '#a9b4c0';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.fillText('0.0m (US 1 Humus)', 10, 22);
    ctx.fillText('-0.8m (US 2 Strato Archeologico)', 10, 82);
    ctx.fillText('-1.8m (US 3 Substrato)', 10, 178);

    // Draw buried archaeological features (Wall on left, Kiln/Hearth in center, Ditch/Vault on right)
    // Feature A: Buried Roman Masonry Wall (X: 160..210, Y: 75..150)
    ctx.fillStyle = 'rgba(200, 90, 50, 0.35)';
    ctx.strokeStyle = '#c85a32';
    ctx.lineWidth = 1.5;
    ctx.fillRect(165, 78, 46, 72);
    ctx.strokeRect(165, 78, 46, 72);

    // Feature B: Fired Brick Kiln / Pavement (X: 330..405, Y: 95..125)
    ctx.fillStyle = 'rgba(217, 155, 38, 0.32)';
    ctx.strokeStyle = '#d99b26';
    ctx.fillRect(330, 96, 75, 28);
    ctx.strokeRect(330, 96, 75, 28);

    // Feature C: Deep Backfilled Ditch / Vaulted Conduit (X: 500..585, Y: 105..195)
    ctx.fillStyle = 'rgba(72, 138, 122, 0.28)';
    ctx.strokeStyle = '#58a894';
    ctx.beginPath();
    ctx.arc(542, 145, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Method-specific Geophysical Signal Overlay
    if (method === 'gpr') {
      // Draw bright radar reflection hyperbolas over each target
      const hyperbolas = [
        { x0: 188, y0: 76, spread: 58, color: '#ff7847' },
        { x0: 367, y0: 94, spread: 68, color: '#f3b340' },
        { x0: 542, y0: 108, spread: 64, color: '#ff7847' }
      ];

      hyperbolas.forEach((hyp) => {
        for (let offset = 0; offset < 18; offset += 6) {
          ctx.beginPath();
          ctx.strokeStyle = offset === 6 ? '#ffffff' : hyp.color;
          ctx.lineWidth = offset === 6 ? 2.2 : 1.5;
          for (let dx = -hyp.spread; dx <= hyp.spread; dx += 3) {
            const px = hyp.x0 + dx;
            const py = hyp.y0 + offset + Math.sqrt(1 + (dx * dx) / 360) * 18 - 18;
            if (dx === -hyp.spread) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();
        }
      });

      ctx.fillStyle = '#f3b340';
      ctx.fillText('IPERBOLE GPR (Muro USM)', 135, 64);
      ctx.fillText('RIFLESSIONE PLANARE (Pavimento)', 295, 84);
      ctx.fillText('CAVITÀ / CONDOTTO', 495, 96);
    } else if (method === 'mag') {
      // Draw dipolar magnetic anomaly curve across the top section
      ctx.beginPath();
      ctx.strokeStyle = '#f3b340';
      ctx.lineWidth = 2.5;
      for (let x = 20; x < w - 20; x += 3) {
        // Dipole peaks over wall (x=188), strong thermoremanent dipole over kiln (x=367), positive anomaly over ditch (x=542)
        const d1 = ((x - 188) / 22) * Math.exp(-Math.pow(x - 188, 2) / 900) * -28;
        const d2 = (1 - Math.pow((x - 367) / 18, 2)) * Math.exp(-Math.pow(x - 367, 2) / 700) * -56;
        const d3 = Math.exp(-Math.pow(x - 542, 2) / 1600) * -22;
        const y = 72 + d1 + d2 + d3;
        if (x === 20) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.fillStyle = '#ff7847';
      ctx.fillText('+85 nT/m (Anomalia Termorimanente Fornace)', 275, 24);
      ctx.fillStyle = '#58a894';
      ctx.fillText('+18 nT/m (Fossato)', 495, 48);
    } else if (method === 'ert') {
      // Draw smooth resistivity tomography color clouds
      const gradWall = ctx.createRadialGradient(188, 112, 8, 188, 112, 65);
      gradWall.addColorStop(0, 'rgba(215, 75, 35, 0.78)');
      gradWall.addColorStop(1, 'rgba(215, 75, 35, 0)');
      ctx.fillStyle = gradWall;
      ctx.fillRect(110, 45, 160, 140);

      const gradVault = ctx.createRadialGradient(542, 145, 12, 542, 145, 85);
      gradVault.addColorStop(0, 'rgba(235, 165, 40, 0.82)');
      gradVault.addColorStop(0.6, 'rgba(200, 85, 40, 0.45)');
      gradVault.addColorStop(1, 'rgba(40, 110, 145, 0)');
      ctx.fillStyle = gradVault;
      ctx.fillRect(445, 55, 195, 175);

      ctx.fillStyle = '#ffffff';
      ctx.fillText('ρ > 650 Ω·m (Muratura Compatta)', 125, 64);
      ctx.fillText('ρ > 900 Ω·m (Volta Ipogea / Cavità)', 460, 90);
    }
  }

  function updateSimulatorMethodUI(method) {
    activeSimMethod = method;
    document.querySelectorAll('.method-tab').forEach((btn) => {
      const isMatch = btn.getAttribute('data-method') === method;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    const cfg = simMethodConfigs[method][currentLang];
    if (cfg) {
      simActiveTitle.textContent = cfg.title;
      simFreqBadge.textContent = cfg.badge;
      simSpecRes.textContent = cfg.res;
      simSpecTarget.textContent = cfg.target;
      simSpecProd.textContent = cfg.prod;
    }

    drawStratigraphyCanvas(method);
  }

  document.querySelectorAll('.method-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method');
      updateSimulatorMethodUI(method);
    });
  });

  // Initial draw
  updateSimulatorMethodUI('gpr');

  /* ==========================================================================
     5. Case Studies Category Filter
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach((b) => b.classList.toggle('active', b === btn));

      caseCards.forEach((card) => {
        const categories = (card.getAttribute('data-categories') || '').split(/\s+/);
        const visible = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden-card', !visible);
      });
    });
  });

  /* ==========================================================================
     6. Technical Consultation & VPIA Form Handler
     ========================================================================== */
  const consultationForm = document.getElementById('consultationForm');
  const formFeedback = document.getElementById('formFeedback');

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inputName').value.trim();
      const serviceSelect = document.getElementById('selectService');
      const selectedServiceText = serviceSelect.options[serviceSelect.selectedIndex].text;
      const area = document.getElementById('inputArea').value.trim() || 'N/D';

      const msgIt = `Richiesta tecnica registrata per ${name}. Protocollo selezionato: "${selectedServiceText}" (Area: ${area}). Ti risponderemo entro 24 ore lavorative con una proposta metodologica preliminare.`;
      const msgEn = `Technical inquiry logged for ${name}. Selected protocol: "${selectedServiceText}" (Area: ${area}). We will reply within 24 business hours with a preliminary methodological proposal.`;

      formFeedback.textContent = currentLang === 'it' ? msgIt : msgEn;
      formFeedback.classList.add('visible');
    });
  }

  /* ==========================================================================
     7. Sticky Header Scroll Elevation
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener(
    'scroll',
    () => {
      if (siteHeader) {
        siteHeader.classList.toggle('scrolled', window.scrollY > 16);
      }
    },
    { passive: true }
  );
})();
