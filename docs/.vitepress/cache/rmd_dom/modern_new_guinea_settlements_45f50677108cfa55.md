---
title: "Papua New Guinea and Indonesian Papua"
subtitle: "Settlement Gazetteer and Provincial Urban Hierarchy (1962 to 2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/modern_new_guinea_urban_hierarchy.png"
hero_caption: "Twelve largest recorded urban centres and rank-size distribution across 145 settlements in Papua New Guinea and Indonesian Papua, 1962 to 2024."
hero_label: "fig:hero-new-guinea-hierarchy"
bibliography: modern_new_guinea.bib
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Twelve largest recorded urban centres and rank-size distribution across 145 settlements in Papua New Guinea and Indonesian Papua, 1962 to 2024.](figures/modern_new_guinea_urban_hierarchy.png)



# Abstract

This gazetteer documents 145 modern New Guinea settlements and 424 dated population observations across 28 provincial units spanning Papua New Guinea (92 centres across 22 provinces) and Indonesian Papua (53 centres across the six post-2022 provinces) between 1962 and 2024. Assembled across four audited ledger waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate records—excluding 299 rural Papua New Guinea Local-Level Government administrative areas modelled via areal masks, merging 12 duplicate alias entries within 25 km and closing at 0,69% marginal gain on the final verification sweep—the register draws exclusively from Papua New Guinea National Statistical Office censuses (1966–2024), Badan Pusat Statistik Indonesia *Sensus Penduduk* and regency handbooks (1971–2023), late Netherlands New Guinea administrative tables and peer-reviewed regional monographs [@guinea2002papua; @guinea20132011; @guinea20252024; @papua2011penduduk; @indonesia2021hasil]. Spatial classification distinguishes 144 standalone city-proper, administrative-station and village cores from 1 suburban satellite municipality (Aimas, serving greater Sorong at 42.014 in 2020). Recorded peak populations span more than three orders of magnitude, from highland field community Tsembaga (204 in 1962) and airstrip settlement Hoskins (395 in 2000) up to Port Moresby (756.754 in 2024), Jayapura (414.862 in 2023), Sorong (295.809 in 2023), Lae (148.934 in 2011), Timika (148.900 in 2023), Merauke (108.470), Nabire (104.300) and Manokwari (102.400). Across the upper 72 settlements, rank-size scaling adheres tightly to a classic Zipf law ($\alpha = 1,13$, $R^2 = 0,98$), masking a pronounced cross-border contrast between Indonesian Papua's dense layer of migrant-driven regency capitals and Papua New Guinea's two-city urban primacy [@ananta2016statistics; @group2014papua].

# Background

Modern urban settlement across New Guinea grew from four distinct functional strata superimposed on late-colonial patrol posts and mission anchorages after 1962 [@repository1982population; @elmslie2010west; @bourke2009food].

First stand the two overarching coastal administrative and commercial capitals plus their industrial counterparts. East of the border, Port Moresby expanded eighteen-fold from 41.848 in 1966 to 123.624 in 1980, 254.158 in 2000, 364.125 in 2011 and 756.754 in 2024, absorbing massive rural-to-urban migration into informal settlements while retaining expatriate technical and commercial communities [@group2014papua; @alvarez2005overseas; @chin2024chinese; @guinea20252024]. Lae followed as Papua New Guinea's primary port and Highlands Highway gateway, expanding ninefold from 16.546 in 1966 to 148.934 in 2011 [@guinea20132011]. West of the border, Indonesian state investment, *transmigrasi* hinterlands and spontaneous Bugis, Makassarese, Butonese, Moluccan and Madurese migration turned Jayapura (45.786 in 1971 to 414.862 in 2023, reinforced by satellite Sentani at 71.174) and Bird's Head port Sorong (23.800 to 295.809, plus suburban Aimas at 42.014) into the island's second- and third-largest cities [@saprillah2011migrasi; @anwar2016faktor; @indonesia2021hasil].

Second stand the resource-extraction, plantation and transmigration boomtowns forged after 1970. Freeport's Grasberg copper-gold complex propelled lowland Timika from 6.500 in 1980 to 148.900 in 2023 alongside mountain company town Tembagapura (23.022 in 2020), while Tangguh LNG lifted Bintuni to 32.590 [@papua2011penduduk; @indonesia2021hasil]. Javanese agricultural colonisation and coastal commerce elevated Merauke (16.800 to 108.470), Nabire (7.200 to 104.300) and Manokwari (21.400 to 102.400) past the 100k mark [@pona2012transmigrasi; @mahmudah2023pemertahanan; @facultyoflaw2021transmigrati]. Across Papua New Guinea, oil-palm nucleus estates pushed Kimbe in West New Britain from 1.172 in 1971 to 22.923 in 2011 (alongside Bialla and Mosa), Ok Tedi mining created Tabubil (10.270) and river port Kiunga (10.981) in Western Province, Lihir gold anchored Londolovit, and Ramu Sugar supported agro-industrial settlement in Madang [@baxi2024how; @guinea20132011].

Third stand the interior cordillera administrative seats and post-2003 *pemekaran* regency capitals. Across the PNG Highlands, Mount Hagen (3.315 in 1966 to 29.765 in 2011), Goroka (4.826 to 22.830), Kundiawa (10.833), Mendi (9.987), Wabag (5.041) and Tari (3.360) function as compact market hubs amidst densely populated sweet-potato gardens [@bourke2009food; @guinea20132011]. Across Indonesian Papua's central highlands, Wamena grew from 6.400 in 1971 to 68.200 in 2023, while new regency seats carved out under *pemekaran*—Waghete (33.135), Enarotali (peaking at 32.864 in 2010), Mulia (32.755), Sugapa (26.214), Waris (22.416) and Tiom (peaking at 21.324)—registered large *distrik* administrative populations alongside tidal lowland centres such as Kepi (33.287), Agats (23.869) and Tanah Merah (22.002) [@kamun2016kajian; @indonesia2021hasil].

