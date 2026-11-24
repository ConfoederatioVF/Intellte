---
title: "Transcaucasia in the Soviet and Post-Soviet Eras"
subtitle: "Settlement Gazetteer of Georgia, Armenia and Azerbaijan, 1917AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_soviet_postsoviet_transcaucasia_spatial.png"
hero_caption: "Spatial distribution of 209 catalogued towns, planned industrial cities and district centres across Georgia, Armenia and Azerbaijan from 1917AD to 2026AD."
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

This gazetteer compiles urban and district-seat population histories for 209 catalogued settlements across Georgia (53 settlements), Armenia (48 settlements) and Azerbaijan (108 settlements) from 1917AD to 2026AD. Drawn from the six Soviet All-Union censuses (1926AD, 1939AD, 1959AD, 1970AD, 1979AD and 1989AD) and the post-1991 national statistical series of GeoStat, ArmStat and AzStat, the inventory documents both historic caravan, port and administrative centres - led by Bakı, Tbilisi and Yerevan - and twelve planned industrial or mining cities whose foundation dates anchor twentieth-century urban growth. Five subordinate peri-urban localities lying within 2 km of primary cores (Bakıxanov, Binəqədi, Əmircan and Bülbülə near Bakı, plus Akhtala in Armenia) are excluded to avoid double counting. Across the full sample, city populations conform closely to a Zipf rank-size slope of $\alpha = 1{,}1$ ($R^2 = 0{,}929$), illuminating the divergence between post-Soviet urban contraction in Georgia and northern Armenia and rapid metropolitan expansion along the Baku-Sumqayıt-Abşeron Caspian corridor.

# Background

At the close of Tsarist rule in 1917AD, Transcaucasia possessed an asymmetric urban hierarchy rooted in imperial transport and resource extraction [@Gazi2025Historical; @Cordier2017Once]. Baku, propelled by the late nineteenth-century Caspian petroleum boom, and Tbilisi, the administrative, commercial and rail hub of the Caucasus Viceroyalty, already overshadowed every inland market town [@Anon2021Historical]. On the Black Sea littoral, Batumi served as the terminus of the Baku-Batumi kerosene pipeline and railway alongside the port of Poti (founded as a modern port city in 1858AD), while inland Georgia looked to Kutaisi and Gori [@Tukhashvili2016Socio]. In Armenia, Yerevan remained a modest provincial seat compared with its post-1920 expansion, whereas Alexandropol (Gyumri, established as a Russian garrison town in 1837AD) and Karaklis (Vanadzor, 1828AD) anchored the northern rail corridor across Shirak and Lori alongside Sevan (founded in 1842AD) [@Saparov2003Alteration; @Franklin2017Examining].

Under Soviet Five-Year Plans between 1928AD and 1975AD, state planners reshaped this sparse urban map by creating purpose-built heavy industrial, metallurgical, petrochemical and hydroelectric cities. In Azerbaijan, Mingachevir rose in 1948AD beside the Kura hydroelectric dam and Sumqayıt was founded in 1949AD on the northern Absheron coast to house chemical and aluminium plants, growing into the third largest city in the South Caucasus [@Babashova2021Developmen]. In Georgia, Rustavi was laid out in 1948AD around a major integrated steelworks southeast of Tbilisi. In Armenia, Charentsavan and Kajaran (1947AD), Hrazdan (1959AD), Abovyan (1963AD) and Metsamor (1969AD) concentrated machine building, copper-molybdenum extraction and nuclear power generation around Yerevan and southern Syunik [@Saparov2003Alteration].

After December 1991, war displacement, industrial closure and international labour migration reversed or redirected urban trajectories across all three republics [@Group2019South; @Kacka2021Migration]. Earthquakes and economic blockade cut Gyumri and Vanadzor to barely half their 1979AD sizes, Abkhazia's war depopulated Aqwa (Sukhumi) and surrounding Black Sea towns [@Lundstedt2024Territoria; @Arbatova2019Three], and provincial Georgian and Armenian towns lost young workers abroad, while Baku, Sumqayıt and Xırdalan absorbed hundreds of thousands of internal migrants and displaced families from Karabakh [@Babashova2021Developmen; @Nouvelle2024Legal].

# Methodology

Urban series in this gazetteer were assembled from the 1926AD, 1939AD, 1959AD, 1970AD, 1979AD and 1989AD Soviet All-Union censuses and from the post-1991 national censuses and municipal yearbooks of GeoStat (Georgia, 2002AD-2024AD), ArmStat (Armenia, 2001AD-2022AD) and AzStat (Azerbaijan, 1999AD-2025AD) [@Anderson1990Growth; @Anon2019Migration; @Verdiyeva2019Population]. Inter-censal annual benchmarks (such as 1920AD, 1930AD, 1940AD, 1950AD, 1960AD, 1980AD, 1990AD, 2000AD, 2010AD and 2020AD) interpolate smoothly between observed census enumerations while preserving exact breaks at foundation years and conflict shocks.

