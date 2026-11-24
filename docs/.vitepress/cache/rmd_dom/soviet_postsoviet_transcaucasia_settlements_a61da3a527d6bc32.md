---
title: "Transcaucasia in the Soviet and Post-Soviet Eras"
subtitle: "Settlement Gazetteer of Georgia, Armenia and Azerbaijan, 1917AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_soviet_postsoviet_transcaucasia_spatial.png"
hero_caption: "Spatial distribution of 4.909 catalogued cities, towns and rural localities across Georgia, Armenia and Azerbaijan from 1917AD to 2026AD."
hero_label: "fig:hero-soviet-postsoviet-transcaucasia-settlements"
bibliography: soviet_postsoviet_transcaucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles population histories for 4.909 catalogued cities, towns and rural localities across Georgia (2.137 localities), Armenia (646 localities) and Azerbaijan (2.126 localities) from 1917AD to 2026AD. Drawn from the 1917AD-1923AD early Soviet regional lists, the six Soviet All-Union censuses (1926AD, 1939AD, 1959AD, 1970AD, 1979AD and 1989AD) and the post-1991 national locality registers of GeoStat, ArmStat and AzStat, the inventory documents historic capitals, ports and market centres - led by Baku, Tbilisi and Yerevan - alongside planned Soviet industrial cities and thousands of village enumerations. Across 5.199 screened candidate entries, 290 duplicate aliases, mis-assigned rayon totals and overlapping sub-district records are excluded in the source ledger to prevent double counting. Across the full 4.909-locality corpus, settlement peaks conform closely to a Zipf rank-size slope of $\alpha = 1{,}059$ ($R^2 = 0{,}967$), illuminating the divergence between post-Soviet contraction in Georgia and northern Armenia and rapid metropolitan expansion along the Baku-Sumqayıt-Abşeron Caspian corridor.

# Background

At the close of Tsarist rule in 1917AD, Transcaucasia possessed an asymmetric urban hierarchy rooted in imperial transport and resource extraction [@Gazi2025Historical; @Cordier2017Once]. Baku, propelled by the late nineteenth-century Caspian petroleum boom, and Tbilisi, the administrative, commercial and rail hub of the Caucasus Viceroyalty, already overshadowed every inland market town [@Anon2021Historical]. On the Black Sea littoral, Batumi served as the terminus of the Baku-Batumi kerosene pipeline and railway alongside the port of Poti (founded as a modern port city in 1858AD), while inland Georgia looked to Kutaisi and Gori [@Tukhashvili2016Socio]. In Armenia, Yerevan remained a modest provincial seat compared with its post-1920 expansion, whereas Alexandropol (Gyumri, established as a Russian garrison town in 1837AD) and Karaklis (Vanadzor, 1828AD) anchored the northern rail corridor across Shirak and Lori alongside Sevan (founded in 1842AD) [@Saparov2003Alteration; @Franklin2017Examining].

Under Soviet Five-Year Plans between 1928AD and 1975AD, state planners reshaped this sparse urban map by creating purpose-built heavy industrial, metallurgical, petrochemical and hydroelectric cities. In Azerbaijan, Mingachevir rose in 1948AD beside the Kura hydroelectric dam and Sumqayıt was founded in 1949AD on the northern Absheron coast to house chemical and aluminium plants, growing into the fourth largest city in the South Caucasus [@Babashova2021Developmen]. In Georgia, Rustavi was laid out in 1948AD around a major integrated steelworks southeast of Tbilisi. In Armenia, Charentsavan and Kajaran (1947AD), Hrazdan (1959AD), Abovyan (1963AD) and Metsamor (1969AD) concentrated machine building, copper-molybdenum extraction and nuclear power generation around Yerevan and southern Syunik [@Saparov2003Alteration].

After December 1991, war displacement, industrial closure and international labour migration reversed or redirected urban trajectories across all three republics [@Group2019South; @Kacka2021Migration]. Earthquakes and economic blockade cut Gyumri and Vanadzor to barely half their late Soviet sizes, Abkhazia's war depopulated Sokhumi and surrounding Black Sea towns [@Lundstedt2024Territoria; @Arbatova2019Three], and provincial Georgian and Armenian towns lost young workers abroad, while Baku, Sumqayıt and Xırdalan absorbed hundreds of thousands of internal migrants and displaced families from Karabakh [@Babashova2021Developmen; @Nouvelle2024Legal].