Fourth stand the disrupted colonial ports and conflict-reshaped island towns. The September 1994 eruption of Tavurvur devastated colonial Rabaul—dropping it from 26.619 in 1971 and 17.044 in 1990 to 3.907 in 2000 and 4.785 in 2011—and transferred East New Britain's administration to Kokopo (rising to 6.677) [@guinea2002papua; @guinea20132011]. Similarly, the 1988–1998 Bougainville Crisis emptied copper town Arawa from 12.623 in 1980 to 2.217 in 2000 while raising Buka (5.416 in 2011) as the autonomous capital, and air-route reorganisation trimmed Biak in Cenderawasih Bay from 51.800 in 2000 to 43.728 in 2020 [@guinea20132011; @indonesia2021hasil].

# Methodology

Compilation followed a four-wave documentary pipeline enforcing zero crowd-sourced substitution across all 28 provinces. Wave 1 harvested 137 municipal, district-capital and urban-town time series directly from official national statistical publications: Territory of Papua and New Guinea censuses of 1966 and 1971 [@repository1982population], independent PNG NSO censuses of 1980, 1990, 2000, 2011 and 2024 [@guinea2002papua; @guinea20132011; @guinea20252024], and BPS Indonesia *Sensus Penduduk* (1971–2020) paired with *Kabupaten Dalam Angka* municipal yearbooks through 2023 [@papua2011penduduk; @indonesia2021hasil]. Wave 2 added 7 peer-reviewed anthropological, mission and ethnohistorical settlement series capturing interior highland, Sepik riverine and Bismarck island communities—including Tsembaga (204 in 1962), Mandok (480 in 1963), Kanganaman (580 in 1973), Karkar, Manam and Kiriwina [@fyfe2009gender; @bourke2009food]. Wave 3 standardised WGS84 coordinates, harmonised historical toponyms (such as Hollandia and Sukarnapura for Jayapura) and filtered out 311 non-canonical candidate records: 299 Papua New Guinea Rural Local-Level Government (LLG) administrative tracts excluded so dispersed rural populations remain modelled cleanly on the provincial mask without double-counting, plus 12 duplicate alias entries merged within 25 km (including Wakwak into Mendi and duplicate spellings of Aitape, Lae, Goroka, Mount Hagen, Daru, Lorengau, Bulolo, Kavieng, Wau, Kikori and Tanah Merah). Wave 4 executed a sub-region gap sweep that added 1 final verification entry (marginal gain 0,69%), leaving zero empty sub-regions and zero unaccounted candidates.

Spatial scope separates standalone urban or administrative centres (city proper, 144 settlements) from suburban satellites (suburb, 1 settlement: Aimas, adjoining Kota Sorong in Papua Barat Daya). No overlapping metropolitan-envelope rows exist in this chapter, preventing double-counting across adjacent city-proper entries.

# Testing and Validation

Source-ledger accounting reconciles all 456 evaluated candidates exactly: 145 included, 311 excluded (299 Rural LLGs plus 12 duplicate aliases) and 0 unaccounted. Every included settlement holds non-null WGS84 coordinates, a documented temporal span inside 1962 to 2024, explicit archival provenance and unambiguous assignment to one of the 28 provincial sub-regions. Across all 145 entries, 424 dated observations yield a mean of 2,92 benchmarks per settlement—peaking at 9 observations each for Jayapura and Sorong (1971–2023), 7 each for Port Moresby (1966–2024), Merauke, Nabire, Manokwari and Wamena, and 6 each for Lae, Timika, Biak, Serui, Wewak, Madang, Fakfak, Mount Hagen, Rabaul, Goroka, Daru, Popondetta, Kundiawa, Mendi, Kavieng, Lorengau and Kerema [@bakker1986mortality; @guinea2011papua; @badanpusatstat2018indonesia].

Sub-regional coverage spans every single administrative unit, ranging from 10 settlements each in Papua and Papua Tengah, 9 each in Papua Barat and Papua Barat Daya, and 8 each in East Sepik and Papua Pegunungan down to 1 each in compact urban National Capital District (Port Moresby) and newly partitioned highland Hela (Tari). Figure \ref{fig:sett-regional-map} maps all 145 catalogued centres across the 28 modern provinces.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-modern-new-guinea-settlements/modern_new_guinea_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of all 145 catalogued urban and administrative centres across the 28 provincial units of Papua New Guinea and Indonesian Papua, 1962 to 2025.</figcaption>
</figure>

# Results

## Twenty-Five Leading Modern New Guinea Settlements

