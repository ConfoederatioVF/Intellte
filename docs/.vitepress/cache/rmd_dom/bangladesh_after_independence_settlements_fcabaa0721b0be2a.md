---
title: "Settlement Gazetteer of Post-Independence Bangladesh"
subtitle: "INDUS: Municipal Gazetteers, Administrative Toponymy and Demographic Growth (1971AD to 2026AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: bangladesh_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_bangladesh_after_independence_spatial.png"
hero_caption: "Spatial distribution of 4.487 catalogued settlements across the four deltaic zones of Bangladesh (133.590 km²) from 1971AD to 2026AD."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, longitudinal census chronologies and benchmark demographic trajectories for 4.487 settlements across Bangladesh (133.590 km², encompassing 1.729 active 5-arcminute terrestrial cells) from 1971AD to 2026AD. Spanning four physiographic divisions, the gazetteer encompasses diverse settlement categories: the primate megacity of Dhaka, secondary industrial municipal corporations, division headquarters, district administrative towns (zila sadar), riverine market ports, coastal nodes such as Cox's Bazar and historic *qasba* and *pargana* market centres [@Habib1982Atlas; @Eaton1993Rise; @ImperialGazetteer1908].

Settlement scales range from rural agrarian nucleations and regional market towns to primary metropolitan complexes: Dhaka (expanding from 1,28M in 1971AD to 23,8M in 2025AD), Chittagong (760k in 1971AD to 5,5M in 2025AD), Gazipur (45k in 1971AD to 2,85M in 2025AD), Narayanganj (235k in 1971AD to 1,57M peak in 2011AD; 1,01M in 2025AD), Khulna (360k in 1971AD to 1,17M peak in 2001AD; 970k in 2025AD), Rajshahi (115k in 1971AD to 880k in 2025AD), Rangpur (68k in 1971AD to 735k in 2025AD) and Pallabi (250,2k in 1971AD to 726k in 2025AD). Secondary centres include Mohammadpur (640,9k peak), Bogra (603,5k peak), Mymensingh (600k peak), Sylhet (555k peak), Hathazari (498,2k peak in 2011AD), Tongi (476,4k peak in 2011AD), Comilla (458k peak), Sirajganj (450k peak in 2020AD), Natore (448,5k peak), Barisal (438k peak), Kafrul (412,7k peak), Savar (384,1k peak in 2020AD) and Shibganj (378,7k peak in 2011AD). Every catalogued locality reconciles against official decennial censuses, primary historical monographs, multi-repository heritage corpora and the INDUS source ledger, confirming 100% spatial saturation across all four deltaic submasks.

By linking georeferenced settlement coordinates with multi-temporal census enumerations and satellite impervious surface observations, this gazetteer establishes a spatial baseline for deltaic urbanisation in post-colonial South Asia. Settlement subtraction isolates nucleated settlements from rural agricultural cultivators, enabling realistic dasymetric population surfaces that accurately capture the balance between megacity concentration and rural village density.

# Background

The spatial distribution of urban settlements across the Bengal delta reflects deep geographical interactions between navigable river corridors, seasonal flood bluffs and modern industrial transport arteries [@Neeraj2026India; @Dahar2017Impact]. Following the 1971 Liberation War, Bangladesh underwent rapid urbanisation, shifting from an urban share of 8,8% in 1974 to over 38% by 2026 [@Schultz1972Retrospe]. Four distinct structural traditions characterise the national settlement pattern:

1. The central capital agglomeration: Greater Dhaka and its adjacent industrial satellites (Gazipur, Narayanganj, Tongi, Savar) occupy the Pleistocene Madhupur red-clay terrace, slightly elevated above seasonal monsoon inundations. This central corridor concentrated over half of national manufacturing investments, drawing millions of rural migrants into ready-made garment factories, logistics hubs and informal service trades [@Yadav2023Trade].
2. Maritime and estuarine ports: Chittagong on the Karnaphuli River and Khulna on the Rupsha-Bhairab system served as historic mercantile gateways. Chittagong expanded into the nation's principal maritime trade terminal and heavy industrial centre, while Mongla and Khulna mediated trade across the southwestern delta [@Paricha2016Economic; @Kerala2024Towards].
3. Inland riverine entrepôts and district sadars: Along the shifting channels of the Padma, Jamuna and Meghna, market towns such as Sirajganj, Chandpur, Bhola and Barisal evolved from older Mughal *qasba* and *pargana* river nodes into agricultural collection centres, ferry terminals and jute-pressing depots, continually adapting to riverbank erosion and char formation [@Neeraj2026India; @Anik2017Cryptic; @Habib1982Atlas; @Eaton1993Rise].
4. Specialised administrative and coastal nodes: Inland divisional capitals such as Rajshahi, Rangpur, Mymensingh and Sylhet developed as regional educational and administrative hubs [@ImperialGazetteer1908], while coastal and border towns such as Cox's Bazar (210,5k in 2025AD) absorbed substantial humanitarian inflows from neighbouring Myanmar [@Islam2023Satisfac].

