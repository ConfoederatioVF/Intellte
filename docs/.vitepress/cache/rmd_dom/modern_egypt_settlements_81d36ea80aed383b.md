---
title: "Egypt after 1952"
subtitle: "Settlement Gazetteer: Governorates, Delta Towns and Desert Cities, 1952AD-2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_egypt_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_egypt_spatial.png"
hero_caption: "Spatial distribution of 363 catalogued urban settlements across Egypt's 27 governorates between 1952AD and 2026AD."
hero_label: "fig:hero-settlements-modern-egypt"
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

This settlement gazetteer compiles urban, industrial and administrative town trajectories for 363 catalogued Egyptian centres between 1952AD and 2026AD across 27 governorates. Screened from 616 evaluated municipal and district candidates in the regional source ledger after consolidating 253 duplicate aliases and subordinate suburbs into canonical cores, the expanded dataset combines continuous multi-decadal national census trajectories (1952AD–2025AD) with contemporary CAPMAS urban *qism* and desert-city enumerations. Growth remains heavily top-heavy, yielding a steep Zipf rank-size exponent of $\alpha = 1{,}452$ ($R^2 = 0{,}79$): six million-plus centres at peak—Cairo (10,25M in 2023AD; 10,08M in 2025AD), Giza (5,6M in 2020AD; 4,58M in 2025AD), Al-Iskandariyah (5,51M in 2025AD), New Cairo (1,5M in 2023AD), Shubrā al-Khaymah (1,31M in 2025AD) and Boulaq Ad Dakrour (1,04M in 2024AD)—anchor the metropolitan apex. Beneath this metropolitan core, the register traces Suez Canal recovery ports, dense Delta provincial centres, Upper Egyptian river towns reshaped by the Aswan High Dam, frontier oasis and Red Sea resort hubs, and satellite desert cities including New Cairo (1,5M), Al-'Āshir min Ramaḍān (500k peak), Madinat Sittah Uktubar (387k), Al-'Ubur (147k), Ash-Shuruq (96,4k), Madinat as-Sadat (76,3k) and Madinat Badr (34,6k).

<figure class="crd-figure-block" id="fig:hero-settlements-modern-egypt">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-egypt-settlements/fig1_modern_egypt_spatial.png" alt="fig:hero-settlements-modern-egypt" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 363 catalogued urban settlements across Egypt's 27 governorates between 1952AD and 2026AD.</figcaption>
</figure>

# Background

Egypt's post-1952 urban system combines ancient riverine continuity with rapid twentieth-century metropolitan polarisation. Almost every major provincial capital—from Aswan, Qina, Sawhaj, Asyut and Al-Minya in Upper Egypt to Tanta, Al-Mansurah, Az-Zaqaziq and Damanhur in the Delta—occupied historic mound or market sites anchored to Nile branches and main railway junctions [@Taiema2023Urban; @Bayoumi2020City]. Only Alexandria, the Suez Canal cities of Port Said, Ismailia and Suez, and twentieth-century Red Sea or desert-edge towns broke away from the pre-modern river axis [@Zayyan2017Role; @Hawash2022Detection].

After 1952AD, agrarian reform, state-led industrialisation at Helwan, Shubra al-Khaymah and Al-Mahallah al-Kubra, and centralised university and civil-service expansion concentrated modern employment inside Greater Cairo and Alexandria [@Hereher2012Urban; @Paredes2025Rural]. Simultaneously, population pressure inside the Nile Delta pushed rural market centres across the official threshold of town status, blurring the boundary between dense agricultural villages and municipal *madinas* [@Hareedy2009Rural; @Borhamy2026Coupling]. From the late 1970s onward, consecutive national housing plans carved new desert cities out of state-owned wasteland around Cairo, Alexandria and Middle Egypt to redirect housing construction off shrinking alluvial cropland [@Gamal2025Critical; @Abdelkader2023Analyzing; @Toth2009Strategic].

# Methodology

Settlement trajectories were compiled primarily from official CAPMAS decennial censuses (1960AD, 1976AD, 1986AD, 1996AD, 2006AD and 2017AD) supplemented by 1952AD post-revolutionary baselines and 2018AD–2025AD CAPMAS municipal estimates, with zero reliance on crowd-sourced fallback shares. Every included entry carries WGS84 coordinates verified against Egypt's 27 governorate polygons and matched to the 296 second-order geoBoundaries administrative units [@Runfola2020GeoBoundaries]. Arabic toponyms follow ALA-LC/BGN scholarly romanisation with diacritics preserved alongside original Arabic script aliases in the underlying archive.

