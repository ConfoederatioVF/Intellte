---
title: "Arabian Peninsula State Formation to 1971"
subtitle: "Settlement Gazetteer of Oasis Capitals, Pilgrimage Cities and Oil Towns, 1900AD to 1971AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arabian_peninsula_state_formation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arabian_peninsula_state_formation_spatial.png"
hero_caption: "Spatial distribution of 105 individually assessed urban, oasis and coastal settlements across seven Arabian Peninsula jurisdictions from 1900AD to 1971AD."
hero_label: "fig:hero-arabian-settlements"
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

This gazetteer documents 105 individually assessed urban, oasis and coastal settlements active across the Arabian Peninsula between 1900AD and 1971AD, spanning 35.293 five-arcminute terrestrial cells across seven modern jurisdictions: Saudi Arabia (41 sites), Yemen (21 sites), Oman (15 sites), the United Arab Emirates (9 sites), Kuwait (7 sites), Bahrain (7 sites) and Qatar (5 sites). Harmonised from national statistical agencies—Saudi GASTAT (1974AD–2022AD), Yemen CSO (1975AD–2004AD), Oman NCSI (1993AD–2020AD), Kuwait CSB (1957AD–2021AD), Bahrain iGA (1941AD–2020AD), Qatar PSA (1970AD–2020AD) and UAE FCSA (1968AD–2020AD)—paired with Lorimer's *Gazetteer of the Persian Gulf* (1908AD), Ottoman *salnames*, Arab Bureau and Naval Intelligence handbooks, and geoBoundaries subadministrative polygons [@Runfola2020GeoBoundaries; @Bosworth2007Historic], the register tracks longitudinal urban populations across the transition from oasis pastoralism and pearling anchorages to oil-driven centralisation. Across 106 evaluated candidate entries in the regional source ledger, 105 settlements meet spatial and chronological inclusion rules while 1 duplicate candidate (Ta'izz, merged within 2,2 km into canonical Taiz in Yemen) is excluded. By 1971AD, the urban hierarchy exhibits a Zipf rank-size slope of $\alpha = 1{,}173$ ($R^2 = 0{,}941$), led by Riyadh (420k), Jeddah (380k), Mecca (310k), Aden (235k), Kuwait City (225k), Medina (160k), Taif (150k), Sanaa (115k), Hawalli (112k) and Al-Hofuf (98k) [@Mandeli2019Public; @Eddisford2017Vernacular; @Hindelang2021History].

# Background

## Four Settlement Traditions across the Peninsula

At the opening of the twentieth century, urban and quasi-urban settlements across the Arabian Peninsula belonged to four distinct functional and ecological traditions [@Bosworth2007Historic; @Battesti2023Bedouins]. First, the Hijazi pilgrimage cities of Mecca, Medina and their maritime threshold at Jeddah—supplemented by the mountain summer seat of Taif and the secondary Red Sea port of Yanbu—formed an internationally connected religious and mercantile network sustained by annual *hajj* caravans, maritime steamship arrivals and pious endowments [@Jeong2023Homeland; @Mandeli2019Public; @Alaki2023Time]. Second, Najdi and northern oasis towns—including Riyadh, Buraydah, Unayzah, Hail, Al-Kharj and Al-Hofuf—acted as walled mud-brick agricultural hubs and caravan depots embedded within Bedouin *al-dira* grazing zones, later reinforced by King Abdulaziz's *hijar* agricultural sedentarisation settlements after 1912AD [@Alruwais1998Tent; @Alwehaibi2025Attitudes; @Anon2024Kingdom].

