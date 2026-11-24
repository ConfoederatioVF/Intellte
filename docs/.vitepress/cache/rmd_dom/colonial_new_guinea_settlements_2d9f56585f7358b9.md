---
title: "Colonial New Guinea"
subtitle: "Settlement Gazetteer and Colonial Port Hierarchy (1884 to 1975)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/colonial_new_guinea_urban_hierarchy.png"
hero_caption: "Leading settlements, highland clusters and rank-size scaling across 103 catalogued locales in colonial New Guinea from 1884 to 1975."
hero_label: "fig:hero-new-guinea-hierarchy"
bibliography: colonial_new_guinea.bib
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



![Leading settlements, highland clusters and rank-size scaling across 103 catalogued locales in colonial New Guinea from 1884 to 1975.](figures/colonial_new_guinea_urban_hierarchy.png)



# Abstract

This gazetteer catalogues 103 colonial ports, territorial capitals, mining camps, patrol stations, mission centres and ethnographic habitation clusters across Dutch West New Guinea, German and Australian New Guinea and British-Australian Papua between 1884 and 1975, encompassing 270 dated demographic observations. Compiled through four sequential source-ledger audit waves with 0% crowd-sourced fallback reliance and zero empty colonial jurisdictions, the register evaluates 122 candidate records — retaining 103 canonical entries (49 in German and Australian New Guinea, 30 in Dutch West New Guinea and 24 in British and Australian Papua) after merging 19 duplicate aliases located within 25 km [@firth1985german; @fowler2004papuan; @kuitenbrouwer2016beyond]. Peak recorded populations span 76.507 inhabitants at Port Moresby in 1971 down to 204 at the Highland ethnographic benchmark of Tsembaga in 1962, adhering closely to a near-Zipfian power-law curve across the upper half of the hierarchy ($\alpha = 1,04$, $R^2 = 0,96$ across the leading 51 entries; $\alpha = 1,24$, $R^2 = 0,94$ across all 103 locales). Top-tier nodes reflect New Guinea's dual colonial geography: administrative and commercial ports including Port Moresby (76.507), Jayapura (45.786), Lae (38.707), Rabaul (26.619), Sorong (23.800), Manokwari (21.400), Biak (21.200), Madang (16.865), Merauke (16.800) and Wewak (15.015), alongside post-war Highland airstrip capitals at Goroka (12.066), Mount Hagen (10.621) and Wamena (6.400) and dense rural valley or island clusters led by the Baliem Valley (54.000), Karkar Island (16.100), Kiriwina (11.800) and the Tari Basin (11.200) [@economics2025coffee; @wood2026they; @wollaston1912pygmies].

# Background

Colonial settlement across New Guinea between 1884 and 1975 never emerged from a pre-existing indigenous urban network; instead, European trading firms, imperial garrisons, missionaries and patrol officers overlaid a coastal chain of maritime enclaves onto an overwhelmingly rural Melanesian landscape of clan hamlets, longhouses and dispersed highland homesteads [@firth1985german; @fowler2004papuan; @mackellar1912scented]. Four functional tiers of settlement coexist inside this register.

First stand the primary colonial ports and territorial capitals that linked New Guinea to Sydney, Singapore, Batavia and Hamburg. Port Moresby rose from a small Motu-colonial trading station beside Hanuabada (1.020 in 1885) to the unified Territory of Papua and New Guinea capital (76.507 in 1971) [@fowler2004papuan; @anonymous2024impetus]. Rabaul served as the German and inter-war Australian Mandate capital until volcanic eruption in 1937 and wartime destruction pushed commercial primacy toward Lae on the Huon Gulf [@firth1985german; @wood2024what]. West of the 141st meridian, Hollandia (Jayapura), Manokwari, Sorong, Biak and Merauke grew rapidly during the 1950 to 1962 Dutch development drive and subsequent Indonesian administration [@kuitenbrouwer2016beyond; @matbob2006west].

Second stand the resource-extraction and frontier patrol stations opened between the 1920s and 1970s. Alluvial gold rushes created inland aviation towns at Wau and Bulolo; postwar Highland coffee expansion transformed airstrip patrol posts at Goroka, Mount Hagen, Kundiawa, Kainantu and Mendi into thriving upland commercial and public-health hubs [@economics2025coffee; @barnett_naghshineh2018gender; @benn1982pragmatists; @mathews2008changing]; copper development on Bougainville birthed Arawa alongside historic Kieta [@evenhuis2017developmenta; @merrett2007sugar]; and Dutch highland administration founded Enarotali and Wamena across the western cordillera [@wollaston1912pygmies].

Third stand early colonial stations that subsequently declined or vanished as transport shifted — including Finschhafen, Stephansort, Kokopo, Mioko, Salamaua, Samarai, Buna, Doreh and Bosnik — alongside minor administrative, mission-school and island outposts such as Tanah Merah, Kikori, Daru, Lorengau, Kavieng, Aitape and Vanimo [@mackellar1912scented; @benjamin1907victoriana; @reichgelt2020children; @anonymous2024hanover; @villiers1951education]. Fourth stand major ethnographic valley, island and riverine habitation clusters documented in classic anthropological and patrol monographs — among them the Baliem Valley, Karkar Island, Kiriwina, Tari Basin, Mogei, Mintima, Kuk Swamp, Orokolo, Dobu, Matupit, Palimbei, Tambunum, Kanganaman, Mailu, Pere and Tsembaga — anchoring rural densities across regions where formal municipal boundaries did not yet exist [@faik_simet2021exploring; @bal2025decolonial; @dwyer2020reading; @minnegal2020reading].