To prevent artificial double counting of contiguous metropolitan agglomerations or variant transliterations, the regional source ledger enforces strict spatial and orthographic deduplication across all 616 screened records. Where exonym/transliteration twins (such as Al-Qāhirah and Al-Jīzah alongside canonical Cairo and Giza), multi-source variant duplicates within 25 km or co-located subordinate suburbs within 1,6 to 2 km duplicate a primary settlement, they are excluded from the independent point ledger and consolidated into the parent entry—totalling 253 excluded candidates and leaving 363 retained settlements.

# Testing and Validation

Cross-checking the 363 included entries verifies full spatial coverage across all 27 Egyptian governorates, pairing continuous 1952AD–2025AD national census trajectories for historic cities and provincial *markaz* towns with contemporary 2022AD–2024AD CAPMAS urban *qism* and desert-city enumerations (including New Cairo, Boulaq Ad Dakrour, El-Marg, El Warraq, Nasr City, Al Ahram, Imbabah and Ain Shams). Figure 2 presents the log-log Zipf rank-size regression ($\alpha = 1{,}452$, $R^2 = 0{,}79$) alongside the twelve highest-peaking urban centres. Unlike fragmented pre-industrial settlement networks, Egypt's post-1952 urban system exhibits a steep, primate-leaning rank-size gradient dominated by Cairo, Giza and Alexandria [@Bayoumi2020City; @Hereher2012Urban].

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-egypt-settlements/fig4_modern_egypt_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size curve across all 363 catalogued Egyptian settlements (left) and the twelve largest urban centres by peak population (right).</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table 1 lists the 45 largest catalogued Egyptian settlements ordered by peak population across 1952AD–2025AD. The upper tier is led by six million-plus centres at peak—Cairo (10,25M), Giza (5,6M), Al-Iskandariyah (5,51M), New Cairo (1,5M), Shubrā al-Khaymah (1,31M) and Boulaq Ad Dakrour (1,04M)—followed by twenty additional urban centres and metropolitan *qisms* at or above 500k inhabitants (including El-Marg, Būr Sa'īd, El Warraq, As-Suways, Nasr City, Al Ahram, Imbabah, Ain Shams, Al-Manṣūrah, Al-Maḥallah al-Kubrā, Helwan, Ṭanṭā, Asyūṭ, Shibīn al-Qanāṭir, Dar El Salam, Al-Fayyūm, Al Basatin, Al Salam First, Al-Khuṣūṣ and Al-'Āshir min Ramaḍān).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Governorate</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1952AD</th><th class="crd-th">2006AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,04, 31,24</td><td class="crd-td">2,45M</td><td class="crd-td">7,74M</td><td class="crd-td">10,25M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,99, 31,21</td><td class="crd-td">96k</td><td class="crd-td">3,02M</td><td class="crd-td">5,6M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Al Iskandariyah</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">1,08M</td><td class="crd-td">4,03M</td><td class="crd-td">5,51M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>New Cairo</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,03, 31,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,13, 31,25</td><td class="crd-td">62k</td><td class="crd-td">1,03M</td><td class="crd-td">1,31M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Boulaq Ad Dakrour</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,04, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,04M (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El-Marg</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,16, 31,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">862,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Bur Said</td><td class="crd-td">31,27, 32,3</td><td class="crd-td">202k</td><td class="crd-td">570,6k</td><td class="crd-td">814,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El Warraq</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,12, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">802,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">As Suways</td><td class="crd-td">29,6, 32,2</td><td class="crd-td">126k</td><td class="crd-td">508,6k</td><td class="crd-td">740,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">As Suways</td><td class="crd-td">29,97, 32,53</td><td class="crd-td">-</td><td class="crd-td">508,6k</td><td class="crd-td">740,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Nasr City</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,05, 31,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">732,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Al Ahram</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,98, 31,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">715k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Imbabah</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,08, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">686k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Shams</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,13, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">663,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,04, 31,38</td><td class="crd-td">117,5k</td><td class="crd-td">439,3k</td><td class="crd-td">650,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">Al Gharbiyah</td><td class="crd-td">30,97, 31,17</td><td class="crd-td">136,5k</td><td class="crd-td">443k</td><td class="crd-td">631,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Helwan</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,85, 31,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">619,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">Al Gharbiyah</td><td class="crd-td">30,79, 31</td><td class="crd-td">156k</td><td class="crd-td">422,9k</td><td class="crd-td">614,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">Asyut</td><td class="crd-td">27,18, 31,18</td><td class="crd-td">103k</td><td class="crd-td">389,3k</td><td class="crd-td">578k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shibīn al-Qanāṭir</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,31, 31,32</td><td class="crd-td">-</td><td class="crd-td">55,3k</td><td class="crd-td">570,9k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Dar El Salam</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,99, 31,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">567,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">Al Fayyum</td><td class="crd-td">29,31, 30,84</td><td class="crd-td">83,2k</td><td class="crd-td">315,9k</td><td class="crd-td">547k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al Basatin</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,98, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">534,9k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al Salam First</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,17, 31,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">519k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,15, 31,32</td><td class="crd-td">-</td><td class="crd-td">291,2k</td><td class="crd-td">517,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Āshir min Ramaḍān</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,3, 31,74</td><td class="crd-td">-</td><td class="crd-td">125,9k</td><td class="crd-td">500k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>El Talbia</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,99, 31,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">496,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Az-Zaqāzīq</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,59, 31,5</td><td class="crd-td">94,5k</td><td class="crd-td">302,8k</td><td class="crd-td">473,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ismā'īliyah</strong></td><td class="crd-td">Al Ismailiyah</td><td class="crd-td">30,6, 32,27</td><td class="crd-td">82,5k</td><td class="crd-td">293,2k</td><td class="crd-td">463,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El-Tagamu El Khames</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30, 31,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">423k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Talkha</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,06, 31,38</td><td class="crd-td">-</td><td class="crd-td">78,3k</td><td class="crd-td">413,6k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Aswān</strong></td><td class="crd-td">Aswan</td><td class="crd-td">24,09, 32,9</td><td class="crd-td">30,4k</td><td class="crd-td">266k</td><td class="crd-td">413,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Madīnat Sittah Uktūbar</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,82, 31,05</td><td class="crd-td">-</td><td class="crd-td">154,1k</td><td class="crd-td">387k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,57, 31,5</td><td class="crd-td">-</td><td class="crd-td">302,8k</td><td class="crd-td">383,7k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>6th of October City</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,94, 30,93</td><td class="crd-td">-</td><td class="crd-td">154,1k</td><td class="crd-td">376,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>al-Munīra al-Gharbīya</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,07, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">359,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El Zawya El Hamraa</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,1, 31,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">343,6k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El Sahel</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,08, 31,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">341,7k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Hadayek El Kobba</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,1, 31,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">341,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">Al Buhayrah</td><td class="crd-td">31,03, 30,47</td><td class="crd-td">96,5k</td><td class="crd-td">244k</td><td class="crd-td">338,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dumyāṭ</strong></td><td class="crd-td">Dumyat</td><td class="crd-td">31,43, 31,78</td><td class="crd-td">59,8k</td><td class="crd-td">206,7k</td><td class="crd-td">321,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qāhirah al-Jadīdah</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,04, 31,44</td><td class="crd-td">-</td><td class="crd-td">122,3k</td><td class="crd-td">319,5k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā</strong></td><td class="crd-td">Al Minya</td><td class="crd-td">28,09, 30,76</td><td class="crd-td">79,4k</td><td class="crd-td">236k</td><td class="crd-td">306,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">Dumyat</td><td class="crd-td">31,42, 31,82</td><td class="crd-td">-</td><td class="crd-td">206,7k</td><td class="crd-td">305,9k (2020AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 catalogued Egyptian settlements ordered by peak population (n = 363 total sites, 1952AD-2025AD).</figcaption>
</figure>

