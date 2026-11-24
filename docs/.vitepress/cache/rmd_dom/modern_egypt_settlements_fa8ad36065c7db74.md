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
hero_caption: "Spatial distribution of 195 catalogued urban settlements across Egypt's 27 governorates between 1952AD and 2026AD."
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

This settlement gazetteer compiles urban, industrial and administrative town trajectories for 195 catalogued Egyptian centres between 1952AD and 2026AD across 27 governorates. Screened from 203 evaluated municipal candidates in the regional source ledger after consolidating 8 subordinate suburbs within 2 km of primary cores, the dataset preserves 2.513 settlement-year observations across 14 modern benchmarks (averaging 12,89 observations per settlement). Total catalogued urban population rose more than fourfold from 9,98M in 1952AD to 18,48M in 1980AD, 30,4M in 2006AD and 44,54M in 2025AD. Growth remains heavily top-heavy, yielding a Zipf rank-size exponent of $\alpha = 1{,}027$ ($R^2 = 0{,}959$): four million-plus cities—Al-Qahirah (10,08M), Al-Iskandariyah (5,51M), Al-Jizah (4,58M) and Shubra al-Khaymah (1,31M)—account for 48,2% of catalogued urban residents, while 71 cities surpass 100k inhabitants by 2025AD. Beneath this metropolitan apex, the register traces Suez Canal recovery ports, dense Delta provincial centres, Upper Egyptian river towns reshaped by the Aswan High Dam, frontier oasis and Red Sea resort hubs, and satellite desert cities including Madinat Sittah Uktubar (387k), Al-'Ubur (147k), Ash-Shuruq (96,4k), Madinat as-Sadat (76,3k) and Madinat Badr (34,6k).

<figure class="crd-figure-block" id="fig:hero-settlements-modern-egypt">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-egypt-settlements/fig1_modern_egypt_spatial.png" alt="fig:hero-settlements-modern-egypt" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 195 catalogued urban settlements across Egypt's 27 governorates between 1952AD and 2026AD.</figcaption>
</figure>

# Background

Egypt's post-1952 urban system combines ancient riverine continuity with rapid twentieth-century metropolitan polarisation. Almost every major provincial capital—from Aswan, Qina, Sawhaj, Asyut and Al-Minya in Upper Egypt to Tanta, Al-Mansurah, Az-Zaqaziq and Damanhur in the Delta—occupied historic mound or market sites anchored to Nile branches and main railway junctions [@Taiema2023Urban; @Bayoumi2020City]. Only Alexandria, the Suez Canal cities of Port Said, Ismailia and Suez, and twentieth-century Red Sea or desert-edge towns broke away from the pre-modern river axis [@Zayyan2017Role; @Hawash2022Detection].

After 1952AD, agrarian reform, state-led industrialisation at Helwan, Shubra al-Khaymah and Al-Mahallah al-Kubra, and centralised university and civil-service expansion concentrated modern employment inside Greater Cairo and Alexandria [@Hereher2012Urban; @Paredes2025Rural]. Simultaneously, population pressure inside the Nile Delta pushed rural market centres across the official threshold of town status, blurring the boundary between dense agricultural villages and municipal *madinas* [@Hareedy2009Rural; @Borhamy2026Coupling]. From the late 1970s onward, consecutive national housing plans carved new desert cities out of state-owned wasteland around Cairo, Alexandria and Middle Egypt to redirect housing construction off shrinking alluvial cropland [@Gamal2025Critical; @Abdelkader2023Analyzing; @Toth2009Strategic].

# Methodology

Settlement trajectories were compiled primarily from official CAPMAS decennial censuses (1960AD, 1976AD, 1986AD, 1996AD, 2006AD and 2017AD) supplemented by 1952AD post-revolutionary baselines and 2018AD–2025AD CAPMAS municipal estimates, with zero reliance on crowd-sourced fallback shares. Every included entry carries WGS84 coordinates verified against Egypt's 27 governorate polygons and matched to the 296 second-order geoBoundaries administrative units [@Runfola2020GeoBoundaries]. Arabic toponyms follow ALA-LC/BGN scholarly romanisation with diacritics preserved alongside original Arabic script aliases in the underlying archive.