Third, in southwestern Arabia and interior Oman, ancient stone-built highland towns and piedmont oasis settlements—Sanaa, Taiz, Ibb, Dhamar and Shibam in Yemen alongside Nizwa, Bahla and Rustaq in Oman—served rain-fed terrace agriculture and *aflaj* irrigation systems, paired with the imperial bunkering port of Aden, the Red Sea coffee and cotton port of Al-Hudaydah and the Omani maritime ports of Muscat and Sur [@Dureab2020Usefulness; @Bosworth2007Historic]. Fourth, along the Persian Gulf littoral, compact pearling and dhow-trading ports—Kuwait City, Manama, Muharraq, Doha, Dubai, Sharjah and Abu Dhabi—sat on shallow coral shoals and creeks before post-1932AD oil exploration inaugurated a generation of planned company townships and deepwater export hubs such as Dammam (re-founded 1923AD), Dhahran (1938AD), Ras Tanura (1939AD), Abqaiq and Dukhan (1940AD), Al-Khobar (1942AD), Al-Ahmadi (1946AD), Mesaieed (1949AD) and Hawalli (founded 1906AD) [@Hindelang2021History; @Eddisford2017Vernacular; @Fabbri2021Urban].

# Methodology

## Source Integration and Coordinate Standardisation

Each of the 105 individually assessed settlements is anchored to verified WGS84 coordinates, a standardised canonical name and cross-referenced Arabic and historical variants, assessed case by case from Lorimer's *Gazetteer of the Persian Gulf* (1908AD), Ottoman provincial *salnames*, Arab Bureau and Naval Intelligence handbooks, and early census benchmarks from 1900AD to 1971AD (with explicit post-1900AD foundation years including Hawalli in 1906AD, Dammam in 1923AD, Dhahran in 1938AD, Ras Tanura in 1939AD, Abqaiq and Dukhan in 1940AD, Al-Khobar in 1942AD, Al-Ahmadi in 1946AD, Mesaieed in 1949AD, Salmiya and Turaif in 1950AD, Arar in 1951AD and Isa Town in 1968AD). Official national census baselines—beginning with Aden in 1901AD, Bahrain in 1941AD, Kuwait in 1957AD, the Saudi municipal count of 1962AD–1963AD, the Trucial States in 1968AD, Qatar in 1970AD, South Yemen in 1973AD, Saudi Arabia in 1974AD, North Yemen in 1975AD and Oman in 1993AD—are harmonised with colonial port surveys and historical city gazetteers [@AlShehabi2026Labour; @Fahad2026Invisible; @Tawati1976Civil; @Bosworth2007Historic]. Where modern subadministrative GIS disaggregation from geoBoundaries ADM2/ADM1 polygons conditions rural-urban allocation, settlement footprints sit inside HANDBOOK's radial oasis kernels ($\sigma_1 = 4,5$ km, $\sigma_2 = 11,0$ km, cutoff 24 km) so urban growth never bleeds across uninhabited ergs [@Runfola2020GeoBoundaries].

## Source Ledger Deduplication and Exclusion Criteria