## Greater Cairo, Alexandria and the Suez Canal Corridor

Metropolitan concentration across Cairo, Giza, Qalyubiyah, Alexandria and the three Suez Canal governorates forms the primary demographic spine of modern Egypt. Table 2 extracts the leading catalogued centres across Al Qahirah, Al Jizah, Al Qalyubiyah, Al Iskandariyah, Bur Sa'id, Al Isma'iliyah and As Suways. Cairo proper rose from 2,45M in 1952AD to 7,74M in 2006AD, peaking at 10,25M in 2023AD (10,08M in 2025AD), while Giza expanded from 96k in 1952AD to a peak of 5,6M in 2020AD (4,58M in 2025AD), Shubrā al-Khaymah climbed to 1,31M, New Cairo reached 1,5M (2023AD), Boulaq Ad Dakrour reached 1,04M (2024AD), Al-Khuṣūṣ reached 517,1k and Madinat Sittah Uktubar surged from 38,8k in 1996AD to 387k by 2025AD [@Hereher2012Urban; @Gamal2025Critical]. On the eastern desert ring, Al-'Āshir min Ramaḍān (500k peak in 2018AD), Al-'Ubur (147k), Ash-Shuruq (96,4k) and Madinat Badr (34,6k) added secondary suburban poles, while Alexandria (5,51M) anchored the Mediterranean coast ahead of Būr Sa'īd (814,2k), As-Suways (740,9k peak in 2018AD; 736,8k in 2025AD) and Al-Ismā'īliyah (463,2k).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Governorate</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1952AD</th><th class="crd-th">2006AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,04, 31,24</td><td class="crd-td">2,45M</td><td class="crd-td">7,74M</td><td class="crd-td">10,25M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,99, 31,21</td><td class="crd-td">96k</td><td class="crd-td">3,02M</td><td class="crd-td">5,6M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Al Iskandariyah</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">1,08M</td><td class="crd-td">4,03M</td><td class="crd-td">5,51M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>New Cairo</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,03, 31,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,13, 31,25</td><td class="crd-td">62k</td><td class="crd-td">1,03M</td><td class="crd-td">1,31M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Boulaq Ad Dakrour</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,04, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,04M (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El-Marg</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,16, 31,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">862,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Bur Said</td><td class="crd-td">31,27, 32,3</td><td class="crd-td">202k</td><td class="crd-td">570,6k</td><td class="crd-td">814,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El Warraq</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,12, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">802,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">As Suways</td><td class="crd-td">29,6, 32,2</td><td class="crd-td">126k</td><td class="crd-td">508,6k</td><td class="crd-td">740,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">As Suways</td><td class="crd-td">29,97, 32,53</td><td class="crd-td">-</td><td class="crd-td">508,6k</td><td class="crd-td">740,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Nasr City</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,05, 31,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">732,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Al Ahram</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,98, 31,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">715k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Imbabah</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,08, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">686k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Ain Shams</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,13, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">663,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Helwan</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,85, 31,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">619,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Shibīn al-Qanāṭir</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,31, 31,32</td><td class="crd-td">-</td><td class="crd-td">55,3k</td><td class="crd-td">570,9k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Dar El Salam</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,99, 31,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">567,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al Basatin</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">29,98, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">534,9k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al Salam First</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,17, 31,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">519k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">Al Qalyubiyah</td><td class="crd-td">30,15, 31,32</td><td class="crd-td">-</td><td class="crd-td">291,2k</td><td class="crd-td">517,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El Talbia</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,99, 31,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">496,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ismā'īliyah</strong></td><td class="crd-td">Al Ismailiyah</td><td class="crd-td">30,6, 32,27</td><td class="crd-td">82,5k</td><td class="crd-td">293,2k</td><td class="crd-td">463,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>El-Tagamu El Khames</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30, 31,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">423k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Madīnat Sittah Uktūbar</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,82, 31,05</td><td class="crd-td">-</td><td class="crd-td">154,1k</td><td class="crd-td">387k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>6th of October City</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">29,94, 30,93</td><td class="crd-td">-</td><td class="crd-td">154,1k</td><td class="crd-td">376,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>al-Munīra al-Gharbīya</strong></td><td class="crd-td">Al Jizah</td><td class="crd-td">30,07, 31,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">359,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>El Zawya El Hamraa</strong></td><td class="crd-td">Al Qahirah</td><td class="crd-td">30,1, 31,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">343,6k (2024AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements across Greater Cairo, Alexandria and the Suez Canal governorates (1952AD-2025AD).</figcaption>
</figure>