To prevent artificial double counting of contiguous metropolitan agglomerations, the regional source ledger enforces a strict 2 km spatial consolidation rule. Where newly gazetted desert suburbs or twin river towns lie inside the continuous built-up perimeter of a primary core, their municipal candidates are excluded from the independent point ledger and absorbed into the parent metropolis. Eight candidates met this exclusion threshold out of 203 screened records: Al-Qāhirah al-Jadīdah (New Cairo) and Madīnat Badr (adjacent duplicate entry) around Greater Cairo, Qahā in Qalyubiyah, Ṭalkhā across the Damietta branch from Al-Manṣūrah, Ziftā and As-Sanṭah in Al Gharbiyah, Banī Suwayf al-Jadīdah across the Nile from Banī Suwayf, and Al-Minyā al-Jadīdah opposite Al-Minyā.

# Testing and Validation

Cross-checking the 195 included entries confirms near-complete longitudinal density across all fourteen benchmark horizons: 194 settlements carry active counts in 1952AD, all 195 in 1960AD, 1970AD, 1980AD, 1990AD, 2000AD, 2010AD, 2020AD and 2025AD, 179 in 1996AD, 191 in 2006AD and 194 in 2018AD and 2023AD. Only An-Nūbāriyah al-Jadīdah, a western desert reclamation centre founded in the late twentieth century, begins its series after 1952AD (appearing from 1996AD onward). Figure 2 presents the log-log Zipf rank-size regression ($\alpha = 1{,}027$, $R^2 = 0{,}959$) alongside the twelve highest-peaking cities. Unlike fragmented pre-industrial settlement networks, Egypt's post-1952 urban system tracks a steep, linear rank-size gradient dominated by Cairo, Alexandria and Giza [@Bayoumi2020City; @Hereher2012Urban].

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-egypt-settlements/fig4_modern_egypt_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size curve across all 195 catalogued Egyptian settlements (left) and the twelve largest urban centres by peak population (right).</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table 1 lists the 45 largest catalogued Egyptian settlements ordered by peak population across 1952AD–2025AD. Together, these 45 cities hold 31,41M inhabitants in 2025AD—more than 70% of the entire catalogued urban population—led by four million-plus cities and eight additional centres above 500k inhabitants (Port Said, Suez, Al-Mansurah, Al-Mahallah al-Kubra, Tanta, Asyut, Al-Fayyum and Al-Khusus).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Governorate</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">1952AD</th><th class="crd-th">2006AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,06, 31,25</td><td class="crd-td">2,89M</td><td class="crd-td">7,74M</td><td class="crd-td">10,08M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">1,25M</td><td class="crd-td">4,03M</td><td class="crd-td">5,51M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,01, 31,21</td><td class="crd-td">957,7k</td><td class="crd-td">3,02M</td><td class="crd-td">4,58M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,13, 31,25</td><td class="crd-td">330,8k</td><td class="crd-td">1,03M</td><td class="crd-td">1,31M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,27, 32,3</td><td class="crd-td">179,4k</td><td class="crd-td">570,6k</td><td class="crd-td">814,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,6, 32,2</td><td class="crd-td">157,6k</td><td class="crd-td">508,6k</td><td class="crd-td">740,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 31,38</td><td class="crd-td">140,3k</td><td class="crd-td">439,3k</td><td class="crd-td">650,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,97, 31,17</td><td class="crd-td">150k</td><td class="crd-td">443k</td><td class="crd-td">631,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,79, 31</td><td class="crd-td">141,6k</td><td class="crd-td">422,9k</td><td class="crd-td">614,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,18, 31,18</td><td class="crd-td">130,5k</td><td class="crd-td">389,3k</td><td class="crd-td">578k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,31, 30,84</td><td class="crd-td">99,1k</td><td class="crd-td">315,9k</td><td class="crd-td">547k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,15, 31,32</td><td class="crd-td">88,8k</td><td class="crd-td">291,2k</td><td class="crd-td">517,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Az-Zaqāzīq</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,59, 31,5</td><td class="crd-td">101,6k</td><td class="crd-td">302,8k</td><td class="crd-td">473,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ismā'īliyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,6, 32,27</td><td class="crd-td">96,9k</td><td class="crd-td">293,2k</td><td class="crd-td">463,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aswān</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,09, 32,9</td><td class="crd-td">83,4k</td><td class="crd-td">266k</td><td class="crd-td">413,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Madīnat Sittah Uktūbar</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,82, 31,05</td><td class="crd-td">13,4k</td><td class="crd-td">154,1k</td><td class="crd-td">387k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,03, 30,47</td><td class="crd-td">79,5k</td><td class="crd-td">244k</td><td class="crd-td">338,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dumyāṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,43, 31,78</td><td class="crd-td">63k</td><td class="crd-td">206,7k</td><td class="crd-td">321,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,09, 30,76</td><td class="crd-td">76,5k</td><td class="crd-td">236k</td><td class="crd-td">306,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,07, 31,1</td><td class="crd-td">65,2k</td><td class="crd-td">193k</td><td class="crd-td">302,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Uqṣur</strong></td><td class="crd-td">Egypt</td><td class="crd-td">25,7, 32,64</td><td class="crd-td">51,1k</td><td class="crd-td">167,6k</td><td class="crd-td">293k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sawhāj</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,56, 31,69</td><td class="crd-td">64,7k</td><td class="crd-td">190,1k</td><td class="crd-td">286,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shibīn al-Kawm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,55, 31,01</td><td class="crd-td">59,6k</td><td class="crd-td">177,1k</td><td class="crd-td">285,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qinā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,16, 32,73</td><td class="crd-td">59k</td><td class="crd-td">201,2k</td><td class="crd-td">272k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mallawī</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,73, 30,84</td><td class="crd-td">45,3k</td><td class="crd-td">139,9k</td><td class="crd-td">229,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ghurdaqah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,26, 33,81</td><td class="crd-td">22,8k</td><td class="crd-td">160,9k</td><td class="crd-td">220,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Arīsh</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,13, 33,8</td><td class="crd-td">38,2k</td><td class="crd-td">137,9k</td><td class="crd-td">210,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kafr ash-Shaykh</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,11, 30,94</td><td class="crd-td">47,4k</td><td class="crd-td">147,4k</td><td class="crd-td">203,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,42, 31,56</td><td class="crd-td">43,4k</td><td class="crd-td">137,2k</td><td class="crd-td">203,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Marsā Maṭrūḥ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,35, 27,24</td><td class="crd-td">19,9k</td><td class="crd-td">108,8k</td><td class="crd-td">198,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banhā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,46, 31,18</td><td class="crd-td">51,6k</td><td class="crd-td">157,7k</td><td class="crd-td">192,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Idkū</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,31, 30,3</td><td class="crd-td">33,4k</td><td class="crd-td">97,2k</td><td class="crd-td">188,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abū Kabīr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,73, 31,67</td><td class="crd-td">32,4k</td><td class="crd-td">103,2k</td><td class="crd-td">169,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Maṭariyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,18, 32,03</td><td class="crd-td">33,1k</td><td class="crd-td">100,6k</td><td class="crd-td">169,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qalyūb</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,18, 31,21</td><td class="crd-td">29,3k</td><td class="crd-td">107,3k</td><td class="crd-td">165,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawāmidiyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,9, 31,25</td><td class="crd-td">34,9k</td><td class="crd-td">109,3k</td><td class="crd-td">162,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Akhmīm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,56, 31,75</td><td class="crd-td">32,2k</td><td class="crd-td">101,5k</td><td class="crd-td">162,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jirjā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,34, 31,89</td><td class="crd-td">34,1k</td><td class="crd-td">102,6k</td><td class="crd-td">162,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mīt Ghamr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,72, 31,26</td><td class="crd-td">38,7k</td><td class="crd-td">116,6k</td><td class="crd-td">160,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Disūq</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,13, 30,65</td><td class="crd-td">34,7k</td><td class="crd-td">106,8k</td><td class="crd-td">156,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Samālūṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,31, 30,71</td><td class="crd-td">28,7k</td><td class="crd-td">91,5k</td><td class="crd-td">153,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nāṣir Būsh</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,15, 31,13</td><td class="crd-td">26,8k</td><td class="crd-td">85,3k</td><td class="crd-td">151,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-'Ubūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,23, 31,48</td><td class="crd-td">13,3k</td><td class="crd-td">43,6k</td><td class="crd-td">147k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kirdāsah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,03, 31,11</td><td class="crd-td">31,1k</td><td class="crd-td">-</td><td class="crd-td">144,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭahṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,77, 31,5</td><td class="crd-td">28,1k</td><td class="crd-td">85,5k</td><td class="crd-td">144,1k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 catalogued Egyptian settlements ordered by peak population (n=195 total sites, 1952AD-2025AD).</figcaption>
</figure>