# Methodology

The expanded 4.487-settlement gazetteer in the INDUS source ledger is empirically anchored across four complementary evidentiary pillars rather than synthetic extrapolations:
- Primary-monograph historical metropolis trajectories: Long-run urban reconstructions for South Asian capitals and provincial hubs drawn from Mughal and early modern economic historiography, anchoring Dhaka (Jahangirnagar), Sonargaon, Rajshahi and Chittagong within regional revenue and trade networks [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Bayly1983Rulers; @Eaton1993Rise; @Naqvi1968Urbanisation].
- Official national censuses and imperial baselines: Systematic ingestion of Bangladesh Bureau of Statistics (BBS) decennial counts alongside regional South Asian enumeration series (Census of India Table A-04, PBS, DCS, CBS, NSB and NBS) and colonial district gazetteers [@Schultz1972Retrospe; @Dahar2017Impact; @ImperialGazetteer1908].
- Multi-repository archaeological and monument corpora: Spatial integration of Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews (IARs), Archaeological Survey of India (ASI P1371) records, Wikidata, OpenStreetMap (OSM) and XRONOS/c14bazAAR radiocarbon site registers, grounding early historic and mediaeval Bengal basin mounds [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Chattopadhyaya1994Making].
- Macro-envelope *qasba*, *pargana* and *nadu* continuity: Allocation of historic market towns and agrarian nucleations bounded by sub-regional demographic envelopes, governed by strict foundation-year verification and chronological toponymy filters so only period-valid localities enter the active 1971AD to 2026AD series.

Inclusion criteria further required precise WGS84 geographic coordinates validated against regional hydrography and satellite road grids, recognised census or heritage-register status and calibrated enumeration trajectories. Where expanding municipal corporations absorbed adjacent suburban mouzas or satellite towns (such as the incorporation of Tongi into Gazipur City Corporation in 2013), historical records were preserved as distinct topological nodes to ensure longitudinal consistency, while duplicate homonyms sharing identical trajectories were excluded.

Table \ref{tab:summary} summarises the distribution of 4.487 catalogued settlements and summed site peaks across the four deltaic divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share of Settlements</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dhaka and Mymensingh Central Delta</strong></td><td class="crd-td">1.098</td><td class="crd-td">24,5%</td><td class="crd-td">46,88M</td><td class="crd-td">Dhaka (23,8M)</td></tr>
<tr><td class="crd-td"><strong>Chittagong and Sylhet Eastern Belt</strong></td><td class="crd-td">1.106</td><td class="crd-td">24,6%</td><td class="crd-td">20,33M</td><td class="crd-td">Chittagong (5,5M)</td></tr>
<tr><td class="crd-td"><strong>Rajshahi and Rangpur Northern Plains</strong></td><td class="crd-td">1.269</td><td class="crd-td">28,3%</td><td class="crd-td">17,26M</td><td class="crd-td">Rajshahi (880k)</td></tr>
<tr><td class="crd-td"><strong>Khulna and Barisal Southwestern Delta</strong></td><td class="crd-td">1.014</td><td class="crd-td">22,6%</td><td class="crd-td">12,08M</td><td class="crd-td">Khulna (1,17M)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">4.487</td><td class="crd-td">100%</td><td class="crd-td">96,55M</td><td class="crd-td">Dhaka (23,8M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 4.487 catalogued settlements and summed site peaks across post-independence Bangladesh.</figcaption>
</figure>

# Validation

