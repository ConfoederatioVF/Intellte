---
title: "Hellenistic, Roman and Parthian-Sassanid Eras"
subtitle: "Near East, Egypt, Maghreb, Iran, Afghanistan and Caucasia, 539BC to 632AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hellenistic_roman_parthian_sassanid_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hellenistic_roman_parthian_sassanid_spatial.png"
hero_caption: "Eleven classical subregions and 15.862 individually assessed classical settlements across North Africa, the Near East, Anatolia, Iran, Afghanistan and Caucasia from 539BC to 632AD."
hero_label: "fig:hero-hellenistic-roman-parthian-sassanid"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

Between the Achaemenid conquest of Babylon in 539BC and the Arab expansion out of the Hijaz in 632AD, the lands stretching from the Atlantic coast of Mauretania to the Hindu Kush and the Caucasus experienced their first sustained cycle of trans-regional imperial integration. Across the eleven classical subregions of HANDBOOK—encompassing 12.567.648 km² across 168.112 five-arcminute cells—aggregate human numbers doubled over the first seven centuries, rising from 26,68M inhabitants in 539BC to 36,37M in 200BC, 45,57M in 1AD and a classical peak of 53,2M around 200AD. Growth diverged sharply between western and eastern basins thereafter. Mediterranean and Nilotic provinces slowed under the Antonine Plague (165AD to 180AD) and third-century fiscal strain, whereas Parthian and Sassanid Mesopotamia and Iran continued expanding through state-backed canalisation and oasis irrigation to reach regional maxima around 500AD, when the macro-domain stood at 49,51M. Recurrent waves of the Justinianic Plague from 541AD onwards, compounded by the exhausting Roman-Sassanid war of 602AD to 628AD and catastrophic Tigris-Euphrates dike breaches, reduced total numbers by 15,5% to 41,84M on the eve of 632AD. Combining Roman Egyptian census papyri, epigraphic municipal registers, provincial survey counts and 15.862 individually assessed classical settlements across three archaeological horizons, HANDBOOK allocates population across continuous dasymetric surfaces via metric-isotropic radial distance fields, non-stationary Matérn kriging and pycnophylactic scaling tied to 29 historical and 2.629 modern subadministrative boundaries [@Runfola2020GeoBoundaries].

# Background