Three compilation safeguards govern inclusion. First, explicit foundation-year bounds prevent synthetic backward extrapolation into decades before a Soviet or nineteenth-century planned settlement existed: twelve settlements carry documented foundation truncations ranging from Vanadzor (1828AD) and Gyumri (1837AD) to Rustavi (1948AD), Mingachevir (1948AD), Sumqayıt (1949AD), Hrazdan (1959AD), Abovyan (1963AD) and Metsamor (1969AD). Second, five subordinate suburbs located within 2 km of primary metropolitan cores - Bakıxanov, Binəqədi, Əmircan and Bülbülə inside Greater Baku, plus Akhtala in Armenia - were excluded in the source ledger to prevent overlapping municipal counts. Third, all 209 entries are geolocated to municipal cores and linked to geoBoundaries ADM1 and ADM2 administrative polygons [@Runfola2020GeoBoundaries]. Table \ref{tab:gazetteer-republic-summary} summarises settlement counts and aggregate urban populations by republic across five key benchmarks.

<figure class="crd-table-figure" id="tab:gazetteer-republic-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Republic</th><th class="crd-th">Settlements</th><th class="crd-th">1917AD</th><th class="crd-th">1950AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">108</td><td class="crd-td">1,43M</td><td class="crd-td">2,31M</td><td class="crd-td">3,08M</td><td class="crd-td">5,79M</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">53</td><td class="crd-td">1,09M</td><td class="crd-td">1,71M</td><td class="crd-td">2,65M</td><td class="crd-td">2,49M</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">48</td><td class="crd-td">878,2k</td><td class="crd-td">1,33M</td><td class="crd-td">2,18M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>Transcaucasia Gazetteer Total</strong></td><td class="crd-td">209</td><td class="crd-td">3,4M</td><td class="crd-td">5,35M</td><td class="crd-td">7,9M</td><td class="crd-td">10,25M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Number of catalogued settlements and summed urban populations across Azerbaijan, Georgia and Armenia at five benchmark dates from 1917AD to 2025AD.</figcaption>
</figure>

# Testing and Validation

Urban hierarchy consistency across all 209 catalogued towns and cities was evaluated against a log-linear Zipf rank-size model using peak observed populations across 1917AD-2025AD. As shown in Figure \ref{fig:settlements-zipf}, the distribution yields a Zipf exponent of $\alpha = 1{,}1$ with $R^2 = 0{,}929$, demonstrating strong regularity from the three million-plus capitals down through secondary cities (100k-450k) and small district centres (2k-20k). Cross-checks against GeoStat, ArmStat and AzStat municipal boundaries [@Runfola2020GeoBoundaries] also confirm clean separation between core cities and excluded 2 km suburbs, though users of the raw gazetteer should note three paired Azerbaijani entries where Anglicised municipal series and diacritic district-seat series appear alongside each other in the underlying ledger: Ganja (354,6k in 2025AD) alongside Gəncə (301,2k), Mingachevir (113,7k, founded 1948AD) alongside Mingəçevir (122,2k), and Sheki (73,4k) alongside Şəki (66,4k). Retaining them transparently in the appendix directory preserves exact traceability to the source files without silent deletion.

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-soviet-postsoviet-transcaucasia-settlements/fig4_soviet_postsoviet_transcaucasia_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size Zipf distribution across 209 Transcaucasian settlements (Panel A, slope 1,1) and the 12 leading urban centres by peak population (Panel B).</figcaption>
</figure>

# Results

Three tiers define Transcaucasia's modern urban system. At the summit stands the triad of national capitals: Bakı (rising from 485,6k in 1917AD to 1,15M in 1989AD and 1,31M core city in 2025AD, or 2,64M across the Baku City ADM2 unit), Tbilisi (expanding from 506,6k in 1917AD to 1,24M in 1989AD, dipping to 1,08M in 2014AD and rebounding to 1,27M in 2024AD-2025AD) and Yerevan (climbing from 484,3k in 1917AD to a peak of 1,2M in 1989AD before post-1991 emigration reduced it to 1,06M in 2011AD and 1,14M in 2025AD).