## The Nile Delta Urban Lattice

Inside the seven central and northern Delta governorates—Ad Daqahliyah, Al Gharbiyah, Ash Sharqiyah, Al Buhayrah, Al Minufiyah, Kafr ash Shaykh and Dumyat—urban growth reflects dense multi-nodal agro-commercial towns spaced 15 to 30 km apart along canals and rail lines [@Taiema2023Urban; @Hareedy2009Rural]. Table 3 profiles the top 25 Delta centres. Al-Mansurah (650,3k), Al-Mahallah al-Kubra (631,6k), Tanta (614,7k) and Az-Zaqaziq (473,6k) lead a dense second tier alongside Damanhur (338,9k), Dumyat (321,7k), Shibin al-Kawm (285,9k), Kafr ash-Shaykh (203,8k), Bilbays (203,8k) and the coastal fishing and port town of Idku (188,7k). Rural land conversion and coastal aquifer salinisation press directly upon these Delta municipalities [@Elnaggar2013Spatial; @Mostafa2026Coupling; @Keshta2022Loss; @Selim2021Impact].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Governorate</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1952AD</th><th class="crd-th">2006AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,04, 31,38</td><td class="crd-td">117,5k</td><td class="crd-td">439,3k</td><td class="crd-td">650,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">Al Gharbiyah</td><td class="crd-td">30,97, 31,17</td><td class="crd-td">136,5k</td><td class="crd-td">443k</td><td class="crd-td">631,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">Al Gharbiyah</td><td class="crd-td">30,79, 31</td><td class="crd-td">156k</td><td class="crd-td">422,9k</td><td class="crd-td">614,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Āshir min Ramaḍān</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,3, 31,74</td><td class="crd-td">-</td><td class="crd-td">125,9k</td><td class="crd-td">500k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Az-Zaqāzīq</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,59, 31,5</td><td class="crd-td">94,5k</td><td class="crd-td">302,8k</td><td class="crd-td">473,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Talkha</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,06, 31,38</td><td class="crd-td">-</td><td class="crd-td">78,3k</td><td class="crd-td">413,6k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,57, 31,5</td><td class="crd-td">-</td><td class="crd-td">302,8k</td><td class="crd-td">383,7k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">Al Buhayrah</td><td class="crd-td">31,03, 30,47</td><td class="crd-td">96,5k</td><td class="crd-td">244k</td><td class="crd-td">338,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dumyāṭ</strong></td><td class="crd-td">Dumyat</td><td class="crd-td">31,43, 31,78</td><td class="crd-td">59,8k</td><td class="crd-td">206,7k</td><td class="crd-td">321,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">Dumyat</td><td class="crd-td">31,42, 31,82</td><td class="crd-td">-</td><td class="crd-td">206,7k</td><td class="crd-td">305,9k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Shibīn al-Kawm</strong></td><td class="crd-td">Al Minufiyah</td><td class="crd-td">30,55, 31,01</td><td class="crd-td">47,2k</td><td class="crd-td">177,1k</td><td class="crd-td">285,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kafr ash-Shaykh</strong></td><td class="crd-td">Kafr ash Shaykh</td><td class="crd-td">31,11, 30,94</td><td class="crd-td">28,9k</td><td class="crd-td">147,4k</td><td class="crd-td">203,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,42, 31,56</td><td class="crd-td">26,5k</td><td class="crd-td">137,2k</td><td class="crd-td">203,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kafr ad-Dawwār</strong></td><td class="crd-td">Al Buhayrah</td><td class="crd-td">31,13, 30,13</td><td class="crd-td">35,2k</td><td class="crd-td">114k</td><td class="crd-td">196,2k (1986AD)</td></tr>
<tr><td class="crd-td"><strong>Idkū</strong></td><td class="crd-td">Al Buhayrah</td><td class="crd-td">31,31, 30,3</td><td class="crd-td">22,9k</td><td class="crd-td">97,2k</td><td class="crd-td">188,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abū Kabīr</strong></td><td class="crd-td">Ash Sharqiyah</td><td class="crd-td">30,73, 31,67</td><td class="crd-td">20,5k</td><td class="crd-td">103,2k</td><td class="crd-td">169,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Maṭariyah</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,18, 32,03</td><td class="crd-td">30,9k</td><td class="crd-td">100,6k</td><td class="crd-td">169,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mīt Ghamr</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">30,72, 31,26</td><td class="crd-td">34,5k</td><td class="crd-td">116,6k</td><td class="crd-td">160,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Disūq</strong></td><td class="crd-td">Kafr ash Shaykh</td><td class="crd-td">31,13, 30,65</td><td class="crd-td">31,1k</td><td class="crd-td">106,8k</td><td class="crd-td">156,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kafr el-Sheikh</strong></td><td class="crd-td">Kafr ash Shaykh</td><td class="crd-td">31,1, 30,95</td><td class="crd-td">-</td><td class="crd-td">147,4k</td><td class="crd-td">147,4k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Bilqās</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,21, 31,36</td><td class="crd-td">26,2k</td><td class="crd-td">95,2k</td><td class="crd-td">143,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Minūf</strong></td><td class="crd-td">Al Minufiyah</td><td class="crd-td">30,47, 30,93</td><td class="crd-td">34,1k</td><td class="crd-td">89,3k</td><td class="crd-td">134,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rashīd</strong></td><td class="crd-td">Al Buhayrah</td><td class="crd-td">31,4, 30,42</td><td class="crd-td">30,5k</td><td class="crd-td">68,9k</td><td class="crd-td">134k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manzilah</strong></td><td class="crd-td">Ad Daqahliyah</td><td class="crd-td">31,16, 31,94</td><td class="crd-td">24,4k</td><td class="crd-td">75k</td><td class="crd-td">133,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ashmūn</strong></td><td class="crd-td">Al Minufiyah</td><td class="crd-td">30,3, 30,98</td><td class="crd-td">26,6k</td><td class="crd-td">83,9k</td><td class="crd-td">132,8k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top 25 catalogued urban settlements across the seven central and northern Nile Delta governorates (1952AD-2025AD).</figcaption>
</figure>