Historical demography for the millennium separating Cyrus the Great from Heraclius and Yazdegerd III rests on a curiously lopsided evidentiary base. For a single province—Egypt—hundreds of surviving Greek and Demotic household declarations (*kat' oikian apographe*), village tax rolls and estate accounts allow birth intervals, household composition, sex ratios and local carrying capacities to be measured with a precision unmatched elsewhere in the pre-industrial world [@Bagnall2020Missing; @Capponi2024Augustus; @Hoogendijk2023Greek; @Reden2019Documentar].

Across the rest of North Africa, Anatolia, the Levant, Mesopotamia, Iran, Afghanistan and Caucasia, demographers must assemble a mosaic from civic inscriptions, literary army and grain figures, rural field surveys, irrigation canal maps and urban wall circuits [@Fabian2021Economic; @Carlsen2022Roman; @Jimenez2022Food; @Farrokh2023Survey]. Even where literary figures survive for field armies or royal *annona* shipments, careful archaeological cross-checking is needed to separate rhetorical exaggeration from sustainable agrarian surplus.

Politically, the eleven centuries from 539BC to 632AD divide into three broad phases that left clear signatures on settlement density. First, the late Achaemenid and Hellenistic centuries (539BC to 30BC) unified the Near East, Egypt, Iran and Bactria under royal fiscal bureaucracies and planted scores of planned Greek *poleis* from the Nile Delta and the Orontes valley to the Oxus [@Dogaer2023Property; @Reden2021Economic]. Royal land grants, military cleruchies and silver monetisation drew rural surplus into expanding administrative capitals while leaving village tenures largely intact.

Second, Roman provincial incorporation in the Mediterranean basin and Arsacid Parthian consolidation in Mesopotamia and Iran (30BC to 224AD) extended road networks, limes garrisons and maritime grain corridors, pushing provincial populations to classical highs in North Africa, Anatolia and Syria [@Mrozewicz2013Flavian; @Toumi2025Agricultur; @Zakrzewski2025Defining]. Along the Euphrates and Armenian marches, rival frontier garrisons acted less as closed barriers than as monetised exchange zones linking Red Sea, Persian Gulf and Silk Road caravans.

Third, the Sassanid hydraulic state in Iraq and Khuzestan and the Christianised East Roman Empire (224AD to 632AD) sustained remarkable late-antique rural densities in Syria, Anatolia and southern Mesopotamia until the dual shock of sixth-century plague and seventh-century frontier warfare broke the long demographic plateau [@Choat2019Egypt; @Dolganov2025Archives]. Imperial taxation, monastic foundations and state-funded canal reconstruction shifted wealth eastward towards Ctesiphon and Constantinopolis long before 632AD.

Ecologically, the domain is a study in sharp moisture gradients rather than uniform agricultural plains. Perennial Nile inundation supported dense peasant villages along a ribbon barely ten to twenty kilometres wide, flanked by abrupt desert margins. Along the Maghreb littoral, Cyrenaica, coastal Levant and western Anatolia, Mediterranean winter rains between the 300 mm and 600 mm isohyets sustained rain-fed wheat, olives and vines on terraced hillsides [@Toumi2025Agricultur].

East of the Euphrates and across the Iranian plateau and Bactrian piedmont, settled farming depended on artificial water capture—monumental weir-fed trunk canals in lower Mesopotamia and Khuzestan, subterranean *qanat* galleries across Iran and oasis channels fed by snowmelt in the Hindu Kush and the Fezzan [@Spengler2021Journey; @Mattingly2020Introducti]. Between these pockets lay vast arid steppe and mountain pasture where nomadic pastoralists fluctuated with rainfall and imperial frontier policy [@Zakrzewski2025Defining]. Figure \ref{fig:trajectory} traces how the eleven subregions combined to produce the macro-domain curve from 539BC to 632AD.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-hellenistic-roman-parthian-sassanid/fig2_hellenistic_roman_parthian_sassanid_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate demographic trajectory from 539BC to 632AD with uncertainty bounds and leading subregional shares in 632AD.</figcaption>
</figure>

# Methodology

## Subregional Partitioning and Territorial Geometry

To track contrasting ecological and imperial trajectories without splitting coherent river basins or agricultural hinterlands, HANDBOOK partitions the classical Near East and North Africa into eleven subregions spanning 168.112 five-arcminute cells (12.567.648 km²). In the western Mediterranean and Sahara, Africa Proconsularis covers the fertile Medjerda valley and Carthage's immediate hinterland; Mauretania and Numidia encompass the Tell Atlas, high plateaux and Atlantic plains of modern Algeria and Morocco; and Tripolitania, Cyrenaica and Garamantian Fezzan bridge the coastal oases of Libya and the Saharan *foggara* corridor [@Mrozewicz2013Flavian; @Mattingly2020Introducti]. Ptolemaic and Roman Egypt isolates the Nile Valley, Delta and Fayum depression together with their desert fringes.

Across Southwest Asia, the Seleucid and Roman Levant spans Syria, Lebanon, Jordan, Palestine and Israel; Hellenistic and Roman Anatolia and Cyprus covers Asia Minor and the island of Cyprus; and Classical Armenia, Iberia and Caucasian Albania gathers the Armenian highland, the Colchian Black Sea coast and the Kura-Araxes basin. Further east, Parthian and Sassanid Mesopotamia (Asoristan) captures the Tigris-Euphrates alluvium and foothills; Parthian and Sassanid Iran covers the plateau from the Zagros to Khorasan and Sistan; Greco-Bactrian and Kushan Afghanistan spans the Oxus-Balkhab plain and Kabul-Gandhara corridors; and Himyarite Yemen, Nabataean-Gulf and Arabian Peninsula encompasses the caravan oases of Nabataea, the Persian Gulf littoral and the terraced highlands of South Arabia [@Fabian2021Economic; @Jimenez2022Food; @Farrokh2023Survey].

## Radial Distance Fields, Non-Stationary Matérn Kriging and Urban Masking

Disaggregating subregional population totals onto the 5-arcminute grid avoids uniform polygon fills, which would smear millions of inhabitants across empty desert in Libya, Arabia and central Iran. Instead, HANDBOOK constructs continuous dasymetric habitability surfaces across three chronological archaeological horizons drawn from regional excavation atlases, national heritage registers and field-survey gazetteers: the Achaemenid-Hellenistic horizon (7.040 weighted sites across 1.315 active domestic catchments), the Roman-Parthian-Kushan horizon (12.032 sites across 1.423 catchments) and the Late Antique Sassanid-Byzantine horizon (8.467 sites across 1.677 catchments), reinforced by cross-frontier buffer sites along the Caucasus, Central Asian and Indus margins.

Each domestic catchment is bounded by Voronoi tessellation around settlement nodes with a median catchment radius of 32,51 km and a ninetieth percentile of 40,25 km. Site counts are stabilised via Freeman-Tukey transformation and projected onto metric-isotropic radial geodesic distance fields across the 168.112 grid cells. Weighted least-squares regressions capture biophysical carrying capacity through five covariates: base habitability ($\beta_0 = 0,01$), natural vegetation ($\beta_1 = 0,01$), ecological biome ($\beta_2 = 0,01$), fluvial proximity ($\beta_3 = 0,0693$ in Achaemenid-Hellenistic, rising to $0,0751$ in Roman-Parthian-Kushan and easing to $0,0668$ in Late Antiquity) and coastal access ($\beta_4 = 0,0661$, peaking at $0,0756$ during the Mediterranean maritime boom and moderating to $0,0629$ in Late Antiquity).

Spatial residuals from the biophysical trend are interpolated using a two-component non-stationary Matérn ($\nu = 3/2$) kriging kernel:

$$\frac{\gamma(u)}{\sigma^2} = c_0 + (1 - c_0)\left[1 - c_1\left(1 + \frac{\sqrt{3}\,u}{\tau_1}\right)e^{-\sqrt{3}\,u/\tau_1} - c_2\left(1 + \frac{\sqrt{3}\,u}{\tau_2}\right)e^{-\sqrt{3}\,u/\tau_2}\right]$$

where $u$ is the dimensionless Voronoi geodesic lag, short-range weight $c_1 = 0,8$, secondary weight $c_2 = 0,2$, nugget-to-sill ratio $c_0 = 0,04$, short-range correlation scale $\tau_1 = 1,35$ (raw $\tau_1 = 1,5207$, corresponding to an effective short range of 49,44 km at the classical peak) and secondary scale $\tau_2 = 2,9025$. Across all three classical horizons, the fitted Matérn semivariograms attain residual $R^2$ values between 0,9992 and 0,9993.

Table \ref{tab:kriging-horizons} reports the calibrated horizon parameters across the three classical periods. An explicit urban mask with a two-cell buffer radius prevents twentieth-century metropolitan sprawl in Cairo, Tehran, Istanbul or Baghdad from inflating pre-industrial rural surfaces, preserving sharp agrarian gradients along the Nile, Orontes, Tigris and Medjerda valleys as shown in Figure \ref{fig:density}.

<figure class="crd-table-figure" id="tab:kriging-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Sites</th><th class="crd-th">Catchments</th><th class="crd-th">Short Range (km)</th><th class="crd-th">Fluvial/Coastal</th><th class="crd-th">Residual R²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Achaemenid &amp; Hellenistic</strong></td><td class="crd-td">7.040</td><td class="crd-td">1.315</td><td class="crd-td">49,91</td><td class="crd-td">0,0693/0,0661</td><td class="crd-td">0,9992</td></tr>
<tr><td class="crd-td"><strong>Roman, Parthian &amp; Kushan</strong></td><td class="crd-td">12.032</td><td class="crd-td">1.423</td><td class="crd-td">49,44</td><td class="crd-td">0,0751/0,0756</td><td class="crd-td">0,9993</td></tr>
<tr><td class="crd-td"><strong>Byzantine &amp; Sassanid</strong></td><td class="crd-td">8.467</td><td class="crd-td">1.677</td><td class="crd-td">49,88</td><td class="crd-td">0,0668/0,0629</td><td class="crd-td">0,9993</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Calibrated Matérn (nu = 3/2) kriging parameters and WLS biophysical weights across the three classical archaeological horizons.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-hellenistic-roman-parthian-sassanid/fig3_hellenistic_roman_parthian_sassanid_density.png" alt="fig:density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Kriged Roman, Parthian and Kushan intensity surface and subregional density profile in 632AD.</figcaption>
</figure>

## Subadministrative GIS Anchoring and Pycnophylactic Scaling

Long-run historical reconstructions require consistent spatial anchors between ancient carrying capacities and modern census geography. HANDBOOK links its continuous surfaces to 29 historical subadministrative units (late Ottoman vilayets, Egyptian mudiriyas and muhafazas, French and Spanish Moroccan régions, Algerian départements, Tunisian contrôles civils, Italian Libyan regions and Mandate-era Syrian, Lebanese and Transjordanian districts) alongside 2.629 modern administrative boundaries (ADM2 districts and ADM1 governorates) from the geoBoundaries polygon database [@Runfola2020GeoBoundaries]. Disaggregation across these polygons enforces strict mass-conserving pycnophylactic scaling across 83 benchmark years, passing 65.864 unit-year checks within 0,01% tolerance with a global maximum unit relative error of 5,85e-08.

Table \ref{tab:subregions} compiles the estimated benchmark populations across all eleven classical subregions at five key milestones from 539BC to 632AD, drawn directly from the chapter regional series.

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">539BC</th><th class="crd-th">200BC</th><th class="crd-th">1AD</th><th class="crd-th">200AD</th><th class="crd-th">632AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Parthian and Sassanid Iran</strong></td><td class="crd-td">4,95M</td><td class="crd-td">6,1M</td><td class="crd-td">7,4M</td><td class="crd-td">8,5M</td><td class="crd-td">7,6M</td></tr>
<tr><td class="crd-td"><strong>Hellenistic and Roman Anatolia and Cyprus</strong></td><td class="crd-td">4,85M</td><td class="crd-td">6,9M</td><td class="crd-td">8,8M</td><td class="crd-td">10,4M</td><td class="crd-td">7,4M</td></tr>
<tr><td class="crd-td"><strong>Parthian and Sassanid Mesopotamia (Asoristan)</strong></td><td class="crd-td">3,25M</td><td class="crd-td">4,1M</td><td class="crd-td">4,9M</td><td class="crd-td">5,6M</td><td class="crd-td">5,2M</td></tr>
<tr><td class="crd-td"><strong>Ptolemaic and Roman Egypt</strong></td><td class="crd-td">4,1M</td><td class="crd-td">5,2M</td><td class="crd-td">6,4M</td><td class="crd-td">6,8M</td><td class="crd-td">4,85M</td></tr>
<tr><td class="crd-td"><strong>Seleucid and Roman Levant</strong></td><td class="crd-td">2,1M</td><td class="crd-td">3,4M</td><td class="crd-td">4,6M</td><td class="crd-td">5,4M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Himyarite Yemen, Nabataean-Gulf and Arabian Peninsula</strong></td><td class="crd-td">2,15M</td><td class="crd-td">2,65M</td><td class="crd-td">3,15M</td><td class="crd-td">3,55M</td><td class="crd-td">3,1M</td></tr>
<tr><td class="crd-td"><strong>Mauretania and Numidia</strong></td><td class="crd-td">1,45M</td><td class="crd-td">2,35M</td><td class="crd-td">3,15M</td><td class="crd-td">4,1M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Greco-Bactrian and Kushan Afghanistan</strong></td><td class="crd-td">1,55M</td><td class="crd-td">2,15M</td><td class="crd-td">2,65M</td><td class="crd-td">3,1M</td><td class="crd-td">2,55M</td></tr>
<tr><td class="crd-td"><strong>Classical Armenia, Iberia and Caucasian Albania</strong></td><td class="crd-td">1,15M</td><td class="crd-td">1,55M</td><td class="crd-td">1,95M</td><td class="crd-td">2,25M</td><td class="crd-td">1,95M</td></tr>
<tr><td class="crd-td"><strong>Carthage and Africa Proconsularis</strong></td><td class="crd-td">750k</td><td class="crd-td">1,35M</td><td class="crd-td">1,75M</td><td class="crd-td">2,45M</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Tripolitania, Cyrenaica and Garamantian Fezzan</strong></td><td class="crd-td">380k</td><td class="crd-td">620k</td><td class="crd-td">820k</td><td class="crd-td">1,05M</td><td class="crd-td">640k</td></tr>
<tr><td class="crd-td"><strong>Total Domain (11 Subregions)</strong></td><td class="crd-td">26,68M</td><td class="crd-td">36,37M</td><td class="crd-td">45,57M</td><td class="crd-td">53,2M</td><td class="crd-td">41,84M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Population estimates by classical subregion across key milestones from 539BC to 632AD (500AD intermediate peak of 49,51M detailed in text).</figcaption>
</figure>

# Testing and Validation

## Papyrological, Epigraphic and Agrarian Cross-Checks

Any demographic reconstruction of the Classical Near East and North Africa stands or falls against Roman Egypt, where the fourteen-year household census (*kat' oikian apographe*) ran from the early Principate into the third century AD [@Bagnall2020Missing; @Capponi2024Augustus]. Preserved returns from the Arsinoite, Oxyrhynchite and Hermopolite nomes document mean nuclear and extended household sizes between 4,3 and 5,1 persons in villages and somewhat higher in metropoleis, alongside selective female infant under-registration and widespread sibling or close-kin marriage designed to keep fragmented irrigated plots intact [@Robinson2020Blood; @Aneni2019Endogamy; @Winkler2025Cavalrymen]. Using these micro-demographic schedules alongside village tax registers from Fayum settlements such as Alabanthis and evidence of fiscal flight (*anachoresis*) during periods of Nile failure or plague, Egypt's trajectory from 4,1M in 539BC to 6,8M in 200AD implies sustained rural densities of 190 to 230 persons per km² of cultivated floodplain [@Abdelwahed2019Alabanthis; @DroKrupe2022Paying; @Nabney2021Labour].

Outside Egypt, HANDBOOK cross-checks aggregate curves against municipal epigraphy, paleoclimatic series and architectural carrying-capacity studies. At Palmyra, agent-based and paleoclimatic modelling of irrigated oasis gardens, rain-fed barley margins and pastoral hinterlands confirms that food security supported an urban-rural system far larger than arid modern appearances suggest, though acutely sensitive to prolonged drought and third-century military disruption [@Jimenez2022Food]. In the Maghreb, epigraphic records of municipal charters under the Flavians and Antonines and agricultural lex Hadriana inscriptions under the Severans corroborate rapid expansion of olive arboriculture and marginal *centuriation* across Tunisia and eastern Algeria up to 200AD [@Mrozewicz2013Flavian; @Toumi2025Agricultur].

## Case-by-Case Classical City Assessment and Rank-Size Diagnostics

The chapter's settlement gazetteer comprises 15.862 individually assessed classical and late-antique settlements spanning all eleven subregions and 25 modern national territories, compiled out of 16.112 evaluated candidates after excluding 250 architectural sub-loci, fortification gates, sanctuary fragments and duplicate records, with 0% reliance on crowd-sourced fallback databases. Rather than applying uniform urban ceilings or mechanical interpolations, each settlement trajectory is reconstructed from primary archaeological and documentary registers—harmonising baseline monograph assessments with the OXREP Roman Cities Database (Hanson 2016), the Stanford POLIS Greek *poleis* inventory, the Egypt Exploration Society (EES) Delta Survey, From Villages to Empires (Titolo and Palmisano 2025), the Near East Holocene Urban Settlement Database (Palmisano et al. 2021), the Near East Radiocarbon Database (NERD), the C-Turkey chronometric register, DARMC and Euratlas—anchored to walled intramural areas, regional urban density schedules, theatre and amphitheatre capacities, municipal grain-dole rolls, Roman Egyptian census returns and documented historical foundations, sacks, earthquakes and epidemic shocks.

Across the 15.862-settlement catalogue, assessed peak populations span 54 to 465.000 inhabitants (Roman Alexandria), capturing the full classical settlement hierarchy from Delta villages, frontier ports and caravan stations to imperial capitals. Fitting an OLS power-law rank-size distribution across all 15.862 settlements yields a steep classical Zipf exponent $\alpha = 1,32$ ($R^2 = 0,80$), reflecting the rich empirical tail of surveyed towns, Greek *poleis* and Delta sites alongside the twelve largest metropolises illustrated in Figure \ref{fig:settlements}: Alexandria (465k), Ctesiphon (415k), Antioch-on-the-Orontes (348k), Carthage (312k), Seleucia-on-the-Tigris (286k), Ephesus (192k), Babylon (146k), Pergamon (142k), Smyrna (126k), Antiochia (111,7k), Apamea (108k) and Tarsus (88,5k), followed closely by Bactra (85,5k). This polycentric imperial rank-size profile reflects multiple competing metropolitan poles—Mediterranean, Nilotic, Mesopotamian, Iranian and Bactrian—rather than a single primate capital.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-hellenistic-roman-parthian-sassanid/fig4_hellenistic_roman_parthian_sassanid_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution across the 15.862 individually assessed classical settlements and top twelve cities by peak population.</figcaption>
</figure>

## Subadministrative Coverage and Mass Conservation

To verify that classical carrying-capacity surfaces connect directly to modern administrative units, Table \ref{tab:hist-subadmin} summarises representative historical subadministrative enumerations stored in the chapter ledger, while Table \ref{tab:mod-subadmin} reports the matched modern geoBoundaries units across constituent states [@Runfola2020GeoBoundaries]. Every modern unit passed the pycnophylactic mass-conservation audit across all 83 benchmark years without boundary leakage.

<figure class="crd-table-figure" id="tab:hist-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Unit</th><th class="crd-th">First</th><th class="crd-th">Last</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Upper Egypt (Sa'id &amp; Frontier Mudiriyas)</td><td class="crd-td">1882: 2,79M</td><td class="crd-td">1947: 7,17M</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Cairo, Alexandria &amp; Suez Canal Muhafazas</td><td class="crd-td">1882: 675k</td><td class="crd-td">1947: 3,34M</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Lower Egypt (Nile Delta Mudiriyas)</td><td class="crd-td">1882: 3,34M</td><td class="crd-td">1947: 8,51M</td><td class="crd-td">Official Censuses of Egypt 1882-1947</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">Morocco (French &amp; Spanish Protectorate Régions)</td><td class="crd-td">1880: 4,2M</td><td class="crd-td">1960: 11,63M</td><td class="crd-td">Recensement Général du Maroc 1936, 1952 &amp; 1960</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Territoires du Sud (Algerian Sahara)</td><td class="crd-td">1886: 280k</td><td class="crd-td">1954: 850k</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Alger (Central Algeria)</td><td class="crd-td">1886: 1,38M</td><td class="crd-td">1954: 3,09M</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département de Constantine (Eastern Algeria)</td><td class="crd-td">1886: 1,57M</td><td class="crd-td">1954: 3,44M</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">Département d'Oran (Western Algeria)</td><td class="crd-td">1886: 870,5k</td><td class="crd-td">1954: 2,15M</td><td class="crd-td">Recensement Général de l'Algérie 1886-1954</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">Protectorate of Tunisia (Contrôles Civils)</td><td class="crd-td">1881: 1,5M</td><td class="crd-td">1956: 3,78M</td><td class="crd-td">Dénombrement de la Population de la Tunisie 1921-1956</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">Italian Libya (Tripolitania, Cyrenaica &amp; Fezzan)</td><td class="crd-td">1880: 780k</td><td class="crd-td">1954: 1,09M</td><td class="crd-td">ISTAT Censimento della Libia 1931, 1936 &amp; UN/Libya 1954 Census</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Erzurum, Van, Bitlis, Mamuretulaziz &amp; Diyarbakir Vilayets (Eastern Anatolia)</td><td class="crd-td">1881: 2,15M</td><td class="crd-td">1927: 1,67M</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Konya &amp; Adana Vilayets (South-Central Anatolia)</td><td class="crd-td">1881: 1,34M</td><td class="crd-td">1927: 1,92M</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Ankara &amp; Kastamonu Vilayets (North-Central Anatolia)</td><td class="crd-td">1881: 1,81M</td><td class="crd-td">1927: 2,31M</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914</td></tr>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">Trabzon &amp; Sivas Vilayets (Black Sea &amp; Upper Kizilirmak)</td><td class="crd-td">1881: 2,04M</td><td class="crd-td">1927: 2,45M</td><td class="crd-td">Ottoman Official Censuses 1881/93 &amp; 1914</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Selected historical subadministrative divisions anchoring late-nineteenth- and twentieth-century backward scaling across HANDBOOK territories.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:mod-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Level</th><th class="crd-th">Units</th><th class="crd-th">First Census</th><th class="crd-th">Latest Census</th><th class="crd-th">Waves</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TUR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">1990</td><td class="crd-td">2023</td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">379</td><td class="crd-td">1996</td><td class="crd-td">2023</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>AFG</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">1979</td><td class="crd-td">2020</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">ADM2</td><td class="crd-td">296</td><td class="crd-td">1986</td><td class="crd-td">2023</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">ADM2</td><td class="crd-td">88</td><td class="crd-td">1977</td><td class="crd-td">2024</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>AZE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">78</td><td class="crd-td">1959</td><td class="crd-td">2026</td><td class="crd-td">32</td></tr>
<tr><td class="crd-td"><strong>MAR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">63</td><td class="crd-td">1994</td><td class="crd-td">2024</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>GEO</strong></td><td class="crd-td">ADM2</td><td class="crd-td">61</td><td class="crd-td">1959</td><td class="crd-td">2026</td><td class="crd-td">26</td></tr>
<tr><td class="crd-td"><strong>DZA</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">1977</td><td class="crd-td">2008</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>TUN</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">1984</td><td class="crd-td">2024</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>LBN</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">1970</td><td class="crd-td">2017</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>YEM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">1994</td><td class="crd-td">2004</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>LBY</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2006</td><td class="crd-td">2020</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>PSE</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">1997</td><td class="crd-td">2023</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>ISR</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">1983</td><td class="crd-td">2021</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">1981</td><td class="crd-td">2021</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">1994</td><td class="crd-td">2021</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>ARM</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11</td><td class="crd-td">1959</td><td class="crd-td">2025</td><td class="crd-td">17</td></tr>
<tr><td class="crd-td"><strong>CYP</strong></td><td class="crd-td">ADM1</td><td class="crd-td">5</td><td class="crd-td">1982</td><td class="crd-td">2021</td><td class="crd-td">5</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Modern subadministrative GIS polygons from geoBoundaries matched per constituent state for pycnophylactic mass conservation.</figcaption>
</figure>

# Results

## Ptolemaic and Roman Egypt

Egypt entered the Achaemenid period in 525BC with roughly 4,1M inhabitants—a figure close to its Late New Kingdom ceiling—before Ptolemaic hydraulic investment transformed the country's demographic balance [@Dogaer2023Property; @Reden2021Economic]. Under Ptolemy I, Ptolemy II and Ptolemy III, systematic drainage and canalisation of the Fayum depression (the Arsinoite nome) opened tens of thousands of hectares of new arable land to Greek-Macedonian cleruchs and Egyptian cultivators alike, spawning dense planned villages such as Karanis, Philadelphia, Tebtunis and Alabanthis [@Abdelwahed2019Alabanthis; @Winkler2025Cavalrymen].

At the same time, Alexandria mushroomed along the western Delta lagoon into a Mediterranean metropolis reaching 465k residents around 200AD, complementing the ancient satrapal hub at Memphis (73k in 539BC), Delta centres such as Sais (51,5k) and Middle Egyptian nome capitals including Arsinoe (43,8k), Hermopolis Magna (42,4k) and Oxyrhynchus (35,6k). Grain barges descending the Nile fed both the royal capital and Aegean export markets, tying Upper Egyptian harvests directly to eastern Mediterranean urban growth.

Total population rose from 4,1M in 539BC to 5,2M in 200BC and accelerated under early Roman peace to 6,4M in 1AD, peaking at 6,8M around 200AD [@Capponi2024Augustus]. Augustus reorganised the grain tax, expanded water-lifting *saqiya* wheels across Upper Egypt and enforced the fourteen-year census, though papyri reveal persistent friction between imperial tax collectors and mobile rural labourers [@DroKrupe2022Paying; @Nabney2021Labour; @Love2019Innovative].

The Antonine Plague (165AD to 180AD) struck the Nile Valley severely, depopulating whole Fayum villages such as Socnopaiou Nesos and capping Egypt's third-century recovery. In Late Antiquity, Christian monastic communities reshaped desert margins and Nile estates consolidated around great houses like the Apiones of Oxyrhynchus [@Choat2019Egypt; @Dolganov2025Archives], yet population drifted down to 5,6M by 500AD before the Justinianic Plague of 541AD—which entered the Mediterranean through Pelusium—cut Egyptian numbers to 4,85M by 632AD.

## Carthage, Roman Maghreb, Tripolitania, Cyrenaica and the Garamantes

Nowhere in the western basin did classical agriculture push the frontier of cultivation further south than across North Africa. In 539BC, Punic Carthage dominated a coastal urban belt in Tunisia while Berber pastoralists and settled farmers occupied Numidian valleys and Moroccan plains: Africa Proconsularis held roughly 750k inhabitants, Mauretania and Numidia 1,45M, and Tripolitania, Cyrenaica and Fezzan 380k, for a combined North African total of 2,58M.

By 200BC, Punic arboriculture, iron metallurgy and Numidian state consolidation under Masinissa lifted the three subregions to 4,32M, even on the eve of the Third Punic War and Carthage's destruction in 146BC. Rural estates in the Bagradas valley and Cap Bon already produced export surpluses of wheat, wine and olive oil before Roman annexation.

Augustan refoundation of Carthage and Flavian-Severan municipal promotion unleashed an extraordinary agrarian boom [@Mrozewicz2013Flavian; @Toumi2025Agricultur]. Terraced olive groves spread across the Tunisian Sahel and High Tell, heavy grain surpluses fed Rome's *annona*, and monumental cities—led by Carthage (312k in 200AD), Lepcis Magna (78,5k), Cyrene (58,2k), Hadrumetum (56,2k), Caesarea Mauretaniae (46,8k), Cirta (42,6k), Sabratha (24,8k), Volubilis (17,8k), Thamugadi (15,6k) and Thugga (12,2k)—multiplied along coastal ports and military roads [@Zakrzewski2025Defining].

By 200AD, Africa Proconsularis peaked at 2,45M, Mauretania and Numidia at 4,1M and Tripolitania, Cyrenaica and Fezzan at 1,05M—a combined 7,6M, nearly triple the 539BC baseline. Deep inside the central Sahara, the Garamantes of Wadi al-Ajal (around Garama) built hundreds of kilometres of subterranean *foggara* irrigation channels, sustaining urbanised oasis towns, ironworking and trans-Saharan caravan exchange with Roman Tripolitania [@Mattingly2020Introducti; @Anonymous2020Urbanisati; @Kea2004Expansions]. Subsequent crises—Vandal disruption, Donatist rural conflicts, Saharan tribal raids, shrinking olive exports and the sixth-century plague—eroded North Africa to 5,96M in 500AD and 5,04M by 632AD.

## Seleucid and Roman Levant, Anatolia and Cyprus

Anatolia, Cyprus and the Levant formed the demographic core of both Hellenistic and Eastern Roman power. Starting from 4,85M in 539BC, Anatolia and Cyprus expanded rapidly to 6,9M by 200BC under Attalid Pergamum, Bithynia, Pontus and Seleucid coastal urbanisation. Roman provincial consolidation then carried the peninsula and island from 8,8M in 1AD to a classical peak of 10,4M in 200AD.

Coastal metropoleis—Ephesus (192k), Pergamon (142k), Smyrna (126k), Tarsus (88,5k), Nicomedia (82,5k), Sardis (78k), Cyzicus (58,5k) and Miletus (48,5k)—flourished alongside inland crossroads such as Ancyra (54,2k), Nicaea (52,4k), Caesarea Mazaca (48,6k), Laodicea on the Lycus (44,8k) and Aphrodisias (22,8k), while Cyprus—anchored by Salamis (57,4k) and Nea Paphos (29,2k)—combined copper mining in the Troodos foothills with timber and maritime trade [@Fabian2021Economic; @Carlsen2022Roman]. When Constantine consecrated Constantinopolis on the Bosphorus in 330AD, the imperial capital drew grain, labour and tax revenue from across Thrace, Bithynia and Egypt, helping sustain Anatolian numbers at 9,6M in 500AD despite urban contractions elsewhere.

The Levant traced an even sharper upward arc before Late Antique collapse. Rising from 2,1M in 539BC to 3,4M in 200BC through the Seleucid tetrapolis—Antioch-on-the-Orontes, Seleucia Pieria, Apamea and Laodicea ad Mare—Levantine population reached 4,6M in 1AD and 5,4M in 200AD [@Reden2021Economic]. Antioch-on-the-Orontes rivalled Alexandria at 348k inhabitants around 200AD alongside Apamea (108k) and Laodicea ad Mare (45,6k); Jerusalem (72,5k on the eve of 66AD), Damascus (64,8k), Caesarea Maritima (58,4k), Tyre (57,2k), Berytus (46,8k), Gaza (38,6k), Sidon (38,4k) and Gerasa (21,4k) anchored coastal and Decapolis trade; and Palmyra (64,5k at its second-century height) supported a thriving caravan oasis through engineered dams, qanats and pastoral integration until Aurelian's sack in 273AD [@Jimenez2022Food].

Unlike western Mediterranean provinces, the Levant retained near-peak rural densities through 500AD (5,2M), evidenced by hundreds of limestone villages in northern Syria, dense Negev runoff farming and thriving Galilee towns. That resilience broke abruptly after 541AD: repeated plague outbreaks, the 526AD and 588AD Antioch earthquakes and the Sassanid occupation of Syria and Palestine (611AD to 628AD) drove the Levant down to 4,15M and Anatolia-Cyprus down to 7,4M by 632AD.

## Parthian and Sassanid Mesopotamia and Iran

East of the Euphrates, demographic rhythms followed hydraulic engineering and dynastic stability rather than Mediterranean plague cycles alone. Mesopotamia (Asoristan) grew from 3,25M in 539BC—when Achaemenid Babylon (146k) still anchored the lower plain—to 4,1M in 200BC under Seleucid royal foundations such as Seleucia-on-the-Tigris, which peaked at 286k around 1AD. When the Arsacid Parthians established their winter capital across the river at Ctesiphon in the 120s BC, the twin conurbation grew into one of Eurasia's largest urban complexes, with Ctesiphon alone reaching 415k by 600AD [@Farrokh2023Survey]. Population climbed to 4,9M in 1AD and 5,6M in 200AD, driven by Parthian canal maintenance and caravan links connecting Persian Gulf entrepots such as Charax Spasinu (52,4k) to Hatra (51,5k), Dura-Europos (14,8k) and Palmyra.

Under the Sassanid dynasty (224AD to 651AD), state-directed hydraulic investment reached an unprecedented scale. Ardashir I and Shapur I founded royal cities such as Veh Ardashir on the Tigris, Gor (42,6k), Bishapur (48,6k) and Veh-Andiyok-Shapur (Gundeshapur, reaching 66,4k by 600AD) in Khuzestan, settling deported Roman engineers and artisans who built monumental stone weirs across the Karun and Karkheh rivers.

Khosrow I Anushirvan later dug the vast Nahrawan trunk canal east of the Tigris, bringing virtually the entire Diyala and central Mesopotamian floodplain under intensive winter-wheat, date and summer-rice cultivation [@Spengler2021Journey]. Mesopotamia thus peaked around 500AD at 6,1M, a full three centuries after the Roman Mediterranean peak.

Across the Iranian plateau—where Parthian and Sassanid monarchs expanded subterranean *qanat* networks from Fars (Istakhr 68,5k) and Media (Ecbatana 58,5k; Rhagae 64,8k) to Khuzestan (Susa 82,5k in 400BC) and Khorasan (Nishapur 51,4k) [@Panaino2020Conceptual; @Farrokh2023Survey]—population grew in lockstep from 4,95M in 539BC to 6,1M in 200BC, 7,4M in 1AD, 8,5M in 200AD and 8,9M in 500AD. In the final decades before 632AD, however, plague, factional civil war and catastrophic floods in 628AD that turned lower Mesopotamia into permanent marshes reduced Mesopotamia to 5,2M and Iran to 7,6M.

## Greco-Bactrian and Kushan Afghanistan, Classical Caucasia and Arabia

On the eastern and northern frontiers of the Iranian world, Bactria and Caucasia combined strategic mountain corridors with productive irrigated valleys. Following Alexander's campaigns, Greco-Bactrian kings planted planned Hellenistic cities such as Ai-Khanoum (32,4k before its c. 145BC sack) at the Oxus-Kokcha confluence and expanded ancient Bactra (Balkh, peaking at 85,5k around 200AD), lifting Afghan population from 1,55M in 539BC to 2,15M in 200BC [@Reden2021Economic].

Under the Kushan Empire (first to third centuries AD), Kapisa (Begram, 49,2k), Alexandria in Aria (44,8k), Alexandria in Arachosia (36,4k), Nagarahara (Hadda, 32,8k) and Surkh Kotal (11,4k) prospered as hubs linking India, Sogdia, Iran and Han China, introducing rice and new orchard crops across Bactrian oases and lifting Afghanistan to 2,65M in 1AD and 3,1M in 200AD [@Spengler2021Journey; @Arts2011Violets; @Kwon2009West; @Liu2026Research]. Hephthalite raids, Sassanid frontier wars and declining urban commerce trimmed Afghanistan to 2,75M in 500AD and 2,55M in 632AD.

Across Classical Caucasia, Artaxiad and Arsacid Armenia, Kartli-Iberia, Colchis and Caucasian Albania expanded steadily along the Araxes, Kura and Rioni river valleys, rising from 1,15M in 539BC to 1,55M in 200BC, 1,95M in 1AD and 2,25M in 200AD. Fortified royal capitals—Artaxata (62,4k), Dvin (54,4k), Tigranocerta (45k), Partaw (38,8k), Vagharshapat (34,6k), Mtskheta (32,4k) and Qabala (28,4k)—mediated trade between Anatolia, the Pontic steppe and Media Atropatene while highland terraces supported mixed grain, vine and pastoral economies, holding at 2,15M in 500AD and 1,95M in 632AD despite Byzantine-Sassanid partitions.

Meanwhile, the Arabian Peninsula moved from 2,15M in 539BC to 2,65M in 200BC, 3,15M in 1AD and 3,55M in 200AD as Nabataean Petra (31,8k) harnessed flash-flood cisterns, Thaj (Gerrha, 18,6k) and Qal'at al-Bahrain (12,9k) traded Gulf pearls and spices, and Sabaean-Himyarite Yemen maintained Ma'rib (34,8k) and Zafar (28,6k) before the sixth-century breaches of the great Ma'rib dam lowered Arabian numbers to 3,25M in 500AD and 3,1M in 632AD.

## Epidemic Shocks: The Antonine and Justinianic Plagues

Two pandemic events divide the classical demographic curve into distinct regimes. The Antonine Plague (165AD to 180AD), carried back from Seleucia-on-the-Tigris by Lucius Verus's legions, acted primarily as a brake on growth: it trimmed Egyptian and Syrian rural cohorts by 15% to 25% locally, flattening the Mediterranean climb toward the 200AD plateau without reversing long-term municipal vitality [@Bagnall2020Missing; @DroKrupe2022Paying].

By contrast, the Justinianic Plague (*Yersinia pestis*), erupting in Pelusium in 541AD and recurring every decade to 632AD, struck a densely urbanised, fiscally exhausted Mediterranean and Mesopotamian world simultaneously. Across the eleven subregions combined, population fell by 7,67M—a 15,5% contraction—between 500AD (49,51M) and 632AD (41,84M), concentrated in coastal ports, river deltas and imperial capitals while interior uplands in Caucasia, Iran and Arabia suffered milder declines.

# Limitations

Several structural constraints govern these estimates and bound their precision. First, documentary density is sharply skewed toward Egypt: outside the Nile Valley, household-level age distributions and vital rates remain inferential, relying on proxy epigraphy, grave counts and survey site areas [@Bagnall2020Missing; @Reden2019Documentar].

Second, while HANDBOOK's 15.862 individually assessed classical settlements span all 25 modern countries and every classical subregion with zero crowd-sourced fallback rows, archaeological excavation intensity still varies across modern borders: the densest national clusters appear in Turkey (3.146), Syria (2.245), Egypt (1.788) and Iraq (1.704), whereas smaller littoral and frontier territories such as Bahrain (13), Kuwait (14), United Arab Emirates (15) and Qatar (21) contribute fewer urban anchors, meaning rural totals everywhere lean heavily on the kriged archaeological-horizon catchment surfaces.

Third, although case-by-case assessment from walled intramural areas, theatre capacities, grain-dole rolls and census registers yields a realistic Zipf rank-size slope ($\alpha = 1,32$, $R^2 = 0,80$) stretching from small surveyed Delta towns and frontier ports to imperial capitals such as Alexandria (465k), Ctesiphon (415k), Antioch-on-the-Orontes (348k) and Carthage (312k), individual city densities retain ±20% to ±30% uncertainty wherever extramural suburbs or multi-storey tenements are only partially excavated.

Fourth, continuous Nile and Tigris-Euphrates alluviation buries small low-lying Hellenistic and Parthian rural sites beneath metres of silt, requiring biophysical fluvial covariates to compensate for taphonomic under-detection. Finally, plague mortality rates between 541AD and 632AD carry wide confidence intervals (roughly ±15% to ±20% at subregional level) depending on how severely recurring outbreaks penetrated inland villages beyond maritime and caravan corridors.

# Conclusion

Between 539BC and 632AD, the territories of the Hellenistic, Roman and Parthian-Sassanid worlds doubled from 26,68M to a peak of 53,2M around 200AD before late-antique plagues and imperial wars pared numbers back to 41,84M on the eve of the Islamic conquests. Far from moving in unison, the macro-region exhibited a striking geographical relay: Hellenistic reclamation and Roman peace drove Mediterranean provinces in North Africa, Egypt, Anatolia and the Levant to second-century heights, while Parthian and Sassanid hydraulic engineering sustained rising carrying capacity in Mesopotamia and Iran through 500AD. Anchored to 15.862 individually assessed classical settlements, 27.539 horizon-specific archaeological records across three classical phases and 2.629 geoBoundaries administrative polygons, HANDBOOK provides a spatially continuous, mass-conserving foundation for comparing ancient empires and linking them to the Early Islamic Caliphate after 632AD [@Runfola2020GeoBoundaries].

# Appendix

Table \ref{tab:modern-top} lists the fifteen largest modern geoBoundaries administrative units within the classical HANDBOOK domain, illustrating the late-twentieth- and early-twenty-first-century urban agglomerations that our urban mask separates from classical rural surfaces [@Runfola2020GeoBoundaries]. Table \ref{tab:country-setts} details the distribution of the 15.862 individually assessed classical settlements across constituent modern countries.

<figure class="crd-table-figure" id="tab:modern-top">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ISO3</th><th class="crd-th">Unit</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Latest Pop</th><th class="crd-th">Density (/km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Tehran</td><td class="crd-td">ADM2</td><td class="crd-td">980</td><td class="crd-td">14,44M (2023)</td><td class="crd-td">14.731,6</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Markz Al Minya</td><td class="crd-td">ADM2</td><td class="crd-td">304</td><td class="crd-td">6,34M (2023)</td><td class="crd-td">20.847,4</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kesm Al-minya</td><td class="crd-td">ADM2</td><td class="crd-td">76</td><td class="crd-td">6,34M (2023)</td><td class="crd-td">83.389,4</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Isfahan</td><td class="crd-td">ADM2</td><td class="crd-td">292</td><td class="crd-td">5,48M (2023)</td><td class="crd-td">18.767,1</td></tr>
<tr><td class="crd-td"><strong>AFG</strong></td><td class="crd-td">Kabul</td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">5,2M (2020)</td><td class="crd-td">14.661,1</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Aleppo</td><td class="crd-td">ADM1</td><td class="crd-td">19.765</td><td class="crd-td">4,12M (2021)</td><td class="crd-td">208,3</td></tr>
<tr><td class="crd-td"><strong>JOR</strong></td><td class="crd-td">Amman</td><td class="crd-td">ADM1</td><td class="crd-td">8.407</td><td class="crd-td">4,64M (2021)</td><td class="crd-td">552,2</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum</td><td class="crd-td">ADM2</td><td class="crd-td">375</td><td class="crd-td">4,08M (2023)</td><td class="crd-td">10.881,7</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum</td><td class="crd-td">ADM2</td><td class="crd-td">75</td><td class="crd-td">4,08M (2023)</td><td class="crd-td">54.408,6</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Fayyum City</td><td class="crd-td">ADM2</td><td class="crd-td">75</td><td class="crd-td">4,08M (2023)</td><td class="crd-td">54.408,6</td></tr>
<tr><td class="crd-td"><strong>EGY</strong></td><td class="crd-td">Kafr Al-Shaykh</td><td class="crd-td">ADM2</td><td class="crd-td">222</td><td class="crd-td">3,72M (2023)</td><td class="crd-td">16.749,2</td></tr>
<tr><td class="crd-td"><strong>IRQ</strong></td><td class="crd-td">Al-Basrah</td><td class="crd-td">ADM2</td><td class="crd-td">1.181</td><td class="crd-td">3,66M (2024)</td><td class="crd-td">3.102,6</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Kerman</td><td class="crd-td">ADM2</td><td class="crd-td">45.302</td><td class="crd-td">3,46M (2023)</td><td class="crd-td">76,4</td></tr>
<tr><td class="crd-td"><strong>IRN</strong></td><td class="crd-td">Mashhad</td><td class="crd-td">ADM2</td><td class="crd-td">9.279</td><td class="crd-td">3,37M (2016)</td><td class="crd-td">363,5</td></tr>
<tr><td class="crd-td"><strong>SYR</strong></td><td class="crd-td">Rural Damascus</td><td class="crd-td">ADM1</td><td class="crd-td">26.517</td><td class="crd-td">3,37M (2021)</td><td class="crd-td">127,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading modern subadministrative units within the domain footprint used for urban masking and backward pycnophylactic calibration.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:country-setts">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Sites</th><th class="crd-th">Share (%)</th><th class="crd-th">Median Peak</th><th class="crd-th">Max Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">3.146</td><td class="crd-td">19,8</td><td class="crd-td">2k</td><td class="crd-td">348k</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">2.245</td><td class="crd-td">14,2</td><td class="crd-td">1,2k</td><td class="crd-td">111,7k</td></tr>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">1.788</td><td class="crd-td">11,3</td><td class="crd-td">1,6k</td><td class="crd-td">465k</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">1.704</td><td class="crd-td">10,7</td><td class="crd-td">1,3k</td><td class="crd-td">415k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">1.645</td><td class="crd-td">10,4</td><td class="crd-td">1,1k</td><td class="crd-td">58,4k</td></tr>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">1.309</td><td class="crd-td">8,3</td><td class="crd-td">1,2k</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">606</td><td class="crd-td">3,8</td><td class="crd-td">2,7k</td><td class="crd-td">312k</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">503</td><td class="crd-td">3,2</td><td class="crd-td">1,5k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">455</td><td class="crd-td">2,9</td><td class="crd-td">2,5k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">378</td><td class="crd-td">2,4</td><td class="crd-td">1,4k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">297</td><td class="crd-td">1,9</td><td class="crd-td">2,2k</td><td class="crd-td">85,5k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">278</td><td class="crd-td">1,8</td><td class="crd-td">1,5k</td><td class="crd-td">57,2k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">221</td><td class="crd-td">1,4</td><td class="crd-td">1,7k</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">206</td><td class="crd-td">1,3</td><td class="crd-td">1,4k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">198</td><td class="crd-td">1,2</td><td class="crd-td">1,6k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">193</td><td class="crd-td">1,2</td><td class="crd-td">1,5k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">191</td><td class="crd-td">1,2</td><td class="crd-td">1,7k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">138</td><td class="crd-td">0,9</td><td class="crd-td">1,6k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">127</td><td class="crd-td">0,8</td><td class="crd-td">1,2k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">111</td><td class="crd-td">0,7</td><td class="crd-td">840</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">60</td><td class="crd-td">0,4</td><td class="crd-td">1,4k</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">21</td><td class="crd-td">0,1</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">15</td><td class="crd-td">0,1</td><td class="crd-td">1,6k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">14</td><td class="crd-td">0,1</td><td class="crd-td">1,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">13</td><td class="crd-td">0,1</td><td class="crd-td">1,4k</td><td class="crd-td">12,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Distribution of the 15.862 individually assessed classical settlements across modern national jurisdictions.</figcaption>
</figure>

# Sources