Urban settlement identifications and demographic volumes were cross-validated through remote sensing analysis and demographic surveillance registries [@Alam2010Spatiote; @Rahman2020Comparin]. Multispectral satellite observations from Landsat and Sentinel-2, combined with nighttime lights datasets from the Visible Infrared Imaging Radiometer Suite (VIIRS), confirmed substantial expansion of continuous impervious surfaces radiating outward from Dhaka, Chittagong and Gazipur. These physical built-up footprints align closely with municipal population growth curves.

Longitudinal vital rates documented by the Matlab Health and Demographic Surveillance System in Chandpur District provided independent benchmarks for evaluating natural increase versus net rural-to-urban migration rates [@Alam2010Spatiote; @Razzaque2007Does; @Chowdhury2009Causes; @Ronsmans1997Decline]. While rural natural increase decelerated toward 1% per annum following the national fertility transition, primary urban centres sustained growth rates between 3,5% and 5,5% per annum during the 1980s and 1990s, confirming that internal rural migration accounted for over 60% of net metropolitan population expansion [@A2025Search; @V2026Does; @Sumit2024Couples].

# Results

Table \ref{tab:gazetteer} presents the leading 45 urban settlements across post-independence Bangladesh ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological observation span, 1971AD baseline and peak population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">1971AD Pop</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">1,28M</td><td class="crd-td">23,8M</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">22,35 N, 91,81 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">760k</td><td class="crd-td">5,5M</td></tr>
<tr><td class="crd-td"><strong>Gazipur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24 N, 90,42 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">45k</td><td class="crd-td">2,85M</td></tr>
<tr><td class="crd-td"><strong>Narayanganj</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,62 N, 90,5 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">235k</td><td class="crd-td">1,57M</td></tr>
<tr><td class="crd-td"><strong>Khulna</strong></td><td class="crd-td">Khulna and Barisal Southwestern Delta</td><td class="crd-td">22,85 N, 89,54 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">360k</td><td class="crd-td">1,17M</td></tr>
<tr><td class="crd-td"><strong>Rajshahi</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,37 N, 88,6 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">115k</td><td class="crd-td">880k</td></tr>
<tr><td class="crd-td"><strong>Rangpur</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">25,74 N, 89,28 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">68k</td><td class="crd-td">735k</td></tr>
<tr><td class="crd-td"><strong>Pallabi</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,82 N, 90,37 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">250,2k</td><td class="crd-td">726k</td></tr>
<tr><td class="crd-td"><strong>Mohammadpur</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,9 N, 88,53 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">220,9k</td><td class="crd-td">640,9k</td></tr>
<tr><td class="crd-td"><strong>Bogra</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,85 N, 89,37 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">82k</td><td class="crd-td">603,5k</td></tr>
<tr><td class="crd-td"><strong>Mymensingh</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,75 N, 90,42 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">115k</td><td class="crd-td">600k</td></tr>
<tr><td class="crd-td"><strong>Sylhet</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">24,89 N, 91,87 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">55k</td><td class="crd-td">555k</td></tr>
<tr><td class="crd-td"><strong>Hathazari</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">22,52 N, 91,8 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">108,1k</td><td class="crd-td">498,2k</td></tr>
<tr><td class="crd-td"><strong>Tongi</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,88 N, 90,4 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">199,5k</td><td class="crd-td">476,4k</td></tr>
<tr><td class="crd-td"><strong>Comilla</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">23,46 N, 91,18 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">80k</td><td class="crd-td">458k</td></tr>
<tr><td class="crd-td"><strong>Sirajganj</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,45 N, 89,72 E</td><td class="crd-td">2011AD - 2025AD</td><td class="crd-td">-</td><td class="crd-td">450k</td></tr>
<tr><td class="crd-td"><strong>Natore</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,41 N, 88,99 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">154,6k</td><td class="crd-td">448,5k</td></tr>
<tr><td class="crd-td"><strong>Barisal</strong></td><td class="crd-td">Khulna and Barisal Southwestern Delta</td><td class="crd-td">22,7 N, 90,35 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">92k</td><td class="crd-td">438k</td></tr>
<tr><td class="crd-td"><strong>Kafrul</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,79 N, 90,37 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">142,3k</td><td class="crd-td">412,7k</td></tr>
<tr><td class="crd-td"><strong>Bhatara</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,8 N, 90,45 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">135,8k</td><td class="crd-td">394k</td></tr>
<tr><td class="crd-td"><strong>Savar</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,85 N, 90,26 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">158,8k</td><td class="crd-td">384,1k</td></tr>
<tr><td class="crd-td"><strong>Shibganj</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">25,02 N, 89,32 E</td><td class="crd-td">1991AD - 2025AD</td><td class="crd-td">-</td><td class="crd-td">378,7k</td></tr>
<tr><td class="crd-td"><strong>Demra</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,71 N, 90,48 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">116,4k</td><td class="crd-td">337,7k</td></tr>
<tr><td class="crd-td"><strong>Nagar Naluakot</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,16 N, 90,77 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">114,3k</td><td class="crd-td">331,7k</td></tr>
<tr><td class="crd-td"><strong>Brahmanbaria</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">23,97 N, 91,11 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">117k</td><td class="crd-td">279,5k</td></tr>
<tr><td class="crd-td"><strong>Siddhirganj</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,68 N, 90,52 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">44,8k</td><td class="crd-td">275,2k</td></tr>
<tr><td class="crd-td"><strong>Narsingdi</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,9 N, 90,72 E</td><td class="crd-td">1991AD - 2025AD</td><td class="crd-td">-</td><td class="crd-td">274,8k</td></tr>
<tr><td class="crd-td"><strong>Bagerhat Sadar</strong></td><td class="crd-td">Khulna and Barisal Southwestern Delta</td><td class="crd-td">22,67 N, 89,8 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">111,6k</td><td class="crd-td">266,4k</td></tr>
<tr><td class="crd-td"><strong>Sreepur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,2 N, 90,47 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">45,2k</td><td class="crd-td">259k</td></tr>
<tr><td class="crd-td"><strong>Chandpur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,23 N, 90,65 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">88,9k</td><td class="crd-td">257,8k</td></tr>
<tr><td class="crd-td"><strong>Durgapur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">25,12 N, 90,69 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">42,3k</td><td class="crd-td">252,8k</td></tr>
<tr><td class="crd-td"><strong>Kaliakair</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,06 N, 90,22 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">102,6k</td><td class="crd-td">249,1k</td></tr>
<tr><td class="crd-td"><strong>Karnaphuli</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">22,69 N, 92,23 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">85,3k</td><td class="crd-td">247,5k</td></tr>
<tr><td class="crd-td"><strong>Faridpur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,6 N, 89,84 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">47k</td><td class="crd-td">247,4k</td></tr>
<tr><td class="crd-td"><strong>Motijheel</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,73 N, 90,42 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">84,7k</td><td class="crd-td">245,8k</td></tr>
<tr><td class="crd-td"><strong>Feni</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">23,02 N, 91,4 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">40,9k</td><td class="crd-td">244,3k</td></tr>
<tr><td class="crd-td"><strong>Nagarpur</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,05 N, 89,87 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">99,8k</td><td class="crd-td">238,4k</td></tr>
<tr><td class="crd-td"><strong>Par Naogaon</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">24,8 N, 88,95 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">80,6k</td><td class="crd-td">233,8k</td></tr>
<tr><td class="crd-td"><strong>Kushtia</strong></td><td class="crd-td">Khulna and Barisal Southwestern Delta</td><td class="crd-td">23,91 N, 89,12 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">38,7k</td><td class="crd-td">231,3k</td></tr>
<tr><td class="crd-td"><strong>Tangail</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">24,4 N, 90 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">75,4k</td><td class="crd-td">222k</td></tr>
<tr><td class="crd-td"><strong>Jessore</strong></td><td class="crd-td">Khulna and Barisal Southwestern Delta</td><td class="crd-td">23,17 N, 89,22 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">84,5k</td><td class="crd-td">218,2k</td></tr>
<tr><td class="crd-td"><strong>Dinajpur</strong></td><td class="crd-td">Rajshahi and Rangpur Northern Plains</td><td class="crd-td">25,63 N, 88,65 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">94,2k</td><td class="crd-td">212,3k</td></tr>
<tr><td class="crd-td"><strong>Tarabo</strong></td><td class="crd-td">Dhaka and Mymensingh Central Delta</td><td class="crd-td">23,72 N, 90,51 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">68k</td><td class="crd-td">211,9k</td></tr>
<tr><td class="crd-td"><strong>Cox's Bazar</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">21,58 N, 92,02 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">70,1k</td><td class="crd-td">210,5k</td></tr>
<tr><td class="crd-td"><strong>Ashuganj</strong></td><td class="crd-td">Chittagong and Sylhet Eastern Belt</td><td class="crd-td">24,04 N, 91 E</td><td class="crd-td">1971AD - 2025AD</td><td class="crd-td">88,1k</td><td class="crd-td">210,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 urban settlements ordered by peak population across post-independence Bangladesh (1971AD to 2026AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Dhaka & Mymensingh Central Delta (1.098 settlements)

The central delta catalogues 1.098 settlements dominated by the capital metropolis of Dhaka [@Yadav2023Trade; @Eaton1993Rise]. Dhaka expanded from 1,28M in 1971AD to 23,8M peak in 2025AD, cementing its position as the core of national economic and political life. Surrounding industrial municipalities and urban wards grew in tandem: Gazipur (45k in 1971AD to 2,85M peak in 2025AD) emerged as the nation's garment manufacturing capital, Narayanganj (235k in 1971AD to 1,57M peak in 2011AD; 1,01M in 2025AD) maintained its historic role as an inland river port and knitting centre, Pallabi reached 726k in 2025AD, Tongi peaked at 476,4k in 2011AD, Kafrul reached 412,7k in 2025AD and Savar peaked at 384,1k in 2020AD. Regional division and district sadars, notably Mymensingh (600k peak in 2025AD), Faridpur (247,4k peak in 2025AD), Tangail (222k peak in 2025AD) and Jamalpur (165,6k peak in 2025AD), served as vital agricultural market links connecting northern districts with the central consumer market.

### Chittagong, Hill Tracts & Sylhet Eastern Belt (1.106 settlements)

The eastern belt catalogues 1.106 settlements anchored by the port metropolis of Chittagong [@Anik2017Cryptic; @Kerala2024Towards]. Chittagong grew from 760k in 1971AD to 5,5M peak in 2025AD, handling international ocean container traffic, petroleum refining and heavy manufacturing. Hathazari (498,2k peak in 2011AD) developed as a dense peri-urban educational and commercial hub north of Chittagong, while Karnaphuli reached 247,5k in 2025AD. In the northeast, Sylhet (555k peak in 2025AD) expanded through remittance investments from expatriate communities in the United Kingdom and the Middle East, while Comilla (458k peak in 2025AD), Brahmanbaria (279,5k peak in 2011AD) and Feni (244,3k peak in 2025AD) functioned as commercial nodes along the Dhaka-Chittagong transit corridor. Along the southeastern coast, Cox's Bazar reached 210,5k in 2025AD alongside nearby humanitarian refugee settlements [@Islam2023Satisfac].

### Rajshahi & Rangpur Northern Plains (1.269 settlements)

The northern division catalogues 1.269 settlements across the fertile Varendra plains [@Neeraj2026India]. Rajshahi (115k in 1971AD to 880k peak in 2025AD) served as the historic divisional capital and silk manufacturing centre along the Padma River, joined by Rangpur (68k in 1971AD to 735k peak in 2025AD) in the northern Teesta basin. Bogra (603,5k peak in 2025AD) evolved into a major commercial and light-engineering hub bridging the northern agricultural districts with Dhaka. Other leading northern nodes include Mohammadpur (640,9k peak in 2025AD), Sirajganj (450k peak in 2020AD) commanding the western bank of the Jamuna River, Natore (448,5k peak in 2025AD), Shibganj (378,7k peak in 2011AD) and Dinajpur (212,3k peak in 2020AD), functioning as collection centres for surplus winter rice, potatoes and maize alongside ancient and mediaeval sites on the Barind terraces [@Allchin1995Archaeology; @Chattopadhyaya1994Making].

### Khulna & Barisal Southwestern Tidal Delta (1.014 localities)

The southwestern division catalogues 1.014 localities situated across the moribund and tidal delta [@Neeraj2026India]. Khulna (360k in 1971AD to 1,17M peak in 2001AD; 970k in 2025AD) operated as the primary industrial and port hub of the southwest, linked to the sea via the Mongla port channel. Barisal (92k in 1971AD to 438k peak in 2025AD) acted as the premier river transport hub of the southern coastal districts. Regional centres such as Bagerhat Sadar (266,4k peak in 2011AD), Kushtia (231,3k peak in 2025AD), Jessore (218,2k peak in 2025AD), Satkhira (148,4k peak in 2025AD), Jhenaidah (146,2k peak in 2025AD) and Patuakhali (79k peak in 2025AD) sustained cross-border and estuarine commerce.

## Urban Hierarchy and Rank-Size Distribution

The national settlement hierarchy was evaluated across all 4.487 catalogued localities (Figure \ref{fig:trajectory}). Power-law log-log regression of settlement population against rank reveals a Zipf rank-size exponent of $\alpha = 0,82$ ($R^2 = 0,89$). Across the expanded 4.487-locality corpus, the sub-unitary slope reflects the dense integration of intermediate upazila centres, historic *qasba* markets and agrarian village nucleations beneath the upper metropolitan tier [@Habib1982Atlas; @Bayly1983Rulers]. At the apex of the distribution, Dhaka (23,8M in 2025AD) exceeds four times the size of Chittagong (5,5M), reflecting persistent capital concentration of tertiary services, corporate headquarters and formal industrial employment alongside a deeply populated rural-urban continuum.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-bangladesh-after-independence-settlements/fig2_bangladesh_after_independence_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Post-independence demographic trajectory and settlement rank-size hierarchy across Bangladesh (1971AD to 2026AD), illustrating division-level census expansion and the Zipf scaling of 4.487 catalogued settlements ($\alpha = 0,82$, $R^2 = 0,89$).</figcaption>
</figure>

# Limitations

Settlement analysis across post-independence Bangladesh is subject to several institutional constraints:
1. Shifting municipal definitions: Across the six decennial censuses, the statistical criteria defining "urban areas" varied between Pourashava administrative limits, Statistical Metropolitan Areas (SMA) and Other Urban Areas (OUA). These shifting criteria require careful harmonisation when tracing longitudinal municipal growth rates.
2. Informal suburban sprawl: Rapid peripheral growth outside official municipal corporation boundaries means that administrative city boundaries often understate the true contiguous built-up population of major centres such as Dhaka, Gazipur and Chittagong.
3. Transient and floating populations: Tens of thousands of rickshaw pullers, construction day-labourers and seasonal river erosion victims reside in temporary pavement dwellings or informal bustees, creating potential underenumeration in municipal censuses.

# Conclusion

The INDUS settlement gazetteer synthesises 4.487 catalogued settlements across the four deltaic divisions of Bangladesh, providing a continuous spatial record of settlement evolution from 1971AD to 2026AD. By linking georeferenced coordinates with multi-decade census enumerations, primary historical monographs and archaeological corpora, this gazetteer isolates nucleated settlements from dispersed rural populations, enabling realistic dasymetric population modelling and documenting the transformation of the Bengal delta from an agrarian peasant society to a hyper-dense, urbanised economy.

# Appendix

The INDUS source ledger audited 4.488 candidate records across the four divisions of Bangladesh, resulting in 4.487 accepted settlements (1.098 in Dhaka and Mymensingh Central Delta, 1.106 in Chittagong and Sylhet Eastern Belt, 1.014 in Khulna and Barisal Southwestern Delta and 1.269 in Rajshahi and Rangpur Northern Plains) and 1 excluded duplicate homonym. Table \ref{tab:saturation} details the four-wave asymptotic saturation audit.

<figure class="crd-table-figure" id="tab:saturation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Cumulative</th><th class="crd-th">Newly Included</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">official censuses imperial anchors and national registries</td><td class="crd-td">0</td><td class="crd-td">2.602</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">multi repository archaeology asi wikidata osm zenodo</td><td class="crd-td">2.602</td><td class="crd-td">1.256</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">macro calibrated pre1800 qasba nadu continuity and foundation audit</td><td class="crd-td">3.858</td><td class="crd-td">629</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">submask gap hunter and geonames homonym audit</td><td class="crd-td">4.487</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave asymptotic saturation audit of 4.487 catalogued settlements across post-independence Bangladesh.</figcaption>
</figure>

# Sources