# Methodology

Settlement series in this gazetteer were assembled from early Soviet 1917AD-1923AD provincial locality registers, the 1926AD, 1939AD, 1959AD, 1970AD, 1979AD and 1989AD Soviet All-Union censuses and the post-1991 national censuses and complete locality yearbooks of GeoStat (Georgia, 2002AD-2024AD), ArmStat (Armenia, 2001AD-2022AD) and AzStat (Azerbaijan, 1999AD-2025AD) [@Anderson1990Growth; @Anon2019Migration; @Verdiyeva2019Population]. Inter-censal annual benchmarks interpolate smoothly between observed census enumerations while preserving exact breaks at foundation years and conflict shocks.

Three compilation safeguards govern inclusion. First, explicit foundation-year bounds prevent synthetic backward extrapolation into decades before a Soviet or nineteenth-century planned settlement existed: twelve settlements carry documented foundation truncations ranging from Vanadzor (1828AD) and Gyumri (1837AD) to Rustavi (1948AD), Mingəçevir (1948AD), Sumqayıt (1949AD), Hrazdan (1959AD), Abovyan (1963AD) and Metsamor (1969AD). Second, 290 duplicate aliases, overlapping exonym twins (such as Bakı merged into Baku and Gəncə merged into Ganja) and mis-assigned sub-district records were excluded across 5.199 screened candidates in the source ledger to prevent double counting. Third, all 4.909 retained entries are geolocated to verified WGS84 coordinates and linked to geoBoundaries ADM1 and ADM2 administrative polygons [@Runfola2020GeoBoundaries]. Table \ref{tab:gazetteer-republic-summary} summarises settlement counts and aggregate enumerated populations by republic across four key census benchmarks.

<figure class="crd-table-figure" id="tab:gazetteer-republic-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Republic</th><th class="crd-th">Settlements</th><th class="crd-th">1917AD</th><th class="crd-th">1959AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">2.126</td><td class="crd-td">549,7k</td><td class="crd-td">1,77M</td><td class="crd-td">3,86M</td><td class="crd-td">5,47M</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">2.137</td><td class="crd-td">879,6k</td><td class="crd-td">1,77M</td><td class="crd-td">3,14M</td><td class="crd-td">2,47M</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">646</td><td class="crd-td">172,1k</td><td class="crd-td">942,6k</td><td class="crd-td">2,23M</td><td class="crd-td">1,98M</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia Gazetteer Total</strong></td><td class="crd-td">4.909</td><td class="crd-td">1,6M</td><td class="crd-td">4,48M</td><td class="crd-td">9,23M</td><td class="crd-td">9,92M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Number of catalogued settlements (4.909 total) and summed enumerated populations across Azerbaijan, Georgia and Armenia at four benchmark dates from 1917AD to 2025AD.</figcaption>
</figure>

# Testing and Validation

Settlement hierarchy consistency across all 4.909 catalogued cities, towns and rural localities was evaluated against a log-linear Zipf rank-size model using peak observed populations across 1917AD-2026AD. As shown in Figure \ref{fig:settlements-zipf}, the distribution yields a Zipf exponent of $\alpha = 1{,}059$ with $R^2 = 0{,}967$, demonstrating tight power-law regularity from the three million-plus capitals down through secondary cities (100k-450k), district centres and rural village registers. Cross-checks against GeoStat, ArmStat and AzStat municipal boundaries [@Runfola2020GeoBoundaries] confirm the exclusion of 290 duplicate aliases and overlapping sub-districts out of 5.199 screened candidates, resolving earlier exonym twins such as Bakı/Baku and Gəncə/Ganja while retaining transparent metropolitan vs core-city distinctions across the full locality corpus.

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-soviet-postsoviet-transcaucasia-settlements/fig4_soviet_postsoviet_transcaucasia_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size Zipf distribution across 4.909 Transcaucasian settlements (Panel A, slope 1,059, R² = 0,967) and the 12 leading urban centres by peak population (Panel B).</figcaption>
</figure>

# Results

