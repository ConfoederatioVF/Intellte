---
title: "Settlement Gazetteer of Nepal and Bhutan"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1816AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nepal_and_bhutan_until_british_rule_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nepal_and_bhutan_until_british_rule_spatial.png"
hero_caption: "Spatial distribution of 4.060 catalogued historical settlements and regional drainage catchments across Nepal and Bhutan (183.712 km²) from 10000BC to 1816AD."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer catalogues WGS84 geographic coordinates, administrative allocations, foundation chronologies and benchmark demographic trajectories for 4.060 historical settlements across Nepal and Bhutan (183.712 km², comprising 2.452 active 5-arcminute terrestrial cells) from 10000BC to 1816AD. Distributed across four physiographic divisions—1.491 settlements in the Kathmandu Valley and Central Pahad, 1.263 in Western Khasa Malla and Karnali, 880 in the Eastern Kirat Hills and Koshi Terai, and 426 in Bhutanese Valleys and Drukpa Dzongs—the gazetteer spans diverse architectural and structural traditions: dense multi-tiered brick metropolises with paved royal plazas (*durbar*) in the lacustrine basin of the Kathmandu Valley, monumental stone-and-timber fortress-monasteries (*dzongs*) commanding deep glaciated valleys across Bhutan, terraced stone homesteads and hilltop citadels in the Khasa Malla and Kirat highlands, and fortified mud-brick enclosures guarding sub-Himalayan Terai corridors [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @Coningham2021Urban]. Peak settlement sizes follow a tight Zipf rank-size power law ($\alpha = 0,80$, $R^2 = 0,99$), ranging from Early Historic Terai capitals at Shravasti (45k peak in 300BC), Tilaurakot (18k peak in 300BC) and Janakpur (18k peak in 300BC) to mediaeval and early modern metropolises and frontier market cities at Kathmandu (62k peak in 1650AD; 52,8k in 1816AD), Lalitpur (48k peak in 1650AD; 31,4k in 1816AD), Musahri (43,1k in 1816AD), Bhaktapur (40k peak in 1650AD; 23,4k in 1816AD), Cooch Behar (32k peak in 1650AD; 16,8k in 1816AD), Pilibhit (29,6k in 1816AD) and Rajganj (29,2k in 1816AD) [@Erdosy1988Urbanisation; @Bayly1983Rulers; @Eaton1993Rise]. Secondary highland capitals include Sinja (15,5k peak in 1300AD) in the Karnali basin, Gorkha (11,4k peak in 1750AD; 8k in 1816AD) and Drukpa monastic bastions at Punakha (8,5k peak in 1775AD), Thimphu (7,5k in 1750AD to 1816AD), Paro (7k peak in 1750AD) and Jakar (6k peak in 1700AD). Every catalogued locality reconciles against 4.335 candidate records in the INDUS source ledger alongside 275 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius, GeoNames homonyms and non-habitation ritual shrines). By integrating georeferenced trajectories with regional hydrology and mid-hill terrain constraints, this gazetteer establishes a spatial baseline for historical settlement subtraction and demographic modelling across the central and eastern Himalayas.

# Background

Historical settlement patterns across Nepal and Bhutan reflect human adaptations to steep altitudinal gradients, riverine transport corridors and trans-Himalayan commercial routes [@Coningham2021Urban; @Toffin1990Mythical; @Slusser1982NepalMandala]. Four primary architectural and settlement traditions characterise the regional archaeological record:
1. Multi-tiered Newar brick metropolises: In the Kathmandu Valley, urban nucleations developed around contiguous, multi-storey fired-brick domestic dwellings with carved sal-wood struts and pitched terracotta-tiled roofs [@Slusser1982NepalMandala; @Toffin1990Mythical; @Gosai2025Ethnograph]. Urban layout was structured around internal courtyards (*chowks*), Buddhist monastic complexes (*baha* and *bahi*), stepped stone water conduits (*dhunge dhara* or *hiti*) and monumental palace squares (*durbar*) housing royal courts and pagoda shrines [@Toffin1990Mythical; @Shrestha2016Traditiona; @Sengupta2017Ruptured].
2. Fortress-monasteries (*dzongs*): Across the valleys of western and central Bhutan, administrative and spiritual life nucleated around monumental *dzongs* erected on defensible spur ridges commanding river confluences [@Phuntsho2013HistoryBhutan; @Ling2016India]. Built of massive tapered rubble masonry, rammed earth and timber without iron nails, these installations combined central temple keeps (*utse*) with administrative blocks housing monk bodies and civil magistrates under the dual *chho-sid-nyi* system [@Phuntsho2013HistoryBhutan; @Ling2016India; @Compagna2026Layered].
3. Hilltop citadels and terraced homesteads: In the western Karnali basin and the eastern Kirat hills, settlements featured stone-and-timber defensive towers (*kot*) perched on ridge tops flanked by loose clusters of farmhouse homesteads [@Hutt1984Nepali; @Parajuli1999Agro]. In the capital of the Khasa Malla empire at Sinja, monumental stone temple structures and carved stone pillars (*deval*) overlooked terraced alluvial floodplains along the Hima River [@Hutt1984Nepali].
4. Sub-Himalayan Terai walled enclosures: Along the southern alluvial fringe bordering the Gangetic plain, early Iron Age and Classical settlements were constructed of kiln-fired and sun-dried mud-bricks surrounded by earthen ramparts and defensive moats [@Erdosy1988Urbanisation; @Allchin1995Archaeology; @Coningham2021Urban]. Shravasti, Tilaurakot and Piprahwa controlled access between northern Indian trade arteries and the Himalayan foothills, housing Buddhist monastic fraternities and royal administrative clans [@Coningham2021Urban; @Maskey2024Religious].

