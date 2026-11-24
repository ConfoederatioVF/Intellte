---
title: "Studies on Population"
subtitle: "HANDBOOK: North Africa, the Near East, Iran, Afghanistan, Cyprus and Transcaucasia"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_handbook_areal_coverage_hero.png"
hero_caption: "Three-regime territorial partition of HANDBOOK across North Africa, the Near East, Anatolia, Cyprus, Transcaucasia, Iran, Afghanistan and the Arabian Peninsula from 10000BC to 2026AD."
hero_label: "fig:hero-handbook"
bibliography: studies_on_population.bib
csl: _shared/template/crd-mla-numeric.csl
link-citations: true
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
    latex_engine: xelatex
    template: _shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



# Abstract

Reconstructing long-run human settlement across North Africa, the Near East, Anatolia, Cyprus, Transcaucasia, Iran, Afghanistan and the Arabian Peninsula requires harmonising twelve millennia of uneven archaeological survey archives, classical epigraphic and papyrological censuses, Islamic geographical itineraries, Ottoman and imperial fiscal registers, and contemporary national statistical schedules. Global gridded reconstructions such as HYDE disaggregate national historical population curves onto 5-arcminute cells through continental suitability heuristics [@KleinGoldewijk2010; @KleinGoldewijk2011; @KleinGoldewijk2017]. Across the arid-to-Mediterranean belt extending from the Atlantic coast of Morocco to the Hindu Kush, where dense hydraulic floodplains, terraced orographic highlands, qanat piedmonts and discrete desert oases abut vast hyper-arid interiors, continental heuristics benefit from bottom-up regional reconstruction grounded in local historical geography. HANDBOOK supplies such a reconstruction across 27 contemporary countries and territories covering 12,6M km² (168.112 active 5-arcminute grid cells) from 10000BC to 2026AD.

HANDBOOK comprises 54 constituent research documents (27 regional demographic literature reviews paired with 27 coordinate-anchored settlement gazetteers), integrating 83.857 unique archaeological site-epoch observations across 3.416 domestic scale-adaptive hydrological catchments and 834 cross-frontier conditioning catchments alongside 4.411 individually evidence-assessed chapter-settlement records anchored to WGS84 coordinates after purging uniform placeholder tiers. To avoid isotropic blurring, rectilinear Manhattan distance diamonds and exaggerated fluvial alignment outside perennial alluvial basins, HANDBOOK couples exact metric-isotropic radial Euclidean distance fields with a two-scale non-stationary Matérn ($\nu = 3/2$) residual kriging surface ($\tau_1 = 1,35$, raw $\tau_1 = 1,52$, $R^2 > 0,999$) [@PaciorekSchervish2006; @Palmisano2022NERD]. From 1880AD to 2025AD, HANDBOOK integrates 29 historical pre-1950 subadministrative divisions (Ottoman vilayets, 1897 Russian Imperial Transcaucasia guberniyas, Egyptian mudiriyas, Mandate districts and colonial North African départements) and 2.629 contemporary geoBoundaries second- and first-level administrative polygons via strictly mass-conserving pycnophylactic dasymetric disaggregation across 65.864 unit-year checks with a maximum relative error of 5,85e-08 [@Runfola2020GeoBoundaries; @Karpat1985Ottoman; @Troinitsky1905].

Across the Holocene, aggregate human numbers within the 27-territory domain grew from 1,15M in 10000BC to 10,6M by the close of the Chalcolithic in 3200BC, climbed through Bronze and Iron Age state formation to 26,68M in 539BC, and reached an antique zenith of 41,84M to 50,35M across the Roman, Parthian, Sassanid and Early Islamic Caliphate horizons. Following mediaeval Mongol, Timurid and Black Death contractions that lowered late mediaeval regional numbers below 40M [@Borsch2005BlackDeath; @Pamuk2007BlackDeath], recovery under Ottoman, Safavid-Qajar, Sharifian and Khedival regimes carried aggregate population past 60M by 1900AD. Post-1950 demographic transition and hydrocarbon urbanisation lifted the 27-territory total above 593,7M by 2025AD, reshaping a region historically centred on the Nile, Mesopotamia, Anatolia and the Yemen highlands into an archipelago of multi-million metropolitan corridors.



# Background

Any long-run demographic synthesis covering North Africa, Southwest Asia and Transcaucasia confronts four structural challenges that distinguish this macro-region from temperate Europe or East Asia. Over the past half-century, world historical demographic tabulations led by McEvedy and Jones, Maddison and Livi-Bacci established indispensable continental benchmarks by assigning macro-regional trajectories to contemporary national envelopes [@McEvedyJones1978; @Maddison2001; @LiviBacci2007]. Klein Goldewijk and collaborators subsequently introduced spatially explicit Holocene reconstructions in HYDE 3.1 and HYDE 3.2, allocating national population series onto 5-arcminute cells through coastlines, river networks, soil suitability, elevation and urban-share kernels [@KleinGoldewijk2010; @KleinGoldewijk2011; @KleinGoldewijk2017].

While global frameworks supply coherent world totals, four historical-geographical realities across HANDBOOK demand region-specific treatment. First, carrying capacity across North Africa and Southwest Asia exhibits sharper spatial contrast than almost any other continental domain on Earth. Narrow perennial alluvial corridors in the Nile Valley, the Nile Delta and the Tigris-Euphrates-Karun floodplain sustained rural densities exceeding 40 to 100 inhabitants per km² in Antiquity and the Middle Ages, sitting mere kilometres from hyper-arid limestone plateaus and ergs supporting fewer than 0,05 persons per km² [@Adams1981Heartland; @BagnallFrier1994; @Scheidel2001Death]. At the same time, major non-alluvial agricultural cores flourished without large perennial rivers: rain-fed Mediterranean coastal plains and terraced limestone hills in the Levant, Cyprus, Western Anatolia and the Maghreb Tell; qanat-irrigated alluvial fans ringing the Alborz, Zagros, Kopet Dag and Hindu Kush piedmonts; and monsoon-watered mountain terraces in the Yemen and Asir highlands between 1.200 and 2.600 metres altitude. Applying uniform global fluvial weights or steep northern elevation penalties distorts this geography, producing artificial canyon ribbons across Anatolia, Iran and Arabia while darkening populated Armenian, Anatolian, Zagros and Yemeni highlands.

Second, urban networks and political cores relocated repeatedly across twelve millennia. Neolithic sedentarisation originated in the Levantine corridor, Upper Mesopotamia and Central Anatolia between 10000BC and 6000BC, before Chalcolithic and Bronze Age state formation concentrated urban power in Lower Mesopotamia (Uruk, Ur, Nippur, Babylon), the Nile Valley (Memphis, Thebes), Elam (Susa) and the Hittite and Levantine kingdoms [@Palmisano2022NERD; @Lawrence2021Urban; @Altinisik2022CTurkey]. Classical Antiquity elevated Mediterranean ports and overland metropolises—Alexandria, Antioch, Carthage, Ephesus, Palmyra and Seleucia-Ctesiphon—into trans-regional hubs. The Early Islamic Caliphate shifted demographic gravity back toward Iraq (Baghdad, Basra, Kufa, Samarra), Greater Khorasan (Nishapur, Rayy, Merv, Herat) and Fatimid Cairo, before thirteenth-century Mongol campaigns, fourteenth-century Timurid invasions and recurrent Black Death epidemics devastated Iraq, northern Iran and Mamluk Egypt while sparing or reshaping Anatolian and Maghrebi frontiers [@Borsch2005BlackDeath; @Pamuk2007BlackDeath]. Early modern and twentieth-century shifts then propelled Istanbul, Tehran, Cairo, Casablanca, Algiers, Riyadh, Dubai and Doha to demographic dominance.

Third, historical documentation is fractured across incompatible administrative boundaries and evidentiary traditions. Ancient counts rely on archaeological tell surveys, settlement-area multipliers, Egyptian nome censuses on papyrus and cuneiform rationing lists [@Adams1981Heartland; @BagnallFrier1994; @Palmisano2022Data]. Early modern numbers rest on sixteenth-century Ottoman cadastral registers (*tahrir defters*), nineteenth-century Ottoman imperial censuses (1831AD, 1881-1893AD and 1914AD), Muhammad Ali's 1846-1848AD Egyptian census, the 1897AD First General Census of the Russian Empire in Transcaucasia, and French, British, Italian and Spanish colonial enumerations across North Africa and the Mandates [@Karpat1985Ottoman; @Behar1995Ottoman; @Saleh2013Egypt; @Troinitsky1905; @Kateb2001Algeria]. Modern totals rest on national statistical offices operating across sharply varying census intervals—from quinquennial and register-based counts in Turkey (TUIK), Iran (SCI) and Egypt (CAPMAS) to sparse wartime projections in Afghanistan (NSIA), Syria (CBS), Iraq (COSIT), Yemen (CSO) and Libya (BSC) [@AbbasiShavazi2009Iran; @Fargues2011GCC; @CourbageTodd2011].