To prevent double counting inside rapidly expanding metropolitan conurbations and eliminate chronological anachronisms, the regional source ledger audits all 106 candidate place-names across the official national census and historical gazetteer corpora, enforcing spatial proximity deduplication, variant-spelling reconciliation and chronological boundary screening. Following reconciliation of the verified Tier-0 baseline, 105 distinct settlements enter the final gazetteer while 1 co-located variant-spelling candidate (Ta'izz in Yemen, situated within 2,2 km of canonical Taiz) is excluded and merged into its canonical entry [@Mandeli2019Public; @Fabbri2021Urban; @Razzaq2026Modern].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 106 candidate records: 105 included settlements plus 1 excluded duplicate candidate with zero unassigned entries. Across all 105 active places, the Zipf rank-size regression yields $\alpha = 1{,}173$ with coefficient of determination $R^2 = 0{,}941$, confirming a well-structured metropolitan-to-oasis hierarchy free of truncated lower tails (Figure \ref{fig:sett-gazetteer}).

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-arabian-peninsula-state-formation-settlements/fig4_arabian_peninsula_state_formation_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and primary settlement hierarchy across 105 individually assessed Arabian Peninsula centres through 1971AD.</figcaption>
</figure>

# Results

## Leading Forty-Five Settlements by Peak Population

Table \ref{tab:top45-arabia} presents the forty-five largest settlements in the gazetteer ranked by peak documented population through 1971AD. The upper tier captures the dual transformation of the peninsula: Riyadh (420k), Jeddah (380k), Mecca (310k), Aden (235k) and Kuwait City (225k) all exceed 200k inhabitants by 1971AD, followed by Medina (160k), Taif (150k), Sanaa (115k), Hawalli (112k), the Eastern Province oasis-and-oil anchors of Al-Hofuf (98k) and Dammam (95k), the rapidly urbanising Gulf ports of Manama (88,8k), Dubai (85k) and Doha (84k), Taiz (80k peak in 1970AD; 65k in 1971AD) and Salmiya (71k) [@Mandeli2019Public; @Thiollet2020Cosmopolit; @Eddisford2017Vernacular].

<figure class="crd-table-figure" id="tab:top45-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1900AD</th><th class="crd-th">1930-41AD</th><th class="crd-th">1950-55AD</th><th class="crd-th">1971AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">14k</td><td class="crd-td">30k</td><td class="crd-td">83k</td><td class="crd-td">420k</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28k</td><td class="crd-td">32k</td><td class="crd-td">90k</td><td class="crd-td">380k</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">70k</td><td class="crd-td">80k</td><td class="crd-td">130k</td><td class="crd-td">310k</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">44k (1901)</td><td class="crd-td">48,3k (1931)</td><td class="crd-td">80,5k (1946)</td><td class="crd-td">235k</td></tr>
<tr><td class="crd-td"><strong>Kuwait City</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">32k</td><td class="crd-td">60k</td><td class="crd-td">95k</td><td class="crd-td">225k</td></tr>
<tr><td class="crd-td"><strong>Medina</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">35k</td><td class="crd-td">28k</td><td class="crd-td">52k</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>Taif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">8k</td><td class="crd-td">12k</td><td class="crd-td">32k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">35k</td><td class="crd-td">45k</td><td class="crd-td">55k (1955)</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Hawalli</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">2,8k (1940)</td><td class="crd-td">6,8k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Al-Hofuf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24k</td><td class="crd-td">38k</td><td class="crd-td">55k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Dammam</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">14k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Manama</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">24k</td><td class="crd-td">26,5k</td><td class="crd-td">39,6k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Dubai</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">9k</td><td class="crd-td">22k (1940)</td><td class="crd-td">30k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Doha</strong></td><td class="crd-td">Qatar</td><td class="crd-td">11k</td><td class="crd-td">11k (1940)</td><td class="crd-td">15k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Taiz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">10k</td><td class="crd-td">17k (1940)</td><td class="crd-td">25k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Salmiya</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">71k</td></tr>
<tr><td class="crd-td"><strong>Al-Hudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">40k</td><td class="crd-td">35k (1940)</td><td class="crd-td">42k (1955)</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">9,5k</td><td class="crd-td">20k (1940)</td><td class="crd-td">26k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Tabuk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k</td><td class="crd-td">4,5k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Abu Dhabi</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">5,5k</td><td class="crd-td">5,2k</td><td class="crd-td">4k</td><td class="crd-td">46k</td></tr>
<tr><td class="crd-td"><strong>Al-Mubarraz</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">8k</td><td class="crd-td">18,5k (1940)</td><td class="crd-td">24k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Muscat</strong></td><td class="crd-td">Oman</td><td class="crd-td">23k</td><td class="crd-td">21k</td><td class="crd-td">28k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Al-Khobar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Najran</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5,5k</td><td class="crd-td">10,5k (1940)</td><td class="crd-td">15k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukalla</strong></td><td class="crd-td">Yemen</td><td class="crd-td">11k</td><td class="crd-td">18k (1935)</td><td class="crd-td">24k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Al-Farwaniya</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">500</td><td class="crd-td">1,8k (1940)</td><td class="crd-td">3,8k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Khamis Mushait</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">3,2k</td><td class="crd-td">7k (1940)</td><td class="crd-td">11k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>Muharraq</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">19k</td><td class="crd-td">20,5k</td><td class="crd-td">25,6k</td><td class="crd-td">37,7k</td></tr>
<tr><td class="crd-td"><strong>Hail</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">12k</td><td class="crd-td">14k (1940)</td><td class="crd-td">17k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Dhahran</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">2,5k (1938)</td><td class="crd-td">12k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Al-Kharj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4k</td><td class="crd-td">8,5k (1940)</td><td class="crd-td">13k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Sharjah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">14k</td><td class="crd-td">13,5k</td><td class="crd-td">14k</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Al-Qatif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">9,5k</td><td class="crd-td">14,5k (1940)</td><td class="crd-td">18k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Jizan</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5k</td><td class="crd-td">10k (1940)</td><td class="crd-td">13,5k</td><td class="crd-td">29k</td></tr>
<tr><td class="crd-td"><strong>Unayzah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">11,5k</td><td class="crd-td">17,5k (1940)</td><td class="crd-td">20,5k</td><td class="crd-td">28,5k</td></tr>
<tr><td class="crd-td"><strong>Abha</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4,2k</td><td class="crd-td">8,2k (1940)</td><td class="crd-td">12k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Fahaheel</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">550</td><td class="crd-td">950</td><td class="crd-td">3,8k (1952)</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Ahmadi</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Jahra</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Wadi ad-Dawasir</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5,5k</td><td class="crd-td">8,2k (1940)</td><td class="crd-td">10,5k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Sakaka</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4,2k</td><td class="crd-td">6,4k (1940)</td><td class="crd-td">8,5k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Ras al-Khaimah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">7,5k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Arar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1951)</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Dhamar</strong></td><td class="crd-td">Yemen</td><td class="crd-td">8,5k</td><td class="crd-td">11,8k (1940)</td><td class="crd-td">14,2k (1955)</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Sur</strong></td><td class="crd-td">Oman</td><td class="crd-td">11,5k</td><td class="crd-td">11,5k</td><td class="crd-td">12,8k</td><td class="crd-td">18k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top forty-five Arabian Peninsula settlements ordered by peak population across benchmark periods (105 total sites).</figcaption>
</figure>