# Methodology

The settlement register was compiled across four documented audit waves governed by the chapter source ledger. Wave 1 harvested 57 urban and station records directly from official statistical publications: the 1966 and 1971 Territory of Papua and New Guinea censuses, Papua New Guinea National Statistical Office historical series, Commonwealth of Australia Annual Reports on Papua and the Mandated Territory, Netherlands New Guinea *Kantoor voor Bevolkingszaken* returns (1930 to 1961) and Indonesian *Badan Pusat Statistik* (BPS) 1971 *Sensus Penduduk* district benchmarks [@census1934cbcs; @wood2026they; @kuitenbrouwer2016beyond]. Wave 2 added 45 colonial outposts, island centres and ethnographic clusters from peer-reviewed historical and anthropological corpora covering German New Guinea, coastal Papua, the Sepik, the Highlands and West New Guinea [@firth1985german; @fowler2004papuan; @wollaston1912pygmies]. Wave 3 standardised toponymy across German, Dutch, British, Australian, Indonesian and indigenous place names and executed 25 km spatial deduplication, consolidating 19 variant records into their canonical parent towns. Wave 4 performed a tripartite coverage audit adding one remaining station (marginal gain 0,98%), reaching full jurisdiction coverage with 0% crowd-sourced fallback share.

Every catalogued locale was geocoded to WGS84 coordinates, mapped to its modern Indonesian or Papua New Guinean provincial unit and snapped to its 1884 to 1975 colonial jurisdiction. Log-log ordinary least squares rank-size fits were evaluated on peak recorded populations across both the upper half of the register (top 51 locales, 76.507 down to 2.124) and the full 103-entry corpus.

# Testing and Validation

Source-ledger accounting confirms exact reconciliation across all 122 evaluated candidates: 103 included canonical records plus 19 excluded duplicate aliases, leaving zero unaccounted entries. Every included record carries valid WGS84 coordinates, country and provincial attribution, a colonial jurisdiction assignment, between one and twelve chronological headcounts (270 observations total, led by Port Moresby with twelve observations spanning 1885 to 1971) and explicit documentary provenance. Figure \ref{fig:sett-regional-map} plots the spatial footprint of all 103 catalogued locales across the three colonial jurisdictions, displaying the coastal chain of Dutch ports from Sorong to Merauke, the dense Sepik-Madang-Highlands-Bismarck arc across German and Australian New Guinea, and the Papuan corridor linking Daru, the Gulf, Port Moresby and Milne Bay.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-colonial-new-guinea-settlements/colonial_new_guinea_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 103 catalogued settlements, colonial ports and highland clusters across the three colonial jurisdictions of New Guinea, 1884 to 1975.</figcaption>
</figure>

Cross-checking the 1971 census-enumerated towns against island-wide totals confirms structural realism. Across the 34 catalogued towns carrying direct 1971 counts (33 distinct municipalities after accounting for the dual Wewak coordinate record), aggregate urban population stood at 406.948 — equal to 11,9% of colonial New Guinea's 3,41M total (9,8% across Papua New Guinea's 2,49M and 17,6% across Indonesian West New Guinea's 923,4k). Those late-colonial urbanisation shares align cleanly with a rural society transitioning from customary village governance into coastal administrative, plantation and mining urbanisation [@anonymous2024impetus; @deery2014deal; @ige2023counting; @martin2019exogenous; @vandestadt2024power; @rad_hassall1999difference].

# Results

## Primary Colonial Capitals, Ports and Highland Centres (Ranks 1 to 35)

Table \ref{tab:top35-sites} lists the upper third of the gazetteer (ranks 1 to 35), spanning Port Moresby (76.507 in 1971) down to Orokolo (3.650 in 1966). All nine major multi-purpose coastal capitals of late-colonial New Guinea occupy the top ten ranks — Port Moresby, Jayapura, Lae, Rabaul, Sorong, Manokwari, Biak, Madang and Merauke — joined at second place by the densely populated Grand Baliem Valley (54.000 in 1961) and followed closely by Karkar Island (16.100), Wewak (15.015), Goroka (12.066), Kiriwina (11.800), Tari Basin (11.200) and Mount Hagen (10.621).