## Upper Egypt, Fayyum and the Frontier Governorates

South of Giza and across the eastern and western deserts, urban settlements line the narrow Nile valley, the Fayyum basin, Mediterranean borderlands, Red Sea bays and Sinai wadis. Table 4 compiles the 25 largest centres across Upper Egypt and the five frontier governorates. Asyut (578k) and Al-Fayyum (547k) serve as the twin demographic anchors of Middle and Upper Egypt, followed by Aswan (413,3k), Al-Minya (306,5k), Bani Suwayf (302,5k), Luxor (Al-Uqsur, 293k), Sawhaj (286,3k), Qina (272k) and Mallawi (229,8k). Along the desert margins, Al-Ghurdaqah (220,3k), Al-'Arish (210,2k) and Marsa Matruh (198,8k) grew rapidly through tourism, border trade and coastal administration, while oasis hubs like Al-Kharijah (90k) and Al-Bawiti (16,4k) and distant southern outposts like Ash-Shalatin (13,2k) reflect sparse frontier settlement [@Zayyan2017Role; @Hawash2022Detection].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Governorate</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1952AD</th><th class="crd-th">2006AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">Asyut</td><td class="crd-td">27,18, 31,18</td><td class="crd-td">103k</td><td class="crd-td">389,3k</td><td class="crd-td">578k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">Al Fayyum</td><td class="crd-td">29,31, 30,84</td><td class="crd-td">83,2k</td><td class="crd-td">315,9k</td><td class="crd-td">547k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aswān</strong></td><td class="crd-td">Aswan</td><td class="crd-td">24,09, 32,9</td><td class="crd-td">30,4k</td><td class="crd-td">266k</td><td class="crd-td">413,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā</strong></td><td class="crd-td">Al Minya</td><td class="crd-td">28,09, 30,76</td><td class="crd-td">79,4k</td><td class="crd-td">236k</td><td class="crd-td">306,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf</strong></td><td class="crd-td">Bani Suwayf</td><td class="crd-td">29,07, 31,1</td><td class="crd-td">64,2k</td><td class="crd-td">193k</td><td class="crd-td">302,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Beni Suef</strong></td><td class="crd-td">Bani Suwayf</td><td class="crd-td">29,07, 31,08</td><td class="crd-td">-</td><td class="crd-td">193k</td><td class="crd-td">294,1k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Uqṣur</strong></td><td class="crd-td">Qina</td><td class="crd-td">25,7, 32,64</td><td class="crd-td">30,8k</td><td class="crd-td">167,6k</td><td class="crd-td">293k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sawhāj</strong></td><td class="crd-td">Suhaj</td><td class="crd-td">26,56, 31,69</td><td class="crd-td">49,2k</td><td class="crd-td">190,1k</td><td class="crd-td">286,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qinā</strong></td><td class="crd-td">Qina</td><td class="crd-td">26,16, 32,73</td><td class="crd-td">47,8k</td><td class="crd-td">201,2k</td><td class="crd-td">272k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mallawī</strong></td><td class="crd-td">Al Minya</td><td class="crd-td">27,73, 30,84</td><td class="crd-td">40,1k</td><td class="crd-td">139,9k</td><td class="crd-td">229,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ghurdaqah</strong></td><td class="crd-td">Al Bahr al Ahmar</td><td class="crd-td">27,26, 33,81</td><td class="crd-td">6,2k</td><td class="crd-td">160,9k</td><td class="crd-td">220,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Arīsh</strong></td><td class="crd-td">Shamal Sina'</td><td class="crd-td">31,13, 33,8</td><td class="crd-td">16,8k</td><td class="crd-td">137,9k</td><td class="crd-td">210,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Marsā Maṭrūḥ</strong></td><td class="crd-td">Matruh</td><td class="crd-td">31,35, 27,24</td><td class="crd-td">8,1k</td><td class="crd-td">108,8k</td><td class="crd-td">198,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>New Borg El Arab</strong></td><td class="crd-td">Matruh</td><td class="crd-td">30,88, 29,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">170k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Akhmīm</strong></td><td class="crd-td">Suhaj</td><td class="crd-td">26,56, 31,75</td><td class="crd-td">37,4k</td><td class="crd-td">101,5k</td><td class="crd-td">162,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jirjā</strong></td><td class="crd-td">Suhaj</td><td class="crd-td">26,34, 31,89</td><td class="crd-td">36,8k</td><td class="crd-td">102,6k</td><td class="crd-td">162,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Samālūṭ</strong></td><td class="crd-td">Al Minya</td><td class="crd-td">28,31, 30,71</td><td class="crd-td">22,7k</td><td class="crd-td">91,5k</td><td class="crd-td">153,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nāṣir Būsh</strong></td><td class="crd-td">Bani Suwayf</td><td class="crd-td">29,15, 31,13</td><td class="crd-td">-</td><td class="crd-td">85,3k</td><td class="crd-td">151,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭahṭā</strong></td><td class="crd-td">Suhaj</td><td class="crd-td">26,77, 31,5</td><td class="crd-td">40,2k</td><td class="crd-td">85,5k</td><td class="crd-td">144,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sinnūris</strong></td><td class="crd-td">Al Fayyum</td><td class="crd-td">29,41, 30,87</td><td class="crd-td">28,1k</td><td class="crd-td">82,1k</td><td class="crd-td">140,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Edfu</strong></td><td class="crd-td">Aswan</td><td class="crd-td">24,98, 32,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">133,8k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Manfalūṭ</strong></td><td class="crd-td">Asyut</td><td class="crd-td">27,31, 30,97</td><td class="crd-td">26,5k</td><td class="crd-td">82,6k</td><td class="crd-td">128,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maghāghah</strong></td><td class="crd-td">Al Minya</td><td class="crd-td">28,65, 30,84</td><td class="crd-td">26,9k</td><td class="crd-td">75,7k</td><td class="crd-td">127,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kawm Umbū</strong></td><td class="crd-td">Aswan</td><td class="crd-td">24,48, 32,95</td><td class="crd-td">22,8k</td><td class="crd-td">71,6k</td><td class="crd-td">126,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fashn</strong></td><td class="crd-td">Bani Suwayf</td><td class="crd-td">28,82, 30,9</td><td class="crd-td">27,4k</td><td class="crd-td">65,6k</td><td class="crd-td">125,1k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 catalogued settlements across Upper Egypt, the Fayyum Oasis and Egypt's five frontier governorates (1952AD-2025AD).</figcaption>
</figure>