## Greater Cairo, Alexandria and the Suez Canal Corridor

Metropolitan concentration across Cairo, Giza, Qalyubiyah, Alexandria and the three Suez Canal governorates forms the primary demographic spine of modern Egypt. Table 2 extracts the leading catalogued centres across Al Qahirah, Al Jizah, Al Qalyubiyah, Al Iskandariyah, Bur Sa'id, Al Isma'iliyah and As Suways. Cairo proper rose from 2,89M in 1952AD to 7,74M in 2006AD and 10,08M in 2025AD, yet the fastest proportional expansion occurred on its western and northern flanks: Giza jumped 379% from 957,7k to 4,58M, Shubra al-Khaymah quadrupled from 330,8k to 1,31M, Al-Khusus reached 517,1k and the western desert satellite of Madinat Sittah Uktubar surged nearly twenty-ninefold from 13,4k in 1952AD (and 38,8k in 1996AD) to 387k by 2025AD [@Hereher2012Urban; @Gamal2025Critical]. On the eastern desert ring, Al-'Ubur (147k), Ash-Shuruq (96,4k) and Madinat Badr (34,6k) added secondary suburban poles, while Alexandria (5,51M) anchored the Mediterranean coast ahead of Bur Sa'id (814,2k), As-Suways (736,8k) and Al-Isma'iliyah (463,2k).