In the second tier (100k to 450k), national divergence becomes unmistakable. Azerbaijan's Caspian corridor surged after 1991AD: Sumqayıt nearly doubled from 231,1k in 1989AD to 440,9k in 2025AD, Xırdalan grew nearly eight-fold from 28,2k in 1989AD to 215,8k in 2025AD as Baku's western spillover town, and Absheron townships such as Maştağa (109,1k peak), Binə (90,8k), Biləcəri (87k) and Qaraçuxur (86,3k) expanded rapidly alongside interior cities Ganja (354,6k) and Mingəçevir (122,2k). Georgia's second-tier towns diverged sharply by geography: Batumi expanded on Turkish border trade and tourism to 235,7k by 2024AD [@Tukhashvili2016Socio], whereas Soviet industrial and western inland centres contracted - Kutaisi fell from 232,5k in 1989AD to 147,6k in 2014AD (160,6k in 2025AD), Rustavi declined from 159k in 1989AD, and Aqwa (Sukhumi) dropped sharply after the 1992AD-1993AD war [@Lundstedt2024Territoria]. In Armenia, Gyumri never regained its pre-1988 size (falling from 206,6k in 1979AD to 114,7k in 2025AD) and Vanadzor dropped by roughly half from its 146k 1979AD peak [@Hofmann2026Build].

Table \ref{tab:top-30-settlements} reports benchmark populations from 1917AD to 2025AD for the 30 largest catalogued settlements, illustrating both metropolitan concentration and regional industrial growth.

<figure class="crd-table-figure" id="tab:top-30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Republic</th><th class="crd-th">1917AD</th><th class="crd-th">1950AD</th><th class="crd-th">1989AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bakı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">485,6k</td><td class="crd-td">721,6k</td><td class="crd-td">1,15M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">506,6k</td><td class="crd-td">752,7k</td><td class="crd-td">1,24M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">484,3k</td><td class="crd-td">719,7k</td><td class="crd-td">1,2M</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Sumqayıt</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">134,2k</td><td class="crd-td">231,1k</td><td class="crd-td">440,9k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">96,1k</td><td class="crd-td">142,8k</td><td class="crd-td">230,7k</td><td class="crd-td">354,6k</td></tr>
<tr><td class="crd-td"><strong>Gəncə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">110,2k</td><td class="crd-td">163,7k</td><td class="crd-td">278k</td><td class="crd-td">301,2k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">56k</td><td class="crd-td">83,1k</td><td class="crd-td">134,4k</td><td class="crd-td">235,2k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">92,3k</td><td class="crd-td">137,2k</td><td class="crd-td">232,5k</td><td class="crd-td">160,6k</td></tr>
<tr><td class="crd-td"><strong>Xırdalan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">10,8k</td><td class="crd-td">16k</td><td class="crd-td">28,2k</td><td class="crd-td">215,8k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">98,2k</td><td class="crd-td">145,9k</td><td class="crd-td">122,6k</td><td class="crd-td">114,7k</td></tr>
<tr><td class="crd-td"><strong>Rustavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">-</td><td class="crd-td">91,1k</td><td class="crd-td">159k</td><td class="crd-td">131,8k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">69,4k</td><td class="crd-td">103,1k</td><td class="crd-td">75,6k</td><td class="crd-td">78,1k</td></tr>
<tr><td class="crd-td"><strong>Mingəçevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">28,4k</td><td class="crd-td">42,2k</td><td class="crd-td">85,4k</td><td class="crd-td">122,2k</td></tr>
<tr><td class="crd-td"><strong>Aqwa</strong></td><td class="crd-td">Georgia</td><td class="crd-td">54,4k</td><td class="crd-td">80,8k</td><td class="crd-td">119,2k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Mingachevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">-</td><td class="crd-td">45,8k</td><td class="crd-td">74k</td><td class="crd-td">113,7k</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">15,2k</td><td class="crd-td">22,5k</td><td class="crd-td">40,3k</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Lankaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">25,9k</td><td class="crd-td">38,6k</td><td class="crd-td">62,3k</td><td class="crd-td">95,8k</td></tr>
<tr><td class="crd-td"><strong>Lerik</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">25,3k</td><td class="crd-td">37,6k</td><td class="crd-td">60,7k</td><td class="crd-td">93,3k</td></tr>
<tr><td class="crd-td"><strong>Binə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">8,9k</td><td class="crd-td">13,3k</td><td class="crd-td">22,8k</td><td class="crd-td">90,8k</td></tr>
<tr><td class="crd-td"><strong>Biləcəri</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">11,5k</td><td class="crd-td">17,1k</td><td class="crd-td">30,5k</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Qaraçuxur</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">6,2k</td><td class="crd-td">9,2k</td><td class="crd-td">46,4k</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Naxçıvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">15,8k</td><td class="crd-td">23,5k</td><td class="crd-td">59,8k</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Şirvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">19,8k</td><td class="crd-td">29,4k</td><td class="crd-td">58,3k</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Sheki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">19,9k</td><td class="crd-td">29,5k</td><td class="crd-td">47,7k</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">21,5k</td><td class="crd-td">31,9k</td><td class="crd-td">49,6k</td><td class="crd-td">46,9k</td></tr>
<tr><td class="crd-td"><strong>Yevlax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">16,1k</td><td class="crd-td">23,9k</td><td class="crd-td">45,7k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Gori</strong></td><td class="crd-td">Georgia</td><td class="crd-td">26,6k</td><td class="crd-td">39,5k</td><td class="crd-td">67,8k</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td"><strong>Şəki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">23,5k</td><td class="crd-td">34,9k</td><td class="crd-td">56,2k</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Xankəndi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">18,5k</td><td class="crd-td">27,5k</td><td class="crd-td">56,7k</td><td class="crd-td">63,4k</td></tr>
<tr><td class="crd-td"><strong>Hrazdan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60,8k</td><td class="crd-td">49,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Thirty largest catalogued settlements in Transcaucasia ranked by peak population across 1917AD-2025AD, with hyphens marking dates prior to foundation.</figcaption>
</figure>