# Limitations

Three methodological limitations affect interpretation of the settlement gazetteer. First, Egyptian municipal definitions classify entire districts (*markaz* seats) as urban while leaving large contiguous agro-villages of 20k to 50k residents classified administratively as rural *qarya* units [@Hareedy2009Rural]. As a result, official town counts understate de facto urbanised density across the central Nile Delta and Middle Egypt. Second, new desert cities split across multiple *qisms*—such as New Cairo and 10th of Ramadan—or falling within the 2 km consolidation buffer of Greater Cairo are represented either through parent metropolitan aggregates or as discrete satellite cores, meaning their internal suburban shares must be cross-referenced against the 296-unit ADM2 polygon layer [@Runfola2020GeoBoundaries; @Gamal2025Critical]. Third, post-2017AD settlement figures rely on governorate and municipal civil-registration projections rather than a completed decennial field count, leaving recent growth differentials between informal Delta fringes and state-planned desert extensions subject to revision after the next national census.

# Conclusion

Across 363 catalogued towns, urban districts and desert cities spanning 27 governorates, this gazetteer documents the post-1952 transformation of Egypt's urban hierarchy from historic riverine municipalities to a dense metropolitan and *markaz* lattice. Anchored by primary CAPMAS censuses and geoBoundaries administrative matching, the corpus reveals a steep, primate-leaning rank-size structure ($\alpha = 1{,}452$, $R^2 = 0{,}79$) where Greater Cairo, Giza and Alexandria dominate the upper tier while dense Delta *markaz* towns, Upper Egyptian provincial capitals and new desert cities fill out the mid-tier network. Paired with the 296-unit ADM2 pycnophylactic surfaces, these 363 settlement records supply the empirical urban backbone for Egypt after 1952AD.