Table \ref{tab:top25-sites} lists the 25 most populous catalogued settlements across modern New Guinea ordered by peak recorded population, from Port Moresby (756.754 in 2024) down to highland regency seat Sugapa (26.214 in 2020). Indonesian Papua accounts for 19 of the top 25 entries—including six cities above 100k (Jayapura, Sorong, Timika, Merauke, Nabire and Manokwari), suburban Aimas (42k) and a dense tier of post-*pemekaran* regency seats in the 26k–43k bracket—whereas Papua New Guinea accounts for 6 (Port Moresby, Lae, Wewak, Madang, Mount Hagen and pre-eruption Rabaul) [@guinea20132011; @guinea20252024; @indonesia2021hasil]. Chronologically, 21 of the top 25 peaked in 2011, 2020, 2023 or 2024; only Rabaul (peaking in 1971 prior to the 1994 eruption), Biak (2000), Fakfak (2010) and Enarotali (2010) recorded earlier maxima due to volcanic displacement, transport shifts or regency boundary splits.

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Moresby</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,48, 147,15</td><td class="crd-td">1966 to 2024</td><td class="crd-td">756,8k (2024)</td></tr>
<tr><td class="crd-td"><strong>Jayapura</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,53, 140,72</td><td class="crd-td">1971 to 2023</td><td class="crd-td">414,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Sorong</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,88, 131,26</td><td class="crd-td">1971 to 2023</td><td class="crd-td">295,8k (2023)</td></tr>
<tr><td class="crd-td"><strong>Lae</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,74, 146,98</td><td class="crd-td">1966 to 2011</td><td class="crd-td">148,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Timika</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,55, 136,88</td><td class="crd-td">1980 to 2023</td><td class="crd-td">148,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Merauke</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-8,49, 140,4</td><td class="crd-td">1971 to 2023</td><td class="crd-td">108,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Nabire</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,37, 135,5</td><td class="crd-td">1971 to 2023</td><td class="crd-td">104,3k (2023)</td></tr>
<tr><td class="crd-td"><strong>Manokwari</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,86, 134,06</td><td class="crd-td">1971 to 2023</td><td class="crd-td">102,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Sentani</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,57, 140,51</td><td class="crd-td">1980 to 2020</td><td class="crd-td">71,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Wamena</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,09, 138,95</td><td class="crd-td">1971 to 2023</td><td class="crd-td">68,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>Biak</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,18, 136,08</td><td class="crd-td">1971 to 2020</td><td class="crd-td">51,8k (2000)</td></tr>
<tr><td class="crd-td"><strong>Serui</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,88, 136,24</td><td class="crd-td">1971 to 2020</td><td class="crd-td">42,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Aimas</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Suburb</td><td class="crd-td">-0,96, 131,32</td><td class="crd-td">2010 to 2020</td><td class="crd-td">42k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kaimana</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,66, 133,77</td><td class="crd-td">2010 to 2020</td><td class="crd-td">39,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Wewak</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3,58, 143,64</td><td class="crd-td">1966 to 2011</td><td class="crd-td">37,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Madang</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,43, 145,58</td><td class="crd-td">1966 to 2011</td><td class="crd-td">36k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kepi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-6,53, 139,32</td><td class="crd-td">2010 to 2020</td><td class="crd-td">33,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Fakfak</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,93, 132,3</td><td class="crd-td">1971 to 2020</td><td class="crd-td">33,2k (2010)</td></tr>
<tr><td class="crd-td"><strong>Waghete</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,05, 136,28</td><td class="crd-td">2010 to 2020</td><td class="crd-td">33,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Enarotali</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,93, 136,37</td><td class="crd-td">2010 to 2020</td><td class="crd-td">32,9k (2010)</td></tr>
<tr><td class="crd-td"><strong>Mulia</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,73, 137,97</td><td class="crd-td">2010 to 2020</td><td class="crd-td">32,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Bintuni</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,12, 133,53</td><td class="crd-td">2010 to 2020</td><td class="crd-td">32,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Mount Hagen</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,86, 144,23</td><td class="crd-td">1966 to 2011</td><td class="crd-td">29,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Rabaul</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,2, 152,17</td><td class="crd-td">1966 to 2011</td><td class="crd-td">26,6k (1971)</td></tr>
<tr><td class="crd-td"><strong>Sugapa</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,74, 137,04</td><td class="crd-td">2010 to 2020</td><td class="crd-td">26,2k (2020)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 catalogued modern New Guinea settlements ordered by peak recorded population, 1962 to 2024.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage Across Twenty-Eight Provinces

