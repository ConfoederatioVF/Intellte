---
title: "Settlement Gazetteer of Malaysia, Singapore and Brunei after Independence"
subtitle: "MANDALA: Coordinates, Administrative Allocations and Demographic Trajectories (1957 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: malaysia_singapore_brunei_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_malaysia_singapore_brunei_after_independence_spatial.png"
hero_caption: "Spatial distribution of 882 catalogued post-independence settlements and regional administrative territories across Malaysia, Singapore and Brunei (353.101 km²) from 1957 to 2026."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, longitudinal occupation chronologies and benchmark demographic trajectories for 2229 post-independence settlements across Malaysia, Singapore and Brunei Darussalam (353.101 km²) from 1957 to 2026. Encompassing six distinct administrative and geographical sub-regions, the catalogue covers a wide spectrum of modern settlement typologies: high-density planned satellite new towns and reclaimed port quarters in the island republic of Singapore, dense urban conurbations and manufacturing export corridors along the western littoral of Peninsular Malaysia, agricultural resettlement villages and oil palm market centres across the eastern peninsula and Johor, timber river ports and coastal liquefied natural gas terminals in Sarawak, agricultural frontier settlements and commercial coastal harbours in Sabah and Labuan, and hydrocarbon extraction hubs and suburban districts in Brunei Darussalam.

Settlement populations range from planned agrarian scheme villages and frontier outposts to hyper-dense global and federal primate cities. The largest urban agglomerations comprise Singapore (peaking at 6,14M in 2025), Kuala Lumpur (2,08M in 2025), Melaka (1,05M), Johor Bahru (901k), Klang (878k), Petaling Jaya (848k), George Town (834k), Seberang Perai (816k), Ipoh (798k), Subang Jaya (744k), Bangi (722k), Shah Alam (614k), Kuantan (608k), Sandakan (543k), Kota Kinabalu (475k), Kuching (423k), Tawau (391k), Miri (316k), Sibu (260k), Bintulu (159k) and Belait (78,8k). Every catalogued locality reconciles against 882 source-ledger candidate records under MANDALA with zero exclusions post-audit.

By connecting georeferenced municipal and district settlement series with historical census returns, remote sensing of built-up urban morphology and infrastructure networks, this gazetteer establishes a spatial baseline for modern settlement analysis across maritime Southeast Asia. Settlement subtraction isolates nucleated urban populations from rural agricultural and estate populations, ensuring that historical demographic syntheses reflect genuine urban built-up areas rather than arbitrary administrative distributions.

# Background

Settlement patterns across post-independence Malaysia, Singapore and Brunei reflect deliberate state interventions in industrial planning, agricultural colonisation, urban housing provision and natural resource extraction [@Goldstein1984Interrelations; @Elsawahli2016Demographi; @Cheung1989Beyond]. Four primary settlement traditions characterise the regional settlement landscape:
1. High-density planned satellite cities and public housing estates: In the Republic of Singapore, the Housing and Development Board (HDB) transformed the island's settlement morphology by replacing nineteenth-century colonial shophouses and rural squatter settlements with modular, high-rise satellite new towns [@Cheung1989Beyond; @Fawcett1980Singapore]. Towns such as Queenstown, Toa Payoh, Ang Mo Kio, Bedok, Woodlands, Tampines and Jurong West were designed with neighbourhood commercial precincts, schools, transit links and sports complexes, creating self-contained urban communities that house the majority of citizens, accompanied by rapid demographic maturation [@Ansah2015Projection; @SweeHock1989Muslim].
2. Linear industrial and metropolitan conurbations: Along the western coastal plain of Peninsular Malaysia, rapid post-colonial industrialisation established continuous urban corridors [@Goldstein1984Interrelations; @DaVanzo1982Anatomy]. The primary axis extends along the Klang Valley from Kuala Lumpur westward through Petaling Jaya, Subang Jaya and Shah Alam to Port Klang, and southward toward Putrajaya, Cyberjaya and Sepang [@Elsawahli2016Demographi]. A secondary northern axis unites George Town on Penang Island with mainland Seberang Perai, Bayan Lepas and Butterworth, forming an integrated manufacturing and logistics hub [@Goldstein1984Interrelations; @Elsawahli2016Demographi].
3. Agrarian resettlement schemes and smallholder market towns: Across the interior plains of Pahang, Johor, Terengganu and Perak, state-led land development programmes established hundreds of planned agricultural communities [@Goldstein1984Interrelations]. The Federal Land Development Authority (FELDA) cleared millions of hectares of tropical rainforest to settle landless rural families, constructing standardised residential hamlets equipped with central community halls, primary schools, medical clinics and central palm oil mills [@DaVanzo1982Anatomy; @Elsawahli2016Demographi].
4. Hydrocarbon export terminals and coastal frontier ports: In northern Borneo and the eastern peninsula, oil, gas and timber resources spurred coastal urban growth [@C1968Population; @Dozier1967Demographi]. Coastal ports such as Kerteh in Terengganu, Bintulu and Miri in Sarawak, Sandakan and Tawau in Sabah, and Kuala Belait and Seria in Brunei Darussalam developed as specialised processing, refining and shipping hubs, drawing technical specialists and immigrant labourers into formerly isolated coastal tracts [@Oh2018Viability; @BONG2022Site].

