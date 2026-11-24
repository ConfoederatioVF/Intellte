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
hero_caption: "Spatial distribution of 304 catalogued urban, oasis and coastal settlements across seven Arabian Peninsula jurisdictions from 1900AD to 1971AD."
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

This gazetteer documents 304 urban, oasis and coastal settlements active across the Arabian Peninsula between 1900AD and 1971AD, spanning 35.293 five-arcminute terrestrial cells across seven modern jurisdictions: Saudi Arabia (108 sites), Oman (66 sites), Yemen (65 sites), Qatar (21 sites), the United Arab Emirates (20 sites), Kuwait (14 sites) and Bahrain (10 sites). Harmonised from national statistical agencies—Saudi GASTAT (1974AD–2022AD), Yemen CSO (1975AD–2004AD), Oman NCSI (1993AD–2020AD), Kuwait CSB (1957AD–2021AD), Bahrain iGA (1941AD–2020AD), Qatar PSA (1970AD–2020AD) and UAE FCSA (1968AD–2020AD)—paired with historical gazetteers and geoBoundaries subadministrative polygons [@Runfola2020GeoBoundaries; @Bosworth2007Historic], the register tracks longitudinal urban populations across the transition from oasis pastoralism and pearling anchorages to oil-driven centralisation. Across 333 evaluated candidate entries in the regional source ledger, 304 settlements meet spatial and chronological inclusion rules while 29 candidates are excluded through suburban merger deduplication (21 entries within 2 km), variant-spelling reconciliation (4 aliases) and post-1971AD chronological filtering (4 sites). By 1970AD, the urban hierarchy exhibits a Zipf rank-size slope of $\alpha = 1,349$ ($R^2 = 0,919$), led by Ar-Riyad (1,37M), Jiddah (1,01M), Makkah (477,6k), Al-Madinah (300,9k), Ad-Dammam (238,6k), Al-Hufuf (220,1k), Aden (215,4k), At-Ta'if (205,8k), Dubayy (191,3k) and Abu Zaby (176,6k) [@Mandeli2019Public; @Eddisford2017Vernacular; @Hindelang2021History].

# Background

## Four Settlement Traditions across the Peninsula

At the opening of the twentieth century, urban and quasi-urban settlements across the Arabian Peninsula belonged to four distinct functional and ecological traditions [@Bosworth2007Historic; @Battesti2023Bedouins]. First, the Hijazi pilgrimage cities of Makkah, Al-Madinah and their maritime threshold at Jiddah—supplemented by the mountain summer seat of At-Ta'if and the secondary Red Sea port of Yanbu' al-Bahr—formed an internationally connected religious and mercantile network sustained by annual *hajj* caravans, maritime steamship arrivals and pious endowments [@Jeong2023Homeland; @Mandeli2019Public; @Alaki2023Time]. Second, Najdi and northern oasis towns—including Ar-Riyad, Buraydah, Unayzah, Ha'il, Al-Kharj and Al-Hufuf—acted as walled mud-brick agricultural hubs and caravan depots embedded within Bedouin *al-dira* grazing zones, later reinforced by King Abdulaziz's *hijar* agricultural sedentarisation settlements after 1912AD [@Alruwais1998Tent; @Alwehaibi2025Attitudes; @Anon2024Kingdom].

Third, in southwestern Arabia and interior Oman, ancient stone-built highland towns and piedmont oasis settlements—Sana'a, Ta'izz, Ibb, Dhamar and Shibam in Yemen alongside Nizwa, Bahla and Rustaq in Oman—served rain-fed terrace agriculture and *aflaj* irrigation systems, paired with the imperial bunkering port of Aden and the Red Sea cotton and coffee port of Al-Hudaydah [@Dureab2020Usefulness; @Bosworth2007Historic]. Fourth, along the Persian Gulf littoral, compact pearling and dhow-trading ports—Al-Kuwayt, Al-Manamah, Al-Muharraq, Ad-Dawhah, Dubayy and Abu Zaby—sat on shallow coral shoals and creeks before post-1932AD oil exploration inaugurated a generation of planned company townships and deepwater export hubs such as Ad-Dammam (founded 1923AD), Az-Zahran, Al-Khubar, Al-Ahmadi (founded 1946AD) and Hawalli (founded 1906AD) [@Hindelang2021History; @Eddisford2017Vernacular; @Fabbri2021Urban].