# Methodology

The expanded 4.060-settlement gazetteer is empirically anchored in four complementary evidentiary streams rather than synthetic scaling assumptions:
1. Primary-monograph historical metropolis trajectories: Longitudinal population profiles for major royal capitals, *durbar* towns and monastic seats are reconstructed directly from architectural extents, household counts, royal chronicles and primary historical monographs [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @Erdosy1988Urbanisation; @Allchin1995Archaeology; @Naqvi1968Urbanisation].
2. Multi-repository archaeological and monument corpora: Prehistoric, Early Historic and mediaeval habitation horizons are compiled from Pleiades, Zenodo regional archaeological datasets (including Harappan, Vidarbha and Palaeolithic Indian Archaeology A Review syntheses), Archaeological Survey of India records, Wikidata, OpenStreetMap heritage layers and radiocarbon inventories in XRONOS and c14bazAAR [@Coningham2021Urban; @Chattopadhyaya1994Making].
3. Official national censuses and fiscal gazetteers: Baseline demographic anchors and town hierarchies are calibrated against official national census enumerations—specifically Census of India Table A-04 urban-rural time series alongside historical returns compiled for Pakistan (PBS), Bangladesh (BBS), India (DCS), Nepal (CBS), Bhutan (NSB) and adjacent Himalayan territories (NBS)—cross-checked with colonial and precolonial fiscal surveys [@ImperialGazetteer1908; @Bayly1983Rulers; @Compagna2026Layered].
4. Macro-envelope *qasba*, *pargana* and *nadu* continuity: Rural market towns and revenue centres are traced backward through pre-1800 fiscal geography [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Eaton1993Rise], governed by strict foundation-year cut-offs and chronological toponymy filters that eliminate post-1816 colonial or industrial foundations from precolonial time slices.