# Limitations

Three constraints affect settlement-level comparisons. First, post-1991 municipal tallies in Abkhazia (Aqwa/Sukhumi, Gagra, Ochamchire, Gudauta, Tkvarcheli) and Nagorno-Karabakh (Xankəndi, Khojaly, Shusha) rely on interrupted or contested local estimates rather than internationally audited censuses [@Arbatova2019Three; @Nouvelle2024Legal]. Second, municipal boundaries in Azerbaijan distinguish the Baku City administrative district (2,64M across 1.043 km²) from the central urban core (1,31M) and outlying Absheron settlements (*qəsəbələr*), whereas Tbilisi and Yerevan encompass wider consolidated urban boundaries. Third, as noted above, three Azerbaijani centres appear under both Anglicised and diacritic spellings in the underlying municipal series and are documented side by side in the appendix directory.

# Appendix

Table \ref{tab:full-settlement-directory} lists all 209 catalogued settlements across Georgia, Armenia and Azerbaijan sorted alphabetically, reporting geographic coordinates, active series span, peak population with peak year, and 2025AD population.

<figure class="crd-table-figure" id="tab:full-settlement-directory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Republic</th><th class="crd-th">Coordinates</th><th class="crd-th">Active Span</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Latest (2025AD)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Abovyan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,27°N, 44,63°E</td><td class="crd-td">1963AD-2025AD</td><td class="crd-td">58,7k (1989AD)</td><td class="crd-td">50,6k</td></tr>
<tr><td class="crd-td"><strong>Agarak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">38,87°N, 46,19°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">5,5k (1989AD)</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Alaverdi</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,1°N, 44,67°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">26,3k (1989AD)</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Aparan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,59°N, 44,36°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,4k (1989AD)</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Ararat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,85°N, 44,69°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,5k (2001AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Ararat village</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,83°N, 44,7°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,3k (2020AD)</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Armavir</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,16°N, 44,04°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">46,9k (1989AD)</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Artashat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,95°N, 44,55°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">32,3k (1989AD)</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Artik</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,62°N, 43,97°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,1k (1989AD)</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Ashtarak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,3°N, 44,36°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,6k (1989AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Ayrum</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,19°N, 44,9°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">2,6k (1989AD)</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Berd</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,88°N, 45,39°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,4k (1989AD)</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Byureghavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,31°N, 44,6°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,8k (2025AD)</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>Chambarak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,6°N, 45,35°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,3k (1989AD)</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Charentsavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,4°N, 44,64°E</td><td class="crd-td">1947AD-2025AD</td><td class="crd-td">33,9k (1989AD)</td><td class="crd-td">24,1k</td></tr>
<tr><td class="crd-td"><strong>Dastakert</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,38°N, 46,03°E</td><td class="crd-td">1930AD-1979AD</td><td class="crd-td">655 (1979AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dilijan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,74°N, 44,86°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,7k (1989AD)</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Gavar</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,35°N, 45,12°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">31,2k (1989AD)</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Goris</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,51°N, 46,34°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,8k (1989AD)</td><td class="crd-td">17,6k</td></tr>
<tr><td class="crd-td"><strong>Gyumri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,79°N, 43,85°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">206,6k (1979AD)</td><td class="crd-td">114,7k</td></tr>
<tr><td class="crd-td"><strong>Hrazdan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,52°N, 44,76°E</td><td class="crd-td">1959AD-2025AD</td><td class="crd-td">60,8k (1989AD)</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Ijevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,88°N, 45,15°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,1k (2011AD)</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Jermuk</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,84°N, 45,67°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9k (1989AD)</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Kajaran</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,15°N, 46,16°E</td><td class="crd-td">1947AD-2025AD</td><td class="crd-td">8,9k (1979AD)</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Kapan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,21°N, 46,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">45,7k (2001AD)</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Maralik</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,58°N, 43,87°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,6k (1989AD)</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Martuni</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,14°N, 45,3°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">13,6k (1989AD)</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Masis</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,07°N, 44,44°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,1k (2025AD)</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Meghri</strong></td><td class="crd-td">Armenia</td><td class="crd-td">38,9°N, 46,24°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">4,8k (2001AD)</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Metsamor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,14°N, 44,11°E</td><td class="crd-td">1969AD-2025AD</td><td class="crd-td">12k (1989AD)</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Noyemberyan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,17°N, 45°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,1k (1989AD)</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Sevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,55°N, 44,95°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">27k (1989AD)</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Shamlugh</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,17°N, 44,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">1,9k (1979AD)</td><td class="crd-td">700</td></tr>
<tr><td class="crd-td"><strong>Sisian</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,52°N, 46,03°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,8k (2001AD)</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Spitak</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,83°N, 44,27°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15k (2001AD)</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Stepanavan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,01°N, 44,39°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,5k (1979AD)</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Talin</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,39°N, 43,88°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,7k (1989AD)</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Tashir</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41,12°N, 44,29°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,5k (1989AD)</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Tsaghkadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,53°N, 44,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">3,4k (1989AD)</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Tumanyan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">41°N, 44,65°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">2,6k (1989AD)</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Vagharshapat</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,17°N, 44,29°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">60,5k (1989AD)</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Vanadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,81°N, 44,5°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">146k (1979AD)</td><td class="crd-td">78,1k</td></tr>
<tr><td class="crd-td"><strong>Vardenis</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,18°N, 45,73°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">13,9k (1989AD)</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Vayk</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,69°N, 45,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,5k (1989AD)</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Vedi</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,91°N, 44,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">13k (2001AD)</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Yeghegnadzor</strong></td><td class="crd-td">Armenia</td><td class="crd-td">39,76°N, 45,33°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,3k (1989AD)</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Yeghvard</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,32°N, 44,48°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">13,2k (2025AD)</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Yerevan</strong></td><td class="crd-td">Armenia</td><td class="crd-td">40,18°N, 44,51°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">1,2M (1989AD)</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Ağcabədi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40°N, 47,42°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">52,8k (2025AD)</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Ağdam</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,99°N, 46,93°E</td><td class="crd-td">1917AD-1989AD</td><td class="crd-td">28k (1989AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ağdaş</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,65°N, 47,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">30,6k (2025AD)</td><td class="crd-td">30,6k</td></tr>
<tr><td class="crd-td"><strong>Ağdərə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,21°N, 46,82°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,3k (1989AD)</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Aghstafa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,12°N, 45,45°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">13,1k (2025AD)</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Ağsu</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 48,4°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,9k (2025AD)</td><td class="crd-td">21,9k</td></tr>
<tr><td class="crd-td"><strong>Astara</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,46°N, 48,87°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,3k (2025AD)</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Avsar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,97°N, 47,42°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6k (2025AD)</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Babak</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,15°N, 45,44°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,4k (2025AD)</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Badamdar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 49,8°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">32,2k (2025AD)</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Bakı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,38°N, 49,89°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">1,31M (2025AD)</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Balaxanı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,46°N, 49,92°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,5k (2019AD)</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Belokany</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,73°N, 46,4°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15,9k (2025AD)</td><td class="crd-td">15,9k</td></tr>
<tr><td class="crd-td"><strong>Bərdə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,38°N, 47,13°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">53,5k (2025AD)</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Beyləqan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,78°N, 47,62°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,9k (2025AD)</td><td class="crd-td">21,9k</td></tr>
<tr><td class="crd-td"><strong>Biləcəri</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,44°N, 49,81°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">87k (2025AD)</td><td class="crd-td">87k</td></tr>
<tr><td class="crd-td"><strong>Biləsuvar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,46°N, 48,55°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,3k (2025AD)</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Binə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,45°N, 50,09°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">90,8k (2025AD)</td><td class="crd-td">90,8k</td></tr>
<tr><td class="crd-td"><strong>Buzovna</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,52°N, 50,11°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">38,9k (2025AD)</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Cəlilabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21°N, 48,49°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">43,5k (2025AD)</td><td class="crd-td">43,5k</td></tr>
<tr><td class="crd-td"><strong>Corat</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 49,71°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,4k (2025AD)</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Dashkasan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,52°N, 46,08°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,4k (2025AD)</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Füzuli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,6°N, 47,15°E</td><td class="crd-td">1917AD-1989AD</td><td class="crd-td">17,1k (1989AD)</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gadabay</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,57°N, 45,81°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15,6k (2025AD)</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,68°N, 46,36°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">354,6k (2025AD)</td><td class="crd-td">354,6k</td></tr>
<tr><td class="crd-td"><strong>Gəncə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,62°N, 47,15°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">315,9k (2011AD)</td><td class="crd-td">301,2k</td></tr>
<tr><td class="crd-td"><strong>Givrag</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,4°N, 45,12°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7k (2025AD)</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Gobustan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,53°N, 48,93°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,8k (2025AD)</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Goranboy</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,61°N, 46,79°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9,9k (2025AD)</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Göyçay</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,65°N, 47,74°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">35,9k (2011AD)</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Göygöl</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,59°N, 46,32°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,2k (2025AD)</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Hacı Zeynalabdin Tağıyev</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,62°N, 49,56°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">34,6k (2025AD)</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Hacıqabul</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,04°N, 48,94°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">27,5k (2025AD)</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Hindarkh</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,07°N, 47,21°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,5k (2025AD)</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>Hökməli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,74°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">18,9k (2025AD)</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Horadiz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,45°N, 47,33°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,3k (2025AD)</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Hövsan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,37°N, 50,09°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">53,7k (2025AD)</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>İmişli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,87°N, 48,06°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">38,2k (2025AD)</td><td class="crd-td">38,2k</td></tr>
<tr><td class="crd-td"><strong>İsmayıllı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,78°N, 48,15°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">26k (2025AD)</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Jabrayil</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,4°N, 47,03°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,3k (2025AD)</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Jahri</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,35°N, 45,42°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,5k (2025AD)</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Jeyranbatan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,54°N, 49,66°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,3k (2025AD)</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Julfa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,95°N, 45,63°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,7k (2025AD)</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Kalbajar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,11°N, 46,04°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9k (2025AD)</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Keşlə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,9°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">32,9k (2025AD)</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Khojaly</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,91°N, 46,79°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,2k (2025AD)</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Kürdəmir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,42°N, 46,62°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">19,7k (2025AD)</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Kyurdarmir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 48,16°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,5k (2025AD)</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Lankaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,75°N, 48,85°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">95,8k (2025AD)</td><td class="crd-td">95,8k</td></tr>
<tr><td class="crd-td"><strong>Lənkəran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,7°N, 48,76°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">52k (2025AD)</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Lerik</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,77°N, 48,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">93,3k (2025AD)</td><td class="crd-td">93,3k</td></tr>
<tr><td class="crd-td"><strong>Lökbatan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,33°N, 49,73°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">43,7k (2025AD)</td><td class="crd-td">43,7k</td></tr>
<tr><td class="crd-td"><strong>Masallı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,04°N, 48,67°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">26,3k (2025AD)</td><td class="crd-td">26,3k</td></tr>
<tr><td class="crd-td"><strong>Maştağa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,53°N, 50,01°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">109,1k (2019AD)</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Mehdiabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,5°N, 49,85°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">22,6k (2025AD)</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Mərdəkan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,49°N, 50,14°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">36,3k (2025AD)</td><td class="crd-td">36,3k</td></tr>
<tr><td class="crd-td"><strong>Mincivan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,03°N, 46,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,8k (2025AD)</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Mingachevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,76°N, 47,06°E</td><td class="crd-td">1948AD-2025AD</td><td class="crd-td">113,7k (2025AD)</td><td class="crd-td">113,7k</td></tr>
<tr><td class="crd-td"><strong>Mingəçevir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,64°N, 46,99°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">122,2k (2025AD)</td><td class="crd-td">122,2k</td></tr>
<tr><td class="crd-td"><strong>Naftalan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,51°N, 46,82°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9,2k (2025AD)</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Nardaran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,56°N, 50,01°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">28,8k (2019AD)</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Naxçıvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,21°N, 45,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">83,7k (2025AD)</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Neftçala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,38°N, 49,25°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">22,1k (2025AD)</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Oguz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,07°N, 47,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,1k (2025AD)</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Qabala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,98°N, 47,85°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">12,7k (2025AD)</td><td class="crd-td">12,7k</td></tr>
<tr><td class="crd-td"><strong>Qalaqayin</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,98°N, 48,48°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,2k (2025AD)</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Qaraçuxur</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,97°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">86,3k (2025AD)</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Qax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,42°N, 46,92°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">12,9k (2025AD)</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Qazax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,26°N, 45,09°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21k (2011AD)</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Qobu</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,4°N, 49,71°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">19,4k (2025AD)</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Qobustan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,08°N, 49,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,2k (2025AD)</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Quba</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,36°N, 48,51°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">24,8k (2025AD)</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Qubadli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,34°N, 46,58°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,4k (2025AD)</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Qusar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,43°N, 48,43°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,5k (2025AD)</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Ramana</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,44°N, 49,98°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">44,5k (2019AD)</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Saatlı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,93°N, 48,37°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">19,2k (2025AD)</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Sabirabad</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,01°N, 48,48°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">30,8k (2025AD)</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Şabran</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,2°N, 48,99°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,1k (2025AD)</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Sabunçu</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,44°N, 49,95°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">30,9k (1979AD)</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Sahil</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,22°N, 49,58°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">28,1k (2025AD)</td><td class="crd-td">28,1k</td></tr>
<tr><td class="crd-td"><strong>Salyan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,6°N, 48,98°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">39,2k (2025AD)</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Şamaxı</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,63°N, 48,64°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">40,4k (2025AD)</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Samukh</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,76°N, 46,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,9k (2025AD)</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Saray</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,53°N, 49,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">41,5k (2025AD)</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Şəki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,91°N, 47,21°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">66,4k (2025AD)</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Şəmkir</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,83°N, 46,08°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">41,9k (2025AD)</td><td class="crd-td">41,9k</td></tr>
<tr><td class="crd-td"><strong>Sharur City</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,55°N, 44,98°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8k (2025AD)</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Sheki</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,19°N, 47,17°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">73,4k (2025AD)</td><td class="crd-td">73,4k</td></tr>
<tr><td class="crd-td"><strong>Şirvan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,94°N, 48,93°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">79,9k (2025AD)</td><td class="crd-td">79,9k</td></tr>
<tr><td class="crd-td"><strong>Siyəzən</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,08°N, 49,12°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,9k (2025AD)</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Sulutəpə</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,43°N, 49,76°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">22,9k (2025AD)</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Sumqayıt</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,59°N, 49,67°E</td><td class="crd-td">1949AD-2025AD</td><td class="crd-td">440,9k (2025AD)</td><td class="crd-td">440,9k</td></tr>
<tr><td class="crd-td"><strong>Şuşa</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,76°N, 46,75°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15k (1989AD)</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Şüvəlan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,48°N, 50,18°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,6k (2025AD)</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Tərtər</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,34°N, 46,93°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,9k (2025AD)</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Tovuz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,99°N, 45,63°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">19,6k (2025AD)</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Ujar</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,52°N, 47,65°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">16,9k (2025AD)</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Xaçmaz</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,46°N, 48,81°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">43,4k (2025AD)</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Xankəndi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,76°N, 48,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">63,4k (2025AD)</td><td class="crd-td">63,4k</td></tr>
<tr><td class="crd-td"><strong>Xırdalan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,45°N, 49,76°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">215,8k (2025AD)</td><td class="crd-td">215,8k</td></tr>
<tr><td class="crd-td"><strong>Xocavənd</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,03°N, 47,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7k (1989AD)</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Yardimli</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,91°N, 48,24°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,2k (2025AD)</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Yayci</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">38,94°N, 45,73°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9,1k (2025AD)</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Yevlax</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,67°N, 47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">68k (2025AD)</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Zabrat</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,48°N, 49,94°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">45,1k (2019AD)</td><td class="crd-td">43,3k</td></tr>
<tr><td class="crd-td"><strong>Zangilan</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">39,08°N, 46,66°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8k (2025AD)</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Zaqatala</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">41,63°N, 46,64°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,8k (2025AD)</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Zardob</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,22°N, 47,71°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,4k (2025AD)</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Abasha</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,2°N, 42,2°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,2k (1989AD)</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Akhalkalaki</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,41°N, 43,49°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15,2k (1989AD)</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Akhaltsikhe</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,64°N, 42,99°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">24,6k (1989AD)</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Akhmeta</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,03°N, 45,21°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9k (1979AD)</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Ambrolauri</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,52°N, 43,15°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">2,9k (1989AD)</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Aqwa</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,01°N, 40,99°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">119,2k (1989AD)</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Batumi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,64°N, 41,63°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">235,7k (2024AD)</td><td class="crd-td">235,2k</td></tr>
<tr><td class="crd-td"><strong>Bolnisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,45°N, 44,54°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,9k (1989AD)</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Borjomi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,85°N, 43,4°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">18,1k (1979AD)</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Chakvi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,73°N, 41,73°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,1k (2002AD)</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Chiatura</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,3°N, 43,3°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">28,9k (1989AD)</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Dedoplistskaro</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,47°N, 46,1°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,1k (1989AD)</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Dusheti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,09°N, 44,7°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,5k (1989AD)</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Gagra</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,28°N, 40,27°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">24,4k (1979AD)</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Gal</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,63°N, 41,74°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">15,8k (1989AD)</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Gardabani</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,46°N, 45,09°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">17k (1989AD)</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Gori</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,99°N, 44,11°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">67,8k (1989AD)</td><td class="crd-td">50,2k</td></tr>
<tr><td class="crd-td"><strong>Gurjaani</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,74°N, 45,8°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">12,6k (1989AD)</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Gwdouţa</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,1°N, 40,62°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,9k (1989AD)</td><td class="crd-td">8,7k</td></tr>
<tr><td class="crd-td"><strong>Gwylryphš'</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,93°N, 41,1°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,7k (1989AD)</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Kareli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,02°N, 43,9°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,5k (1979AD)</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Kaspi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,93°N, 44,42°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">17,1k (1989AD)</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Khashuri</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42°N, 43,6°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">31,7k (1989AD)</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Khoni</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,33°N, 42,42°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,5k (1979AD)</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Kobuleti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,83°N, 41,78°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,6k (1989AD)</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Kutaisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27°N, 42,69°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">232,5k (1989AD)</td><td class="crd-td">160,6k</td></tr>
<tr><td class="crd-td"><strong>Kvareli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,95°N, 45,82°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">11,2k (1989AD)</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Lagodekhi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,83°N, 46,27°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9k (1989AD)</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Lanchkhuti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,09°N, 42,04°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9k (1989AD)</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Marneuli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,49°N, 44,8°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">27,1k (1989AD)</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Mtskheta</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,85°N, 44,72°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">8,9k (1989AD)</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Ninotsminda</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,27°N, 43,59°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,9k (1989AD)</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Očamčyra</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,71°N, 41,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">20,1k (1989AD)</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Ochkhamuri</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,86°N, 41,83°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">5,4k (2014AD)</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Ozurgeti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,92°N, 42,01°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">23,3k (1989AD)</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Piċunda</strong></td><td class="crd-td">Georgia</td><td class="crd-td">43,16°N, 40,34°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">10,3k (1979AD)</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Poti</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,14°N, 41,67°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">50,6k (1989AD)</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Rustavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,56°N, 44,98°E</td><td class="crd-td">1948AD-2025AD</td><td class="crd-td">159k (1989AD)</td><td class="crd-td">131,8k</td></tr>
<tr><td class="crd-td"><strong>Sachkhere</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,34°N, 43,41°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">7,8k (1989AD)</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Sagarejo</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,74°N, 45,33°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">14,4k (1989AD)</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Samtredia</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,15°N, 42,34°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">34,3k (1989AD)</td><td class="crd-td">24,7k</td></tr>
<tr><td class="crd-td"><strong>Senaki</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,27°N, 42,06°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">28,9k (1989AD)</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Surami</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,02°N, 43,56°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9,8k (2002AD)</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,69°N, 44,83°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">1,27M (2024AD)</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Tchinval</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,23°N, 43,97°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">42,9k (1989AD)</td><td class="crd-td">35,3k</td></tr>
<tr><td class="crd-td"><strong>Telavi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,92°N, 45,47°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">27,8k (1989AD)</td><td class="crd-td">20,5k</td></tr>
<tr><td class="crd-td"><strong>Tkibuli</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,35°N, 43°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">22k (1989AD)</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Tqwarčal</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,84°N, 41,68°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">21,8k (1979AD)</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tsalenjikha</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,61°N, 42,07°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">9,3k (1989AD)</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Tsnori</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,62°N, 45,98°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">6,1k (2002AD)</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Tsqaltubo</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,33°N, 42,6°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">17,7k (1979AD)</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Zestaponi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,11°N, 43,03°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">25,9k (1989AD)</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Zugdidi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">42,51°N, 41,87°E</td><td class="crd-td">1917AD-2025AD</td><td class="crd-td">68,9k (2002AD)</td><td class="crd-td">46,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Directory of all 209 catalogued Transcaucasian settlements from 1917AD to 2026AD, sorted by republic and name.</figcaption>
</figure>

# Sources