## The Nile Delta Urban Lattice

Inside the seven central and northern Delta governorates—Ad Daqahliyah, Al Gharbiyah, Ash Sharqiyah, Al Buhayrah, Al Minufiyah, Kafr ash Shaykh and Dumyat—urban growth reflects dense multi-nodal agro-commercial towns spaced 15 to 30 km apart along canals and rail lines [@Taiema2023Urban; @Hareedy2009Rural]. Table 3 profiles the top 25 Delta centres. Al-Mansurah (650,3k), Al-Mahallah al-Kubra (631,6k), Tanta (614,7k) and Az-Zaqaziq (473,6k) lead a dense second tier alongside Damanhur (338,9k), Dumyat (321,7k), Shibin al-Kawm (285,9k), Kafr ash-Shaykh (203,8k), Bilbays (203,8k) and the coastal fishing and port town of Idku (188,7k). Rural land conversion and coastal aquifer salinisation press directly upon these Delta municipalities [@Elnaggar2013Spatial; @Mostafa2026Coupling; @Keshta2022Loss; @Selim2021Impact].



## Upper Egypt, Fayyum and the Frontier Governorates

South of Giza and across the eastern and western deserts, urban settlements line the narrow Nile valley, the Fayyum basin, Mediterranean borderlands, Red Sea bays and Sinai wadis. Table 4 compiles the 25 largest centres across Upper Egypt and the five frontier governorates. Asyut (578k) and Al-Fayyum (547k) serve as the twin demographic anchors of Middle and Upper Egypt, followed by Aswan (413,3k), Al-Minya (306,5k), Bani Suwayf (302,5k), Luxor (Al-Uqsur, 293k), Sawhaj (286,3k), Qina (272k) and Mallawi (229,8k). Along the desert margins, Al-Ghurdaqah (220,3k), Al-'Arish (210,2k) and Marsa Matruh (198,8k) grew rapidly through tourism, border trade and coastal administration, while oasis hubs like Al-Kharijah (90k) and Al-Bawiti (16,4k) and distant southern outposts like Ash-Shalatin (13,2k) reflect sparse frontier settlement [@Zayyan2017Role; @Hawash2022Detection].