# Methodology

Candidate settlement records were assembled and evaluated using official population and housing census gazetteers, municipal directories, topographic surveys and longitudinal electoral registries [@C1968Population; @Goldstein1984Interrelations; @Dozier1967Demographi]. Inclusion criteria require:
- Verified WGS84 geographic coordinates validated against satellite imagery and transport infrastructure [@BONG2022Site; @Addly2022Residual].
- Continuous longitudinal demographic records spanning decennial census benchmarks from 1957 to 2025 [@DaVanzo1982Anatomy; @Elsawahli2016Demographi].
- Official municipal, town council or administrative district gazetteer status reflecting functional settlement nucleation [@B2025Census; @C1968Population].

Where multiple adjacent localities or industrial sub-districts fall within a single contiguous urban administrative unit, coordinates were consolidated to represent the urban centre, preventing artificial spatial fragmentation while preserving functional agglomeration [@B2025Census; @Goldstein1984Interrelations]. Rural estate housing quarters and agricultural workers were aggregated to their respective administrative mukim or district market centres.

Table \ref{tab:summary} summarises the distribution of 2229 catalogued settlements and aggregate peak populations across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Catalogued Localities</th><th class="crd-th">Locality Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">70</td><td class="crd-td">3,1%</td><td class="crd-td">18,32M</td><td class="crd-td">Singapore (6,14M)</td></tr>
<tr><td class="crd-td"><strong>West Coast Peninsular</strong></td><td class="crd-td">605</td><td class="crd-td">27,1%</td><td class="crd-td">29,51M</td><td class="crd-td">Kuala Lumpur (2,08M)</td></tr>
<tr><td class="crd-td"><strong>East Coast and Johor</strong></td><td class="crd-td">544</td><td class="crd-td">24,4%</td><td class="crd-td">10,14M</td><td class="crd-td">Pelentong (612,8k)</td></tr>
<tr><td class="crd-td"><strong>Sarawak</strong></td><td class="crd-td">567</td><td class="crd-td">25,4%</td><td class="crd-td">3,96M</td><td class="crd-td">Kuching (422,9k)</td></tr>
<tr><td class="crd-td"><strong>Sabah and Labuan</strong></td><td class="crd-td">355</td><td class="crd-td">15,9%</td><td class="crd-td">3,93M</td><td class="crd-td">Sandakan (510,6k)</td></tr>
<tr><td class="crd-td"><strong>Brunei Darussalam</strong></td><td class="crd-td">88</td><td class="crd-td">3,9%</td><td class="crd-td">605,3k</td><td class="crd-td">Belait (78,8k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2229</td><td class="crd-td">100%</td><td class="crd-td">66,46M</td><td class="crd-td">Singapore (6,14M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 882 catalogued settlements and aggregate site peaks across Malaysia, Singapore and Brunei.</figcaption>
</figure>

# Testing and Validation

Settlement identities, geographic coordinates and longitudinal population figures were validated through cross-referencing national statistical releases with high-resolution geospatial datasets [@Goldstein1984Interrelations; @DaVanzo1982Anatomy; @B2025Census]. Census returns from the Department of Statistics Malaysia, the Singapore Department of Statistics and the Brunei Department of Economic Planning and Statistics provided primary control totals [@C1968Population; @Fawcett1980Singapore; @Collaborators2026Causes].

Remote sensing imagery from the Landsat and Copernicus Sentinel-2 satellite programmes was analysed to map urban footprint expansion and impervious surface density [@BONG2022Site; @Addly2022Residual]. In Peninsular Malaysia, nighttime lights observations from the Defense Meteorological Satellite Program (DMSP-OLS) and the Visible Infrared Imaging Radiometer Suite (VIIRS) confirmed the formation of contiguous urban corridors connecting Kuala Lumpur with Rawang, Kajang and Klang, as well as along the southern Johor-Singapore border [@Elsawahli2016Demographi; @Goldstein1984Interrelations]. In Borneo, spatial analysis confirmed the expansion of coastal industrial enclaves at Bintulu and Miri, distinguishing urban built-up areas from surrounding oil palm concessions and logged secondary forest [@C1968Population; @Dozier1967Demographi; @Carnegie2021Human].

# Results

Table \ref{tab:gazetteer} documents the leading 45 settlements across Malaysia, Singapore and Brunei ordered by peak population descending, detailing geographic coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2025 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,3 N, 103,8 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">6,14M</td><td class="crd-td">6,14M</td></tr>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,29 N, 103,85 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">5,98M</td><td class="crd-td">5,98M</td></tr>
<tr><td class="crd-td"><strong>Kuala Lumpur</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,15 N, 101,7 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">2,08M</td><td class="crd-td">2,08M</td></tr>
<tr><td class="crd-td"><strong>Melaka</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">2,2 N, 102,25 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Johor Bahru</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,46 N, 103,76 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">901k</td><td class="crd-td">901k</td></tr>
<tr><td class="crd-td"><strong>Klang</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,03 N, 101,45 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">878k</td><td class="crd-td">252k</td></tr>
<tr><td class="crd-td"><strong>Kampung Baru Subang</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,15 N, 101,53 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">875,2k</td><td class="crd-td">875,2k</td></tr>
<tr><td class="crd-td"><strong>Petaling Jaya</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,11 N, 101,61 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">848,3k</td><td class="crd-td">848,3k</td></tr>
<tr><td class="crd-td"><strong>George Town</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">5,41 N, 100,33 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">834k</td><td class="crd-td">834k</td></tr>
<tr><td class="crd-td"><strong>Seberang Perai</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">5,41 N, 100,37 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">815,8k</td><td class="crd-td">130,5k</td></tr>
<tr><td class="crd-td"><strong>Ipoh</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">4,6 N, 101,07 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">798k</td><td class="crd-td">798k</td></tr>
<tr><td class="crd-td"><strong>Subang Jaya</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,04 N, 101,58 E</td><td class="crd-td">1980AD - 2025AD</td><td class="crd-td">743,7k</td><td class="crd-td">743,7k</td></tr>
<tr><td class="crd-td"><strong>Bangi</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">2,89 N, 101,78 E</td><td class="crd-td">2020AD - 2025AD</td><td class="crd-td">722k</td><td class="crd-td">722k</td></tr>
<tr><td class="crd-td"><strong>Subang Jaya</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,06 N, 101,59 E</td><td class="crd-td">1980AD - 2025AD</td><td class="crd-td">708,3k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Bukit Rahman Putra</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,22 N, 101,56 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">637,4k</td><td class="crd-td">637,4k</td></tr>
<tr><td class="crd-td"><strong>Shah Alam</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,08 N, 101,53 E</td><td class="crd-td">1970AD - 2025AD</td><td class="crd-td">613,6k</td><td class="crd-td">613,6k</td></tr>
<tr><td class="crd-td"><strong>Pelentong</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">1,52 N, 103,82 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">612,8k</td><td class="crd-td">612,8k</td></tr>
<tr><td class="crd-td"><strong>Kuantan</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">3,82 N, 103,33 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">607,8k</td><td class="crd-td">575,4k</td></tr>
<tr><td class="crd-td"><strong>Iskandar Puteri</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,39 N, 103,62 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">604,8k</td><td class="crd-td">604,8k</td></tr>
<tr><td class="crd-td"><strong>Bharu</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">6,13 N, 102,25 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">597,3k</td><td class="crd-td">597,3k</td></tr>
<tr><td class="crd-td"><strong>Kuala Muda</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">5,59 N, 100,37 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">572,2k</td><td class="crd-td">572,2k</td></tr>
<tr><td class="crd-td"><strong>Sungai Petani</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">5,65 N, 100,49 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">572,1k</td><td class="crd-td">572,1k</td></tr>
<tr><td class="crd-td"><strong>Selayang Baru Utara</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,25 N, 101,67 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">569,5k</td><td class="crd-td">569,5k</td></tr>
<tr><td class="crd-td"><strong>Pasir Gudang</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,46 N, 103,91 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">561,4k</td><td class="crd-td">561,4k</td></tr>
<tr><td class="crd-td"><strong>Pulai</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">1,53 N, 103,67 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">530,9k</td><td class="crd-td">530,9k</td></tr>
<tr><td class="crd-td"><strong>Kampung Larkin Lama</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">1,5 N, 103,74 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">525k</td><td class="crd-td">525k</td></tr>
<tr><td class="crd-td"><strong>Damansara</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,15 N, 101,58 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">525k</td><td class="crd-td">525k</td></tr>
<tr><td class="crd-td"><strong>Sandakan</strong></td><td class="crd-td">Sabah and Labuan</td><td class="crd-td">5,75 N, 118 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">510,6k</td><td class="crd-td">204,2k</td></tr>
<tr><td class="crd-td"><strong>Kinabalu</strong></td><td class="crd-td">Sabah and Labuan</td><td class="crd-td">5,97 N, 116,07 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">474,7k</td><td class="crd-td">474,7k</td></tr>
<tr><td class="crd-td"><strong>Ampang Jaya</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,15 N, 101,77 E</td><td class="crd-td">2000AD - 2025AD</td><td class="crd-td">469k</td><td class="crd-td">132,6k</td></tr>
<tr><td class="crd-td"><strong>Sandakan</strong></td><td class="crd-td">Sabah and Labuan</td><td class="crd-td">5,84 N, 118,12 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">461k</td><td class="crd-td">461k</td></tr>
<tr><td class="crd-td"><strong>Kuala Terengganu</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">5,33 N, 103,14 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">447,8k</td><td class="crd-td">447,8k</td></tr>
<tr><td class="crd-td"><strong>Taman Petaling</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,2 N, 101,65 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">444,2k</td><td class="crd-td">444,2k</td></tr>
<tr><td class="crd-td"><strong>Alor Setar</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">6,12 N, 100,37 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">438,7k</td><td class="crd-td">438,7k</td></tr>
<tr><td class="crd-td"><strong>Kampung Kangkar Teberau</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">1,53 N, 103,75 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">433k</td><td class="crd-td">433k</td></tr>
<tr><td class="crd-td"><strong>Kuching</strong></td><td class="crd-td">Sarawak</td><td class="crd-td">1,56 N, 110,34 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">422,9k</td><td class="crd-td">422,9k</td></tr>
<tr><td class="crd-td"><strong>Seremban</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">2,73 N, 101,94 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">419,5k</td><td class="crd-td">391,6k</td></tr>
<tr><td class="crd-td"><strong>Puchong</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3 N, 101,62 E</td><td class="crd-td">1980AD - 2025AD</td><td class="crd-td">393,9k</td><td class="crd-td">393,9k</td></tr>
<tr><td class="crd-td"><strong>Tawau</strong></td><td class="crd-td">Sabah and Labuan</td><td class="crd-td">4,24 N, 117,89 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">391,2k</td><td class="crd-td">391,2k</td></tr>
<tr><td class="crd-td"><strong>Setapak</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,21 N, 101,73 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">370,9k</td><td class="crd-td">370,9k</td></tr>
<tr><td class="crd-td"><strong>Gombak</strong></td><td class="crd-td">West Coast Peninsular</td><td class="crd-td">3,24 N, 101,73 E</td><td class="crd-td">2000AD - 2025AD</td><td class="crd-td">366,7k</td><td class="crd-td">366,7k</td></tr>
<tr><td class="crd-td"><strong>Muar</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">2,05 N, 102,56 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">357,1k</td><td class="crd-td">330,5k</td></tr>
<tr><td class="crd-td"><strong>Kluang</strong></td><td class="crd-td">East Coast and Johor</td><td class="crd-td">2,03 N, 103,32 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">339,9k</td><td class="crd-td">339,9k</td></tr>
<tr><td class="crd-td"><strong>Miri</strong></td><td class="crd-td">Sarawak</td><td class="crd-td">4,4 N, 113,99 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">315,6k</td><td class="crd-td">315,6k</td></tr>
<tr><td class="crd-td"><strong>Ulu Bedok</strong></td><td class="crd-td">Singapore</td><td class="crd-td">1,33 N, 103,93 E</td><td class="crd-td">1957AD - 2025AD</td><td class="crd-td">293,6k</td><td class="crd-td">293,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Malaysia, Singapore and Brunei (1957 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Republic of Singapore

The Republic of Singapore catalogues 69 urban districts and administrative nodes across its 849 km² territory [@Cheung1989Beyond; @Fawcett1980Singapore]. The central city of Singapore anchors the territory, accommodating 6,14M inhabitants at its 2025 peak within high-density residential estates, financial districts and reclaimed commercial zones. Secondary urban centres include the southern border node of Johor Bahru and the Iskandar Puteri corridor (605k peak), which maintain high cross-border economic integration with the island state [@Goldstein1984Interrelations]. The urban layout is defined by planned HDB new towns (including Jurong West, Tampines, Woodlands, Bedok, Hougang, Ang Mo Kio, Sengkang and Yishun) connected to central business districts via the Mass Rapid Transit (MRT) rail network [@Ansah2015Projection; @SweeHock1989Muslim].

### West Coast Peninsular Malaysia

The western coastal division catalogues 378 settlements across 54.845 km² of coastal plain, foothills and river interfluves [@Elsawahli2016Demographi; @DaVanzo1982Anatomy]. Kuala Lumpur serves as the federal capital and primary metropolis, concentrating over 2,08M residents within its federal territory boundaries in 2025. Surrounding the capital, the Klang Valley encompasses Petaling Jaya (848k peak), Klang (878k peak), Subang Jaya (744k peak), Shah Alam (614k peak), Bangi (722k peak), Kampung Baru Subang (875k peak) and Bukit Rahman Putra (637k peak). To the south, historic Melaka accommodates over 1,05M residents across its expanded metropolitan district. In the north, George Town (834k peak) and Seberang Perai (816k peak) form the industrial core of Penang, while Ipoh (798k peak) anchors the Kinta Valley in Perak.

### East Coast Peninsular Malaysia and Johor

The eastern and southern peninsular division catalogues 184 settlements across 81.226 km² of undulating lowlands and coastal plains [@Goldstein1984Interrelations; @Elsawahli2016Demographi]. Kuantan anchors the central eastern littoral, concentrating 608k residents as the state capital of Pahang and the logistical hub for offshore oil logistics and petrochemical refining at Gebeng. In Johor, settlements such as Pelentong (613k peak), Bharu (597k peak), Muar, Batu Pahat and Kluang support agricultural processing and light manufacturing. In Terengganu, Kuala Terengganu and the oil port of Kerteh coordinate hydrocarbon processing, while Kota Bharu anchors the agrarian economy of the Kelantan delta.

### Sarawak

The state of Sarawak catalogues 122 settlements across 135.853 km² of coastal plains and interior river basins [@C1968Population; @BONG2022Site]. Kuching on the Sarawak River serves as the administrative capital and commercial centre, housing 423k inhabitants in its metropolitan area. Miri in the north concentrates 316k residents, operating as the principal engineering centre for offshore oil and gas production. Sibu (260k peak) coordinates trade along the Rajang river basin, serving as a hub for timber processing and interior riverboat transport, while interior riverine communities maintain traditional subsistence forest tenure [@MdIsa2023Compilatio]. Bintulu (159k peak) functions as the primary industrial deep-water port of the state, hosting the Malaysia LNG complex and heavy smelting operations.

### Sabah and Labuan

The northern Borneo division catalogues 41 settlements across 76.749 km² of rugged mountainous terrain and coastal indentations [@C1968Population; @Dozier1967Demographi]. Sandakan on the eastern coast represents the largest municipal settlement, concentrating 543k inhabitants as a primary port for palm oil export, timber processing and marine industries. Kota Kinabalu (475k peak) on the western coast serves as the state capital, commercial gateway and financial hub. Tawau (391k peak) near the Indonesian border coordinates agricultural and trans-border trade, while Lahad Datu (200k peak) and the federal island territory of Labuan provide petroleum refining and offshore financial services, absorbing cross-border labour movements [@Carnegie2021Human].

### Brunei Darussalam

The Sultanate of Brunei Darussalam catalogues 88 settlements and mukim administrative subdivisions across its 3.579 km² territory [@Oh2018Viability; @Arifin2025Family]. Population is heavily concentrated in the Brunei-Muara District, where residential centres including Berakas (41,2k peak), Gadong (37,1k peak), Kilanas and Sengkurong flank the capital, Bandar Seri Begawan, and the historic stilt community of Kampong Ayer. In the western hydrocarbon basin of Belait District, the municipal centre of Belait (78,8k peak), the oil capital of Seria and Kampong Pandan (32,7k peak) house the engineering staff, refinery facilities and export infrastructure that sustain the national economy [@Jali2022Factors; @Ahmad2014Ecotourism].

# Limitations

Settlement gazetteer compilation across post-independence Malaysia, Singapore and Brunei involves specific administrative and spatial constraints:
1. Municipal boundary annexations: throughout the post-1970 era, municipal councils expanded administrative jurisdictions, incorporating peripheral rural villages and peri-urban estates into city boundaries (such as the expansion of Ipoh City Council and the creation of Majlis Bandaraya Iskandar Puteri), creating artificial jumps in longitudinal settlement figures [@Goldstein1984Interrelations; @Elsawahli2016Demographi].
2. Rapid suburbanisation and peri-urban amalgamation: contiguous suburban growth in the Klang Valley, Greater George Town and Johor Bahru blurs administrative distinctions between adjacent municipalities, where suburbs such as Petaling Jaya, Subang Jaya and Shah Alam operate as a single continuous urban fabric [@A2022Second; @Goldstein1984Interrelations].
3. Fluid labour and undocumented populations: informal settlements and undocumented agricultural worker communities in rural Sabah, Johor and Selangor present enumeration challenges for decennial census authorities, though regularisation programmes have progressively improved data quality [@Carnegie2021Human; @Dozier1967Demographi].
4. Distinct national gazetteer naming conventions: differences between Malaysian *bandar/pekan*, Singaporean planning areas and Brunei *mukim/kampong* units require standardised geographic reconciliation to ensure analytical consistency across international frontiers [@B2025Census; @C1968Population].

# Conclusion

The MANDALA settlement gazetteer synthesises 882 catalogued localities across six sub-regions of Malaysia, Singapore and Brunei, providing an empirical record of post-independence urbanization and spatial redistribution from 1957 to 2026. By anchoring WGS84 geographic coordinates, administrative boundaries and decennial census trajectories, this catalogue isolates nucleated urban centres from rural agricultural populations. This spatial framework demonstrates how export-oriented industrialisation, state-directed public housing construction, agricultural resettlement and natural resource extraction transformed a dispersed colonial plantation economy into an integrated network of modern maritime metropolises.

# Appendix

The MANDALA source ledger audited 882 candidate records across Malaysia, Singapore and Brunei, resulting in 882 accepted settlements and zero exclusions post-audit. Table \ref{tab:excluded} documents the zero-exclusion status of the regional source ledger.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kampung Baharu</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Labang</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Tengah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Luit</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kelang Baharu</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Lintang</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Busut</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Langkap</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Sungai Ular</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Sungai Dua</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Baharu</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Gajah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Teronoh</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Matang</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Bukit</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Kampung Masjid</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Saing</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Jawi</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Arah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Anggah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Labang</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Taboh</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Nandong</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Sigau</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Rumah Bangga</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Audit of excluded candidate localities from the regional source ledger.</figcaption>
</figure>

# Sources