Table \ref{tab:subregion-gazetteer} compiles mask areas, catalogued site counts, total dated observations, leading recorded centres and closing 2025 populations across all 28 provinces. Observation totals are deepest in Papua (44 dated benchmarks across 10 centres), Papua Tengah (30 across 10), Papua Barat (29 across 9), East Sepik (26 across 8) and Papua Barat Daya (25 across 9), reflecting long BPS *kota* series west of the border and dense NSO district-town series east of it [@guinea2002papua; @papua2011penduduk; @indonesia2021hasil].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Province</th><th class="crd-th">Mask (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Autonomous Region of Bougainville</strong></td><td class="crd-td">16.227</td><td class="crd-td">6</td><td class="crd-td">12</td><td class="crd-td">Arawa (12,6k)</td><td class="crd-td">367,1k</td></tr>
<tr><td class="crd-td"><strong>Central</strong></td><td class="crd-td">36.779</td><td class="crd-td">7</td><td class="crd-td">14</td><td class="crd-td">Bereina (1,6k)</td><td class="crd-td">373,8k</td></tr>
<tr><td class="crd-td"><strong>Chimbu (Simbu)</strong></td><td class="crd-td">8.619</td><td class="crd-td">4</td><td class="crd-td">12</td><td class="crd-td">Kundiawa (10,8k)</td><td class="crd-td">458,4k</td></tr>
<tr><td class="crd-td"><strong>East New Britain</strong></td><td class="crd-td">20.526</td><td class="crd-td">4</td><td class="crd-td">14</td><td class="crd-td">Rabaul (26,6k)</td><td class="crd-td">434,8k</td></tr>
<tr><td class="crd-td"><strong>East Sepik</strong></td><td class="crd-td">50.260</td><td class="crd-td">8</td><td class="crd-td">19</td><td class="crd-td">Wewak (37,8k)</td><td class="crd-td">631,8k</td></tr>
<tr><td class="crd-td"><strong>Eastern Highlands</strong></td><td class="crd-td">11.944</td><td class="crd-td">6</td><td class="crd-td">18</td><td class="crd-td">Goroka (22,8k)</td><td class="crd-td">800,1k</td></tr>
<tr><td class="crd-td"><strong>Enga</strong></td><td class="crd-td">12.650</td><td class="crd-td">5</td><td class="crd-td">12</td><td class="crd-td">Wabag (5k)</td><td class="crd-td">490k</td></tr>
<tr><td class="crd-td"><strong>Gulf</strong></td><td class="crd-td">38.317</td><td class="crd-td">6</td><td class="crd-td">17</td><td class="crd-td">Kerema (5,9k)</td><td class="crd-td">203,5k</td></tr>
<tr><td class="crd-td"><strong>Hela</strong></td><td class="crd-td">10.935</td><td class="crd-td">1</td><td class="crd-td">3</td><td class="crd-td">Tari (3,4k)</td><td class="crd-td">365,8k</td></tr>
<tr><td class="crd-td"><strong>Jiwaka</strong></td><td class="crd-td">5.980</td><td class="crd-td">3</td><td class="crd-td">6</td><td class="crd-td">Minj (2,7k)</td><td class="crd-td">455,2k</td></tr>
<tr><td class="crd-td"><strong>Madang</strong></td><td class="crd-td">32.325</td><td class="crd-td">4</td><td class="crd-td">10</td><td class="crd-td">Madang (36k)</td><td class="crd-td">761,2k</td></tr>
<tr><td class="crd-td"><strong>Manus</strong></td><td class="crd-td">10.383</td><td class="crd-td">2</td><td class="crd-td">8</td><td class="crd-td">Lorengau (8,9k)</td><td class="crd-td">69,6k</td></tr>
<tr><td class="crd-td"><strong>Milne Bay</strong></td><td class="crd-td">40.577</td><td class="crd-td">6</td><td class="crd-td">14</td><td class="crd-td">Alotau (11,9k)</td><td class="crd-td">412,2k</td></tr>
<tr><td class="crd-td"><strong>Morobe</strong></td><td class="crd-td">36.829</td><td class="crd-td">5</td><td class="crd-td">20</td><td class="crd-td">Lae (148,9k)</td><td class="crd-td">997,5k</td></tr>
<tr><td class="crd-td"><strong>National Capital District</strong></td><td class="crd-td">339</td><td class="crd-td">1</td><td class="crd-td">7</td><td class="crd-td">Port Moresby (756,8k)</td><td class="crd-td">756,8k</td></tr>
<tr><td class="crd-td"><strong>New Ireland</strong></td><td class="crd-td">20.572</td><td class="crd-td">4</td><td class="crd-td">12</td><td class="crd-td">Kavieng (9,9k)</td><td class="crd-td">237,8k</td></tr>
<tr><td class="crd-td"><strong>Northern (Oro)</strong></td><td class="crd-td">21.287</td><td class="crd-td">4</td><td class="crd-td">12</td><td class="crd-td">Popondetta (12,6k)</td><td class="crd-td">273,9k</td></tr>
<tr><td class="crd-td"><strong>Southern Highlands</strong></td><td class="crd-td">13.993</td><td class="crd-td">2</td><td class="crd-td">8</td><td class="crd-td">Mendi (10k)</td><td class="crd-td">602,1k</td></tr>
<tr><td class="crd-td"><strong>West New Britain</strong></td><td class="crd-td">26.485</td><td class="crd-td">6</td><td class="crd-td">13</td><td class="crd-td">Kimbe (22,9k)</td><td class="crd-td">368,6k</td></tr>
<tr><td class="crd-td"><strong>West Sepik (Sandaun)</strong></td><td class="crd-td">35.206</td><td class="crd-td">2</td><td class="crd-td">9</td><td class="crd-td">Vanimo (14k)</td><td class="crd-td">362,7k</td></tr>
<tr><td class="crd-td"><strong>Western Highlands</strong></td><td class="crd-td">2.136</td><td class="crd-td">2</td><td class="crd-td">8</td><td class="crd-td">Mount Hagen (29,8k)</td><td class="crd-td">300k</td></tr>
<tr><td class="crd-td"><strong>Western</strong></td><td class="crd-td">103.152</td><td class="crd-td">4</td><td class="crd-td">15</td><td class="crd-td">Daru (15,1k)</td><td class="crd-td">300k</td></tr>
<tr><td class="crd-td"><strong>Papua</strong></td><td class="crd-td">95.292</td><td class="crd-td">10</td><td class="crd-td">37</td><td class="crd-td">Jayapura (414,9k)</td><td class="crd-td">1,09M</td></tr>
<tr><td class="crd-td"><strong>Papua Barat</strong></td><td class="crd-td">73.324</td><td class="crd-td">9</td><td class="crd-td">27</td><td class="crd-td">Manokwari (102,4k)</td><td class="crd-td">565,8k</td></tr>
<tr><td class="crd-td"><strong>Papua Barat Daya</strong></td><td class="crd-td">48.244</td><td class="crd-td">9</td><td class="crd-td">25</td><td class="crd-td">Sorong (295,8k)</td><td class="crd-td">613,2k</td></tr>
<tr><td class="crd-td"><strong>Papua Pegunungan</strong></td><td class="crd-td">55.566</td><td class="crd-td">8</td><td class="crd-td">21</td><td class="crd-td">Wamena (68,2k)</td><td class="crd-td">1,46M</td></tr>
<tr><td class="crd-td"><strong>Papua Selatan</strong></td><td class="crd-td">119.866</td><td class="crd-td">7</td><td class="crd-td">20</td><td class="crd-td">Merauke (108,5k)</td><td class="crd-td">533,9k</td></tr>
<tr><td class="crd-td"><strong>Papua Tengah</strong></td><td class="crd-td">59.960</td><td class="crd-td">10</td><td class="crd-td">31</td><td class="crd-td">Timika (148,9k)</td><td class="crd-td">1,36M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, dated observations, leading recorded centre and closing 2025 provincial population across all 28 provinces of Papua New Guinea and Indonesian Papua.</figcaption>
</figure>

## Zipf Rank-Size Scaling and Four-Wave Source Saturation Audit

Rank-size regression across the upper 72 catalogued settlements (Port Moresby at 756,8k down to Manam at 5,1k) produces a remarkably crisp Zipf exponent of $\alpha = 1,13$ ($R^2 = 0,98$; $\alpha = 1,14$, $R^2 = 0,98$ when excluding suburban Aimas; full 145-centre slope $-1,62$, $R^2 = 0,90$). That near-unit power law reflects the complementary fusion of two distinct urban systems across the border: Port Moresby anchors the top of the curve with a primacy ratio of 5,08 over PNG's second city Lae, while Indonesian Papua fills ranks 2 through 25 smoothly with multi-provincial capitals and resource boomtowns [@group2014papua; @ananta2016statistics; @baxi2024how]. Tables \ref{tab:scope-breakdown} and \ref{tab:saturation-waves} report spatial-scope stratification and the four-wave source saturation audit.

<figure class="crd-table-figure" id="tab:scope-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Spatial Scope</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Largest Example (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>City, Administrative Station or Village Core (city proper)</strong></td><td class="crd-td">144</td><td class="crd-td">99,3%</td><td class="crd-td">Port Moresby (756,8k)</td></tr>
<tr><td class="crd-td"><strong>Suburban Satellite Municipality (suburb)</strong></td><td class="crd-td">1</td><td class="crd-td">0,7%</td><td class="crd-td">Aimas (42k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial-scope stratification across 145 catalogued modern New Guinea settlements, 1962 to 2024.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Records</th><th class="crd-th">Audit Outcome</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary PNG NSO, TPNG and BPS Indonesia censuses</td><td class="crd-td">137</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Anthropological and regional monograph series</td><td class="crd-td">7</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">LLG exclusion and alias deduplication</td><td class="crd-td">0</td><td class="crd-td">299 Rural LLGs excluded, 12 aliases merged</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage verification sweep</td><td class="crd-td">1</td><td class="crd-td">0,69% marginal gain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion ledger and reconciliation summary across 145 catalogued modern New Guinea settlements.</figcaption>
</figure>

# Limitations

Four documentary boundaries qualify this settlement gazetteer. First, cross-border census dates diverge at closing: Indonesian *kota* and *distrik* series extend through 2020 or 2023, whereas Papua New Guinea's 2024 national census had published final urban-level figures only for unified Port Moresby (National Capital District, 756.754), leaving secondary PNG towns such as Lae, Wewak, Madang, Mount Hagen, Kimbe and Goroka anchored at their 2011 census counts [@guinea20132011; @guinea20252024; @indonesia2021hasil]. Second, Indonesian *pemekaran* regency seats created after 2003 (such as Waghete, Mulia, Sugapa, Kepi, Agats and Waris) are reported at *distrik* (sub-district) administrative boundaries that frequently combine a modest administrative town with surrounding peri-urban villages, explaining why several interior Indonesian stations register 20k–35k residents despite smaller built-up footprints than PNG towns like Mount Hagen or Goroka [@papua2011penduduk; @kamun2016kajian]. Third, 18 small stations, volcanic islands and anthropological field communities (including Karkar, Kiriwina, Manam, Aiyura, Amamapare, Hoskins and Tsembaga) hold single-year benchmarks inside 1962 to 2024 where subsequent counts were absorbed into wider rural LLGs or regency tables [@fyfe2009gender; @bourke2009food]. Fourth, urban informal settlements ringing Port Moresby, Lae and Mount Hagen face systematic enumeration difficulties across transient and unhoused cohorts [@group2014papua; @ige2023counting; @tatem2022high].

# Conclusion

Cataloguing 145 evidence-based settlements and 424 dated observations between 1962 and 2024 charts the emergence of modern New Guinea's dual-state urban geography. Every functional tier is represented with full archival traceability and zero crowd-sourced substitution: dual national and regional capitals (Port Moresby, Jayapura, Sorong, Lae), mineral and agro-industrial hubs (Timika, Tembagapura, Bintuni, Tabubil, Kiunga, Kimbe, Londolovit), transmigration and coastal trade gateways (Merauke, Nabire, Manokwari, Sentani, Aimas), highland cordillera centres (Wamena, Mount Hagen, Goroka, Kundiawa, Mendi, Enarotali, Waghete) and disaster- or conflict-reshaped towns (Rabaul, Kokopo, Arawa, Buka) [@guinea20252024; @indonesia2021hasil; @elmslie2010west]. Together, these 145 centres reveal a tightly structured island-wide Zipf hierarchy ($\alpha = 1,13$, $R^2 = 0,98$) bridging two contrasting national urbanisation models across the 141st meridian.

# Appendix

## Remaining One Hundred and Twenty Catalogued Settlements (Ranks 26 to 145)

Table \ref{tab:rem120-sites} prints all remaining 120 catalogued modern New Guinea settlements ordered by peak recorded population from Agats (23.869 in 2020) down to Tsembaga (204 in 1962), ensuring all 145 entries in the register appear in print.

<figure class="crd-table-figure" id="tab:rem120-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Agats</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-5,54, 138,13</td><td class="crd-td">2010 to 2020</td><td class="crd-td">23,9k (2020)</td></tr>
<tr><td class="crd-td"><strong>Tembagapura</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,14, 137,1</td><td class="crd-td">1980 to 2020</td><td class="crd-td">23k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kimbe</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,55, 150,15</td><td class="crd-td">1971 to 2011</td><td class="crd-td">22,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Goroka</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,08, 145,39</td><td class="crd-td">1966 to 2011</td><td class="crd-td">22,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Waris</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,93, 140,78</td><td class="crd-td">2010 to 2020</td><td class="crd-td">22,4k (2020)</td></tr>
<tr><td class="crd-td"><strong>Tanah Merah</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-6,1, 140,3</td><td class="crd-td">1971 to 2020</td><td class="crd-td">22k (2020)</td></tr>
<tr><td class="crd-td"><strong>Waisai</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,43, 130,82</td><td class="crd-td">2010 to 2020</td><td class="crd-td">21,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Tiom</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,94, 138,43</td><td class="crd-td">2010 to 2020</td><td class="crd-td">21,3k (2010)</td></tr>
<tr><td class="crd-td"><strong>Rasiei</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,72, 134,51</td><td class="crd-td">2010 to 2020</td><td class="crd-td">19,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Teminabuan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,44, 132,02</td><td class="crd-td">2010 to 2020</td><td class="crd-td">19,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kobakma</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,66, 139,07</td><td class="crd-td">2010 to 2020</td><td class="crd-td">18,4k (2010)</td></tr>
<tr><td class="crd-td"><strong>Ransiki</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,51, 134,18</td><td class="crd-td">2010 to 2020</td><td class="crd-td">18,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Dekai</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,86, 139,48</td><td class="crd-td">2010 to 2020</td><td class="crd-td">17,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Karubaga</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,69, 138,47</td><td class="crd-td">2010 to 2020</td><td class="crd-td">16,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kigamani</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,02, 136,05</td><td class="crd-td">2010 to 2020</td><td class="crd-td">16,5k (2010)</td></tr>
<tr><td class="crd-td"><strong>Karkar</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,65, 145,97</td><td class="crd-td">1966</td><td class="crd-td">16,1k (1966)</td></tr>
<tr><td class="crd-td"><strong>Ilaga</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,98, 137,64</td><td class="crd-td">2010 to 2020</td><td class="crd-td">15,3k (2010)</td></tr>
<tr><td class="crd-td"><strong>Daru</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,2, 143,61</td><td class="crd-td">1966 to 2011</td><td class="crd-td">15,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Wewak</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,01, 143,74</td><td class="crd-td">1966 to 1971</td><td class="crd-td">15k (1971)</td></tr>
<tr><td class="crd-td"><strong>Elelim</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-3,79, 139,38</td><td class="crd-td">2010 to 2020</td><td class="crd-td">14,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Vanimo</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-2,68, 141,3</td><td class="crd-td">1971 to 2011</td><td class="crd-td">14k (2011)</td></tr>
<tr><td class="crd-td"><strong>Sarmi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,87, 138,75</td><td class="crd-td">2010 to 2020</td><td class="crd-td">13,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Arawa</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,23, 155,57</td><td class="crd-td">1971 to 2011</td><td class="crd-td">12,6k (1980)</td></tr>
<tr><td class="crd-td"><strong>Popondetta</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,77, 148,24</td><td class="crd-td">1966 to 2011</td><td class="crd-td">12,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Alotau</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-10,31, 150,45</td><td class="crd-td">1971 to 2011</td><td class="crd-td">11,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kiriwina</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,54, 151,07</td><td class="crd-td">1966</td><td class="crd-td">11,8k (1966)</td></tr>
<tr><td class="crd-td"><strong>Kiunga</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,12, 141,3</td><td class="crd-td">1980 to 2011</td><td class="crd-td">11k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kundiawa</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,02, 144,97</td><td class="crd-td">1966 to 2011</td><td class="crd-td">10,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Tabubil</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,27, 141,23</td><td class="crd-td">1990 to 2011</td><td class="crd-td">10,3k (2011)</td></tr>
<tr><td class="crd-td"><strong>Mendi</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,14, 143,66</td><td class="crd-td">1966 to 2011</td><td class="crd-td">10k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kavieng</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-2,74, 151,06</td><td class="crd-td">1966 to 2011</td><td class="crd-td">9,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Sorendiweri</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,73, 135,62</td><td class="crd-td">2010 to 2020</td><td class="crd-td">9,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Lorengau</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-2,02, 147,27</td><td class="crd-td">1966 to 2011</td><td class="crd-td">8,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Bulolo</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,21, 146,63</td><td class="crd-td">1966 to 2011</td><td class="crd-td">8,7k (2000)</td></tr>
<tr><td class="crd-td"><strong>Bade</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-7,16, 139,59</td><td class="crd-td">2010 to 2020</td><td class="crd-td">8,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kenyam</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,6, 138,38</td><td class="crd-td">2010 to 2020</td><td class="crd-td">8,1k (2010)</td></tr>
<tr><td class="crd-td"><strong>Botawa</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,27, 136,37</td><td class="crd-td">2010 to 2020</td><td class="crd-td">7,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kokopo</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,34, 152,27</td><td class="crd-td">1980 to 2011</td><td class="crd-td">6,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Sausapor</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,51, 132,08</td><td class="crd-td">2010 to 2020</td><td class="crd-td">6,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Oksibil</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,91, 140,63</td><td class="crd-td">2010 to 2020</td><td class="crd-td">6,4k (2020)</td></tr>
<tr><td class="crd-td"><strong>Aitape</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3,14, 142,35</td><td class="crd-td">1966 to 2011</td><td class="crd-td">6,2k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kerema</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,77, 145,56</td><td class="crd-td">1966 to 2011</td><td class="crd-td">5,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Burmeso</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,32, 138,02</td><td class="crd-td">2010 to 2020</td><td class="crd-td">5,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Ayamaru</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,26, 132,2</td><td class="crd-td">2010 to 2020</td><td class="crd-td">5,6k (2010)</td></tr>
<tr><td class="crd-td"><strong>Buka</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,43, 154,67</td><td class="crd-td">2000 to 2011</td><td class="crd-td">5,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Ramu Sugar</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,96, 145,89</td><td class="crd-td">2000 to 2011</td><td class="crd-td">5,3k (2000)</td></tr>
<tr><td class="crd-td"><strong>Manam</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,08, 145,03</td><td class="crd-td">1966</td><td class="crd-td">5,1k (1966)</td></tr>
<tr><td class="crd-td"><strong>Wabag</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,48, 143,67</td><td class="crd-td">1980 to 2011</td><td class="crd-td">5k (2011)</td></tr>
<tr><td class="crd-td"><strong>Okaba</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-8,1, 139,71</td><td class="crd-td">2010 to 2020</td><td class="crd-td">4,8k (2010)</td></tr>
<tr><td class="crd-td"><strong>Kerowagi</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,89, 144,86</td><td class="crd-td">2000 to 2011</td><td class="crd-td">4,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kainantu</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,29, 145,86</td><td class="crd-td">1966 to 2011</td><td class="crd-td">4,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kokas</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,7, 132,43</td><td class="crd-td">2010 to 2020</td><td class="crd-td">4,6k (2010)</td></tr>
<tr><td class="crd-td"><strong>Balimo</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,01, 142,91</td><td class="crd-td">2000 to 2011</td><td class="crd-td">4,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,34, 146,72</td><td class="crd-td">1966 to 2011</td><td class="crd-td">4,4k (2000)</td></tr>
<tr><td class="crd-td"><strong>Babo</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,55, 133,43</td><td class="crd-td">2010 to 2020</td><td class="crd-td">4,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Buin</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,75, 155,68</td><td class="crd-td">1966</td><td class="crd-td">4,1k (1966)</td></tr>
<tr><td class="crd-td"><strong>Mindiptana</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-5,88, 140,7</td><td class="crd-td">2010 to 2020</td><td class="crd-td">3,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kumurkek</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,27, 132,52</td><td class="crd-td">2010 to 2020</td><td class="crd-td">3,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Orokolo</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,68, 145,18</td><td class="crd-td">1966</td><td class="crd-td">3,6k (1966)</td></tr>
<tr><td class="crd-td"><strong>Tari</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,84, 142,94</td><td class="crd-td">1980 to 2011</td><td class="crd-td">3,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Inanwatan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,12, 132,16</td><td class="crd-td">2010 to 2020</td><td class="crd-td">3,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Hagita Estate</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-10,32, 150,31</td><td class="crd-td">2000 to 2011</td><td class="crd-td">3,2k (2011)</td></tr>
<tr><td class="crd-td"><strong>Anggi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-1,38, 133,9</td><td class="crd-td">2010 to 2020</td><td class="crd-td">3,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kagamuga</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,83, 144,3</td><td class="crd-td">2000 to 2011</td><td class="crd-td">3,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Finschafen</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,62, 147,33</td><td class="crd-td">2000 to 2011</td><td class="crd-td">2,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kikori</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,41, 144,24</td><td class="crd-td">1966 to 2011</td><td class="crd-td">2,7k (2000)</td></tr>
<tr><td class="crd-td"><strong>Bialla</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,3, 151,1</td><td class="crd-td">2000 to 2011</td><td class="crd-td">2,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Minj</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,91, 144,68</td><td class="crd-td">1990 to 2011</td><td class="crd-td">2,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Mosa</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,63, 150,24</td><td class="crd-td">2000 to 2011</td><td class="crd-td">2,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kieta</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,22, 155,63</td><td class="crd-td">1966 to 1971</td><td class="crd-td">2,4k (1971)</td></tr>
<tr><td class="crd-td"><strong>Samarai</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,99, 149,71</td><td class="crd-td">1966 to 2000</td><td class="crd-td">2,2k (1966)</td></tr>
<tr><td class="crd-td"><strong>Angoram</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,06, 144,07</td><td class="crd-td">1990 to 2011</td><td class="crd-td">2,1k (2000)</td></tr>
<tr><td class="crd-td"><strong>Ialibu</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,26, 143,98</td><td class="crd-td">2000 to 2011</td><td class="crd-td">2k (2011)</td></tr>
<tr><td class="crd-td"><strong>Mamba</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,85, 147,72</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Banz</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,8, 144,63</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kerevat</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,35, 152,04</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Malalaua</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,08, 146,16</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Londolovit</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3,07, 152,64</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Wapenamanda</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,63, 143,89</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Dobu</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,83, 150,88</td><td class="crd-td">1966</td><td class="crd-td">1,6k (1966)</td></tr>
<tr><td class="crd-td"><strong>Ambunti</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,22, 142,82</td><td class="crd-td">1990 to 2011</td><td class="crd-td">1,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Bereina</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,64, 146,51</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Maprik</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3,63, 143,06</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,5k (2011)</td></tr>
<tr><td class="crd-td"><strong>Namatanai</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3,67, 152,44</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,5k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kwikila</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,81, 147,66</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,5k (2011)</td></tr>
<tr><td class="crd-td"><strong>Baimuru</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,5, 144,83</td><td class="crd-td">1990 to 2011</td><td class="crd-td">1,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Chuave</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,12, 145,13</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Pogera (Porgera)</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,48, 143,12</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,4k (2000)</td></tr>
<tr><td class="crd-td"><strong>Laiagam</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,49, 143,49</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>Sohano</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,41, 154,66</td><td class="crd-td">1966</td><td class="crd-td">1,4k (1966)</td></tr>
<tr><td class="crd-td"><strong>Aiyura</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,34, 145,91</td><td class="crd-td">2011</td><td class="crd-td">1,3k (2011)</td></tr>
<tr><td class="crd-td"><strong>Lombrum Navy Base (Tarangau)</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-2,04, 147,37</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,3k (2000)</td></tr>
<tr><td class="crd-td"><strong>Lakurumau Estate</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-3, 151,45</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Kupiano</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-10,07, 148,18</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Amamapare</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-4,82, 136,97</td><td class="crd-td">2010</td><td class="crd-td">1,1k (2010)</td></tr>
<tr><td class="crd-td"><strong>Yonki</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,25, 145,98</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,1k (2000)</td></tr>
<tr><td class="crd-td"><strong>Moreguina</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-10,02, 148,47</td><td class="crd-td">2000 to 2011</td><td class="crd-td">1,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Tambunum</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,18, 143,48</td><td class="crd-td">1980</td><td class="crd-td">1k (1980)</td></tr>
<tr><td class="crd-td"><strong>Waren</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-2,26, 136,38</td><td class="crd-td">2010</td><td class="crd-td">1k (2010)</td></tr>
<tr><td class="crd-td"><strong>Fef</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">City</td><td class="crd-td">-0,79, 132,43</td><td class="crd-td">2010 to 2020</td><td class="crd-td">1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Buluma</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,49, 150,51</td><td class="crd-td">2000</td><td class="crd-td">998 (2000)</td></tr>
<tr><td class="crd-td"><strong>Nonga Base</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,32, 152,07</td><td class="crd-td">2000 to 2011</td><td class="crd-td">915 (2000)</td></tr>
<tr><td class="crd-td"><strong>Kandrian</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,21, 149,55</td><td class="crd-td">2000 to 2011</td><td class="crd-td">821 (2011)</td></tr>
<tr><td class="crd-td"><strong>Goldie</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,35, 147,27</td><td class="crd-td">2000 to 2011</td><td class="crd-td">799 (2000)</td></tr>
<tr><td class="crd-td"><strong>Bogia</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,27, 144,97</td><td class="crd-td">2000 to 2011</td><td class="crd-td">750 (2000)</td></tr>
<tr><td class="crd-td"><strong>Bwagaoia</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-10,69, 152,82</td><td class="crd-td">1966</td><td class="crd-td">720 (1966)</td></tr>
<tr><td class="crd-td"><strong>Ihu</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-7,9, 145,4</td><td class="crd-td">2000 to 2011</td><td class="crd-td">712 (2011)</td></tr>
<tr><td class="crd-td"><strong>Palimbei</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,14, 143,13</td><td class="crd-td">1973</td><td class="crd-td">690 (1973)</td></tr>
<tr><td class="crd-td"><strong>Kokoda</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,88, 147,74</td><td class="crd-td">2000 to 2011</td><td class="crd-td">658 (2011)</td></tr>
<tr><td class="crd-td"><strong>Paiam</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,46, 143,15</td><td class="crd-td">2000 to 2011</td><td class="crd-td">639 (2011)</td></tr>
<tr><td class="crd-td"><strong>Sogeri</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-9,42, 147,43</td><td class="crd-td">2000 to 2011</td><td class="crd-td">598 (2000)</td></tr>
<tr><td class="crd-td"><strong>Tapini</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,36, 146,99</td><td class="crd-td">2000 to 2011</td><td class="crd-td">596 (2011)</td></tr>
<tr><td class="crd-td"><strong>Kanganaman</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-4,19, 143,26</td><td class="crd-td">1973</td><td class="crd-td">580 (1973)</td></tr>
<tr><td class="crd-td"><strong>Wakunai</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,87, 155,21</td><td class="crd-td">2000 to 2011</td><td class="crd-td">558 (2011)</td></tr>
<tr><td class="crd-td"><strong>Bihute</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,11, 145,36</td><td class="crd-td">2000 to 2011</td><td class="crd-td">525 (2000)</td></tr>
<tr><td class="crd-td"><strong>Tufi Government Station</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-8,22, 147,58</td><td class="crd-td">2000 to 2011</td><td class="crd-td">511 (2011)</td></tr>
<tr><td class="crd-td"><strong>Mandok</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,79, 147,98</td><td class="crd-td">1963</td><td class="crd-td">480 (1963)</td></tr>
<tr><td class="crd-td"><strong>Ukarumpa S.I.L.</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-6,34, 145,88</td><td class="crd-td">2000 to 2011</td><td class="crd-td">459 (2011)</td></tr>
<tr><td class="crd-td"><strong>Hoskins (Cape Hoskins)</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,32, 151,1</td><td class="crd-td">2000</td><td class="crd-td">395 (2000)</td></tr>
<tr><td class="crd-td"><strong>Tsembaga</strong></td><td class="crd-td">PNG</td><td class="crd-td">City</td><td class="crd-td">-5,45, 144,72</td><td class="crd-td">1962</td><td class="crd-td">204 (1962)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Remaining 120 catalogued modern New Guinea settlements (ranks 26 to 145) ordered by peak recorded population, 1962 to 2024.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. Spatial scope separates standalone city, administrative-station and village cores (City) from suburban satellite municipalities (Suburb). All 145 settlement series derive from Papua New Guinea National Statistical Office censuses (1966–2024), Badan Pusat Statistik Indonesia *Sensus Penduduk* and regency handbooks (1971–2023), late Dutch New Guinea reports and peer-reviewed monographs with zero crowd-sourced fallback.