Three tiers define Transcaucasia's modern urban system. At the summit stands the triad of national capitals: Baku (rising from 248k in 1917AD and 446,8k in 1926AD to 1,15M in 1989AD and a metropolitan peak of 2,3M in 2021AD, with 1,31M in the 2025AD core-city series and 2,64M across the Baku City ADM2 unit), Tbilisi (expanding from 278k in 1917AD to 1,24M in 1989AD and a 1,4M peak in 1998AD, dipping to 1,08M in 2014AD and rebounding to 1,27M in 2024AD-2025AD and 1,31M in 2026AD) and Yerevan (climbing from 42,5k in 1917AD and 64,6k in 1926AD to a peak of 1,2M in 1989AD before post-1991 emigration reduced it to 1,06M in 2011AD and 1,14M in 2025AD).

In the second tier (100k to 450k), national divergence becomes unmistakable. Azerbaijan's Caspian corridor surged after 1991AD: Sumqayıt nearly doubled from 231,1k in 1989AD to 440,9k in 2025AD, Xırdalan grew nearly eight-fold from 28,2k in 1989AD to 215,8k in 2025AD as Baku's western spillover town, and Absheron townships such as Maştağa (109,1k peak), Binə (90,8k), Biləcəri (87k) and Qaraçuxur (86,3k) expanded rapidly alongside interior cities Ganja (354,6k) and Mingəçevir (122,2k). Georgia's second-tier towns diverged sharply by geography: Batumi expanded on Turkish border trade and tourism to 235,7k in 2024AD and 246,3k in 2026AD [@Tukhashvili2016Socio], whereas Soviet industrial and western inland centres contracted - Kutaisi fell from 232,5k in 1989AD to 147,6k in 2014AD (160,6k in 2025AD), Rustavi declined from 159k in 1989AD, and Sokhumi dropped sharply after the 1992AD-1993AD war [@Lundstedt2024Territoria]. In Armenia, Gyumri never regained its pre-earthquake peak of 238k in 1988AD (falling to 122,6k in 1989AD and 114,7k in 2025AD) and Vanadzor dropped sharply from its 146k 1979AD peak [@Hofmann2026Build].

Table \ref{tab:top-30-settlements} reports benchmark populations from 1917AD to 2025AD for the 30 largest catalogued settlements, illustrating both metropolitan concentration and regional industrial growth.

<figure class="crd-table-figure" id="tab:top-30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Republic</th><th class="crd-th">1917AD</th><th class="crd-th">1959AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baku</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">248k</td><td class="crd-td">642,5k</td><td class="crd-td">1,15M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">278k</td><td class="crd-td">694,7k</td><td class="crd-td">1,24M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">42,5k</td><td class="crd-td">509,3k</td><td class="crd-td">1,2M</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Sumqayıt</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">51,5k</td><td class="crd-td">231,1k</td><td class="crd-td">440,9k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">60,2k</td><td class="crd-td">116,1k</td><td class="crd-td">280,6k</td><td class="crd-td">354,6k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">31,2k</td><td class="crd-td">82,3k</td><td class="crd-td">136,6k</td><td class="crd-td">235,2k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">51,9k</td><td class="crd-td">108,4k</td><td class="crd-td">122,6k</td><td class="crd-td">114,7k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">52,8k</td><td class="crd-td">128,2k</td><td class="crd-td">232,5k</td><td class="crd-td">160,6k</td></tr>
<tr><td class="crd-td"><strong>Xırdalan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">28,2k</td><td class="crd-td">215,8k</td></tr>
<tr><td class="crd-td"><strong>Rustavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">-</td><td class="crd-td">62,4k</td><td class="crd-td">159k</td><td class="crd-td">131,8k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">6,2k</td><td class="crd-td">49,4k</td><td class="crd-td">75,6k</td><td class="crd-td">78,1k</td></tr>
<tr><td class="crd-td"><strong>Mingəçevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">19,9k</td><td class="crd-td">85,4k</td><td class="crd-td">122,2k</td></tr>
<tr><td class="crd-td"><strong>Sokhumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">21,8k</td><td class="crd-td">64,7k</td><td class="crd-td">119,2k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">17k</td><td class="crd-td">40,3k</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Lankaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">16,1k</td><td class="crd-td">25,2k</td><td class="crd-td">45k</td><td class="crd-td">95,8k</td></tr>
<tr><td class="crd-td"><strong>Lerik</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">5,8k</td><td class="crd-td">93,3k</td></tr>
<tr><td class="crd-td"><strong>Telavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">16,9k</td><td class="crd-td">15,3k</td><td class="crd-td">27,8k</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Binə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">22,8k</td><td class="crd-td">90,8k</td></tr>
<tr><td class="crd-td"><strong>Biləcəri</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">30,5k</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Qaraçuxur</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">46,4k</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Hövsan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>Naxçıvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">11,9k</td><td class="crd-td">25,3k</td><td class="crd-td">59,8k</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Şirvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">13,4k</td><td class="crd-td">58,3k</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Kanakerr-Zeytun</strong></td><td class="crd-td">Armenia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bakıxanov</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">25,1k</td><td class="crd-td">73,7k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Məmməd Əmin Rəsulzadə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">34,3k</td><td class="crd-td">524</td></tr>
<tr><td class="crd-td"><strong>Rəsulzadə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,3k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Akhaltsikhe</strong></td><td class="crd-td">Georgia</td><td class="crd-td">21,5k</td><td class="crd-td">16,9k</td><td class="crd-td">24,6k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Sheki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,9k</td><td class="crd-td">34,3k</td><td class="crd-td">56,2k</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">5,2k</td><td class="crd-td">31,1k</td><td class="crd-td">49,6k</td><td class="crd-td">46,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Thirty largest catalogued settlements in Transcaucasia ranked by peak population across 1917AD-2026AD, with hyphens marking dates prior to foundation or outside reported municipal series.</figcaption>
</figure>