# Appendix

## Governorate Coverage and Excluded Source-Ledger Candidates

Table 5 summarises catalogued settlement counts, median and maximum peak sizes, and leading urban centres across all 27 Egyptian governorates, followed by Table 6 presenting a representative sample (first 30 of 253) of excluded duplicate aliases and subordinate candidates consolidated in the regional source ledger.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Governorate</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Centre (2025AD Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al Qahirah</strong></td><td class="crd-td">34</td><td class="crd-td">260k</td><td class="crd-td">Cairo (10,25M)</td></tr>
<tr><td class="crd-td"><strong>Al Minya</strong></td><td class="crd-td">33</td><td class="crd-td">17,1k</td><td class="crd-td">Al-Minyā (306,5k)</td></tr>
<tr><td class="crd-td"><strong>Al Jizah</strong></td><td class="crd-td">27</td><td class="crd-td">104,5k</td><td class="crd-td">Giza (5,6M)</td></tr>
<tr><td class="crd-td"><strong>Qina</strong></td><td class="crd-td">24</td><td class="crd-td">31,2k</td><td class="crd-td">Al-Uqṣur (293k)</td></tr>
<tr><td class="crd-td"><strong>Ash Sharqiyah</strong></td><td class="crd-td">23</td><td class="crd-td">77,8k</td><td class="crd-td">Al-'Āshir min Ramaḍān (500k)</td></tr>
<tr><td class="crd-td"><strong>Ad Daqahliyah</strong></td><td class="crd-td">21</td><td class="crd-td">79,5k</td><td class="crd-td">Al-Manṣūrah (650,3k)</td></tr>
<tr><td class="crd-td"><strong>Bani Suwayf</strong></td><td class="crd-td">19</td><td class="crd-td">21,5k</td><td class="crd-td">Banī Suwayf (302,5k)</td></tr>
<tr><td class="crd-td"><strong>Al Buhayrah</strong></td><td class="crd-td">17</td><td class="crd-td">71,4k</td><td class="crd-td">Damanhūr (338,9k)</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">17</td><td class="crd-td">57,5k</td><td class="crd-td">Asyūṭ (578k)</td></tr>
<tr><td class="crd-td"><strong>Al Wadi at Jadid</strong></td><td class="crd-td">15</td><td class="crd-td">3,5k</td><td class="crd-td">Al-Khārijah (90k)</td></tr>
<tr><td class="crd-td"><strong>Al Qalyubiyah</strong></td><td class="crd-td">14</td><td class="crd-td">87,4k</td><td class="crd-td">Shubrā al-Khaymah (1,31M)</td></tr>
<tr><td class="crd-td"><strong>Matruh</strong></td><td class="crd-td">14</td><td class="crd-td">22,9k</td><td class="crd-td">Marsā Maṭrūḥ (198,8k)</td></tr>
<tr><td class="crd-td"><strong>Kafr ash Shaykh</strong></td><td class="crd-td">13</td><td class="crd-td">61,2k</td><td class="crd-td">Kafr ash-Shaykh (203,8k)</td></tr>
<tr><td class="crd-td"><strong>Suhaj</strong></td><td class="crd-td">12</td><td class="crd-td">89,9k</td><td class="crd-td">Sawhāj (286,3k)</td></tr>
<tr><td class="crd-td"><strong>Al Gharbiyah</strong></td><td class="crd-td">11</td><td class="crd-td">80k</td><td class="crd-td">Al-Maḥallah al-Kubrā (631,6k)</td></tr>
<tr><td class="crd-td"><strong>Dumyat</strong></td><td class="crd-td">10</td><td class="crd-td">39,2k</td><td class="crd-td">Dumyāṭ (321,7k)</td></tr>
<tr><td class="crd-td"><strong>Al Fayyum</strong></td><td class="crd-td">9</td><td class="crd-td">77k</td><td class="crd-td">Al-Fayyūm (547k)</td></tr>
<tr><td class="crd-td"><strong>Al Minufiyah</strong></td><td class="crd-td">9</td><td class="crd-td">81,2k</td><td class="crd-td">Shibīn al-Kawm (285,9k)</td></tr>
<tr><td class="crd-td"><strong>Al Bahr al Ahmar</strong></td><td class="crd-td">7</td><td class="crd-td">47,7k</td><td class="crd-td">Al-Ghurdaqah (220,3k)</td></tr>
<tr><td class="crd-td"><strong>Al Ismailiyah</strong></td><td class="crd-td">7</td><td class="crd-td">37,8k</td><td class="crd-td">Al-Ismā'īliyah (463,2k)</td></tr>
<tr><td class="crd-td"><strong>Aswan</strong></td><td class="crd-td">7</td><td class="crd-td">86,5k</td><td class="crd-td">Aswān (413,3k)</td></tr>
<tr><td class="crd-td"><strong>Janub Sina'</strong></td><td class="crd-td">7</td><td class="crd-td">5,6k</td><td class="crd-td">Sharm el-Sheikh (73k)</td></tr>
<tr><td class="crd-td"><strong>Shamal Sina'</strong></td><td class="crd-td">7</td><td class="crd-td">27,4k</td><td class="crd-td">Al-'Arīsh (210,2k)</td></tr>
<tr><td class="crd-td"><strong>Al Iskandariyah</strong></td><td class="crd-td">2</td><td class="crd-td">2,78M</td><td class="crd-td">Al-Iskandariyah (5,51M)</td></tr>
<tr><td class="crd-td"><strong>As Suways</strong></td><td class="crd-td">2</td><td class="crd-td">740,9k</td><td class="crd-td">As-Suways (740,9k)</td></tr>
<tr><td class="crd-td"><strong>Bur Said</strong></td><td class="crd-td">2</td><td class="crd-td">447,9k</td><td class="crd-td">Būr Sa'īd (814,2k)</td></tr>
<tr><td class="crd-td"><strong>Luxor</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued urban settlement counts, median peak populations and leading centres across all 27 Egyptian governorates (1952AD-2025AD).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged MENA exonym/transliteration twin into primary canonical settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged MENA exonym/transliteration twin into primary canonical settlement.</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged MENA exonym/transliteration twin into primary canonical settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Shobra Elkhema</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Port Said</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Suez</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Sinnuris</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>East Nasr City</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Dairut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>El Mataria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Mansoura</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tanta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>El Mahalla El Kubra</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Manfalut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Shibin el-Qanater</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Faiyum</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>10th of Ramadan City</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Esna</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Egypt settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Representative sample (first 30 of 253) of excluded duplicate aliases and subordinate municipal candidates in the Egypt source ledger.</figcaption>
</figure>

# Sources

::: {#refs}
:::