Fourth, contemporary cross-border comparability requires continuous integration with neighbouring regional studies. HANDBOOK shares 3.900 kilometres of mountainous, steppe and desert frontiers with POLARIS across the Greater Caucasus, with SARAY along the Kopet Dag and Amu Darya, with INDUS along the Durand Line and Makran coast, and with JADE at the Wakhan Corridor. Reconciling both archaeological site conditioning and 5-arcminute population surfaces across these frontiers prevents artificial demographic walls along modern international borders.

A fifth historiographical issue concerns the long-standing divergence between global demographic syntheses and regional specialist literature. Global tables assembled by McEvedy and Jones [@McEvedyJones1978], Maddison [@Maddison2001] and Klein Goldewijk [@KleinGoldewijk2017] inevitably smooth away sub-regional collapses and booms—such as the differential impact of thirteenth-century Mongol irrigation destruction in Lower Iraq compared with Seljuk stability in central Anatolia, or the divergence between Tunisia's early fertility decline and Yemen's prolonged demographic momentum [@CourbageTodd2011; @Pamuk2007BlackDeath]. Because global grids extrapolate contemporary sub-national administrative shares back into the Holocene, they also misallocate antique and mediaeval population toward twentieth-century hydrocarbon ports, canal towns and desert capitals (Port Said, Ismailia, Tel Aviv, Abadan, Dhahran, Riyadh, Dubai, Doha, Sumqayit and New Cairo) that either did not exist or remained tiny anchorages before 1850AD.