# Limitations

Three constraints affect settlement-level comparisons. First, post-1991 municipal tallies in Abkhazia (Sokhumi, Gagra, Ochamchire, Gudauta, Tkvarcheli) and Nagorno-Karabakh (Xankəndi, Khojaly, Shusha) rely on interrupted or contested local estimates rather than internationally audited censuses [@Arbatova2019Three; @Nouvelle2024Legal]. Second, municipal boundaries in Azerbaijan distinguish the Baku City administrative district (2,64M across 2.098 km²) and metropolitan city series (2,3M in 2021AD) from the inner urban core (1,31M in 2025AD) and outlying Absheron settlements (*qəsəbələr*), whereas Tbilisi and Yerevan encompass wider consolidated urban boundaries. Third, integrating 1923AD early Soviet district-level returns alongside modern village registers introduces occasional historical peaks in rural districts (such as Telavi at 91,9k and Akhaltsikhe at 73,4k in 1923AD) and partial temporal coverage for small mountain villages enumerated only in 2002AD-2024AD national censuses.

# Appendix

Table \ref{tab:full-settlement-directory} lists the 150 largest settlements by peak population drawn from the full 4.909-locality Transcaucasian corpus across Georgia, Armenia and Azerbaijan sorted by republic and name, reporting geographic coordinates, active series span, peak population with peak year and 2025AD population. The complete 4.909-locality archive is preserved in the chapter JSON dataset.