# Methodology

## Source Integration and Coordinate Standardisation

Each of the 304 catalogued settlements is anchored to verified WGS84 coordinates, an Arabic-transliterated canonical name and cross-referenced local scripts, assigned across the decennial benchmark series 1900AD to 1970AD (with exact founding-year entries in 1906AD for Hawalli, 1923AD for Ad-Dammam and 1946AD for Al-Ahmadi). Official national census baselines—beginning with Bahrain in 1941AD, Kuwait in 1957AD, the Trucial States in 1968AD, Qatar in 1970AD, South Yemen in 1973AD, Saudi Arabia in 1974AD, North Yemen in 1975AD and Oman in 1993AD—are harmonised with colonial port surveys and historical city gazetteers [@AlShehabi2026Labour; @Fahad2026Invisible; @Tawati1976Civil; @Bosworth2007Historic]. Where modern subadministrative GIS disaggregation from geoBoundaries ADM2/ADM1 polygons conditions rural-urban allocation, settlement footprints sit inside HANDBOOK's radial oasis kernels ($\sigma_1 = 4,5$ km, $\sigma_2 = 11,0$ km, cutoff 24 km) so urban growth never bleeds across uninhabited ergs [@Runfola2020GeoBoundaries].

## Source Ledger Deduplication and Exclusion Criteria

To prevent double counting inside rapidly expanding metropolitan conurbations and eliminate chronological anachronisms, the regional source ledger audits all 333 candidate place-names under three explicit exclusion rules:

1. Subordinate suburban mergers (21 entries): contiguous neighbourhoods, inner suburbs and satellite quarters situated within 2 km of a primary urban core—including al-Khobar, Hofuf, Madinat Hamad, Al-Qudaih, Adane, Macoraba and Iathrippa—are consolidated into their parent municipal cores to preserve a single labour-market envelope [@Mandeli2019Public; @Fabbri2021Urban].
2. Variant-spelling duplicate aliases (4 entries): Romanisation variants within 25 km of a canonical entry (Qatif, at-Ta'if, Abu Zabi and San'a') are merged into the primary standardised record.
3. Outside study bounds (4 entries): industrial and planned settlements whose foundation or urban emergence post-dates 1971AD—specifically Al-Jubayl (founded 1975AD), Badr (1982AD), Lusail and Fuwayrit—are excluded from the 1900AD–1971AD register [@Razzaq2026Modern].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 333 candidate records: 304 included settlements plus 29 excluded candidates with zero unassigned entries. Across all 304 active places, the Zipf rank-size regression yields $\alpha = 1,349$ with coefficient of determination $R^2 = 0,919$, confirming a well-structured metropolitan-to-oasis hierarchy free of truncated lower tails (Figure \ref{fig:sett-gazetteer}).

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-arabian-peninsula-state-formation-settlements/fig4_arabian_peninsula_state_formation_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and primary settlement hierarchy across 304 Arabian Peninsula centres through 1971AD.</figcaption>
</figure>

# Results

## Leading Forty-Five Settlements by Peak Population

Table \ref{tab:top45-arabia} presents the forty-five largest settlements in the gazetteer ranked by peak documented population through 1970AD. The upper tier captures the dual transformation of the peninsula: Riyadh and Jeddah both exceed 1M inhabitants by 1970AD, followed by the two Hijazi sanctuary cities (Makkah and Al-Madinah), the Eastern Province oil-and-oasis anchors (Ad-Dammam and Al-Hufuf), the Indian Ocean entrepôt of Aden, and the rapidly urbanising Gulf ports of Dubayy, Abu Zaby, Hawalli, Ad-Dawhah and Al-Manamah [@Mandeli2019Public; @Thiollet2020Cosmopolit; @Eddisford2017Vernacular].

<figure class="crd-table-figure" id="tab:top45-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1900AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1970AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">146,2k</td><td class="crd-td">381,8k</td><td class="crd-td">724k</td><td class="crd-td">1,37M</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">107,7k</td><td class="crd-td">281,4k</td><td class="crd-td">533,7k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">50,8k</td><td class="crd-td">132,8k</td><td class="crd-td">251,9k</td><td class="crd-td">477,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Madīnah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">32k</td><td class="crd-td">83,7k</td><td class="crd-td">158,6k</td><td class="crd-td">300,9k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dammām</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">66,3k</td><td class="crd-td">125,8k</td><td class="crd-td">238,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Hufūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">23,4k</td><td class="crd-td">61,2k</td><td class="crd-td">116k</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>'Adan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">46,2k</td><td class="crd-td">89,3k</td><td class="crd-td">138,7k</td><td class="crd-td">215,4k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭa'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,9k</td><td class="crd-td">57,2k</td><td class="crd-td">108,5k</td><td class="crd-td">205,8k</td></tr>
<tr><td class="crd-td"><strong>Dubayy</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">20,4k</td><td class="crd-td">53,2k</td><td class="crd-td">100,9k</td><td class="crd-td">191,3k</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓaby</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">18,8k</td><td class="crd-td">49,1k</td><td class="crd-td">93,1k</td><td class="crd-td">176,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">85,3k</td><td class="crd-td">161,8k</td></tr>
<tr><td class="crd-td"><strong>Tabūk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">15,4k</td><td class="crd-td">40,2k</td><td class="crd-td">76,3k</td><td class="crd-td">144,7k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawḥah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">13,9k</td><td class="crd-td">36,2k</td><td class="crd-td">68,7k</td><td class="crd-td">130,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Farwānīyah</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">13,6k</td><td class="crd-td">35,6k</td><td class="crd-td">67,6k</td><td class="crd-td">128,2k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">13,1k</td><td class="crd-td">34,2k</td><td class="crd-td">64,8k</td><td class="crd-td">123k</td></tr>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">25,9k</td><td class="crd-td">50k</td><td class="crd-td">77,7k</td><td class="crd-td">120,6k</td></tr>
<tr><td class="crd-td"><strong>Khamīs Mushaīṭ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">11,5k</td><td class="crd-td">30k</td><td class="crd-td">56,8k</td><td class="crd-td">107,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥā'il</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">9,3k</td><td class="crd-td">24,3k</td><td class="crd-td">46,1k</td><td class="crd-td">87,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Manāmah</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">8,6k</td><td class="crd-td">22,5k</td><td class="crd-td">42,7k</td><td class="crd-td">80,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">17k</td><td class="crd-td">33k</td><td class="crd-td">51,2k</td><td class="crd-td">79,5k</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,7k</td><td class="crd-td">32,3k</td><td class="crd-td">50,1k</td><td class="crd-td">77,8k</td></tr>
<tr><td class="crd-td"><strong>As-Sīb</strong></td><td class="crd-td">Oman</td><td class="crd-td">8,2k</td><td class="crd-td">21,4k</td><td class="crd-td">40,6k</td><td class="crd-td">76,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Kharj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">8k</td><td class="crd-td">20,9k</td><td class="crd-td">39,7k</td><td class="crd-td">75,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Jahrā'</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">8k</td><td class="crd-td">20,8k</td><td class="crd-td">39,4k</td><td class="crd-td">74,7k</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">7,9k</td><td class="crd-td">20,7k</td><td class="crd-td">39,2k</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Khubar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">7,5k</td><td class="crd-td">19,5k</td><td class="crd-td">37k</td><td class="crd-td">70,1k</td></tr>
<tr><td class="crd-td"><strong>Ḥafar al-Bāṭin</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">7,3k</td><td class="crd-td">18,9k</td><td class="crd-td">35,9k</td><td class="crd-td">68,2k</td></tr>
<tr><td class="crd-td"><strong>Ath-Thuqbah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">6,6k</td><td class="crd-td">17,3k</td><td class="crd-td">32,8k</td><td class="crd-td">62,1k</td></tr>
<tr><td class="crd-td"><strong>Yanbu' al-Baḥr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">6,3k</td><td class="crd-td">16,5k</td><td class="crd-td">31,2k</td><td class="crd-td">59,3k</td></tr>
<tr><td class="crd-td"><strong>Abhā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5,9k</td><td class="crd-td">15,4k</td><td class="crd-td">29,3k</td><td class="crd-td">55,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Finṭās</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">5,7k</td><td class="crd-td">14,9k</td><td class="crd-td">28,3k</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>'Ar'ar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5,7k</td><td class="crd-td">14,9k</td><td class="crd-td">28,2k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Maṭraḥ</strong></td><td class="crd-td">Oman</td><td class="crd-td">5,7k</td><td class="crd-td">14,8k</td><td class="crd-td">28,2k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rayyān</strong></td><td class="crd-td">Qatar</td><td class="crd-td">5,5k</td><td class="crd-td">14,5k</td><td class="crd-td">27,5k</td><td class="crd-td">52,1k</td></tr>
<tr><td class="crd-td"><strong>Bawshar</strong></td><td class="crd-td">Oman</td><td class="crd-td">5,5k</td><td class="crd-td">14,3k</td><td class="crd-td">27,2k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Firdaws</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">5,5k</td><td class="crd-td">14,3k</td><td class="crd-td">27,2k</td><td class="crd-td">51,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Manqaf</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">5,3k</td><td class="crd-td">13,8k</td><td class="crd-td">26,2k</td><td class="crd-td">49,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Qaṭīf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">5,2k</td><td class="crd-td">13,6k</td><td class="crd-td">25,8k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Mubarāk al-Kabīr</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">5,1k</td><td class="crd-td">13,4k</td><td class="crd-td">25,3k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Ṣalālah</strong></td><td class="crd-td">Oman</td><td class="crd-td">5k</td><td class="crd-td">12,9k</td><td class="crd-td">24,5k</td><td class="crd-td">46,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawiyah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4,9k</td><td class="crd-td">12,9k</td><td class="crd-td">24,5k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>'Unaīzah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4,8k</td><td class="crd-td">12,5k</td><td class="crd-td">23,8k</td><td class="crd-td">45,1k</td></tr>
<tr><td class="crd-td"><strong>Najrān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">4,8k</td><td class="crd-td">12,5k</td><td class="crd-td">23,7k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Al-Muḥarraq</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">4,3k</td><td class="crd-td">11,3k</td><td class="crd-td">21,4k</td><td class="crd-td">40,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukallā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">8,6k</td><td class="crd-td">16,7k</td><td class="crd-td">26k</td><td class="crd-td">40,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top forty-five Arabian Peninsula settlements ordered by 1970AD population across benchmark decades (304 total sites).</figcaption>
</figure>

## Territorial Distribution and Oil-Era New Towns

Table \ref{tab:regsum-arabia} summarises the distribution of all 304 catalogued settlements across the seven jurisdictions alongside each state's leading urban centre. Saudi Arabia accounts for just over one-third of all catalogued sites (108 settlements), reflecting its vast geographic span across Hijaz, Asir, Najd and Al-Hasa, while Oman (66 sites) and Yemen (65 sites) preserve dense clusters of traditional *aflaj* and highland market towns [@Dureab2020Usefulness; @Bosworth2007Historic]. Conversely, Kuwait (14 sites), Bahrain (10 sites), the United Arab Emirates (20 sites) and Qatar (21 sites) concentrate almost their entire national populations inside tight coastal metropolitan corridors.

<figure class="crd-table-figure" id="tab:regsum-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Sites</th><th class="crd-th">Leading Centre</th><th class="crd-th">1970AD Pop.</th><th class="crd-th">Primary Census Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">108</td><td class="crd-td">Ar-Riyāḍ</td><td class="crd-td">1,37M</td><td class="crd-td">GASTAT (1974AD-2022AD)</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">66</td><td class="crd-td">As-Sīb</td><td class="crd-td">76,9k</td><td class="crd-td">NCSI (1993AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">65</td><td class="crd-td">'Adan</td><td class="crd-td">215,4k</td><td class="crd-td">CSO Yemen (1975AD-2004AD)</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">21</td><td class="crd-td">Ad-Dawḥah</td><td class="crd-td">130,2k</td><td class="crd-td">PSA (1970AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">20</td><td class="crd-td">Dubayy</td><td class="crd-td">191,3k</td><td class="crd-td">FCSA (1968AD-2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">14</td><td class="crd-td">Ḥawallī</td><td class="crd-td">161,8k</td><td class="crd-td">CSB (1957AD-2021AD)</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">10</td><td class="crd-td">Al-Manāmah</td><td class="crd-td">80,9k</td><td class="crd-td">iGA (1941AD-2020AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, leading urban centres and statistical series across seven Arabian jurisdictions.</figcaption>
</figure>

## Source Ledger Exclusions

Table \ref{tab:excluded-arabia} lists all 29 excluded candidate records from the source ledger, recording their parent jurisdiction, exclusion classification and deduplication rationale.

<figure class="crd-table-figure" id="tab:excluded-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fuwayriṭ</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Post-1971AD emergence</td><td class="crd-td">Settlement foundation_year (None) post-dates chapter domain [1900, 1971].</td></tr>
<tr><td class="crd-td"><strong>Lūsaīl</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Post-1971AD emergence</td><td class="crd-td">Settlement foundation_year (None) post-dates chapter domain [1900, 1971].</td></tr>
<tr><td class="crd-td"><strong>Al-Jubaīl</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Post-1971AD emergence</td><td class="crd-td">Settlement foundation_year (1975) post-dates chapter domain [1900, 1971].</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Post-1971AD emergence</td><td class="crd-td">Settlement foundation_year (1982) post-dates chapter domain [1900, 1971].</td></tr>
<tr><td class="crd-td"><strong>Madīnat Ḥamād</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Bahrain.</td></tr>
<tr><td class="crd-td"><strong>Al-Qudaīḥ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Ẓahrān al-Janūb</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Masqaṭ</strong></td><td class="crd-td">Oman</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Oman.</td></tr>
<tr><td class="crd-td"><strong>Ad-Dīs</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>Ja'alān Banī Bū Ḥassan</strong></td><td class="crd-td">Oman</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Oman.</td></tr>
<tr><td class="crd-td"><strong>Baq'ā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Aḍ-Ḍ'āyan</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Qatar.</td></tr>
<tr><td class="crd-td"><strong>Al-Kar'ānah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Qatar.</td></tr>
<tr><td class="crd-td"><strong>Macoraba</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Adane</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>Adedou Kome</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>Baclanaza</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Iathrippa</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Thaima</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Ṣa'da</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>al-Khobar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Dibba</strong></td><td class="crd-td">Oman</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Oman.</td></tr>
<tr><td class="crd-td"><strong>Hofuf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Qatif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>aṭ-Ṭā'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓabī</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Yemen settlement.</td></tr>
<tr><td class="crd-td"><strong>Zabida</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>Erroneous Duplicate: Al-Hijr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entries in the Arabian Peninsula source ledger (29 deduplicated or post-1971AD sites).</figcaption>
</figure>

# Limitations

Four practical constraints affect settlement-level precision in this gazetteer. First, because Riyadh, Jeddah, Kuwait City and Ad-Dammam expanded rapidly beyond historic mud-brick walls after 1945AD, harmonized settlement trajectories project modern municipal catchment footprints backward to 1900AD; early-century values therefore represent broader oasis-and-suburb catchments rather than walled intra-muros counts alone [@Mandeli2019Public; @Hindelang2021History]. Second, seasonal population surges—above all the annual *hajj* pilgrimage in Makkah and Al-Madinah and summer pearling crews along the Gulf coast—create temporary populations several times larger than permanent resident baselines; all entries reflect smoothed resident populations [@Jeong2023Homeland; @Eddisford2017Vernacular]. Third, pre-census estimates for newly founded oil settlements such as Ad-Dammam (1923AD) and Al-Ahmadi (1946AD) carry wider uncertainty prior to the 1957AD Kuwaiti and 1974AD Saudi censuses [@Fahad2026Invisible; @Tawati1976Civil]. Fourth, in dense coastal conurbations such as Dammam-Khobar-Dhahran and Kuwait-Hawalli-Farwaniya, administrative boundaries between adjacent municipalities remain fluid across successive census decades [@Fadaak2000Urban; @AlShehabi2026Labour].

# Conclusion

The 304 settlements catalogued here document the urban reordering of the Arabian Peninsula across seven transformative decades. Whereas urban life in 1900AD centred on Hijazi pilgrimage towns, Aden's imperial coaling harbour, Yemeni highland market seats and modest pearling anchorages, by 1971AD central Saudi administrative capitals and hydrocarbon-exporting Gulf ports commanded the upper tiers of a sharply skewed rank-size hierarchy ($\alpha = 1,349$). Paired with strict source-ledger deduplication and radial oasis kriging kernels, the gazetteer provides a continuous settlement backbone connecting early twentieth-century historical geography to modern Gulf and Arabian census systems.

# Appendix

Table \ref{tab:appendix-yemen-oman} highlights sixteen notable post-1900AD foundations alongside key Yemeni and Omani secondary centres outside the continental top-twenty metropolitan list, documenting geographic coordinates and benchmark populations across the 1900AD–1970AD transition.

<figure class="crd-table-figure" id="tab:appendix-yemen-oman">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1970AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ad-Dammām</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,43, 50,1</td><td class="crd-td">-</td><td class="crd-td">125,8k</td><td class="crd-td">238,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">-</td><td class="crd-td">85,3k</td><td class="crd-td">161,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Aḥmadī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,08, 48,08</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Aẓ-Ẓahrān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,67, 43,52</td><td class="crd-td">3,9k</td><td class="crd-td">19,2k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Khubar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,28, 50,21</td><td class="crd-td">7,5k</td><td class="crd-td">37k</td><td class="crd-td">70,1k</td></tr>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35, 44,21</td><td class="crd-td">25,9k</td><td class="crd-td">77,7k</td><td class="crd-td">120,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">17k</td><td class="crd-td">51,2k</td><td class="crd-td">79,5k</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,58, 44,02</td><td class="crd-td">16,7k</td><td class="crd-td">50,1k</td><td class="crd-td">77,8k</td></tr>
<tr><td class="crd-td"><strong>Ibb</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,97, 44,18</td><td class="crd-td">4k</td><td class="crd-td">11,9k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Dhamār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 44,41</td><td class="crd-td">4k</td><td class="crd-td">12,1k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukallā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 49,12</td><td class="crd-td">8,6k</td><td class="crd-td">26k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>As-Sīb</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,67, 58,19</td><td class="crd-td">8,2k</td><td class="crd-td">40,6k</td><td class="crd-td">76,9k</td></tr>
<tr><td class="crd-td"><strong>Maṭraḥ</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,62, 58,56</td><td class="crd-td">5,7k</td><td class="crd-td">28,2k</td><td class="crd-td">53,4k</td></tr>
<tr><td class="crd-td"><strong>Ṣalālah</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,02, 54,09</td><td class="crd-td">5k</td><td class="crd-td">24,5k</td><td class="crd-td">46,5k</td></tr>
<tr><td class="crd-td"><strong>Ṣuḥār</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,18, 56,53</td><td class="crd-td">3,5k</td><td class="crd-td">17,6k</td><td class="crd-td">33,3k</td></tr>
<tr><td class="crd-td"><strong>Nizwā</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53</td><td class="crd-td">1,4k</td><td class="crd-td">6,8k</td><td class="crd-td">12,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Selected twentieth-century oil foundations and Yemeni and Omani regional centres with geographic coordinates.</figcaption>
</figure>

# Sources

<div id="refs"></div>