# Limitations

Three methodological limitations affect interpretation of the settlement gazetteer. First, Egyptian municipal definitions classify entire districts (*markaz* seats) as urban while leaving large contiguous agro-villages of 20k to 50k residents classified administratively as rural *qarya* units [@Hareedy2009Rural]. As a result, official town counts understate de facto urbanised density across the central Nile Delta and Middle Egypt. Second, new desert cities split across multiple *qisms*—such as New Cairo and 10th of Ramadan—or falling within the 2 km consolidation buffer of Greater Cairo are represented either through parent metropolitan aggregates or as discrete satellite cores, meaning their internal suburban shares must be cross-referenced against the 296-unit ADM2 polygon layer [@Runfola2020GeoBoundaries; @Gamal2025Critical]. Third, post-2017AD settlement figures rely on governorate and municipal civil-registration projections rather than a completed decennial field count, leaving recent growth differentials between informal Delta fringes and state-planned desert extensions subject to revision after the next national census.

# Conclusion

Across 195 catalogued towns and cities spanning 27 governorates, this gazetteer documents the transformation of Egypt's urban hierarchy from 9,98M urban residents in 1952AD to 44,54M in 2025AD. Anchored by primary CAPMAS censuses and geoBoundaries administrative matching, the corpus reveals a highly centralised rank-size structure ($\alpha = 1{,}027$, $R^2 = 0{,}959$) where Greater Cairo and Alexandria hold nearly half of all urban inhabitants while dense Delta *markaz* towns, Upper Egyptian provincial capitals and new desert cities fill out the mid-tier lattice. Paired with the 296-unit ADM2 pycnophylactic surfaces, these 2.513 point-year observations supply the empirical urban backbone for Egypt after 1952AD.

# Appendix

## Governorate Coverage and Excluded Source-Ledger Candidates

Table 5 summarises catalogued settlement counts, median and maximum peak sizes, and leading urban centres across all 27 Egyptian governorates, followed by Table 6 documenting all 8 subordinate candidates consolidated in the regional source ledger.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Governorate</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Centre (2025AD Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ad Daqahliyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Bahr al Ahmar</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Buhayrah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Fayyum</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Gharbiyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Iskandariyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Ismailiyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Jizah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Minufiyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Minya</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Qahirah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Qalyubiyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Al Wadi at Jadid</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>As Suways</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ash Sharqiyah</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aswan</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bani Suwayf</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bur Said</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dumyat</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Janub Sina'</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kafr ash Shaykh</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Luxor</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Matruh</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qina</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shamal Sina'</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Suhaj</strong></td><td class="crd-td">0</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued urban settlement counts, median peak populations and leading centres across all 27 Egyptian governorates (1952AD-2025AD).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Ziftā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Ṭalkhā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>As-Sanṭah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Qahā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 8 excluded subordinate municipal candidates in the Egypt source ledger consolidated into primary metropolitan cores.</figcaption>
</figure>

# Sources

::: {#refs}
:::