Comparing HANDBOOK directly against HYDE 3.2 highlights how bottom-up regional calibration alters both spatial geometry and regional mass balance. Whereas uniform continental allocation distributes noticeable background densities across modern Saharan road corridors and the Great Nafud desert, HANDBOOK's agro-ecological calibration and documented settlement filters restrict pre-industrial Sahara and Rub' al-Khali occupancy to discrete, radially bounded oasis basins (Tafilalt, Touat, M'zab, Fezzan, Siwa, Bahariya, Farafra, Dakhla, Kharga, Hail, Al-Qassim, Al-Hasa and Wadi Hanifa), restoring the true 50- to 100-fold density gradient separating the Nile floodplain and Yemen terraces from adjacent sand seas. Simultaneously, raising mid-altitude terrain suitability across 600 to 2.550 metres restores historical carrying capacity to the Armenian Plateau, Eastern Anatolia, the Zagros intermontane basins, Mount Lebanon and the Rif-Atlas, where orographic precipitation supported dense sedentary agriculture throughout Antiquity and the Middle Ages.

## Regional Historiography and Evidentiary Foundations

Scholarship across North Africa, the Near East, Iran, Afghanistan and Transcaucasia spans distinct linguistic and archival traditions that rarely intersect in quantitative syntheses. For prehistoric and Bronze Age Southwest Asia, intensive multi-decade pedestrian surveys in southern Mesopotamia [@Adams1981Heartland], Upper Mesopotamia [@Lawrence2021Urban], the Levant [@Palmisano2022NERD] and Anatolia [@Altinisik2022CTurkey] have transformed qualitative archaeological narratives into calibrated radiocarbon and site-area series. In the Nile Valley and Delta, systematic Egypt Exploration Society Delta inventories complement classical Graeco-Roman papyrus household declarations (*kat' oikian apographai*) analysed by Bagnall, Frier and Scheidel [@BagnallFrier1994; @Scheidel2001Death], establishing the most tightly constrained mortality, fertility and urbanisation parameters surviving from the ancient world.

For the mediaeval and early modern Islamic centuries, quantitative historical demography combines Arabic geographical treatises and urban itineraries (synthesised digitally in Al-Thurayya and cross-checked strictly as secondary reference works against @Bosworth2007Historic and @DumperStanley2007) with Ottoman fiscal cadastres (*tahrir defters*) and nineteenth-century imperial enumerations [@Karpat1985Ottoman; @Behar1995Ottoman; @McCarthy1983Muslims]. In Egypt, Mohamed Saleh's digitisation of Muhammad Ali's 1846-1848AD individual-level census manuscripts bridges the gap between Mamluk-Ottoman fiscal chronicles and the modern British-era decennial series beginning in 1882AD [@Saleh2013Egypt]. Across Transcaucasia, the 1897AD First General Census of the Russian Empire [@Troinitsky1905] provides a complete guberniya- and uyezd-level benchmark linking early nineteenth-century imperial annexation with Soviet All-Union enumerations from 1926AD to 1989AD. In the Maghreb, French Algerian quinquennial censuses starting in 1856AD [@Kateb2001Algeria], together with Moroccan, Tunisian, Libyan and Spanish Saharan colonial counts, anchor nineteenth- and twentieth-century reconstruction across both coastal Tell plains and Saharan administrative territories.

Across the contemporary era, HANDBOOK integrates official micro- and district-level statistical series from twenty-six national agencies alongside Earth Observation settlement products from the Global Human Settlement Layer [@Pesaresi2024GHSL]. Combining census totals with subadministrative vector geometries from geoBoundaries [@Runfola2020GeoBoundaries] permits exact mass-conserving spatial allocation across every contemporary governorate, province, ilçe, shahrestan, markaz, qadha and district, resolving contemporary metropolitan concentration in Greater Cairo, Istanbul, Tehran, Baghdad, Riyadh, Casablanca, Algiers and Dubai without sacrificing historical continuity across the 1880AD to 1975AD statistical transition.

# Methodology

## Three-Regime Territorial Partitioning and Dual Vector-Raster Masking

To preserve shifting historical polities without losing quantitative comparability across epochs, HANDBOOK organises its 27 chapters into a three-regime hierarchical partition covering 12.595.883 km² (168.112 active 5-arcminute cells) from 10000BC to 2026AD (Figure \ref{fig:hero-handbook} and Table \ref{tab:handbook-itinerary}).

Regime I (Prehistoric Macro-Catchments, 10000BC to 3200BC) partitions the entire domain in Chapter 1 into 16 biophysical basins reflecting Epipalaeolithic, Neolithic and Chalcolithic ecological corridors—spanning the Levantine Corridor, Upper and Lower Mesopotamia, Nile Valley and Delta, Anatolian plateaus, Zagros and Iranian interior basins, Helmand-Sistan, Transcaucasia, Arabian fringes and the Green Sahara oases.

Regime II (Dynastic, Imperial, Mediaeval, Early Modern and Colonial Polities, 3500BC to 1975AD) spans Chapters 2 through 17. Ancient Bronze and Iron Age modules track Sumer-Akkad-Babylonia-Assyria, Pharaonic Egypt, Hittite-Phoenician-Israelite-South Arabian territories, and Elam-Urartu-Achaemenid-Bactrian lands before uniting the Classical world in Chapter 6 (539BC to 632AD) and the Early Islamic Caliphate in Chapter 7 (632AD to 1000AD). Mediaeval and early modern modules separate Near Eastern-Iranian-Caucasian empires (Seljuk, Crusader, Georgian, Ilkhanid, Timurid) from Fatimid-Mamluk-Almohad-Marinid-Hafsid North Africa, followed by dedicated territorial partitions for the Ottoman Empire (1300AD to 1918AD), Safavid-Afsharid-Qajar Iran (1501AD to 1925AD), Durrani-Barakzai Afghanistan (1747AD to 1919AD), Russian Imperial Transcaucasia (1801AD to 1917AD), French-Spanish-Italian Colonial North Africa (1830AD to 1975AD), Khedivate and British-Occupied Egypt (1799AD to 1952AD), the British and French Mandates in the Levant, Iraq and Cyprus (1918AD to 1960AD), and Arabian Peninsula state formation to 1971AD.

Regime III (Modern National Censuses, 1917AD to 2026AD) comprises Chapters 18 through 27, partitioning all 27 contemporary countries and territories along first-level administrative provinces (529 canonical provincial regions across Turkey, Iran, Afghanistan, Georgia, Armenia, Azerbaijan, Syria, Lebanon, Jordan, Israel, Palestine, Iraq, Egypt, Morocco, Algeria, Tunisia, Libya, Western Sahara, Cyprus, Saudi Arabia, Yemen, Oman, Kuwait, Bahrain, Qatar and the United Arab Emirates). Every chapter mask is emitted simultaneously as a smooth WGS84 vector GeoJSON polygon archive and a 4320 by 2160 5-arcminute pipeline raster, ensuring zero synthetic rectangular cuts and zero starved micro-enclaves across all 27 modules.

<figure class="crd-table-figure" id="tab:handbook-itinerary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ch.</th><th class="crd-th">Chapter Title</th><th class="crd-th">Domain</th><th class="crd-th">Regions</th><th class="crd-th">Cities</th><th class="crd-th">Terminal Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Prehistoric and Neolithic MENA, Iran and Afghanistan</td><td class="crd-td">10000BC to 3200BC</td><td class="crd-td">17</td><td class="crd-td">114</td><td class="crd-td">10,6M</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Ancient Mesopotamia to 539BC</td><td class="crd-td">3500BC to 539BC</td><td class="crd-td">5</td><td class="crd-td">111</td><td class="crd-td">3,62M</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Pharaonic Egypt to the Persian Conquest</td><td class="crd-td">3200BC to 525BC</td><td class="crd-td">6</td><td class="crd-td">109</td><td class="crd-td">4,12M</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Ancient Anatolia, the Levant and Arabia</td><td class="crd-td">3200BC to 539BC</td><td class="crd-td">10</td><td class="crd-td">132</td><td class="crd-td">8,17M</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Ancient Iran, Afghanistan and Transcaucasia</td><td class="crd-td">3200BC to 330BC</td><td class="crd-td">10</td><td class="crd-td">119</td><td class="crd-td">9,38M</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Hellenistic, Roman and Parthian-Sassanid Eras</td><td class="crd-td">539BC to 632AD</td><td class="crd-td">11</td><td class="crd-td">145</td><td class="crd-td">41,84M</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Early Islamic Caliphate (AD 632-1000)</td><td class="crd-td">632AD to 1000AD</td><td class="crd-td">10</td><td class="crd-td">140</td><td class="crd-td">50,35M</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Mediaeval Near East, Iran and Caucasia (1000-1500)</td><td class="crd-td">1000AD to 1500AD</td><td class="crd-td">8</td><td class="crd-td">131</td><td class="crd-td">28,73M</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Mediaeval North Africa (1000-1517)</td><td class="crd-td">1000AD to 1517AD</td><td class="crd-td">5</td><td class="crd-td">97</td><td class="crd-td">11,28M</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">The Ottoman Empire in MENA and Anatolia (1300-1918)</td><td class="crd-td">1300AD to 1918AD</td><td class="crd-td">11</td><td class="crd-td">175</td><td class="crd-td">26,5M</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Safavid, Afsharid and Qajar Iran (1501-1925)</td><td class="crd-td">1501AD to 1925AD</td><td class="crd-td">5</td><td class="crd-td">121</td><td class="crd-td">12,65M</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Durrani and Barakzai Afghanistan until 1919</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">5</td><td class="crd-td">72</td><td class="crd-td">6,28M</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Russian Conquest and Imperial Rule in Transcaucasia</td><td class="crd-td">1801AD to 1917AD</td><td class="crd-td">3</td><td class="crd-td">100</td><td class="crd-td">6M</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Colonial Rule in North Africa (1830-1975)</td><td class="crd-td">1830AD to 1975AD</td><td class="crd-td">6</td><td class="crd-td">137</td><td class="crd-td">76k</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Khedivate and British-Occupied Egypt (1799-1952)</td><td class="crd-td">1799AD to 1952AD</td><td class="crd-td">5</td><td class="crd-td">118</td><td class="crd-td">21,5M</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">British and French Mandates in the Levant, Iraq and Cyprus</td><td class="crd-td">1918AD to 1960AD</td><td class="crd-td">6</td><td class="crd-td">138</td><td class="crd-td">574k</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Arabian Peninsula State Formation to 1971</td><td class="crd-td">1900AD to 1971AD</td><td class="crd-td">6</td><td class="crd-td">107</td><td class="crd-td">14,61M</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Republic of Turkey after 1923</td><td class="crd-td">1923AD to 2026AD</td><td class="crd-td">81</td><td class="crd-td">326</td><td class="crd-td">85,66M</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Iran after 1925</td><td class="crd-td">1925AD to 2026AD</td><td class="crd-td">31</td><td class="crd-td">281</td><td class="crd-td">89,8M</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Afghanistan after 1919</td><td class="crd-td">1919AD to 2026AD</td><td class="crd-td">34</td><td class="crd-td">53</td><td class="crd-td">42,65M</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Transcaucasia in the Soviet and Post-Soviet Eras</td><td class="crd-td">1917AD to 2026AD</td><td class="crd-td">101</td><td class="crd-td">215</td><td class="crd-td">16,92M</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Syria, Lebanon, Jordan, Israel and Palestine after 1946</td><td class="crd-td">1946AD to 2026AD</td><td class="crd-td">41</td><td class="crd-td">247</td><td class="crd-td">54,8M</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Iraq after 1932</td><td class="crd-td">1932AD to 2026AD</td><td class="crd-td">18</td><td class="crd-td">156</td><td class="crd-td">46,04M</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Egypt after 1952</td><td class="crd-td">1952AD to 2026AD</td><td class="crd-td">27</td><td class="crd-td">196</td><td class="crd-td">116,5M</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">The Maghreb and Libya after Independence</td><td class="crd-td">1951AD to 2026AD</td><td class="crd-td">110</td><td class="crd-td">534</td><td class="crd-td">103,8M</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Cyprus after Independence (1960-present)</td><td class="crd-td">1960AD to 2026AD</td><td class="crd-td">5</td><td class="crd-td">47</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Arabian Peninsula after 1971</td><td class="crd-td">1971AD to 2026AD</td><td class="crd-td">72</td><td class="crd-td">290</td><td class="crd-td">94,8M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Canonical 27-chapter HANDBOOK itinerary showing chronological spans, territorial sub-regions, catalogued settlements and terminal benchmark populations.</figcaption>
</figure>

## Multi-Repository Archaeological Ingestion, Radial Distance Fields and Non-Stationary Kriging

Pre-industrial spatial population surfaces in HANDBOOK rely on 83.857 unique domestic archaeological site-epoch observations compiled from twelve primary scholarly and institutional repositories with zero reliance on crowd-sourced databases: the Published Excavations Atlas (ArchAtlas, 26.766 domestic sites), the Pleiades Ancient World Gazetteer (30.185 regional and frontier sites), the Al-Thurayya Early Islamic Gazetteer (2.501 settlements), the Egypt Exploration Society Delta Survey (785 sites), C-Turkey [@Altinisik2022CTurkey], the Near East Radiocarbon Dates database [@Palmisano2022Data], the Digital Atlas of the Roman Empire (809 sites), EAMENA regional field surveys, UCL Central Asian Archaeological Landscapes records for northern Afghanistan and Khorasan, curated monograph type-site catalogues, and the global radiocarbon baseline (2.250 domestic sites, giving a 37,27x regional enrichment multiplier). Across all seven HANDBOOK archaeological jurisdictions (Turkey, Iran, Egypt, Levant-Iraq, Arabia, Maghreb and Caucasus-Afghanistan), regional and monograph repositories account for 95,59% of all records.

Observations are aggregated onto 3.416 scale-adaptive domestic HydroBASINS Level 6 catchments (tightened to $\le ___INT_PROT_3___$ km² in settled basins and $\le ___INT_PROT_4___$ km² in desert interiors; median Voronoi radius 32,51 km) plus 834 cross-frontier conditioning catchments imported across a 300 km belt from completed neighbours POLARIS, SARAY, INDUS and JADE. Freeman-Tukey variance-stabilised empirical Bayes intensities are solved across ten chronological horizons via two-scale non-stationary Paciorek-Schervish Matérn ($\nu = 3/2$) kriging [@PaciorekSchervish2006]:

$$\gamma(u) = c_0 + (1 - c_0)\left[1 - c_1\left(1 + \frac{\sqrt{3}\,u}{\tau_1}\right)\exp\left(-\frac{\sqrt{3}\,u}{\tau_1}\right) - c_2\left(1 + \frac{\sqrt{3}\,u}{\tau_2}\right)\exp\left(-\frac{\sqrt{3}\,u}{\tau_2}\right)\right]$$

where $u_{ij}$ denotes dimensionless geodesic Voronoi lag, $\tau_1 = 1,35$ (unclamped empirical $\tau_1 = 1,52$), $\tau_2 = 2,90$, $c_1 = 0,80$, $c_2 = 0,20$ and nugget ratio $c_0 = 0,04$ ($R^2 = 0,9993$ across all ten horizons).

Two critical geospatial refinements distinguish HANDBOOK's physical substrata from generic global models. First, all proximity fields—settlement catchments, coastal corridors and fluvial distance bands—replace 4-neighbour Manhattan taxicab breadth-first search with exact metric-isotropic radial Euclidean pixel distance $\sqrt{\Delta r^2 + (\Delta c \cdot \cos\phi)^2}$, eliminating rectilinear diamond halos around Saharan, Libyan, Arabian and Iranian oases. Second, HANDBOOK applies a purely biophysical MENA agro-ecological calibration isolated strictly to HANDBOOK's domain configuration. Rather than enforcing uniform river concentration across all territories, perennial fluvial alignment is concentrated exclusively within true hydraulic alluvial basins (the Nile Valley and Delta, Tigris-Euphrates-Diyala-Karun, Kura-Aras and Oxus-Helmand), while intermittent desert wadis and non-alluvial Mediterranean, Anatolian, Levantine, Maghrebi, Iranian and Yemeni rain-fed streams are damped. Simultaneously, mid-altitude terraced agricultural highlands between 600 and 2.550 metres (Yemen and Asir, Armenia, Eastern Anatolia, Zagros, Mount Lebanon and the Rif-Atlas) retain full orographic suitability, while hyper-arid non-oasis highway tracks lacking pre-industrial irrigation, grazing or documented settlements are organically pruned without geometric bounding boxes.

## Strictly Mass-Conserving Subadministrative GIS Disaggregation

For the statistical era from 1880AD to 2025AD, HANDBOOK incorporates scraped subadministrative historical and contemporary GIS polygons paired with official census enumerations across all 27 countries and territories [@Runfola2020GeoBoundaries]. Historical pre-1950 divisions encompass 29 spatial units covering Ottoman Anatolian and Levantine vilayets (1881-1893AD and 1914AD) [@Karpat1985Ottoman], 1897AD Russian Imperial Transcaucasia guberniyas (Tiflis, Kutaisi, Baku, Elisabethpol, Erivan, Kars and Batumi) [@Troinitsky1905], 1882AD to 1947AD Egyptian mudiriyas [@Saleh2013Egypt], Mandate Palestine and Iraqi liwas, British Cyprus districts, and colonial North African départements and territories [@Kateb2001Algeria]. Contemporary subadministrative polygons comprise 2.629 active geoBoundaries ADM2 and ADM1 divisions matched directly to official schedules from TUIK (968 Turkish ilçes), SCI (379 Iranian shahrestans), CAPMAS (296 Egyptian markaz/qism units), NSIA (363 Afghan districts), COSIT (88 Iraqi qadhas), HCP (63 Moroccan provinces), ONS (44 Algerian wilayas), INS (24 Tunisian governorates), GASTAT, CSO Yemen, NCSI Oman, GeoStat, ArmStat, AzStat, CBS Israel, PCBS, CBS Syria, CAS Lebanon, DOS Jordan, BSC Libya, CYSTAT and GCC statistical offices.

Every subadministrative polygon is rasterised using largest-to-smallest painter sorting with centroid micro-enclave pinning (81 tiny urban enclaves pinned, zero units starved) and applied to the 5-arcminute population rasters via strictly pycnophylactic (mass-conserving) dasymetric disaggregation:

$$\hat{p}_i(t) = P_k(t) \cdot \frac{w_i(t)}{\sum_{j \in \Omega_k} w_j(t)}, \qquad \sum_{i \in \Omega_k} \hat{p}_i(t) = P_k(t)$$

where $P_k(t)$ is the official enumerated (or log-linearly bracketed) population of subadministrative unit $k$ in year $t$, $\Omega_k$ is the set of valid 5-arcminute land cells inside polygon $k$, and $w_i(t)$ is the underlying radial kriged rural suitability weight (transitioning to cleaned Global Human Settlement Layer satellite weights from 1975AD onward so sprawling Saharan and Arabian administrative provinces concentrate crisply inside actual oases and metropolitan cores) [@Pesaresi2024GHSL].

## Multi-Wave Settlement Gazetteer Saturation and Cross-Frontier Seam Harmonisation

Settlement trajectories across all 27 chapters were constructed via a four-wave saturation protocol combining full-row national census schedules, archaeological and historical gazetteers (ArchAtlas, Pleiades, Al-Thurayya, EES Delta Survey, DARE, NERD and C-Turkey, supplemented only as secondary reference checks by @Bosworth2007Historic and @DumperStanley2007), longitudinal pre-census backfill honouring explicit foundation years on nineteenth- and twentieth-century canal, oil and planned towns (Port Said 1859, Ismailia 1863, Tel Aviv 1909, Abadan 1909, Dhahran 1938, Ahmadi 1946, Sumqayit 1949, Jubail 1975, New Cairo 2000), and sub-region gap hunting. Fuzzy variant-spelling deduplication within 25 km eliminated transliteration doublets across Arabic, Persian, Turkish, Hebrew, Greek, Armenian and Georgian scripts.

To guarantee continuous composition into continental grids alongside adjacent Operation Viscount studies, pre-1975 benchmark rasters undergo non-blurring 2D screened-Laplace multiplicative frontier harmonisation across narrow border ribbons (18 to 20 pixels) along the Greater Caucasus (bordering POLARIS), Kopet Dag and Amu Darya (bordering SARAY), and Durand Line and Makran (bordering INDUS), preserving interior subadministrative mass conservation and high-frequency valley texture.

## Subadministrative Coverage Across All Twenty-Seven Territories

A defining contribution of HANDBOOK is the systematic integration of subadministrative spatial divisions across every territory in scope rather than relying on national totals alone. In pre-1950 statistical benchmarks, scraped historical polygons capture twenty-nine major administrative jurisdictions: Ottoman Anatolian, Levantine and Mesopotamian vilayets enumerated in the 1881-1893AD and 1914AD imperial censuses [@Karpat1985Ottoman]; the seven Transcaucasian guberniyas and oblasts of the 1897AD Russian Imperial Census (Tiflis, Kutaisi, Baku, Elisabethpol, Erivan, Kars and Batumi) [@Troinitsky1905]; Egyptian mudiriyas and governorates from 1882AD to 1947AD [@Saleh2013Egypt]; Mandate Palestine sub-districts (1922AD, 1931AD and 1945AD) and Iraqi liwas (1920AD and 1947AD); British Cyprus districts (1881AD to 1960AD); and French Algerian départements (Algiers, Oran, Constantine and the Territoires du Sud) alongside protectorate regions of Tunisia, Morocco and Italian Libya [@Kateb2001Algeria].

For the modern census era, Table \ref{tab:subadmin-countries} summarises the 2.629 active second- and first-level administrative polygons matched to official national enumerations across all twenty-seven HANDBOOK countries and territories [@Runfola2020GeoBoundaries]. Painter-sorted largest-to-smallest rasterisation on the canonical 5-arcminute grid guarantees that small high-density urban municipalities—such as central Cairo qisms, Istanbul ilçes, Beirut, Bahraini governorates and coastal Gaza districts—retain dedicated raster cells (81 micro-enclaves explicitly pinned) without being overwritten by surrounding rural provinces.

<figure class="crd-table-figure" id="tab:subadmin-countries">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">GIS Tier</th><th class="crd-th">Matched Units</th><th class="crd-th">Censuses</th><th class="crd-th">Census Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">ADM2</td><td class="crd-td">968</td><td class="crd-td">8</td><td class="crd-td">1990AD to 2023AD</td></tr>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">ADM2</td><td class="crd-td">379</td><td class="crd-td">5</td><td class="crd-td">1996AD to 2023AD</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">ADM2</td><td class="crd-td">355</td><td class="crd-td">3</td><td class="crd-td">1979AD to 2020AD</td></tr>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">ADM2</td><td class="crd-td">296</td><td class="crd-td">5</td><td class="crd-td">1986AD to 2023AD</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">ADM2</td><td class="crd-td">136</td><td class="crd-td">4</td><td class="crd-td">1992AD to 2022AD</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">ADM2</td><td class="crd-td">88</td><td class="crd-td">5</td><td class="crd-td">1977AD to 2024AD</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">ADM2</td><td class="crd-td">78</td><td class="crd-td">32</td><td class="crd-td">1959AD to 2026AD</td></tr>
<tr><td class="crd-td"><strong>Morocco</strong></td><td class="crd-td">ADM2</td><td class="crd-td">63</td><td class="crd-td">4</td><td class="crd-td">1994AD to 2024AD</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">ADM2</td><td class="crd-td">61</td><td class="crd-td">26</td><td class="crd-td">1959AD to 2026AD</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">ADM2</td><td class="crd-td">53</td><td class="crd-td">4</td><td class="crd-td">1993AD to 2020AD</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">ADM2</td><td class="crd-td">44</td><td class="crd-td">4</td><td class="crd-td">1977AD to 2008AD</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">ADM1</td><td class="crd-td">24</td><td class="crd-td">5</td><td class="crd-td">1984AD to 2024AD</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">ADM2</td><td class="crd-td">21</td><td class="crd-td">5</td><td class="crd-td">1970AD to 2017AD</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">2</td><td class="crd-td">1994AD to 2004AD</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">ADM1</td><td class="crd-td">17</td><td class="crd-td">2</td><td class="crd-td">2006AD to 2020AD</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">ADM2</td><td class="crd-td">16</td><td class="crd-td">4</td><td class="crd-td">1997AD to 2023AD</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">ADM2</td><td class="crd-td">14</td><td class="crd-td">5</td><td class="crd-td">1983AD to 2021AD</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">ADM1</td><td class="crd-td">13</td><td class="crd-td">4</td><td class="crd-td">1981AD to 2021AD</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">ADM1</td><td class="crd-td">12</td><td class="crd-td">5</td><td class="crd-td">1994AD to 2021AD</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">ADM1</td><td class="crd-td">11</td><td class="crd-td">17</td><td class="crd-td">1959AD to 2025AD</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">ADM1</td><td class="crd-td">7</td><td class="crd-td">8</td><td class="crd-td">1980AD to 2023AD</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">6</td><td class="crd-td">1986AD to 2020AD</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">4</td><td class="crd-td">1995AD to 2021AD</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">ADM1</td><td class="crd-td">5</td><td class="crd-td">5</td><td class="crd-td">1982AD to 2021AD</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">ADM1</td><td class="crd-td">4</td><td class="crd-td">4</td><td class="crd-td">2001AD to 2024AD</td></tr>
<tr><td class="crd-td"><strong>Western Sahara</strong></td><td class="crd-td">ADM1</td><td class="crd-td">1</td><td class="crd-td">4</td><td class="crd-td">1994AD to 2024AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Matched modern subadministrative GIS polygons and census benchmark spans disaggregated pycnophylactically across all twenty-six ISO3 jurisdictions (27 territories including Northern Cyprus).</figcaption>
</figure>

Because every subadministrative unit $k$ obeys $\sum_{i \in \Omega_k} \hat{p}_i(t) = P_k(t)$ within IEEE 754 float32 rounding tolerance, areal scaling preserves both sub-national urban-rural balances and exact national census totals across all 83 benchmark years from 1880AD to 2025AD. When combined with cleaned GHSL built-up weights from 1975AD onward [@Pesaresi2024GHSL], sprawling arid provinces such as Tamanrasset, Adrar, Illizi, Kufra, Al-Wadi al-Jadid and Northern Borders concentrate population accurately into oasis municipalities and mining towns rather than smearing artificial background density across uninhabited ergs and hammadas.

# Testing and Validation

Every stage of HANDBOOK underwent automated quantitative auditing and direct optical verification before publishing. All 27 territorial masks passed areal mask validation with zero starved units, zero rectangular bounding-box artefacts and 100% spatial containment of catalogued settlements. Across all 27 settlement gazetteers (4.411 individually evidence-assessed chapter-settlement records after purging uniform placeholder tiers), automated exhaustiveness verification recorded 27 of 27 passes with zero empty sub-regions, zero duplicate aliases within 25 km, zero pre-foundation anachronisms and zero suspicious non-settlement monument strings.

<figure class="crd-figure-block" id="fig:handbook-kriging">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0/fig3_handbook_kriging_diagnostics.png" alt="fig:handbook-kriging" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Empirical semivariogram calibration (Matérn model with shape parameter 3/2) and domestic archaeological site mass across ten chronological horizons.</figcaption>
</figure>

Geostatistical sharpness audits across all ten kriged horizons confirm calibrated two-scale covariance structure (raw $\tau_1 = 1,52$, residual $R^2 = 0,9993$, mean high-pass sharpness 0,33), zero uninhabitable wasteland mass leakage (0% mass outside habitable land), strong log-correlation with historical baseline suitability ($r = 0,83$), and bounded modern urban backprojection (urban-core median ratio 1,44 versus the 1,6 threshold; prehistoric 95th-percentile ratio 1,21 versus 1,65; Figure \ref{fig:handbook-kriging}). Inter-region border audits across 30 benchmark pairs spanning POLARIS, SARAY, INDUS and JADE confirm zero seam failures (cross-frontier median log10 steps below 0,35 dex, 95th-percentile steps below 0,85 dex and aligned cliff walls strictly under 8 pixels).

<figure class="crd-table-figure" id="tab:subadmin-mass">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Hist. Units</th><th class="crd-th">Modern Units</th><th class="crd-th">Enumerated Mass</th><th class="crd-th">Max Unit Rel. Err.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1880AD</strong></td><td class="crd-td">22</td><td class="crd-td">0</td><td class="crd-td">28,75M</td><td class="crd-td">7,8e-09</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">29</td><td class="crd-td">0</td><td class="crd-td">45,89M</td><td class="crd-td">7,73e-09</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">29</td><td class="crd-td">0</td><td class="crd-td">54,49M</td><td class="crd-td">4,21e-09</td></tr>
<tr><td class="crd-td"><strong>1940AD</strong></td><td class="crd-td">19</td><td class="crd-td">0</td><td class="crd-td">45,87M</td><td class="crd-td">6,28e-09</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">8</td><td class="crd-td">10</td><td class="crd-td">29,42M</td><td class="crd-td">2,14e-08</td></tr>
<tr><td class="crd-td"><strong>1980AD</strong></td><td class="crd-td">0</td><td class="crd-td">195</td><td class="crd-td">43,82M</td><td class="crd-td">3,76e-08</td></tr>
<tr><td class="crd-td"><strong>1990AD</strong></td><td class="crd-td">0</td><td class="crd-td">587</td><td class="crd-td">158,32M</td><td class="crd-td">5,39e-08</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">0</td><td class="crd-td">708</td><td class="crd-td">206,29M</td><td class="crd-td">5,04e-08</td></tr>
<tr><td class="crd-td"><strong>2010AD</strong></td><td class="crd-td">0</td><td class="crd-td">2129</td><td class="crd-td">438,42M</td><td class="crd-td">5,32e-08</td></tr>
<tr><td class="crd-td"><strong>2020AD</strong></td><td class="crd-td">0</td><td class="crd-td">2561</td><td class="crd-td">534,92M</td><td class="crd-td">5,63e-08</td></tr>
<tr><td class="crd-td"><strong>2025AD</strong></td><td class="crd-td">0</td><td class="crd-td">2561</td><td class="crd-td">576,31M</td><td class="crd-td">5,47e-08</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Representative benchmark years of strictly mass-conserving subadministrative dasymetric disaggregation across 65.864 unit-year checks (100% pass below 0,01% relative error).</figcaption>
</figure>

Pycnophylactic mass conservation was verified across all 83 disaggregated benchmark years from 1880AD to 2025AD (Table \ref{tab:subadmin-mass}). Across 65.864 individual unit-year evaluations covering up to 2.561 contemporary subadministrative polygons simultaneously (accounting for 593,7M enumerated residents in 2025AD), 100% of units matched their official statistical target within float32 precision, with a global worst-case relative error of 5,85e-08.

# Results

## Holocene Agricultural Expansion and Antique Imperial Zenith (10000BC to 1000AD)

Long-run population within the HANDBOOK domain traced a pronounced three-phase arc across the Holocene (Figure \ref{fig:handbook-traj}). Between 10000BC and 3200BC, the transition from Natufian and Capsian foraging to Neolithic village farming and Chalcolithic irrigation lifted aggregate numbers nearly tenfold from 1,15M to 10,6M. Early demographic concentration clustered along the Levantine corridor, Upper Mesopotamia, Central Anatolia and the Zagros piedmont before fourth-millennium hydraulic intensification shifted demographic leadership onto the lower Mesopotamian and Nile floodplains [@Palmisano2022NERD; @Adams1981Heartland].

<figure class="crd-figure-block" id="fig:handbook-traj">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0/fig2_handbook_long_run_trajectories.png" alt="fig:handbook-traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Holocene and pre-industrial population trajectory across HANDBOOK (10000BC to 1900AD) alongside post-1950 macro-regional expansion across major demographic blocs.</figcaption>
</figure>

During the Bronze and Iron Ages (3500BC to 539BC), irrigated alluvium and Mediterranean dry-farming sustained the first enduring state systems. Mesopotamian totals expanded from 955k in 3500BC to 3,62M by the fall of Neo-Babylonia in 539BC, while Pharaonic Egypt rose from 1,03M at dynastic unification (3200BC) to 4,13M on the eve of the Persian conquest (525BC). Parallel demographic build-up across Anatolia, the Levant and South Arabia (reaching 8,17M by 539BC) and across Elam, Media, Persia, Urartu, Caucasia and Bactria (9,38M by 330BC) established a polycentric imperial landscape totalling 26,68M by the Achaemenid unification.

Classical Antiquity and Late Antiquity (539BC to 632AD) raised the domain to its pre-modern ceiling. Under Ptolemaic, Roman, Parthian, Sassanid and Kushan administration, irrigated canal expansion in Mesopotamia and Khuzestan, intensive grain and olive estates across Roman North Africa and the Levant, and urban networks anchored by Alexandria, Antioch, Carthage, Ephesus and Ctesiphon elevated aggregate numbers past 41,84M by 632AD, despite severe second-century Antonine and sixth-century Justinianic plague shocks [@BagnallFrier1994; @Scheidel2001Death]. Under the Rashidun, Umayyad and Abbasid Caliphates (632AD to 1000AD), metropolitan growth in Baghdad, Fustat-Cairo, Damascus, Nishapur, Rayy and Kairouan carried regional totals to a mediaeval crest of 50,35M in 1000AD.

## Mediaeval Shocks, Early Modern Empires and Colonial Transitions (1000AD to 1950AD)

Between 1000AD and 1500AD, compounding ecological, political and epidemiological crises broke the antique demographic plateau. In Iraq and eastern Iran, canal neglect followed by thirteenth-century Mongol conquests and late fourteenth-century Timurid campaigns sharply reduced irrigated acreage and urban populations; in Egypt and the Levant, the 1348AD Black Death and recurring Mamluk-era pneumonic and bubonic outbreaks cut population by roughly a third to two-fifths, depressing combined mediaeval totals across Southwest Asia and North Africa to 40,02M by 1500AD [@Borsch2005BlackDeath; @Pamuk2007BlackDeath].

Sixteenth-century Ottoman consolidation across Anatolia, Syria, Egypt and the Maghreb, paired with Safavid urban reconstruction in Iran, initiated gradual recovery, though seventeenth-century climatic instability (the Little Ice Age) and Celali unrest slowed Anatolian growth [@Behar1995Ottoman; @Issawi1982Economic]. Sustained expansion resumed during the nineteenth century as steam transport, quarantine administration, Nile perennial basin conversion and export agriculture took hold. Ottoman Anatolian, Levantine and Mesopotamian territories reached 26,6M by 1918AD despite catastrophic First World War and Balkan War mortality [@Karpat1985Ottoman; @McCarthy1983Muslims]; Khedival and British-occupied Egypt expanded fivefold from 4,25M in 1799AD to 21,5M by 1952AD [@Saleh2013Egypt]; Safavid-Qajar Iran rose from 6,35M in 1501AD to 12,65M by 1925AD; Russian Imperial Transcaucasia climbed from 1,77M in 1801AD to 6M by 1917AD [@Troinitsky1905]; and colonial North Africa grew from 8,09M in 1830AD to more than 24,6M by mid-century decolonisation [@Kateb2001Algeria].

## Post-1950 Demographic Transition and Metropolitan Primacy (1950AD to 2026AD)

Since 1950AD, rapid mortality decline combined with sustained mid-century fertility and hydrocarbon-financed urban infrastructure transformed HANDBOOK from an agrarian macro-region of roughly 110M inhabitants into a heavily urbanised domain exceeding 593,7M by 2025AD (Table \ref{tab:modern-blocs} and Figure \ref{fig:handbook-urban}). Egypt expanded from 21,5M in 1952AD to 116,5M in 2026AD while remaining tightly compressed along the Nile Valley and Delta. The Maghreb and Libya climbed from 24,6M in 1951AD to 103,8M despite sharp late-twentieth-century fertility declines in Tunisia and Morocco [@CourbageTodd2011]. Iran surged from 12,65M in 1925AD to 89,8M by 2026AD before recording one of the steepest fertility transitions in modern demographic history [@AbbasiShavazi2009Iran]. Turkey expanded from 13,1M at the republic's founding in 1923AD to 85,66M in 2026AD, concentrating massively around Istanbul and the Marmara corridor.

<figure class="crd-table-figure" id="tab:modern-blocs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Module</th><th class="crd-th">Opening Total</th><th class="crd-th">Terminal Total</th><th class="crd-th">Annual Rate</th><th class="crd-th">Cities</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Republic of Turkey after 1923</strong></td><td class="crd-td">13,1M (1923AD)</td><td class="crd-td">85,66M (2026AD)</td><td class="crd-td">1,84%</td><td class="crd-td">326</td></tr>
<tr><td class="crd-td"><strong>Iran after 1925</strong></td><td class="crd-td">12,65M (1925AD)</td><td class="crd-td">89,8M (2026AD)</td><td class="crd-td">1,96%</td><td class="crd-td">281</td></tr>
<tr><td class="crd-td"><strong>Afghanistan after 1919</strong></td><td class="crd-td">6,28M (1919AD)</td><td class="crd-td">42,65M (2026AD)</td><td class="crd-td">1,81%</td><td class="crd-td">53</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia in the Soviet and Post-Soviet Eras</strong></td><td class="crd-td">6M (1917AD)</td><td class="crd-td">16,92M (2026AD)</td><td class="crd-td">0,96%</td><td class="crd-td">215</td></tr>
<tr><td class="crd-td"><strong>Syria, Lebanon, Jordan, Israel and Palestine after 1946</strong></td><td class="crd-td">6,55M (1946AD)</td><td class="crd-td">54,8M (2026AD)</td><td class="crd-td">2,69%</td><td class="crd-td">247</td></tr>
<tr><td class="crd-td"><strong>Iraq after 1932</strong></td><td class="crd-td">3,45M (1932AD)</td><td class="crd-td">46,04M (2026AD)</td><td class="crd-td">2,79%</td><td class="crd-td">156</td></tr>
<tr><td class="crd-td"><strong>Egypt after 1952</strong></td><td class="crd-td">21,5M (1952AD)</td><td class="crd-td">116,5M (2026AD)</td><td class="crd-td">2,31%</td><td class="crd-td">196</td></tr>
<tr><td class="crd-td"><strong>The Maghreb and Libya after Independence</strong></td><td class="crd-td">24,6M (1951AD)</td><td class="crd-td">103,8M (2026AD)</td><td class="crd-td">1,94%</td><td class="crd-td">534</td></tr>
<tr><td class="crd-td"><strong>Cyprus after Independence (1960-present)</strong></td><td class="crd-td">574k (1960AD)</td><td class="crd-td">1,36M (2026AD)</td><td class="crd-td">1,32%</td><td class="crd-td">47</td></tr>
<tr><td class="crd-td"><strong>Arabian Peninsula after 1971</strong></td><td class="crd-td">14,6M (1971AD)</td><td class="crd-td">94,8M (2026AD)</td><td class="crd-td">3,46%</td><td class="crd-td">290</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Modern Regime III national and regional demographic expansion across all ten post-imperial census chapters of HANDBOOK.</figcaption>
</figure>

Meanwhile, the Arabian Peninsula underwent the most rapid structural transformation in the domain: rising from 14,6M in 1971AD to 94,8M by 2026AD through dual engines—massive expatriate labour migration into the Gulf Cooperation Council city-states (Dubai, Abu Dhabi, Doha, Kuwait City, Manama, Riyadh, Jeddah) alongside sustained highland fertility and conflict displacement in Yemen [@Fargues2011GCC]. Iraq (3,45M in 1932AD to 46,04M in 2026AD) and Afghanistan (6,28M in 1919AD to 42,65M in 2026AD) maintained rapid natural increase despite repeated warfare and cross-border refugee flows, whereas post-Soviet Transcaucasia (16,92M in 2026AD) diverged sharply between demographic contraction in Georgia and Armenia and sustained growth in Azerbaijan.

<figure class="crd-figure-block" id="fig:handbook-urban">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0/fig4_handbook_urban_hierarchy.png" alt="fig:handbook-urban" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Contemporary rank-size distribution across modern catalogued HANDBOOK cities and the fourteen largest metropolitan centres in 2020AD to 2025AD.</figcaption>
</figure>

# Limitations

Four principal uncertainties bound HANDBOOK's reconstructions and warrant explicit qualification. First, archaeological site density prior to 500BC reflects regional survey intensity as well as past human habitation: well-surveyed corridors in the Nile Delta, Levant, Upper Mesopotamia and western Anatolia yield far denser site registers than interior Afghanistan, eastern Iran or southern Arabia, requiring empirical Bayes shrinkage and carrying-capacity residual kriging rather than raw site summation [@Palmisano2022NERD]. Second, nomadic and transhumant pastoralists across the Sahara, Arabian interior, Zagros and Afghan highlands leave ephemeral material traces and were systematically under-enumerated in Ottoman *tahrir*, Qajar and early colonial fiscal rolls; their numbers remain the widest source of uncertainty in pre-1920 trajectories [@Karpat1985Ottoman; @Issawi1982Economic]. Third, modern census coverage remains uneven in conflict-affected territories—most acutely Afghanistan (whose last partial national census occurred in 1979AD), Syria (last full census 2004AD), Yemen (2004AD), Libya (2006AD) and Lebanon (1932AD)—necessitating careful reconciliation of subadministrative projections, UNHCR displacement tallies and satellite built-up imagery [@Pesaresi2024GHSL]. Fourth, cross-border administrative boundary redefinitions between Ottoman vilayets, Mandate districts and modern ADM2 units introduce minor spatial reallocation uncertainty when comparing sub-national series across 1918AD to 1956AD transitions.

# Conclusion

HANDBOOK establishes a unified, spatially explicit twelve-millennium demographic reconstruction spanning 27 countries and territories across North Africa, the Near East, Anatolia, Cyprus, Transcaucasia, Iran, Afghanistan and the Arabian Peninsula. By coupling 83.857 primary archaeological observations, 4.411 individually evidence-assessed geocoded settlement trajectories, metric-isotropic radial distance fields, agro-ecologically calibrated non-stationary Matérn kriging and strictly mass-conserving pycnophylactic disaggregation across 2.658 historical and modern subadministrative polygons, the dataset resolves both millennial shifts in regional carrying capacity and fine-grained twentieth-century metropolitan concentration. Together with its 54 constituent regional studies and gazetteers, HANDBOOK integrates continuously across the Caucasus, Transoxiana and Indus frontiers into the wider Operation Viscount continental population mosaic.

## Regional Demographic Divergences and Historical Lessons

Viewing North Africa, Southwest Asia and Transcaucasia as a single comparative laboratory illuminates four enduring structural regularities across twelve millennia. First, ecological carrying capacity set firm pre-industrial ceilings that technology shifted only slowly prior to the nineteenth century. Before perennial basin conversion, steam pumping and chemical fertilisers, Egypt fluctuated inside a tight corridor between 1,5M and 5,5M inhabitants for four thousand years, Mesopotamia between 1M and 5M, and the Maghreb between 2M and 6M [@Adams1981Heartland; @BagnallFrier1994; @Saleh2013Egypt]. Hydraulic fragility meant that institutional breakdown—whether Late Bronze Age collapse, Abbasid canal neglect, Mongol conquest or Mamluk plague mortality—could slash river-basin numbers by half within two generations, whereas rain-fed upland zones in Anatolia, Mount Lebanon, Kabylia and the Yemen terraces displayed greater demographic resilience against state fragmentation [@Borsch2005BlackDeath; @Pamuk2007BlackDeath].

Second, twentieth-century demographic divergence across HANDBOOK reflects asynchronous timing of the fertility transition rather than uniform cultural determinism [@CourbageTodd2011]. Tunisia, Lebanon, Cyprus, Turkey, Georgia, Armenia and Iran completed rapid fertility declines toward or below replacement level between 1975AD and 2015AD—with Iran's total fertility rate falling faster than any previously recorded national cohort [@AbbasiShavazi2009Iran]. Conversely, Iraq, Yemen, Afghanistan, Palestine and Upper Egypt sustained elevated natural increase well into the twenty-first century, shifting regional demographic weight steadily southward and eastward within the domain.

Third, hydrocarbon rents and cross-border conflict generated demographic patterns unprecedented in pre-industrial history. Across the Gulf Cooperation Council, foreign labour inflows pushed non-national shares above 70% to 88% in Qatar, the United Arab Emirates and Kuwait, creating instant multi-million coastal metropolises on desert littoral sites that supported small pearling and trading ports in 1900AD [@Fargues2011GCC]. Simultaneously, protracted warfare in Palestine (1948AD and 1967AD), Cyprus (1974AD), Lebanon (1975AD to 1990AD), Afghanistan (1979AD onward), the South Caucasus (1988AD to 2023AD), Iraq (1980AD to 2017AD), Syria (2011AD onward) and Yemen (2014AD onward) displaced tens of millions of residents across provincial and international boundaries, transforming host cities such as Amman, Beirut, Gaziantep, Istanbul, Peshawar and Tehran while depopulating rural frontier districts.

Fourth, spatial disaggregation from national trajectories down to 2.658 subadministrative polygons and 4.411 coordinate-anchored settlements demonstrates that macro-regional aggregates conceal acute local concentration. By 2025AD, over 95% of Egypt's 116,5M residents inhabited less than 5% of national land area along the Nile floodplain; Istanbul and the Marmara rim concentrated more than a quarter of Turkey's population; and metropolitan Tehran, Riyadh, Baghdad, Casablanca and Algiers anchored dense coastal and piedmont urban corridors surrounded by sparsely inhabited steppes and deserts.

# Appendix

## Archaeological Horizon Site Mass and Kriging Diagnostics

Table \ref{tab:arch-horizons} reports domestic archaeological site totals and active HydroBASINS catchment counts across all ten chronological kriging horizons, tracing the empirical density of material evidence from Epipalaeolithic forager bands (1.472 weighted site observations across 278 active catchments) through the Classical Roman-Parthian-Kushan peak (12.032 weighted site observations across 1.423 catchments) and Early Modern Ottoman-Safavid-Qajar registers (1.941 observations across 1.309 catchments).

<figure class="crd-table-figure" id="tab:arch-horizons">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Chronological Horizon</th><th class="crd-th">Weighted Sites</th><th class="crd-th">Active Basins</th><th class="crd-th">Basin Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Epipalaeolithic &amp; Early Neolithic (13000BC-6500BC)</strong></td><td class="crd-td">1472</td><td class="crd-td">278</td><td class="crd-td">8,1%</td></tr>
<tr><td class="crd-td"><strong>Late Neolithic &amp; Chalcolithic (6500BC-3200BC)</strong></td><td class="crd-td">5657</td><td class="crd-td">1186</td><td class="crd-td">34,7%</td></tr>
<tr><td class="crd-td"><strong>Early &amp; Middle Bronze Age (3200BC-1600BC)</strong></td><td class="crd-td">7191</td><td class="crd-td">1176</td><td class="crd-td">34,4%</td></tr>
<tr><td class="crd-td"><strong>Late Bronze &amp; Iron Age (1600BC-539BC)</strong></td><td class="crd-td">9422</td><td class="crd-td">1289</td><td class="crd-td">37,7%</td></tr>
<tr><td class="crd-td"><strong>Achaemenid &amp; Hellenistic (539BC-30BC)</strong></td><td class="crd-td">7040</td><td class="crd-td">1315</td><td class="crd-td">38,5%</td></tr>
<tr><td class="crd-td"><strong>Roman, Parthian &amp; Kushan (30BC-300AD)</strong></td><td class="crd-td">12032</td><td class="crd-td">1423</td><td class="crd-td">41,7%</td></tr>
<tr><td class="crd-td"><strong>Byzantine &amp; Sassanid Late Antiquity (300AD-632AD)</strong></td><td class="crd-td">8467</td><td class="crd-td">1677</td><td class="crd-td">49,1%</td></tr>
<tr><td class="crd-td"><strong>Early Islamic Caliphate (632AD-1000AD)</strong></td><td class="crd-td">4595</td><td class="crd-td">1702</td><td class="crd-td">49,8%</td></tr>
<tr><td class="crd-td"><strong>Seljuk, Mamluk &amp; Timurid Era (1000AD-1517AD)</strong></td><td class="crd-td">2381</td><td class="crd-td">1311</td><td class="crd-td">38,4%</td></tr>
<tr><td class="crd-td"><strong>Ottoman, Safavid &amp; Qajar Era (1517AD-1900AD)</strong></td><td class="crd-td">1941</td><td class="crd-td">1309</td><td class="crd-td">38,3%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Weighted domestic archaeological site observations and active HydroBASINS Level 6 catchments (out of 3.416 domestic basins) across ten kriging horizons.</figcaption>
</figure>

## Long-Run Pan-Regional Benchmark Synthesis (10000BC to 2025AD)

To provide a transparent cross-check against global continental compilations [@McEvedyJones1978; @Maddison2001; @KleinGoldewijk2017], Table \ref{tab:holocene-benchmarks} compiles canonical pan-HANDBOOK totals alongside implied annual compound growth rates and mean domain densities across twelve millennia. Pre-industrial compound growth remained remarkably modest—averaging 0,03% per annum across the Neolithic and Chalcolithic expansion (10000BC to 3200BC), 0,03% across the Bronze and Iron Age urbanisation wave (3200BC to 539BC), and 0,05% through Classical and Late Antique integration—before swinging negative between 1000AD and 1500AD under compounding Mongol, Timurid and Black Death mortality shocks [@Borsch2005BlackDeath; @Pamuk2007BlackDeath]. Only after 1800AD did annual growth cross 0,6%, accelerating above 2,2% per annum between 1950AD and 2025AD as modern public health, rural-to-urban migration and hydrocarbon wealth expanded carrying capacity more than fivefold within three generations.

<figure class="crd-table-figure" id="tab:holocene-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Total Pop.</th><th class="crd-th">Mean Density</th><th class="crd-th">Demographic Regime</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC (Epipalaeolithic)</strong></td><td class="crd-td">1,15M</td><td class="crd-td">0,09</td><td class="crd-td">Forager-Proto-Neolithic</td></tr>
<tr><td class="crd-td"><strong>6000BC (Pottery Neolithic)</strong></td><td class="crd-td">4,1M</td><td class="crd-td">0,33</td><td class="crd-td">Levantine-Anatolian Farming</td></tr>
<tr><td class="crd-td"><strong>3200BC (Late Chalcolithic)</strong></td><td class="crd-td">10,6M</td><td class="crd-td">0,84</td><td class="crd-td">Hydraulic City-States</td></tr>
<tr><td class="crd-td"><strong>2000BC (Middle Bronze Age)</strong></td><td class="crd-td">16,4M</td><td class="crd-td">1,3</td><td class="crd-td">Bronze Age Kingdoms</td></tr>
<tr><td class="crd-td"><strong>539BC (Achaemenid Unification)</strong></td><td class="crd-td">26,68M</td><td class="crd-td">2,12</td><td class="crd-td">Near Eastern Empires</td></tr>
<tr><td class="crd-td"><strong>1AD (Early Roman &amp; Parthian)</strong></td><td class="crd-td">41,84M</td><td class="crd-td">3,32</td><td class="crd-td">Classical Mediterranean-Iranian</td></tr>
<tr><td class="crd-td"><strong>632AD (Late Antique Horizon)</strong></td><td class="crd-td">43,2M</td><td class="crd-td">3,43</td><td class="crd-td">Byzantine-Sassanid Equilibrium</td></tr>
<tr><td class="crd-td"><strong>1000AD (Abbasid &amp; Fatimid Zenith)</strong></td><td class="crd-td">50,35M</td><td class="crd-td">4</td><td class="crd-td">Caliphal Urban Peak</td></tr>
<tr><td class="crd-td"><strong>1500AD (Post-Black Death &amp; Timurid)</strong></td><td class="crd-td">40,02M</td><td class="crd-td">3,18</td><td class="crd-td">Epidemic &amp; Steppe Contraction</td></tr>
<tr><td class="crd-td"><strong>1800AD (Late Pre-Industrial)</strong></td><td class="crd-td">51,4M</td><td class="crd-td">4,08</td><td class="crd-td">Ottoman-Qajar Recovery</td></tr>
<tr><td class="crd-td"><strong>1900AD (Imperial &amp; Colonial Censuses)</strong></td><td class="crd-td">64,2M</td><td class="crd-td">5,1</td><td class="crd-td">Early Statistical Consolidation</td></tr>
<tr><td class="crd-td"><strong>1950AD (Post-War Baseline)</strong></td><td class="crd-td">110,64M</td><td class="crd-td">8,78</td><td class="crd-td">Decolonisation &amp; Mortality Drop</td></tr>
<tr><td class="crd-td"><strong>2000AD (Late Demographic Transition)</strong></td><td class="crd-td">384,2M</td><td class="crd-td">30,5</td><td class="crd-td">Metropolitan Transition</td></tr>
<tr><td class="crd-td"><strong>2025AD (Contemporary Enumeration)</strong></td><td class="crd-td">593,7M</td><td class="crd-td">47,13</td><td class="crd-td">Contemporary Polycentric Urban</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Canonical pan-HANDBOOK aggregate population benchmarks, mean domain densities (inhabitants per km² across 12,6M km²) and prevailing demographic regimes from 10000BC to 2025AD.</figcaption>
</figure>

## Cross-Frontier Harmonisation and Biophysical Calibration Audit

Table \ref{tab:calibration-audit} documents the principal geostatistical, spatial-geometry and cross-frontier quality indicators governing HANDBOOK's published 5-arcminute population rasters. Every parameter was calibrated exclusively within HANDBOOK's domain configuration so that regional biophysical adjustments—specifically radial Euclidean distance computation, perennial alluvial basin gating, mid-altitude highland elevation support across 600 to 2.550 metres, and organic non-oasis desert highway pruning—remain strictly isolated from neighbouring Operation Viscount regional studies.

<figure class="crd-table-figure" id="tab:calibration-audit">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Audit Dimension</th><th class="crd-th">Verified HANDBOOK Value</th><th class="crd-th">Quality Criterion</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Active Domain Land Footprint</strong></td><td class="crd-td">168.112 cells (12,6M km²)</td><td class="crd-td">0 starved units; 0 box cuts</td></tr>
<tr><td class="crd-td"><strong>Unique Domestic Archaeological Observations</strong></td><td class="crd-td">83.857 site-epochs (95,59% regional)</td><td class="crd-td">0% crowd-sourced records</td></tr>
<tr><td class="crd-td"><strong>Regional Enrichment vs Global Radiocarbon</strong></td><td class="crd-td">37,27x baseline multiplier</td><td class="crd-td">Strict regional archive dominance</td></tr>
<tr><td class="crd-td"><strong>Domestic / Frontier HydroBASINS Catchments</strong></td><td class="crd-td">3.416 domestic / 834 frontier</td><td class="crd-td">Median Voronoi radius 32,51 km</td></tr>
<tr><td class="crd-td"><strong>Raw Empirical Matérn Short-Range Scale</strong></td><td class="crd-td">1,52 dimensionless Voronoi lag</td><td class="crd-td">Non-stationary scale-adaptive</td></tr>
<tr><td class="crd-td"><strong>Calibrated Variogram Residual Fit</strong></td><td class="crd-td">0,9993 across 10 horizons</td><td class="crd-td">Two-scale Matérn (nu = 3/2)</td></tr>
<tr><td class="crd-td"><strong>Uninhabitable Wasteland Mass Leakage</strong></td><td class="crd-td">0% (leak ratio 0,0004)</td><td class="crd-td">Zero desert-bleed leakage</td></tr>
<tr><td class="crd-td"><strong>Log-Correlation vs Historical Prior</strong></td><td class="crd-td">0,83 across active land cells</td><td class="crd-td">Preserves macro-biophysical gradient</td></tr>
<tr><td class="crd-td"><strong>Urban Core Backprojection Median Ratio</strong></td><td class="crd-td">1,44 (median core ratio)</td><td class="crd-td">Threshold &lt;= 1,6</td></tr>
<tr><td class="crd-td"><strong>Prehistoric Urban Backprojection 95th Pct.</strong></td><td class="crd-td">1,21 (prehistoric 95th pct.)</td><td class="crd-td">Threshold &lt;= 1,65</td></tr>
<tr><td class="crd-td"><strong>Cross-Frontier Seam Pairs Audited</strong></td><td class="crd-td">30/30 passed (POLARIS, SARAY, INDUS, JADE)</td><td class="crd-td">0 cliff walls &gt;= 8 px</td></tr>
<tr><td class="crd-td"><strong>Subadministrative Unit-Year Mass Checks</strong></td><td class="crd-td">65.864/65.864 passed (100%)</td><td class="crd-td">100% pycnophylactic conservation</td></tr>
<tr><td class="crd-td"><strong>Worst-Case Subadministrative Relative Error</strong></td><td class="crd-td">5,85e-08 (float32 tolerance)</td><td class="crd-td">Threshold &lt; 1e-04</td></tr>
<tr><td class="crd-td"><strong>Catalogued Chapter Settlement Records</strong></td><td class="crd-td">4.411 evidence-assessed records across 27 chapters</td><td class="crd-td">27/27 chapters verified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Summary of HANDBOOK geostatistical sharpness, biophysical calibration, inter-regional seam harmonisation and pycnophylactic subadministrative audit metrics.</figcaption>
</figure>

## Summary of Geostatistical and Subadministrative Calibration Parameters

HANDBOOK's continuous 5-arcminute population rasters span 128 canonical benchmark years from 10000BC to 2025AD over 168.112 active land cells. Non-stationary Matérn ($\nu = 3/2$) kriging was calibrated across 3.416 domestic HydroBASINS catchments and 834 cross-frontier conditioning catchments, achieving global unclamped short-range correlation scale $\tau_1 = 1,52$ (effective calibrated $\tau_1 = 1,35$, long-range $\tau_2 = 2,90$, nugget ratio $c_0 = 0,04$, residual $R^2 = 0,9993$). Purely biophysical agro-ecological calibration isolated strictly to HANDBOOK pruned 24.181 hyper-arid non-oasis highway noise pixels while elevating mid-altitude orographic highlands (600 to 2.550 metres) and restricting strong fluvial concentration to true perennial alluvial basins. Pycnophylactic subadministrative disaggregation enforced exact mass conservation across 29 historical pre-1950 divisions and 2.629 contemporary ADM2/ADM1 units over 83 benchmark years (65.864 unit-year checks, 100% pass rate, maximum relative error 5,85e-08). Together, these verification protocols confirm that HANDBOOK's 5-arcminute population grids compose continuously alongside POLARIS, SARAY, INDUS and JADE without introducing border discontinuities or artificial urban backprojection across the Afro-Eurasian arid belt.

# Sources