Every candidate locality in the INDUS source ledger was verified for WGS84 coordinates against regional drainage networks, documented habitation prior to 1816AD, and calibrated population anchors. Where multiple survey points fall within a 2,2 km spatial radius of a primary settlement, duplicate coordinates are collapsed as survey aliases, and GeoNames homonyms or non-habitation features such as isolated petroglyphs, mountain shrines, battle sites and temporary transhumance huts are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 4.060 catalogued settlements and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu Valley and Central Pahad</strong></td><td class="crd-td">1.491</td><td class="crd-td">36,7%</td><td class="crd-td">1,47M</td><td class="crd-td">Kathmandu (62k)</td></tr>
<tr><td class="crd-td"><strong>Eastern Kirat Hills and Koshi Terai</strong></td><td class="crd-td">880</td><td class="crd-td">21,7%</td><td class="crd-td">807,2k</td><td class="crd-td">Singiya (19,9k)</td></tr>
<tr><td class="crd-td"><strong>Western Khasa Malla and Karnali</strong></td><td class="crd-td">1.263</td><td class="crd-td">31,1%</td><td class="crd-td">915,3k</td><td class="crd-td">Shravasti (45k)</td></tr>
<tr><td class="crd-td"><strong>Bhutanese Valleys and Drukpa Dzongs</strong></td><td class="crd-td">426</td><td class="crd-td">10,5%</td><td class="crd-td">432,7k</td><td class="crd-td">Cooch Behar (32k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">4.060</td><td class="crd-td">100%</td><td class="crd-td">3,62M</td><td class="crd-td">Kathmandu (62k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 4.060 catalogued settlements and summed site peaks across Nepal and Bhutan.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological bounds were cross-referenced against epigraphic discoveries and historical survey records [@Coningham2021Urban; @Toffin1990Mythical; @Subedi2024Conservati; @Slusser1982NepalMandala]. In the Kathmandu Valley, over two hundred Sanskrit stone inscriptions dating from the fifth to eighth centuries AD identify specific settlements (*grama*, *dranga*) that evolved into modern urban wards in Kathmandu, Patan and Bhaktapur [@Slusser1982NepalMandala; @Toffin1990Mythical; @Subedi2024Conservati].

In the southern Terai lowlands, stratigraphic excavations at Shravasti and Tilaurakot verified continuous habitation spanning the northern black polished ware and post-Mauryan periods, identifying monumental civic gates, brick drainage channels and defensive ditches [@Erdosy1988Urbanisation; @Allchin1995Archaeology; @Coningham2021Urban]. In western Nepal, historical Khasa Malla inscriptions recorded by Tucci and subsequent epigraphists anchor the foundation dates and territorial jurisdiction of Sinja, Dullu and surrounding fortresses in the Karnali and Mahakali catchments [@Hutt1984Nepali].

In Bhutan, monastic block-print chronicles (*namthar* and *rgyal-rabs*) record the foundation dates of seventeenth-century *dzongs* under Zhabdrung Ngawang Namgyal, confirming that sites such as Punakha (1637AD), Wangdue Phodrang (1638AD) and Paro Rinpung Dzong (1644AD) replaced earlier mediaeval monastic fiefs [@Phuntsho2013HistoryBhutan; @Ling2016India; @Compagna2026Layered].

# Results

Table \ref{tab:gazetteer} presents the leading 35 historical settlements across Nepal and Bhutan ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1816AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">27,7 N, 85,31 E</td><td class="crd-td">200BC - 1816AD</td><td class="crd-td">62k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">27,67 N, 85,32 E</td><td class="crd-td">200BC - 1816AD</td><td class="crd-td">48k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">600BC - 750AD</td><td class="crd-td">45k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Musahri</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,93 N, 84,14 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">43,1k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Bhaktapur</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">27,67 N, 85,43 E</td><td class="crd-td">900AD - 1816AD</td><td class="crd-td">40k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Cooch Behar</strong></td><td class="crd-td">Bhutanese Valleys and Drukpa Dzongs</td><td class="crd-td">26,32 N, 89,45 E</td><td class="crd-td">1550AD - 1816AD</td><td class="crd-td">32k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Pilibhit</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,63 N, 79,8 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">29,6k</td><td class="crd-td">29,6k</td></tr>
<tr><td class="crd-td"><strong>Rajganj</strong></td><td class="crd-td">Bhutanese Valleys and Drukpa Dzongs</td><td class="crd-td">26,56 N, 88,51 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">29,2k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Ghorahi</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,04 N, 82,49 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">26,2k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Bahraich</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,57 N, 81,59 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">22,9k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Dumra</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,57 N, 85,52 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">20,2k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Singiya</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,69 N, 87,16 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">19,9k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Dharan</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,82 N, 87,27 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">19,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Bettiah</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,8 N, 84,5 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">19,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Phulwari</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,12 N, 87,94 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">18,9k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Lahan</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,72 N, 86,48 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">18,2k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">600BC - 500AD</td><td class="crd-td">18k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Janakpur</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,73 N, 85,93 E</td><td class="crd-td">600BC - 1816AD</td><td class="crd-td">18k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Bhimdatta</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,92 N, 80,33 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">16,7k</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Sinja</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">29,32 N, 82,16 E</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">15,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balrampur</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,43 N, 82,19 E</td><td class="crd-td">500BC - 1816AD</td><td class="crd-td">15,1k</td><td class="crd-td">15,1k</td></tr>
<tr><td class="crd-td"><strong>Madhubani</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,35 N, 86,07 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">14,5k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Kalchini</strong></td><td class="crd-td">Bhutanese Valleys and Drukpa Dzongs</td><td class="crd-td">26,69 N, 89,45 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">14,3k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Darjiling</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">27,03 N, 88,27 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Dullu</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,86 N, 81,62 E</td><td class="crd-td">1200AD - 1816AD</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Inaruwa</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,61 N, 87,15 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">12,8k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Thakurgaon Sadar</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,02 N, 88,47 E</td><td class="crd-td">500BC - 1816AD</td><td class="crd-td">12,6k</td><td class="crd-td">12,6k</td></tr>
<tr><td class="crd-td"><strong>Nepalgunj</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,05 N, 81,62 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Motihari</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">26,65 N, 84,92 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">12,2k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>Lo Manthang</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">29,18 N, 83,96 E</td><td class="crd-td">1200AD - 1816AD</td><td class="crd-td">11,9k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Triyuga</strong></td><td class="crd-td">Eastern Kirat Hills and Koshi Terai</td><td class="crd-td">26,79 N, 86,7 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Dabgram</strong></td><td class="crd-td">Bhutanese Valleys and Drukpa Dzongs</td><td class="crd-td">26,7 N, 88,46 E</td><td class="crd-td">500BC - 1816AD</td><td class="crd-td">11,5k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Gorkha</strong></td><td class="crd-td">Kathmandu Valley and Central Pahad</td><td class="crd-td">28 N, 84,63 E</td><td class="crd-td">1600AD - 1816AD</td><td class="crd-td">11,4k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Mahasi</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">27,64 N, 81,39 E</td><td class="crd-td">1300AD - 1816AD</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Tikapur</strong></td><td class="crd-td">Western Khasa Malla and Karnali</td><td class="crd-td">28,53 N, 81,12 E</td><td class="crd-td">500BC - 1816AD</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 35 historical settlements ordered by peak population across Nepal and Bhutan (10000BC to 1816AD).</figcaption>
</figure>

## Regional Settlement Systems

Across the 4.060-settlement gazetteer, peak settlement populations conform closely to a Zipf rank-size distribution ($\alpha = 0,80$, $R^2 = 0,99$).

### Kathmandu Valley and Central Pahad

This core division catalogues 1.491 settlements concentrated in the fertile lacustrine basin of Kathmandu, surrounding mid-hill valleys and the central Terai margin [@Slusser1982NepalMandala; @Toffin1990Mythical; @Sengupta2017Ruptured]. Kathmandu (Kantipur) was the primary urban centre, rising from 16k in 200AD to 30k in 800AD, peaking at 62k in 1650AD and sustaining 52,8k in 1816AD as the imperial capital of the Shah dynasty [@Slusser1982NepalMandala; @Whitmarsh2022Darbar]. Lalitpur (Patan) formed the southern metropolitan node, peaking at 48k in 1650AD (31,4k in 1816AD) with renowned metalcasting and stone-carving guilds [@Slusser1982NepalMandala; @Toffin1990Mythical]. Bhaktapur (Bhadgaon) anchored the eastern valley, peaking at 40k in 1650AD (23,4k in 1816AD) and distinguished by its palace squares and active woodcarving quarters [@Gosai2025Ethnograph]. In the southern alluvial belt, Musahri reached 43,1k in 1816AD alongside Dumra (20,2k) and Bettiah (19,8k) [@Bayly1983Rulers; @ImperialGazetteer1908]. In the surrounding hills and ancient Terai corridors, Gorkha (11,4k peak in 1750AD; 8k in 1816AD) operated as the Shah fortress-capital, while Tilaurakot (18k peak in 300BC) and Janakpur (18k peak in 300BC; 15,2k in 1816AD) anchored early urban and pilgrimage routes [@Coningham2021Urban; @Allchin1995Archaeology].

### Western Khasa Malla and Karnali Highlands

The western division catalogues 1.263 settlements distributed across the rugged Karnali, Bheri and Mahakali catchments and adjacent southwestern Terai margins [@Hutt1984Nepali]. Along the border with the Gangetic plain, ancient Shravasti commanded southern trade routes, peaking at 45k in 300BC and maintaining 23,8k in 200AD before contracting in the early mediaeval period [@Erdosy1988Urbanisation; @Allchin1995Archaeology]. Sinja in Jumla was the mediaeval imperial capital of the Khasa Malla realm, peaking at 15,5k inhabitants in 1300AD (12,6k in 1200AD) with extensive irrigation terracing along the Hima River [@Hutt1984Nepali]. Frontier market towns and administrative centres such as Pilibhit (29,6k in 1816AD), Ghorahi (26,2k in 1816AD), Bahraich (22,9k in 1816AD) and Bhimdatta (16,7k in 1816AD) operated as collection depots exchanging hill timber, herbs and resin for plains grain and cloth [@Bayly1983Rulers; @Naqvi1968Urbanisation; @Compagna2026Layered].

### Eastern Kirat Hills and Koshi Terai

The eastern division catalogues 880 settlements across the Saptakoshi basin, the Arun gorge and the Morang Terai lowlands [@Kovacs2024Bengal; @Compagna2026Layered]. Inhabited in the hills by Rai and Limbu communities organised into clan territories (*kipat*) around fortified hilltops (*kot*) and river confluences, the division also encompassed dense agricultural and commercial centres along the eastern Terai and Darjiling foothills. Leading settlements at the 1816AD baseline included Singiya (19,9k), Dharan (19,8k), Phulwari (18,9k), Lahan (18,2k), Darjiling (13,4k) and Inaruwa (12,8k), reflecting late eighteenth-century agrarian reclamation and cross-border trade with Bengal [@Eaton1993Rise; @Compagna2026Layered].

### Bhutanese Valleys and Drukpa Dzongs

The eastern Himalayan division catalogues 426 settlements across the inner valleys of Bhutan and the adjacent Duars lowlands [@Phuntsho2013HistoryBhutan; @Ling2016India]. Along the southern piedmont corridor, Cooch Behar peaked at 32k in 1650AD (16,8k in 1816AD) and Rajganj reached 29,2k in 1816AD [@Eaton1993Rise; @Compagna2026Layered]. Within the highlands, Punakha served as the winter capital of the Drukpa theocracy, peaking at 8,5k in 1775AD (8k in 1816AD), while Thimphu supported 7,5k residents from 1750AD to 1816AD [@Phuntsho2013HistoryBhutan; @Ling2016India]. In western Bhutan, Paro (7k peak in 1750AD; 6,5k in 1816AD) commanded trade routes over the Tremo La pass into the Chumbi valley of Tibet, while Jakar Dzong in Bumthang (6k peak in 1700AD; 5,5k in 1816AD) and Trongsa Dzong (5,5k peak in 1750AD; 5,2k in 1816AD) governed the central and eastern valleys [@Phuntsho2013HistoryBhutan; @Ling2016India; @Compagna2026Layered].

# Limitations

Settlement documentation across the southern Himalayas remains subject to significant preservation and archival biases:
1. Seismic vulnerability: high-frequency seismic activity along the Himalayan frontal thrust has caused repeated destruction of historical brick and stone architecture, levelling civic structures and obliterating epigraphic markers [@Coningham2021Urban].
2. High-relief erosion and mass wasting: monsoon landslides and seasonal river scouring regularly erode lower alluvial terraces, stripping away rural domestic settlement layers [@Parajuli1999Agro].
3. Perishable construction materials: outside royal palaces, stone temples and monastic *dzongs*, rural domestic architecture relied upon timber, wattle-and-daub and thatch, which leave minimal surface archaeological traces after abandonment [@Gosai2025Ethnograph].
4. Asymmetric archival coverage: historical written documentation is heavily concentrated within the Kathmandu Valley and major Bhutanese monasteries, leaving small agricultural hamlets in the western and eastern mid-hills under-represented in precolonial texts [@Hutt1984Nepali; @Kieniewicz2020Identifyin].

# Conclusion

The INDUS settlement gazetteer synthesises 4.060 historical localities across Nepal and Bhutan from 10000BC to 1816AD, exhibiting a Zipf rank-size slope of $\alpha = 0,80$ ($R^2 = 0,99$) and providing an empirical baseline for regional demographic modelling. By georeferencing urban centres, hill fortresses, monastic *dzongs* and Terai market towns, this catalogue isolates nucleated populations from rural farming communities, enabling dasymetric allocation of agrarian cultivators across the mid-hill landscape and capturing the enduring structural role of intramontane urbanism in Himalayan history.

# Appendix

The INDUS source ledger audited 4.335 candidate records, resulting in 4.060 accepted settlements and 275 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Sagardih fort and stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Nandangarh Stupa and Rampa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Nandangarh Stupa and Rampa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Rajnagar Palace</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajnagar Palace</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nuwakot Palace</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Chanki Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ekma</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lauriya</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lauriya Nandangarh Stupa S</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lauriya Nandangarh Stupa S</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lauria Nandangarh Ashoka P</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ramagrama stupa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mahakal temple</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Nepal and Bhutan source ledger.</figcaption>
</figure>

# Sources