<figure class="crd-table-figure" id="tab:top35-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Moresby</strong></td><td class="crd-td">National Capital District (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,48, 147,15</td><td class="crd-td">1885 to 1971</td><td class="crd-td">76.507 (1971)</td></tr>
<tr><td class="crd-td"><strong>Baliem Valley</strong></td><td class="crd-td">Papua Pegunungan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-4,02, 138,92</td><td class="crd-td">1938 to 1961</td><td class="crd-td">54.000 (1961)</td></tr>
<tr><td class="crd-td"><strong>Jayapura</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,53, 140,72</td><td class="crd-td">1955 to 1971</td><td class="crd-td">45.786 (1971)</td></tr>
<tr><td class="crd-td"><strong>Lae</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,74, 146,98</td><td class="crd-td">1927 to 1971</td><td class="crd-td">38.707 (1971)</td></tr>
<tr><td class="crd-td"><strong>Rabaul</strong></td><td class="crd-td">East New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,2, 152,17</td><td class="crd-td">1910 to 1971</td><td class="crd-td">26.619 (1971)</td></tr>
<tr><td class="crd-td"><strong>Sorong</strong></td><td class="crd-td">Papua Barat Daya (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-0,88, 131,26</td><td class="crd-td">1955 to 1971</td><td class="crd-td">23.800 (1971)</td></tr>
<tr><td class="crd-td"><strong>Manokwari</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-0,86, 134,06</td><td class="crd-td">1930 to 1971</td><td class="crd-td">21.400 (1971)</td></tr>
<tr><td class="crd-td"><strong>Biak</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,18, 136,08</td><td class="crd-td">1955 to 1971</td><td class="crd-td">21.200 (1971)</td></tr>
<tr><td class="crd-td"><strong>Madang</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,43, 145,58</td><td class="crd-td">1966 to 1971</td><td class="crd-td">16.865 (1971)</td></tr>
<tr><td class="crd-td"><strong>Merauke</strong></td><td class="crd-td">Papua Selatan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-8,49, 140,4</td><td class="crd-td">1930 to 1971</td><td class="crd-td">16.800 (1971)</td></tr>
<tr><td class="crd-td"><strong>Karkar</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,65, 145,97</td><td class="crd-td">1890 to 1966</td><td class="crd-td">16.100 (1966)</td></tr>
<tr><td class="crd-td"><strong>Wewak</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-3,58, 143,64</td><td class="crd-td">1966 to 1971</td><td class="crd-td">15.015 (1971)</td></tr>
<tr><td class="crd-td"><strong>Wewak (East Sepik)</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,01, 143,74</td><td class="crd-td">1924 to 1971</td><td class="crd-td">15.015 (1971)</td></tr>
<tr><td class="crd-td"><strong>Goroka</strong></td><td class="crd-td">Eastern Highlands (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,08, 145,39</td><td class="crd-td">1946 to 1971</td><td class="crd-td">12.066 (1971)</td></tr>
<tr><td class="crd-td"><strong>Kiriwina</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-8,54, 151,07</td><td class="crd-td">1916 to 1966</td><td class="crd-td">11.800 (1966)</td></tr>
<tr><td class="crd-td"><strong>Tari Basin</strong></td><td class="crd-td">Hela (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-5,85, 142,95</td><td class="crd-td">1935 to 1955</td><td class="crd-td">11.200 (1955)</td></tr>
<tr><td class="crd-td"><strong>Mount Hagen</strong></td><td class="crd-td">Western Highlands (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,86, 144,23</td><td class="crd-td">1938 to 1971</td><td class="crd-td">10.621 (1971)</td></tr>
<tr><td class="crd-td"><strong>Fakfak</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,93, 132,3</td><td class="crd-td">1898 to 1971</td><td class="crd-td">9.200 (1971)</td></tr>
<tr><td class="crd-td"><strong>Serui</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,88, 136,24</td><td class="crd-td">1955 to 1971</td><td class="crd-td">8.900 (1971)</td></tr>
<tr><td class="crd-td"><strong>Enarotali</strong></td><td class="crd-td">Papua Tengah (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,93, 136,37</td><td class="crd-td">1938 to 1961</td><td class="crd-td">7.850 (1938)</td></tr>
<tr><td class="crd-td"><strong>Mogei</strong></td><td class="crd-td">Western Highlands (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,85, 144,23</td><td class="crd-td">1933</td><td class="crd-td">7.200 (1933)</td></tr>
<tr><td class="crd-td"><strong>Nabire</strong></td><td class="crd-td">Papua Tengah (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,37, 135,5</td><td class="crd-td">1971</td><td class="crd-td">7.200 (1971)</td></tr>
<tr><td class="crd-td"><strong>Wamena</strong></td><td class="crd-td">Papua Pegunungan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-4,09, 138,95</td><td class="crd-td">1961 to 1971</td><td class="crd-td">6.400 (1971)</td></tr>
<tr><td class="crd-td"><strong>Mintima</strong></td><td class="crd-td">Simbu (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,98, 144,92</td><td class="crd-td">1884 to 1933</td><td class="crd-td">6.100 (1933)</td></tr>
<tr><td class="crd-td"><strong>Daru</strong></td><td class="crd-td">Western (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-8,2, 143,61</td><td class="crd-td">1893 to 1971</td><td class="crd-td">5.744 (1971)</td></tr>
<tr><td class="crd-td"><strong>Ilaga</strong></td><td class="crd-td">Papua Tengah (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,98, 137,63</td><td class="crd-td">1956</td><td class="crd-td">5.400 (1956)</td></tr>
<tr><td class="crd-td"><strong>Manam</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,08, 145,03</td><td class="crd-td">1890 to 1966</td><td class="crd-td">5.100 (1966)</td></tr>
<tr><td class="crd-td"><strong>Arawa</strong></td><td class="crd-td">Bougainville (North Solomons) (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,23, 155,57</td><td class="crd-td">1971</td><td class="crd-td">5.039 (1971)</td></tr>
<tr><td class="crd-td"><strong>Popondetta</strong></td><td class="crd-td">Oro (Northern) (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-8,77, 148,24</td><td class="crd-td">1966 to 1971</td><td class="crd-td">4.494 (1971)</td></tr>
<tr><td class="crd-td"><strong>Sari</strong></td><td class="crd-td">Enga (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,49, 143,73</td><td class="crd-td">1938</td><td class="crd-td">4.450 (1938)</td></tr>
<tr><td class="crd-td"><strong>Lorengau</strong></td><td class="crd-td">Manus (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-2,02, 147,27</td><td class="crd-td">1911 to 1971</td><td class="crd-td">4.323 (1971)</td></tr>
<tr><td class="crd-td"><strong>Buin</strong></td><td class="crd-td">Bougainville (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,75, 155,68</td><td class="crd-td">1933 to 1966</td><td class="crd-td">4.120 (1966)</td></tr>
<tr><td class="crd-td"><strong>Bulolo</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-7,21, 146,63</td><td class="crd-td">1931 to 1971</td><td class="crd-td">4.001 (1971)</td></tr>
<tr><td class="crd-td"><strong>Waghete</strong></td><td class="crd-td">Papua Tengah (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-4,05, 136,28</td><td class="crd-td">1955</td><td class="crd-td">3.980 (1955)</td></tr>
<tr><td class="crd-td"><strong>Orokolo</strong></td><td class="crd-td">Gulf (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,68, 145,18</td><td class="crd-td">1884 to 1966</td><td class="crd-td">3.650 (1966)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 35 catalogued settlements and highland clusters in colonial New Guinea, ordered by peak population (1884 to 1975).</figcaption>
</figure>

## District Headquarters, Mining Towns and Regional Clusters (Ranks 36 to 70)

Table \ref{tab:mid35-sites} catalogues ranks 36 to 70, spanning Kavieng (3.301 in 1971) down to Salamaua (1.460 in 1939). This middle tier captures the administrative skeleton of colonial governance: district capitals and patrol stations (Kavieng, Kerema, Alotau, Mendi, Kieta, Kundiawa, Samarai, Tanah Merah, Kainantu, Vanimo, Kaimana, Bintuni, Sarmi, Agats and Talasea), inter-war goldfields towns (Wau and Salamaua), western highland mission-patrol posts (Bokondini and Ok Sibil) and key island and coastal clusters (Bosnik, Muyuw, Kuk Swamp, Ansus, Kumbe, Ayamaru, Waren, Teminabuan, Dobu, Sio, Tobati, Iasa, Yela, Urama and Asei) [@firth1985german; @benn1982pragmatists; @evenhuis2017developmenta].

<figure class="crd-table-figure" id="tab:mid35-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kavieng</strong></td><td class="crd-td">New Ireland (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-2,74, 151,06</td><td class="crd-td">1900 to 1971</td><td class="crd-td">3.301 (1971)</td></tr>
<tr><td class="crd-td"><strong>Bokondini</strong></td><td class="crd-td">Papua Pegunungan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,69, 138,66</td><td class="crd-td">1958</td><td class="crd-td">3.150 (1958)</td></tr>
<tr><td class="crd-td"><strong>Madang (Colonial)</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,22, 145,79</td><td class="crd-td">1895 to 1954</td><td class="crd-td">3.150 (1954)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-7,34, 146,72</td><td class="crd-td">1926 to 1971</td><td class="crd-td">3.150 (1939)</td></tr>
<tr><td class="crd-td"><strong>Bosnik</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,17, 136,23</td><td class="crd-td">1920 to 1955</td><td class="crd-td">3.120 (1955)</td></tr>
<tr><td class="crd-td"><strong>Bintuni</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,12, 133,53</td><td class="crd-td">1938 to 1955</td><td class="crd-td">2.800 (1955)</td></tr>
<tr><td class="crd-td"><strong>Kerema</strong></td><td class="crd-td">Gulf (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,77, 145,56</td><td class="crd-td">1966 to 1971</td><td class="crd-td">2.653 (1971)</td></tr>
<tr><td class="crd-td"><strong>Alotau</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-10,31, 150,45</td><td class="crd-td">1971</td><td class="crd-td">2.499 (1971)</td></tr>
<tr><td class="crd-td"><strong>Mendi</strong></td><td class="crd-td">Southern Highlands (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-6,14, 143,66</td><td class="crd-td">1966 to 1971</td><td class="crd-td">2.493 (1971)</td></tr>
<tr><td class="crd-td"><strong>Kieta</strong></td><td class="crd-td">Bougainville (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,22, 155,63</td><td class="crd-td">1905 to 1971</td><td class="crd-td">2.394 (1971)</td></tr>
<tr><td class="crd-td"><strong>Kundiawa</strong></td><td class="crd-td">Simbu (Chimbu) (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,02, 144,97</td><td class="crd-td">1966 to 1971</td><td class="crd-td">2.380 (1971)</td></tr>
<tr><td class="crd-td"><strong>Samarai</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,99, 149,71</td><td class="crd-td">1901 to 1971</td><td class="crd-td">2.201 (1966)</td></tr>
<tr><td class="crd-td"><strong>Tanah Merah</strong></td><td class="crd-td">Papua Selatan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-6,1, 140,3</td><td class="crd-td">1927 to 1971</td><td class="crd-td">2.200 (1955)</td></tr>
<tr><td class="crd-td"><strong>Muyuw</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,12, 152,83</td><td class="crd-td">1884 to 1921</td><td class="crd-td">2.180 (1884)</td></tr>
<tr><td class="crd-td"><strong>Kaimana</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,66, 133,77</td><td class="crd-td">1930 to 1961</td><td class="crd-td">2.150 (1961)</td></tr>
<tr><td class="crd-td"><strong>Kainantu</strong></td><td class="crd-td">Eastern Highlands (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,29, 145,86</td><td class="crd-td">1966 to 1971</td><td class="crd-td">2.124 (1971)</td></tr>
<tr><td class="crd-td"><strong>Kuk Swamp</strong></td><td class="crd-td">Western Highlands (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,78, 144,33</td><td class="crd-td">1933</td><td class="crd-td">2.100 (1933)</td></tr>
<tr><td class="crd-td"><strong>Ok Sibil</strong></td><td class="crd-td">Papua Pegunungan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-4,9, 140,63</td><td class="crd-td">1959</td><td class="crd-td">2.040 (1959)</td></tr>
<tr><td class="crd-td"><strong>Ansus</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,73, 135,82</td><td class="crd-td">1930</td><td class="crd-td">1.940 (1930)</td></tr>
<tr><td class="crd-td"><strong>Kumbe</strong></td><td class="crd-td">Papua Selatan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-8,35, 140,23</td><td class="crd-td">1902</td><td class="crd-td">1.920 (1902)</td></tr>
<tr><td class="crd-td"><strong>Ayamaru</strong></td><td class="crd-td">Papua Barat Daya (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,26, 132,2</td><td class="crd-td">1955</td><td class="crd-td">1.900 (1955)</td></tr>
<tr><td class="crd-td"><strong>Waren</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,27, 136,38</td><td class="crd-td">1937</td><td class="crd-td">1.890 (1937)</td></tr>
<tr><td class="crd-td"><strong>Vanimo</strong></td><td class="crd-td">Sandaun (West Sepik) (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-2,68, 141,3</td><td class="crd-td">1971</td><td class="crd-td">1.877 (1971)</td></tr>
<tr><td class="crd-td"><strong>Teminabuan</strong></td><td class="crd-td">Papua Barat Daya (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,44, 132,02</td><td class="crd-td">1955</td><td class="crd-td">1.800 (1955)</td></tr>
<tr><td class="crd-td"><strong>Dobu</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,83, 150,88</td><td class="crd-td">1891 to 1966</td><td class="crd-td">1.620 (1966)</td></tr>
<tr><td class="crd-td"><strong>Sarmi</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-1,87, 138,75</td><td class="crd-td">1930 to 1955</td><td class="crd-td">1.600 (1955)</td></tr>
<tr><td class="crd-td"><strong>Sio</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,04, 146,89</td><td class="crd-td">1884 to 1933</td><td class="crd-td">1.580 (1933)</td></tr>
<tr><td class="crd-td"><strong>Talasea</strong></td><td class="crd-td">West New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,29, 150,03</td><td class="crd-td">1914 to 1954</td><td class="crd-td">1.580 (1954)</td></tr>
<tr><td class="crd-td"><strong>Tobati</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,59, 140,71</td><td class="crd-td">1910 to 1930</td><td class="crd-td">1.580 (1930)</td></tr>
<tr><td class="crd-td"><strong>Iasa</strong></td><td class="crd-td">Western (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,51, 143,98</td><td class="crd-td">1911</td><td class="crd-td">1.520 (1911)</td></tr>
<tr><td class="crd-td"><strong>Yela</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-11,35, 154,17</td><td class="crd-td">1921</td><td class="crd-td">1.510 (1921)</td></tr>
<tr><td class="crd-td"><strong>Agats</strong></td><td class="crd-td">Papua Selatan (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-5,54, 138,13</td><td class="crd-td">1900 to 1961</td><td class="crd-td">1.500 (1961)</td></tr>
<tr><td class="crd-td"><strong>Urama</strong></td><td class="crd-td">Gulf (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,5, 144,61</td><td class="crd-td">1921</td><td class="crd-td">1.490 (1921)</td></tr>
<tr><td class="crd-td"><strong>Asei</strong></td><td class="crd-td">Papua (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,59, 140,58</td><td class="crd-td">1903</td><td class="crd-td">1.460 (1903)</td></tr>
<tr><td class="crd-td"><strong>Salamaua</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-7,04, 147,05</td><td class="crd-td">1926 to 1939</td><td class="crd-td">1.460 (1939)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements ranked 36 to 70 in colonial New Guinea, ordered by peak population (1884 to 1975).</figcaption>
</figure>

## Early Colonial Stations and Ethnographic Benchmark Locales (Ranks 71 to 103)

Table \ref{tab:rem33-sites} completes the 103-entry register across ranks 71 to 103, spanning Doreh (1.420 in 1900) down to Tsembaga (204 in 1962). Here appear early German and Dutch coastal anchorages (Doreh, Kokas, Mioko, Kokopo, Aitape, Stephansort and Finschhafen), early Papuan patrol and gold-shipping posts (Bwagaoia, Kikori, Buna and Abau), emerging late-colonial oil-palm centres (Kimbe, 1.172 in 1971) and classic Sepik, Bismarck and Highland ethnographic villages (Matupit, Sohano, Wanigela, Goaribari, Kairiru, Oposisi, Biwat, Morehead, Tambunum, Darapap, Kandingei, Palimbei, Aibom, Wom, Mandok, Bilbil, Kanganaman, Mailu, Bongu, Pere and Tsembaga) [@faik_simet2021exploring; @mackellar1912scented; @benjamin1907victoriana; @bainton2006virtuous].

<figure class="crd-table-figure" id="tab:rem33-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Doreh</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-3,19, 136,87</td><td class="crd-td">1900</td><td class="crd-td">1.420 (1900)</td></tr>
<tr><td class="crd-td"><strong>Matupit</strong></td><td class="crd-td">East New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,38, 152,1</td><td class="crd-td">1914 to 1960</td><td class="crd-td">1.380 (1937)</td></tr>
<tr><td class="crd-td"><strong>Sohano</strong></td><td class="crd-td">Bougainville (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,41, 154,66</td><td class="crd-td">1947 to 1966</td><td class="crd-td">1.380 (1966)</td></tr>
<tr><td class="crd-td"><strong>Wanigela</strong></td><td class="crd-td">Oro (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,33, 149,18</td><td class="crd-td">1884 to 1921</td><td class="crd-td">1.380 (1921)</td></tr>
<tr><td class="crd-td"><strong>Goaribari</strong></td><td class="crd-td">Gulf (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,78, 144,22</td><td class="crd-td">1884 to 1914</td><td class="crd-td">1.340 (1884)</td></tr>
<tr><td class="crd-td"><strong>Kairiru</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-3,35, 143,55</td><td class="crd-td">1933</td><td class="crd-td">1.320 (1933)</td></tr>
<tr><td class="crd-td"><strong>Kokas</strong></td><td class="crd-td">Papua Barat (ID)</td><td class="crd-td">Dutch West New Guinea</td><td class="crd-td">-2,71, 132,42</td><td class="crd-td">1898 to 1930</td><td class="crd-td">1.290 (1930)</td></tr>
<tr><td class="crd-td"><strong>Mioko</strong></td><td class="crd-td">East New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,2, 152,46</td><td class="crd-td">1890 to 1914</td><td class="crd-td">1.180 (1890)</td></tr>
<tr><td class="crd-td"><strong>Kimbe</strong></td><td class="crd-td">West New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,55, 150,15</td><td class="crd-td">1971</td><td class="crd-td">1.172 (1971)</td></tr>
<tr><td class="crd-td"><strong>Aitape</strong></td><td class="crd-td">Sandaun (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-3,14, 142,35</td><td class="crd-td">1896 to 1966</td><td class="crd-td">1.170 (1966)</td></tr>
<tr><td class="crd-td"><strong>Kokopo</strong></td><td class="crd-td">East New Britain (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,35, 152,27</td><td class="crd-td">1899 to 1933</td><td class="crd-td">1.120 (1905)</td></tr>
<tr><td class="crd-td"><strong>Oposisi</strong></td><td class="crd-td">Central (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,51, 145,24</td><td class="crd-td">1890 to 1921</td><td class="crd-td">1.120 (1921)</td></tr>
<tr><td class="crd-td"><strong>Biwat</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,6, 143,95</td><td class="crd-td">1884 to 1932</td><td class="crd-td">1.050 (1884)</td></tr>
<tr><td class="crd-td"><strong>Morehead</strong></td><td class="crd-td">Western (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-8,72, 141,63</td><td class="crd-td">1931</td><td class="crd-td">1.040 (1931)</td></tr>
<tr><td class="crd-td"><strong>Tambunum</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,18, 143,48</td><td class="crd-td">1912 to 1930</td><td class="crd-td">960 (1930)</td></tr>
<tr><td class="crd-td"><strong>Bwagaoia</strong></td><td class="crd-td">Milne Bay (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-10,69, 152,82</td><td class="crd-td">1889 to 1966</td><td class="crd-td">940 (1938)</td></tr>
<tr><td class="crd-td"><strong>Darapap</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,26, 144,24</td><td class="crd-td">1938</td><td class="crd-td">940 (1938)</td></tr>
<tr><td class="crd-td"><strong>Stephansort</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,63, 145,53</td><td class="crd-td">1893 to 1914</td><td class="crd-td">860 (1893)</td></tr>
<tr><td class="crd-td"><strong>Kandingei</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,22, 143,07</td><td class="crd-td">1884 to 1930</td><td class="crd-td">830 (1930)</td></tr>
<tr><td class="crd-td"><strong>Palimbei</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,14, 143,13</td><td class="crd-td">1912 to 1973</td><td class="crd-td">780 (1930)</td></tr>
<tr><td class="crd-td"><strong>Aibom</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,28, 143,2</td><td class="crd-td">1933</td><td class="crd-td">740 (1933)</td></tr>
<tr><td class="crd-td"><strong>Finschhafen</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-6,61, 147,32</td><td class="crd-td">1886 to 1933</td><td class="crd-td">710 (1890)</td></tr>
<tr><td class="crd-td"><strong>Wom</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-3,52, 143,58</td><td class="crd-td">1884 to 1912</td><td class="crd-td">710 (1912)</td></tr>
<tr><td class="crd-td"><strong>Mandok</strong></td><td class="crd-td">Morobe (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,79, 147,98</td><td class="crd-td">1884 to 1963</td><td class="crd-td">695 (1884)</td></tr>
<tr><td class="crd-td"><strong>Kikori</strong></td><td class="crd-td">Gulf (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-7,42, 144,25</td><td class="crd-td">1912 to 1966</td><td class="crd-td">680 (1954)</td></tr>
<tr><td class="crd-td"><strong>Bilbil</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,48, 145,55</td><td class="crd-td">1904</td><td class="crd-td">640 (1904)</td></tr>
<tr><td class="crd-td"><strong>Kanganaman</strong></td><td class="crd-td">East Sepik (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-4,19, 143,26</td><td class="crd-td">1912 to 1973</td><td class="crd-td">640 (1930)</td></tr>
<tr><td class="crd-td"><strong>Mailu</strong></td><td class="crd-td">Central (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,76, 148,58</td><td class="crd-td">1914 to 1926</td><td class="crd-td">610 (1926)</td></tr>
<tr><td class="crd-td"><strong>Buna</strong></td><td class="crd-td">Oro (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-8,68, 148,4</td><td class="crd-td">1908 to 1938</td><td class="crd-td">560 (1938)</td></tr>
<tr><td class="crd-td"><strong>Abau</strong></td><td class="crd-td">Central (PNG)</td><td class="crd-td">British and Australian Papua</td><td class="crd-td">-9,62, 148,06</td><td class="crd-td">1911 to 1954</td><td class="crd-td">510 (1954)</td></tr>
<tr><td class="crd-td"><strong>Bongu</strong></td><td class="crd-td">Madang (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,65, 145,61</td><td class="crd-td">1884 to 1914</td><td class="crd-td">510 (1914)</td></tr>
<tr><td class="crd-td"><strong>Pere</strong></td><td class="crd-td">Manus (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-2,18, 147,07</td><td class="crd-td">1928 to 1953</td><td class="crd-td">328 (1953)</td></tr>
<tr><td class="crd-td"><strong>Tsembaga</strong></td><td class="crd-td">Jiwaka (PNG)</td><td class="crd-td">German and Australian NG</td><td class="crd-td">-5,45, 144,72</td><td class="crd-td">1962</td><td class="crd-td">204 (1962)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements ranked 71 to 103 in colonial New Guinea, ordered by peak population (1884 to 1975).</figcaption>
</figure>

## Jurisdiction Coverage and Rank-Size Structure

Table \ref{tab:subregion-gazetteer} aggregates catalogued site counts, spatial sampling density per 100.000 km², leading settlement and 1971 population across all three welded colonial jurisdictions. German and Australian New Guinea leads with 49 catalogued entries (47,6% of the gazetteer and 17,28 sites per 100.000 km²), reflecting both its dense Bismarck-Sepik-Highlands archival record and its position as the island's most populous half (1,8M in 1971). British and Australian Papua holds 24 entries (9,68 sites per 100.000 km²) crowned by Port Moresby (76,5k), while sprawling Dutch West New Guinea accounts for 30 entries (6,54 sites per 100.000 km²) spanning coastal ports from Sorong to Merauke plus the highland Baliem and Paniai hubs [@kuitenbrouwer2016beyond; @fowler2004papuan].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 100k km²</th><th class="crd-th">Leading Locale (Peak)</th><th class="crd-th">1971 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dutch West New Guinea</strong></td><td class="crd-td">458.994</td><td class="crd-td">30</td><td class="crd-td">6,54</td><td class="crd-td">Baliem Valley (54k)</td><td class="crd-td">923,4k</td></tr>
<tr><td class="crd-td"><strong>German and Australian NG</strong></td><td class="crd-td">283.523</td><td class="crd-td">49</td><td class="crd-td">17,28</td><td class="crd-td">Lae (38,7k)</td><td class="crd-td">1,79M</td></tr>
<tr><td class="crd-td"><strong>British and Australian Papua</strong></td><td class="crd-td">247.818</td><td class="crd-td">24</td><td class="crd-td">9,68</td><td class="crd-td">Port Moresby (76,5k)</td><td class="crd-td">695k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlement counts, spatial sampling density (per 100.000 km²), leading locale and 1971 population across the three colonial jurisdictions of New Guinea.</figcaption>
</figure>

Rank-size scaling across the upper 51 locales (76.507 down to 2.124) yields a close Zipfian exponent of $\alpha = 1,04$ ($R^2 = 0,96$), shifting to $\alpha = 1,24$ ($R^2 = 0,94$) across all 103 entries as small ethnographic villages enter the lower tail. The slight flattening at ranks 1 to 3 (Port Moresby 76,5k, Baliem Valley 54k, Jayapura 45,8k, Lae 38,7k) reflects New Guinea's political bisection: because Port Moresby and Jayapura functioned as separate administrative capitals on opposite sides of the 141st meridian, neither developed unchecked island-wide primacy [@matbob2006west; @fowler2004papuan].

# Limitations

Three caveats apply when interpreting this settlement gazetteer. First, two northern Papua New Guinea ports retain paired entries separated beyond the 25 km deduplication threshold: Wewak appears both at coastal municipal coordinates (1966 to 1971, peaking at 15.015) and under an inland East Sepik longitudinal series (1924 to 1971, also ending at 15.015), while Madang appears separately for its 1966 to 1971 modern town counts (16.865) and its earlier 1895 to 1954 colonial Friedrich-Wilhelmshafen series (3.150). Both pairs are explicitly disambiguated in Tables \ref{tab:top35-sites} and \ref{tab:mid35-sites} and adjusted in urban-share calculations.

Second, the gazetteer purposefully blends nucleated colonial municipalities with dense regional valley or island populations where urban nucleations did not yet exist — most notably Baliem Valley (54.000), Karkar (16.100), Kiriwina (11.800), Tari Basin (11.200), Mogei (7.200) and Mintima (6.100). Analysts computing strict municipal urbanisation rates should therefore restrict sums to the 1966 and 1971 census town records rather than pooling ethnographic basin aggregates.

Third, early colonial headcounts before 1955 — particularly in German New Guinea, coastal Papua and pre-war Dutch outposts — often enumerated European, Chinese and indentured plantation residents more rigorously than adjoining customary villages, causing abrupt statistical jumps once post-war censuses integrated peri-urban indigenous settlements such as Hanuabada and Matupit [@wood2024what; @faik_simet2021exploring; @ige2023counting].

# Conclusion

Cataloguing 103 settlements and 270 dated demographic observations across 1884 to 1975 documents the emergence of modern urban and administrative geography across colonial New Guinea. Spanning 76.507 inhabitants at Port Moresby and 45.786 at Jayapura down to 204 at Tsembaga, the gazetteer captures a near-Zipfian rank-size structure ($\alpha = 1,04$, $R^2 = 0,96$ across the top 51 locales) shaped simultaneously by tripartite maritime ports, gold and copper mining camps, Highland coffee airstrips and enduring indigenous population valleys [@fowler2004papuan; @economics2025coffee; @kuitenbrouwer2016beyond]. Reconciling 122 evaluated records with zero unaccounted candidates and 0% crowd-sourced fallback reliance, this settlement register supplies the spatial framework for New Guinea's late-colonial demographic transition.

# Appendix

## Excluded Duplicate Aliases

Table \ref{tab:excluded-aliases} records all 19 candidate entries excluded during Wave-3 spatial deduplication, each representing a colonial variant, pre-colonial duplicate or adjacent indigenous village merged into a canonical settlement within 25 km.

<figure class="crd-table-figure" id="tab:excluded-aliases">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Excluded Candidate</th><th class="crd-th">Canonical Settlement</th><th class="crd-th">Country</th><th class="crd-th">Spatial Rule</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Moresby Colonial</strong></td><td class="crd-td">Port Moresby</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Rabaul Colonial</strong></td><td class="crd-td">Rabaul</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Hanuabada</strong></td><td class="crd-td">Port Moresby</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Samarai Colonial</strong></td><td class="crd-td">Samarai</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Syuru Asmat</strong></td><td class="crd-td">Agats</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Fakfak Onin</strong></td><td class="crd-td">Fakfak</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Daru Colonial</strong></td><td class="crd-td">Daru</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Kavieng Colonial</strong></td><td class="crd-td">Kavieng</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Lae Colonial</strong></td><td class="crd-td">Lae</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Lorengau Colonial</strong></td><td class="crd-td">Lorengau</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Bulolo Colonial</strong></td><td class="crd-td">Bulolo</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Wau Colonial</strong></td><td class="crd-td">Wau</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Tanah Merah Colonial</strong></td><td class="crd-td">Tanah Merah</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Goroka Colonial</strong></td><td class="crd-td">Goroka</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Mount Hagen Colonial</strong></td><td class="crd-td">Mount Hagen</td><td class="crd-td">Papua New Guinea</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Paniai</strong></td><td class="crd-td">Enarotali</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Kaimana Pre-Colonial</strong></td><td class="crd-td">Kaimana</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Sobei</strong></td><td class="crd-td">Sarmi</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
<tr><td class="crd-td"><strong>Bintuni Pre-Colonial</strong></td><td class="crd-td">Bintuni</td><td class="crd-td">Indonesia</td><td class="crd-td">Merged within 25 km</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Nineteen variant and adjacent candidate records merged into canonical settlements during Wave-3 spatial deduplication.</figcaption>
</figure>

## Primary Provenance Authorities

Table \ref{tab:top-authorities} lists the leading documentary authorities cited across the 103 catalogued locales, demonstrating primary grounding in TPNG and PNG NSO censuses, German New Guinea annual reports, Dutch administrative returns, BPS Indonesian censuses and foundational Melanesian ethnographies.

<figure class="crd-table-figure" id="tab:top-authorities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Authority</th><th class="crd-th">Cited Locales</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>TPNG Bureau of Statistics (1966 and 1971 Censuses)</strong></td><td class="crd-td">22</td><td class="crd-td">21,4%</td></tr>
<tr><td class="crd-td"><strong>PNG National Statistical Office</strong></td><td class="crd-td">21</td><td class="crd-td">20,4%</td></tr>
<tr><td class="crd-td"><strong>Sack, P. and Clark, D.</strong></td><td class="crd-td">12</td><td class="crd-td">11,7%</td></tr>
<tr><td class="crd-td"><strong>TPNG Censuses 1966 and 1971</strong></td><td class="crd-td">10</td><td class="crd-td">9,7%</td></tr>
<tr><td class="crd-td"><strong>Swadling, P.</strong></td><td class="crd-td">4</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Commonwealth of Australia Annual Reports (New Guinea)</strong></td><td class="crd-td">4</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>BPS Indonesia Urban Communes and District Series</strong></td><td class="crd-td">4</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>van der Sande, G. A. J.</strong></td><td class="crd-td">4</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Bateson, G.</strong></td><td class="crd-td">4</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Netherlands New Guinea 1930-1961 Reports</strong></td><td class="crd-td">3</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>Goodman, T.</strong></td><td class="crd-td">3</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>Commonwealth of Australia Annual Reports on Papua</strong></td><td class="crd-td">3</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>Netherlands New Guinea Administrative Reports</strong></td><td class="crd-td">3</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>Mead, M.</strong></td><td class="crd-td">3</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>HDX COD-PS Indonesia 2020</strong></td><td class="crd-td">2</td><td class="crd-td">1,9%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading archival, census and ethnographic authorities cited across the 103 catalogued locales in colonial New Guinea.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1 (Coordinate Datum). All settlement coordinates in Tables \ref{tab:top35-sites}, \ref{tab:mid35-sites} and \ref{tab:rem33-sites} use WGS84 decimal degrees rounded to two decimal places with European decimal commas.

Note 2 (Colonial Toponymy). Modern canonical names are paired with their historical colonial designations in prose and deduplication tables — including Jayapura (formerly Hollandia and Sukarnapura), Madang (Friedrich-Wilhelmshafen), Kokopo (Herbertshöhe), Rabaul (Simpsonhafen) and Manokwari (Doreh) — to preserve unambiguous longitudinal tracking from 1884 to 1975.