<figure class="crd-table-figure" id="tab:full-settlement-directory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Republic</th><th class="crd-th">Coordinates</th><th class="crd-th">Active Span</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Latest (2025AD)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Abovyan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,27°N, 44,63°E</td><td class="crd-td">1970AD-2026AD</td><td class="crd-td">58,7k (1989AD)</td><td class="crd-td">50,6k</td></tr>
<tr><td class="crd-td"><strong>Alaverdi</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,1°N, 44,67°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">26,3k (1989AD)</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Ararat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,85°N, 44,69°E</td><td class="crd-td">1926AD-2025AD</td><td class="crd-td">20,5k (2001AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Armavir</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,16°N, 44,04°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">46,9k (1989AD)</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Artashat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,95°N, 44,55°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">32,3k (1989AD)</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Artik</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,62°N, 43,97°E</td><td class="crd-td">1939AD-2025AD</td><td class="crd-td">25,1k (1989AD)</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Ashtarak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,3°N, 44,36°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,6k (1989AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Charentsavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,4°N, 44,64°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">33,9k (1989AD)</td><td class="crd-td">24,1k</td></tr>
<tr><td class="crd-td"><strong>Dilijan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,74°N, 44,86°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,7k (1989AD)</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Gavar</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,35°N, 45,12°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">31,2k (1989AD)</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Goris</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,51°N, 46,34°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,8k (1989AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,79°N, 43,85°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">238k (1988AD)</td><td class="crd-td">114,7k</td></tr>
<tr><td class="crd-td"><strong>Hrazdan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,52°N, 44,76°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">60,8k (1989AD)</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Ijevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,88°N, 45,15°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,1k (2013AD)</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Kanakerr-Zeytun</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,21°N, 44,54°E</td><td class="crd-td">2001AD-2011AD</td><td class="crd-td">77,7k (2001AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kapan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,21°N, 46,41°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">45,7k (2001AD)</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Masis</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,07°N, 44,44°E</td><td class="crd-td">1926AD-2026AD</td><td class="crd-td">23,1k (2025AD)</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,55°N, 44,95°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">27k (1989AD)</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Sisian</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,52°N, 46,03°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,8k (2001AD)</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Spitak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,83°N, 44,27°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15k (2001AD)</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Stepanavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,01°N, 44,39°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,5k (1979AD)</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Vagharshapat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,17°N, 44,29°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">60,5k (1989AD)</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,81°N, 44,5°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">146k (1979AD)</td><td class="crd-td">78,1k</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,18°N, 44,51°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">1,2M (1989AD)</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Ağcabədi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40°N, 47,42°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">52,8k (2025AD)</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Ağdam</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,99°N, 46,93°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">28k (1989AD)</td><td class="crd-td">375</td></tr>
<tr><td class="crd-td"><strong>Ağdaş</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,65°N, 47,47°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">31,7k (2016AD)</td><td class="crd-td">30,6k</td></tr>
<tr><td class="crd-td"><strong>Ağsu</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 48,4°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">21,9k (2025AD)</td><td class="crd-td">21,9k</td></tr>
<tr><td class="crd-td"><strong>Astara</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,46°N, 48,87°E</td><td class="crd-td">1923AD-2025AD</td><td class="crd-td">17,6k (2019AD)</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Badamdar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 49,8°E</td><td class="crd-td">1980AD-2026AD</td><td class="crd-td">32,2k (2025AD)</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Bakıxanov</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,42°N, 49,97°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">77,2k (2019AD)</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Baku</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,37°N, 49,84°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">2,3M (2021AD)</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Balaxanı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,46°N, 49,92°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">25,5k (2019AD)</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Bayıl</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,35°N, 49,83°E</td><td class="crd-td">1939AD-1939AD</td><td class="crd-td">18,5k (1939AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Belokany</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,73°N, 46,4°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16k (1939AD)</td><td class="crd-td">15,9k</td></tr>
<tr><td class="crd-td"><strong>Bərdə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,38°N, 47,13°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">53,5k (2025AD)</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Beyləqan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,78°N, 47,62°E</td><td class="crd-td">1939AD-2025AD</td><td class="crd-td">27k (2017AD)</td><td class="crd-td">21,9k</td></tr>
<tr><td class="crd-td"><strong>Biləcəri</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,44°N, 49,81°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">87k (2025AD)</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Biləsuvar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,46°N, 48,55°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">23,3k (2025AD)</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Binə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,45°N, 50,09°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">90,8k (2025AD)</td><td class="crd-td">90,8k</td></tr>
<tr><td class="crd-td"><strong>Buzovna</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,52°N, 50,11°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">38,9k (2025AD)</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Cəlilabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21°N, 48,49°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">43,5k (2025AD)</td><td class="crd-td">43,5k</td></tr>
<tr><td class="crd-td"><strong>Corat</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 49,71°E</td><td class="crd-td">1939AD-2025AD</td><td class="crd-td">21,4k (2025AD)</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Əmircan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,98°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">34,2k (2025AD)</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Ərkivan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,01°N, 48,65°E</td><td class="crd-td">1999AD-2019AD</td><td class="crd-td">17,5k (2017AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Füzuli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,6°N, 47,15°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">17,5k (1991AD)</td><td class="crd-td">250</td></tr>
<tr><td class="crd-td"><strong>Gadabay</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 45,81°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15,6k (2025AD)</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,68°N, 46,36°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">354,6k (2025AD)</td><td class="crd-td">354,6k</td></tr>
<tr><td class="crd-td"><strong>Gazakh</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,09°N, 45,37°E</td><td class="crd-td">1926AD-2019AD</td><td class="crd-td">28k (2019AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Göyçay</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,65°N, 47,74°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">42,5k (2016AD)</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Göygöl</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,59°N, 46,32°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,2k (2025AD)</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Hacı Zeynalabdin Tağıyev</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,62°N, 49,56°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">34,6k (2025AD)</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Hacıqabul</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,04°N, 48,94°E</td><td class="crd-td">1923AD-2026AD</td><td class="crd-td">27,5k (2025AD)</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Hökməli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,74°E</td><td class="crd-td">1959AD-2025AD</td><td class="crd-td">18,9k (2025AD)</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Hövsan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,37°N, 50,09°E</td><td class="crd-td">1970AD-2026AD</td><td class="crd-td">85,3k (2013AD)</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>İmişli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,87°N, 48,06°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">38,2k (2025AD)</td><td class="crd-td">38,2k</td></tr>
<tr><td class="crd-td"><strong>İsmayıllı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,78°N, 48,15°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">26k (2025AD)</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Julfa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,95°N, 45,63°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,7k (2025AD)</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Keşlə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,9°E</td><td class="crd-td">1980AD-2026AD</td><td class="crd-td">32,9k (2025AD)</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Kürdəmir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,42°N, 46,62°E</td><td class="crd-td">1926AD-2025AD</td><td class="crd-td">19,7k (2025AD)</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Kyurdarmir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 48,16°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,5k (2025AD)</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Lankaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,75°N, 48,85°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">95,8k (2025AD)</td><td class="crd-td">95,8k</td></tr>
<tr><td class="crd-td"><strong>Lerik</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,77°N, 48,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">93,3k (2025AD)</td><td class="crd-td">93,3k</td></tr>
<tr><td class="crd-td"><strong>Lökbatan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,33°N, 49,73°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">43,7k (2025AD)</td><td class="crd-td">43,7k</td></tr>
<tr><td class="crd-td"><strong>Masallı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,04°N, 48,67°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">26,3k (2025AD)</td><td class="crd-td">26,3k</td></tr>
<tr><td class="crd-td"><strong>Masazır</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,48°N, 49,76°E</td><td class="crd-td">1999AD-2024AD</td><td class="crd-td">68,3k (2019AD)</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,53°N, 50,01°E</td><td class="crd-td">1926AD-2026AD</td><td class="crd-td">109,1k (2019AD)</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Mehdiabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,5°N, 49,85°E</td><td class="crd-td">1980AD-2026AD</td><td class="crd-td">22,6k (2025AD)</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Məmməd Əmin Rəsulzadə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,84°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">77,2k (1979AD)</td><td class="crd-td">524</td></tr>
<tr><td class="crd-td"><strong>Mərdəkan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,49°N, 50,14°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">36,3k (2025AD)</td><td class="crd-td">36,3k</td></tr>
<tr><td class="crd-td"><strong>Mingəçevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,64°N, 46,99°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">122,2k (2025AD)</td><td class="crd-td">122,2k</td></tr>
<tr><td class="crd-td"><strong>Nardaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,56°N, 50,01°E</td><td class="crd-td">1970AD-2026AD</td><td class="crd-td">28,8k (2019AD)</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Naxçıvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21°N, 45,41°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">83,7k (2025AD)</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Neftçala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,38°N, 49,25°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">22,1k (2025AD)</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Nehrəm</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,12°N, 45,46°E</td><td class="crd-td">1999AD-2019AD</td><td class="crd-td">16,5k (2019AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Qabala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,98°N, 47,85°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15k (2019AD)</td><td class="crd-td">12,7k</td></tr>
<tr><td class="crd-td"><strong>Qaraçuxur</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,97°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">86,3k (2025AD)</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Qax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,42°N, 46,92°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,6k (2019AD)</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Qazax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,26°N, 45,09°E</td><td class="crd-td">1959AD-2025AD</td><td class="crd-td">21k (2011AD)</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Qobu</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,71°E</td><td class="crd-td">1939AD-2025AD</td><td class="crd-td">19,4k (2025AD)</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Qobustan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,08°N, 49,41°E</td><td class="crd-td">1959AD-2025AD</td><td class="crd-td">21,2k (2025AD)</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Qovlar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,95°N, 45,73°E</td><td class="crd-td">1970AD-2019AD</td><td class="crd-td">15k (2019AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Quba</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,36°N, 48,51°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">24,8k (2025AD)</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Qusar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,43°N, 48,43°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">21,5k (2025AD)</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Ramana</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,44°N, 49,98°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">44,5k (2019AD)</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Rəsulzadə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 50,04°E</td><td class="crd-td">1979AD-2025AD</td><td class="crd-td">77,2k (1979AD)</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Saatlı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,93°N, 48,37°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">19,2k (2025AD)</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Sabirabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,01°N, 48,48°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">30,8k (2025AD)</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Şabran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,2°N, 48,99°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">25,1k (2025AD)</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Sahil</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,22°N, 49,58°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">28,1k (2025AD)</td><td class="crd-td">28,1k</td></tr>
<tr><td class="crd-td"><strong>Salyan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,6°N, 48,98°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">39,2k (2025AD)</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Şamaxı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,63°N, 48,64°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">40,4k (2025AD)</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Saray</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,53°N, 49,72°E</td><td class="crd-td">1970AD-2026AD</td><td class="crd-td">41,5k (2025AD)</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Şəki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,91°N, 47,21°E</td><td class="crd-td">1926AD-2025AD</td><td class="crd-td">66,4k (2025AD)</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Şəmkir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,83°N, 46,08°E</td><td class="crd-td">1923AD-2026AD</td><td class="crd-td">67,7k (2012AD)</td><td class="crd-td">41,9k</td></tr>
<tr><td class="crd-td"><strong>Sheki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,19°N, 47,17°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">73,4k (2025AD)</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>Şirvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,94°N, 48,93°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">79,9k (2025AD)</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Siyəzən</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,08°N, 49,12°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">25,9k (2025AD)</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Sulutəpə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,76°E</td><td class="crd-td">1980AD-2026AD</td><td class="crd-td">22,9k (2025AD)</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Sumqayıt</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,59°N, 49,67°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">440,9k (2025AD)</td><td class="crd-td">440,9k</td></tr>
<tr><td class="crd-td"><strong>Surakhany</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,39°N, 50,02°E</td><td class="crd-td">1974AD-1974AD</td><td class="crd-td">15,3k (1974AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Suraxanı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,71°N, 48,47°E</td><td class="crd-td">1959AD-2019AD</td><td class="crd-td">18k (1959AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Şuşa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,76°N, 46,75°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">43,9k (1917AD)</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Şüvəlan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,48°N, 50,18°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">23,6k (2025AD)</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Tərtər</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 46,93°E</td><td class="crd-td">1923AD-2026AD</td><td class="crd-td">25,9k (2025AD)</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Tovuz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,99°N, 45,63°E</td><td class="crd-td">1923AD-2026AD</td><td class="crd-td">19,6k (2025AD)</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Ujar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,52°N, 47,65°E</td><td class="crd-td">1923AD-2025AD</td><td class="crd-td">17k (2019AD)</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Xaçmaz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,46°N, 48,81°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">43,4k (2025AD)</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Xankəndi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,76°N, 48,41°E</td><td class="crd-td">1926AD-2025AD</td><td class="crd-td">63,4k (2025AD)</td><td class="crd-td">63,4k</td></tr>
<tr><td class="crd-td"><strong>Xankəndi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,82°N, 46,75°E</td><td class="crd-td">1926AD-2019AD</td><td class="crd-td">58,3k (2019AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Xırdalan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,45°N, 49,76°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">215,8k (2025AD)</td><td class="crd-td">215,8k</td></tr>
<tr><td class="crd-td"><strong>Xudat</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,63°N, 48,68°E</td><td class="crd-td">1959AD-2019AD</td><td class="crd-td">15,9k (2019AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yevlax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,67°N, 47°E</td><td class="crd-td">1926AD-2025AD</td><td class="crd-td">68k (2025AD)</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Zabrat</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,48°N, 49,94°E</td><td class="crd-td">1939AD-2026AD</td><td class="crd-td">45,1k (2019AD)</td><td class="crd-td">43,3k</td></tr>
<tr><td class="crd-td"><strong>Zaqatala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,63°N, 46,64°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">21,8k (2025AD)</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Akhalkalaki</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,41°N, 43,49°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">15,2k (1989AD)</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Akhaltsikhe</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,64°N, 42,99°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">73,4k (1923AD)</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,64°N, 41,63°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">246,3k (2026AD)</td><td class="crd-td">235,2k</td></tr>
<tr><td class="crd-td"><strong>Bolnisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,45°N, 44,54°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">16,3k (1968AD)</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Borjomi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,85°N, 43,4°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">18,1k (1979AD)</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Chiatura</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,3°N, 43,3°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">29k (1991AD)</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Dighomi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,77°N, 44,73°E</td><td class="crd-td">1917AD-2024AD</td><td class="crd-td">22,1k (2024AD)</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Dushetis</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,35°N, 44,78°E</td><td class="crd-td">1923AD-1923AD</td><td class="crd-td">63,5k (1923AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gagra</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,28°N, 40,27°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">24,4k (1979AD)</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Gal</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,63°N, 41,74°E</td><td class="crd-td">1926AD-2026AD</td><td class="crd-td">15,8k (1989AD)</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Gardabani</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,46°N, 45,09°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">17k (1989AD)</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Gori</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,99°N, 44,11°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">67,8k (1989AD)</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td"><strong>Gudautis</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,25°N, 40,67°E</td><td class="crd-td">1923AD-1923AD</td><td class="crd-td">24k (1923AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gwdouţa</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,1°N, 40,62°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,9k (1989AD)</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Kaspi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,93°N, 44,42°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">17,1k (1989AD)</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Khashuri</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42°N, 43,6°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">31,7k (1989AD)</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Khoni</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,33°N, 42,42°E</td><td class="crd-td">1922AD-2026AD</td><td class="crd-td">14,5k (1979AD)</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Kobuleti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,83°N, 41,78°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">20,6k (1989AD)</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27°N, 42,69°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">232,5k (1989AD)</td><td class="crd-td">160,6k</td></tr>
<tr><td class="crd-td"><strong>Marneuli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,49°N, 44,8°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">27,1k (1989AD)</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Očamčyra</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,71°N, 41,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,1k (1989AD)</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Ozurgeti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,92°N, 42,01°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">23,3k (1989AD)</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,14°N, 41,67°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">51k (1974AD)</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Rustavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,56°N, 44,98°E</td><td class="crd-td">1959AD-2026AD</td><td class="crd-td">159k (1989AD)</td><td class="crd-td">131,8k</td></tr>
<tr><td class="crd-td"><strong>Sagarejo</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,74°N, 45,33°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">15k (1991AD)</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Samtredia</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,15°N, 42,34°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">34,3k (1989AD)</td><td class="crd-td">24,7k</td></tr>
<tr><td class="crd-td"><strong>Sokhumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43°N, 41,02°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">119,2k (1989AD)</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,69°N, 44,83°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">1,4M (1998AD)</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Tchinval</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,23°N, 43,97°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">42,9k (1989AD)</td><td class="crd-td">35,3k</td></tr>
<tr><td class="crd-td"><strong>Telavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,92°N, 45,47°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">91,9k (1923AD)</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Tkibuli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,35°N, 43°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">23,2k (1970AD)</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Tqwarčal</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,84°N, 41,68°E</td><td class="crd-td">1923AD-2025AD</td><td class="crd-td">28,4k (1959AD)</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tsqaltubo</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,33°N, 42,6°E</td><td class="crd-td">1923AD-2026AD</td><td class="crd-td">17,7k (1979AD)</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Zestaponi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,11°N, 43,03°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">25,9k (1989AD)</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,51°N, 41,87°E</td><td class="crd-td">1917AD-2026AD</td><td class="crd-td">68,9k (2002AD)</td><td class="crd-td">46,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Directory of the 150 largest settlements out of 4.909 catalogued Transcaucasian localities from 1917AD to 2026AD, sorted by republic and name.</figcaption>
</figure>

# Sources