## Territorial Distribution and Oil-Era New Towns

Table \ref{tab:regsum-arabia} summarises the distribution of all 105 individually assessed settlements across the seven jurisdictions alongside each state's leading urban centre. Saudi Arabia accounts for nearly two-fifths of all assessed sites (41 settlements), reflecting its vast geographic span across Hijaz, Asir, Najd and Al-Hasa, while Yemen (21 sites) and Oman (15 sites) preserve dense clusters of traditional highland market towns and *aflaj* oasis centres [@Dureab2020Usefulness; @Bosworth2007Historic]. Conversely, the United Arab Emirates (9 sites), Kuwait (7 sites), Bahrain (7 sites) and Qatar (5 sites) concentrate almost their entire national populations inside tight coastal metropolitan corridors.

<figure class="crd-table-figure" id="tab:regsum-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">Leading Centre</th><th class="crd-th">1971AD Pop.</th><th class="crd-th">Primary Census Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">41</td><td class="crd-td">Riyadh</td><td class="crd-td">420k</td><td class="crd-td">GASTAT (1974AD-2022AD)</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">21</td><td class="crd-td">Aden</td><td class="crd-td">235k</td><td class="crd-td">CSO Yemen (1975AD-2004AD)</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">15</td><td class="crd-td">Muscat</td><td class="crd-td">45k</td><td class="crd-td">NCSI (1993AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">9</td><td class="crd-td">Dubai</td><td class="crd-td">85k</td><td class="crd-td">FCSA (1968AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">7</td><td class="crd-td">Kuwait City</td><td class="crd-td">225k</td><td class="crd-td">CSB (1957AD-2021AD)</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">7</td><td class="crd-td">Manama</td><td class="crd-td">88,8k</td><td class="crd-td">iGA (1941AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">5</td><td class="crd-td">Doha</td><td class="crd-td">84k</td><td class="crd-td">PSA (1970AD-2020AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Assessed settlement counts, leading urban centres and statistical series across seven Arabian jurisdictions.</figcaption>
</figure>

## Source Ledger Exclusions

Table \ref{tab:excluded-arabia} lists the 1 excluded candidate record from the source ledger, recording its parent jurisdiction, exclusion classification and deduplication rationale.

<figure class="crd-table-figure" id="tab:excluded-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Yemen settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entry in the Arabian Peninsula source ledger (1 deduplicated variant-spelling locality).</figcaption>
</figure>

# Limitations

Four practical constraints affect settlement-level precision in this gazetteer. First, because Riyadh, Jeddah, Kuwait City and Dammam expanded rapidly beyond historic mud-brick walls after 1945AD, reconciling pre-1940AD gazetteer estimates (Lorimer, Ottoman *salnames* and colonial handbooks) with post-1950AD municipal census boundaries requires careful separation of historic cores from emerging outer suburbs [@Mandeli2019Public; @Hindelang2021History]. Second, seasonal population surges—above all the annual *hajj* pilgrimage in Mecca and Medina and summer pearling crews along the Gulf coast—create temporary populations several times larger than permanent resident baselines; all entries reflect smoothed resident populations [@Jeong2023Homeland; @Eddisford2017Vernacular]. Third, pre-census estimates for newly founded oil settlements such as Dammam (re-founded 1923AD), Dhahran (1938AD), Al-Khobar (1942AD) and Al-Ahmadi (1946AD) carry wider uncertainty prior to the 1957AD Kuwaiti and 1962AD–1974AD Saudi enumerations [@Fahad2026Invisible; @Tawati1976Civil]. Fourth, in dense coastal conurbations such as Dammam-Khobar-Dhahran and Kuwait-Hawalli-Farwaniya, administrative boundaries between adjacent municipalities remain fluid across successive census decades [@Fadaak2000Urban; @AlShehabi2026Labour].

# Conclusion

The 105 individually assessed settlements catalogued here document the urban reordering of the Arabian Peninsula across seven transformative decades. Whereas urban life in 1900AD centred on Hijazi pilgrimage towns, Aden's imperial coaling harbour, Yemeni highland market seats and modest pearling anchorages, by 1971AD central Saudi administrative capitals and hydrocarbon-exporting Gulf ports commanded the upper tiers of a structured rank-size hierarchy ($\alpha = 1{,}173$, $R^2 = 0{,}941$). Paired with strict source-ledger deduplication and radial oasis kriging kernels, the gazetteer provides a continuous settlement backbone connecting early twentieth-century historical geography to modern Gulf and Arabian census systems.

# Appendix

Table \ref{tab:appendix-yemen-oman} highlights sixteen notable post-1900AD oil and suburban foundations alongside key Yemeni and Omani regional centres, documenting geographic coordinates and benchmark populations across the 1900AD–1971AD transition.

<figure class="crd-table-figure" id="tab:appendix-yemen-oman">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1900AD</th><th class="crd-th">1950-55AD</th><th class="crd-th">1971AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dammam</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,43, 50,1</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Dhahran</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,29, 50,11</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Al-Khobar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,28, 50,21</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Hawalli</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Al-Ahmadi</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,08, 48,08</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Mesaieed</strong></td><td class="crd-td">Qatar</td><td class="crd-td">24,99, 51,55</td><td class="crd-td">-</td><td class="crd-td">900 (1949)</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35, 44,21</td><td class="crd-td">35k</td><td class="crd-td">55k (1955)</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Al-Hudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">40k</td><td class="crd-td">42k (1955)</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Taiz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,58, 44,02</td><td class="crd-td">10k</td><td class="crd-td">25k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukalla</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 49,12</td><td class="crd-td">11k</td><td class="crd-td">24k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Dhamar</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 44,41</td><td class="crd-td">8,5k</td><td class="crd-td">14,2k (1955)</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Ibb</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,97, 44,18</td><td class="crd-td">7,5k</td><td class="crd-td">12,5k (1955)</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Sur</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,57, 59,53</td><td class="crd-td">11,5k</td><td class="crd-td">12,8k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Sohar</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,36, 56,75</td><td class="crd-td">7,2k</td><td class="crd-td">9,6k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Nizwa</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53</td><td class="crd-td">5,8k</td><td class="crd-td">8,4k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Salalah</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,02, 54,09</td><td class="crd-td">3,8k</td><td class="crd-td">6,5k</td><td class="crd-td">12k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Selected twentieth-century oil foundations and Yemeni and Omani regional centres with geographic coordinates.</figcaption>
</figure>

# Sources

<div id="refs"></div>
