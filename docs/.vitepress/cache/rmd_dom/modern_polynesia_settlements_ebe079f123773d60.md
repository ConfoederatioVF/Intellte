---
title: "Polynesia in the Modern Era"
subtitle: "Settlement Gazetteer and Archipelago Urban Hierarchy (1960 to 2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/modern_polynesia_urban_hierarchy.png"
hero_caption: "Twelve largest recorded modern Polynesian settlements and rank-size distribution across 255 centres, 1960 to 2025."
hero_label: "fig:hero-modern-polynesia-hierarchy"
bibliography: modern_polynesia.bib
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



![Twelve largest recorded modern Polynesian settlements and rank-size distribution across 255 centres, 1960 to 2025.](figures/modern_polynesia_urban_hierarchy.png)



# Abstract

This gazetteer documents 255 catalogued settlements and 1.768 dated census observations spanning all eighteen Admin-1 sub-regions and ten polities of Modern Polynesia (excluding Hawai'i and American Samoa) between 1960 and 2025. Compiled across four audited source waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate records—reconciling 115 duplicate orthographies, colonial aliases and contiguous village overlaps into canonical settlements and closing at 0,79% marginal gain on the fourth sweep—the register draws directly from official national and territorial censuses of French Polynesia, Samoa, Tonga, the Cook Islands, Tuvalu, Niue, Tokelau, Wallis and Futuna, Pitcairn Islands and Rapa Nui [@ispf2023recensement; @statistics2022samoa; @department2022tonga; @mfem2022cook]. Explicit spatial-scope stratification distinguishes 4 metropolitan urban envelopes—Papeete (Metro), Nuku'alofa (Metro), Rarotonga (Metro) and Funafuti (Metro)—from 12 suburban communes and peri-urban satellites and 239 city-proper municipalities and island villages [@andrew2019coastal; @connell2013islands]. Peak recorded populations span more than three orders of magnitude, rising from outer-atoll village Te Tautua on Penrhyn (45 residents in 2011) and southern coral outpost Niulakita in Tuvalu (54 in 1963) to Greater Papeete (137.030 in 2022), Apia (38.836 peak in 2001; 35.974 in 2021) and Greater Nuku'alofa (36.045 peak in 2011; 34.142 in 2021). Upper-half peak populations conform tightly to a classical Zipf power law ($\alpha = 1,00$, $R^2 = 0,99$ across the top 127 centres; $\alpha = 0,91$, $R^2 = 0,98$ excluding suburbs), recording Polynesia's transition from dispersed colonial villages into a sharply hierarchical modern urban network [@bertram1985mirab; @division2018tuvalu; @niue2023niue].

# Background

Modern Polynesian settlement geography between 1960 and 2025 was reshaped by four simultaneous forces: metropolitan-funded suburbanisation around territorial capitals, rural-to-urban outer-island drain, tourism and military enclave surges, and disaster-induced coastal relocation [@connell2013islands; @bertram1985mirab; @andrew2019coastal].

At the apex of the regional system stands Tahiti's Windward urban corridor, catalysed by French *Centre d'Expérimentation du Pacifique* (CEP) nuclear-testing expenditure after 1963 and sustained by metropolitan fiscal transfers [@ispf2023recensement]. While central Papeete matured near 26,7k inhabitants, contiguous suburban communes absorbed the vast majority of demographic growth: Faa'a expanded eightfold from 3.681 in 1962 to 29.826 in 2022, Punaauia multiplied fourteenfold from 2.046 to 28.781, and Mahina (14.623), Pirae (14.068), Paea (12.756) and Arue (10.322) fused into the 137.030-strong *Unité Urbaine de Papeete* [@ispf2023recensement]. Beyond the urban core, commuter towns along southern Tahiti—Papara (11.743), Afaahiti (6.829), Papeari (5.446) and Mataiea (5.391)—and across Moorea's north and west coasts (Paopao 4.895, Haapiti 4.109, Afareaitu 4.055) formed a secondary metropolitan ring, while international resort growth lifted Bora Bora's Nunue (5.541) and Faanui (3.312) well above traditional administrative seat Uturoa (3.663).

Western Polynesia's independent capitals exhibited a quieter yet decisive peri-urban expansion tempered by high overseas emigration [@friesen2019beyond; @faanunu2007experiences]. In Samoa, municipal Apia peaked at 38.836 in 2001 and eased to 35.974 by 2021 as households moved westward onto freehold subdivisions in Northwest Upolu—expanding Vaitele to 8.224, Faleasiu to 4.431, upland Aleisa Sasa'e eightfold from 470 to 3.810, Vailele to 3.284 and Malie to 2.623—while post-2009 tsunami recovery encouraged inland micro-mobilities across Upolu and Savai'i [@statistics2022samoa; @latainiusulu2023climate; @lede2015remittances]. In Tonga, Greater Nuku'alofa peaked at 36.045 in 2011 (34.142 in 2021; core city 21.185) as internal migrants from Ha'apai and the Niuas resettled onto Tongatapu's peri-urban fringe—including Popua (2.335), Vainī (3.295) and Ha'ateiho (2.627)—leaving outer-island hubs Neiafu (3.825) and Pangai-Hihifo (2.523 peak) struggling against both domestic and seasonal labour departures [@department2022tonga; @lolohea2016internal; @moalatupou2016social].

Across the smaller polities, urban concentration reached extreme proportions even where national totals stagnated or fell. Funafuti Metro absorbed 62,1% of Tuvalu by 2022 (6.602 residents, nearly ten times its 1963 count of 687) as Fogafale's neighbourhoods (headed by Fakaifou at 1.258) crowded onto a narrow coral rim exposed to king tides and sea-level rise [@division2018tuvalu; @milan2015tuvalu; @gibson2018relationship]. Rarotonga Metro climbed to 72,2% of the Cook Islands by 2021 (10.863 around Avarua at 5.113 and Arorangi at 2.661) while outer atolls shrank after the 1974 airport opening [@wrightkoteka2006akau; @mfem2022cook]. Alofi retained 35,9% of Niue's dwindling 1.689 population in 2022, Hanga Roa hosted virtually 100% of Rapa Nui's tourism-driven boom (peaking at 7.750 in 2017 before 4.800 in 2024), Mata-Utu fell by half to 980 alongside Wallis and Futuna's post-2003 emigration to New Caledonia, and Atafu (541), Fakaofo (506) and Nukunonu (452) balanced Tokelau's three coral atolls [@niue2023niue; @stsee2024recensement; @office20202019; @yamauchi2026when].

# Methodology

The modern settlement register was compiled across four audited source waves with strict provenance tracking and zero crowd-sourced population fallback. Wave 1 ingested 251 municipalities, French Polynesian *communes associées*, Samoan and Tongan census villages, Cook Islands and Niuean villages, Tuvaluan and Tokelauan atoll settlements, Wallisian and Futunan district villages, Hanga Roa and Adamstown directly from official national and territorial census publications (ISPF and INSEE 1962–2022, SBS 1961–2021, TSD 1966–2021, MFEM 1961–2021, Tuvalu CSD 1963–2022, Statistics Niue 1961–2022, TNSO 1961–2019, STSEE 1962–2023, INE Chile 1960–2024 and Pitcairn Government 1960–2023) [@ispf2023recensement; @statistics2022samoa; @department2022tonga; @repository1999statistical]. Wave 2 added 2 documented island settlements from Pacific demographic literature. Wave 3 standardised WGS84 decimal coordinates, harmonised Polynesian diacritics and glottal stops, and deduplicated 115 alias or contiguous sub-village records within 25 km of canonical entities—consolidating variant colonial records (such as Papeete, Apia, Salelologa and Mata-Utu colonial entries), outer Cook Islands hamlets, Funafuti's inner *kainga* quarters (Vaiaku, Senala, Alapi, Lofeagai, Tekavatoetoe and Teone into Fakaifou) and contiguous Nuku'alofa and Apia neighbourhoods (such as Haveluloto, Tofoa-Koloua, Siusega and Fale'ula) into clean longitudinal series. Wave 4 executed a sub-region gap sweep adding 2 final settlements (0,79% marginal gain, well below the 2% saturation ceiling), confirming 0 empty sub-regions across all eighteen Admin-1 units.

Spatial-scope tags partition the register into three mutually exclusive tiers so regional urban ratios never double-count metropolitan aggregates against their constituent communes. Four entries carry metropolitan scope—Papeete (Metro), Nuku'alofa (Metro), Rarotonga (Metro) and Funafuti (Metro)—twelve entries carry suburban scope (six Papeete ring communes: Faa'a, Punaauia, Mahina, Pirae, Paea and Arue; three Apia peri-urban satellites: Vaitele, Vailele and Malie; Tongatapu's Popua; and Funafuti's Fakaifou and Amatuku), and 239 entries carry city-proper scope covering municipal capitals, secondary island ports and rural villages.

# Testing and Validation

Source-ledger auditing confirms exact reconciliation across all 370 evaluated candidate entries: 255 included, 115 excluded (100% duplicate orthography or sub-village alias merges within 25 km of canonical settlements) and 0 unaccounted. Every included settlement contains verified WGS84 coordinates, non-null census observations within 1960–2025, explicit statistical citations and assignment to one of the eighteen sub-regions. Across 255 settlements, 1.768 dated observations yield a mean depth of 6,93 census benchmarks per site—a substantial leap over colonial-era density. Longitudinal depth peaks at 12 census points apiece across six continuously enumerated hubs: Apia (1961–2021), Papeete (1962–2022), Rarotonga Metro (1961–2021) and all three Tokelauan atolls of Fakaofo, Atafu and Nukunonu (1961–2019), followed by 10 points each for Faa'a, Punaauia, Pirae, Afaahiti, Paopao, Uturoa, Faanui, Adamstown and Hakupu [@statistics2022samoa; @ispf2023recensement; @office20202019; @niue2023niue]. Only 14 settlements carry single-date observations—chiefly small Cook Islands outer-island villages tabulated separately in 2011 plus Falealili (1961) and Ono Futuna (1962).

Cross-checking buffered submask assignments against official administrative divisions confirms clean one-to-one polity alignment across all ten polities with zero cross-national leakage. Inside French Polynesia, one minor archipelagic boundary overlap warrants note: because buffered coastal polygons approximate scattered southern reefs, three remote Tuamotu-Gambier communes (Tureia, Gambier and Hereheretue) fall inside the adjacent Austral Islands buffered mask, placing 14 settlements inside the Austral submask versus 11 under official *Îles Australes* administration (and 35 inside the Tuamotu-Gambier submask versus 38 under *Îles Tuamotu et Gambier*). Figure \ref{fig:sett-regional-map} displays the basin-wide geographic distribution of all 255 catalogued modern settlements.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-modern-polynesia-settlements/modern_polynesia_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Geographic distribution of the eighteen modern Polynesian sub-regions and 255 catalogued settlements across Western, Central and Eastern Polynesia, 1960 to 2025.</figcaption>
</figure>

# Results

## Forty Leading Modern Polynesian Settlements

Because the full register comprises 255 entries across ten polities, Table \ref{tab:top40-sites} prints the 40 largest catalogued settlements ordered by peak recorded population, spanning Greater Papeete (137.030 in 2022) down to pearl-farming atoll centre Rangiroa (2.785 in 2022). French Polynesia supplies 25 of the top 40 settlements—reflecting both its 43,9% share of regional population and its fine-grained *commune associée* municipal structure across Tahiti, Moorea, Bora Bora, Raiatea and the Tuamotus [@ispf2023recensement]. Samoa contributes 7 entries (Apia, Vaitele, Faleasiu, Aleisa Sasa'e, Vailele, Le'auva'a and Falealili), Tonga contributes 4 (Greater Nuku'alofa, Nuku'alofa core, Neiafu and Vainī), the Cook Islands contribute 2 (Rarotonga Metro and Avarua), Tuvalu contributes 1 (Funafuti Metro) and Rapa Nui contributes 1 (Hanga Roa). Thirty-one of these 40 leading centres achieved their historic maxima between 2011 and 2022; the notable exceptions—Rarotonga Metro (peaking at 11.478 in 1971 prior to jet-age emigration), Tureia (2.934 in 1983 at the height of French nuclear-testing deployments), Neiafu (4.159 in 1996) and Apia core (38.836 in 2001 prior to Northwest Upolu suburban shift)—capture the exact turning points of modern Polynesian migration and geopolitics [@wrightkoteka2006akau; @ispf2023recensement; @statistics2022samoa; @lolohea2016internal].

<figure class="crd-table-figure" id="tab:top40-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Papeete (Metro)</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Metro</td><td class="crd-td">-17,54, -149,57</td><td class="crd-td">1977 to 2022</td><td class="crd-td">137k (2022)</td></tr>
<tr><td class="crd-td"><strong>Apia</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,83, -171,77</td><td class="crd-td">1961 to 2021</td><td class="crd-td">38,8k (2001)</td></tr>
<tr><td class="crd-td"><strong>Nuku'alofa (Metro)</strong></td><td class="crd-td">Tonga</td><td class="crd-td">Metro</td><td class="crd-td">-21,14, -175,23</td><td class="crd-td">2006 to 2021</td><td class="crd-td">36k (2011)</td></tr>
<tr><td class="crd-td"><strong>Faaa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,56, -149,61</td><td class="crd-td">1962 to 2022</td><td class="crd-td">29,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Punaauia</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,63, -149,61</td><td class="crd-td">1962 to 2022</td><td class="crd-td">28,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Papeete</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,53, -149,57</td><td class="crd-td">1962 to 2022</td><td class="crd-td">26,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Nuku'alofa</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,14, -175,23</td><td class="crd-td">1966 to 2021</td><td class="crd-td">24,2k (2011)</td></tr>
<tr><td class="crd-td"><strong>Mahina</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,5, -149,48</td><td class="crd-td">1977 to 2022</td><td class="crd-td">14,8k (2017)</td></tr>
<tr><td class="crd-td"><strong>Pirae</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,53, -149,55</td><td class="crd-td">1962 to 2022</td><td class="crd-td">14,6k (2007)</td></tr>
<tr><td class="crd-td"><strong>Paea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,69, -149,58</td><td class="crd-td">1977 to 2022</td><td class="crd-td">13k (2017)</td></tr>
<tr><td class="crd-td"><strong>Papara</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,74, -149,5</td><td class="crd-td">1977 to 2022</td><td class="crd-td">11,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Rarotonga (Metro)</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">Metro</td><td class="crd-td">-21,21, -159,77</td><td class="crd-td">1961 to 2021</td><td class="crd-td">11,5k (1971)</td></tr>
<tr><td class="crd-td"><strong>Arue</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">Suburb</td><td class="crd-td">-17,52, -149,53</td><td class="crd-td">1977 to 2022</td><td class="crd-td">10,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Vaitele</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Suburb</td><td class="crd-td">-13,83, -171,82</td><td class="crd-td">2001 to 2021</td><td class="crd-td">8,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Hanga Roa</strong></td><td class="crd-td">Chile</td><td class="crd-td">City</td><td class="crd-td">-27,15, -109,43</td><td class="crd-td">1960 to 2024</td><td class="crd-td">7,8k (2017)</td></tr>
<tr><td class="crd-td"><strong>Afaahiti</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,73, -149,31</td><td class="crd-td">1962 to 2022</td><td class="crd-td">6,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Funafuti (Metro)</strong></td><td class="crd-td">Tuvalu</td><td class="crd-td">Metro</td><td class="crd-td">-8,51, 179,2</td><td class="crd-td">1963 to 2022</td><td class="crd-td">6,6k (2022)</td></tr>
<tr><td class="crd-td"><strong>Nunue</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,51, -151,75</td><td class="crd-td">1977 to 2022</td><td class="crd-td">5,6k (2017)</td></tr>
<tr><td class="crd-td"><strong>Papeari</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,72, -149,38</td><td class="crd-td">1977 to 2022</td><td class="crd-td">5,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Mataiea</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,74, -149,42</td><td class="crd-td">1977 to 2022</td><td class="crd-td">5,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Avarua</strong></td><td class="crd-td">Cook Islands</td><td class="crd-td">City</td><td class="crd-td">-21,21, -159,78</td><td class="crd-td">2011 to 2021</td><td class="crd-td">5,1k (2021)</td></tr>
<tr><td class="crd-td"><strong>Paopao</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,51, -149,82</td><td class="crd-td">1962 to 2022</td><td class="crd-td">4,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Faleasiu</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,83, -171,91</td><td class="crd-td">2001 to 2021</td><td class="crd-td">4,4k (2021)</td></tr>
<tr><td class="crd-td"><strong>Haapiti</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,56, -149,87</td><td class="crd-td">1977 to 2022</td><td class="crd-td">4,3k (2017)</td></tr>
<tr><td class="crd-td"><strong>Neiafu</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-18,65, -173,98</td><td class="crd-td">1966 to 2021</td><td class="crd-td">4,2k (1996)</td></tr>
<tr><td class="crd-td"><strong>Afareaitu</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,53, -149,82</td><td class="crd-td">1977 to 2022</td><td class="crd-td">4,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>Papenoo</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,51, -149,42</td><td class="crd-td">1977 to 2022</td><td class="crd-td">4k (2017)</td></tr>
<tr><td class="crd-td"><strong>Toahotu</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,76, -149,32</td><td class="crd-td">1977 to 2022</td><td class="crd-td">3,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Aleisa Sasa'e</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,86, -171,85</td><td class="crd-td">2001 to 2021</td><td class="crd-td">3,8k (2021)</td></tr>
<tr><td class="crd-td"><strong>Uturoa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,75, -151,45</td><td class="crd-td">1962 to 2022</td><td class="crd-td">3,8k (2007)</td></tr>
<tr><td class="crd-td"><strong>Vailele</strong></td><td class="crd-td">Samoa</td><td class="crd-td">Suburb</td><td class="crd-td">-13,85, -171,73</td><td class="crd-td">2001 to 2021</td><td class="crd-td">3,6k (2011)</td></tr>
<tr><td class="crd-td"><strong>Le'auva'a</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-13,82, -171,86</td><td class="crd-td">2001 to 2021</td><td class="crd-td">3,5k (2016)</td></tr>
<tr><td class="crd-td"><strong>Avera</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,79, -151,41</td><td class="crd-td">1977 to 2022</td><td class="crd-td">3,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Vainī</strong></td><td class="crd-td">Tonga</td><td class="crd-td">City</td><td class="crd-td">-21,19, -175,17</td><td class="crd-td">1996 to 2021</td><td class="crd-td">3,4k (2016)</td></tr>
<tr><td class="crd-td"><strong>Faanui</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-16,49, -151,75</td><td class="crd-td">1962 to 2022</td><td class="crd-td">3,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Vairao</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,8, -149,29</td><td class="crd-td">1977 to 2022</td><td class="crd-td">3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Tiarei</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-17,54, -149,37</td><td class="crd-td">1977 to 2022</td><td class="crd-td">3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Falealili</strong></td><td class="crd-td">Samoa</td><td class="crd-td">City</td><td class="crd-td">-14,02, -171,68</td><td class="crd-td">1961</td><td class="crd-td">2,9k (1961)</td></tr>
<tr><td class="crd-td"><strong>Tureia</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-20,83, -138,52</td><td class="crd-td">1977 to 2022</td><td class="crd-td">2,9k (1983)</td></tr>
<tr><td class="crd-td"><strong>Rangiroa</strong></td><td class="crd-td">French Polynesia</td><td class="crd-td">City</td><td class="crd-td">-14,94, -147,7</td><td class="crd-td">1977 to 2022</td><td class="crd-td">2,8k (2022)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 40 catalogued modern Polynesian settlements ordered by peak recorded population, 1960 to 2025 (from 255 total catalogued entries).</figcaption>
</figure>

## Polity Gazetteer Coverage and Archipelagic Concentration

Table \ref{tab:polity-gazetteer} summarises mask areas, settlement counts, dated observation depth, leading recorded centres and closing 2025 populations across all ten polities (with full eighteen-sub-region Admin-1 breakdown printed in Appendix Table \ref{tab:submask-gazetteer}). French Polynesia accounts for 113 settlements and 1.030 census observations (mean 9,12 observations per centre across its five archipelagos), followed by Samoa (40 sites, 198 observations) and Tonga (40 sites, 205 observations) [@ispf2023recensement; @statistics2022samoa; @department2022tonga]. Even micro-polities receive thorough longitudinal documentation: Niue's 13 villages average 9,08 census benchmarks each (118 observations), Tokelau's three atolls average 12 each (36 observations), Wallis and Futuna averages 6,67 across 9 centres (60 observations) and Pitcairn's Adamstown logs 10 observations from 1960 to 2023 [@niue2023niue; @office20202019; @stsee2024recensement].

<figure class="crd-table-figure" id="tab:polity-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Polity</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>French Polynesia</strong></td><td class="crd-td">43.023</td><td class="crd-td">113</td><td class="crd-td">1.030</td><td class="crd-td">Papeete (Metro) (137k)</td><td class="crd-td">274,1k</td></tr>
<tr><td class="crd-td"><strong>Samoa</strong></td><td class="crd-td">5.254</td><td class="crd-td">40</td><td class="crd-td">198</td><td class="crd-td">Apia (38,8k)</td><td class="crd-td">205,6k</td></tr>
<tr><td class="crd-td"><strong>Tonga</strong></td><td class="crd-td">5.173</td><td class="crd-td">40</td><td class="crd-td">205</td><td class="crd-td">Nuku'alofa (Metro) (36k)</td><td class="crd-td">100,2k</td></tr>
<tr><td class="crd-td"><strong>Cook Islands</strong></td><td class="crd-td">4.451</td><td class="crd-td">23</td><td class="crd-td">54</td><td class="crd-td">Rarotonga (Metro) (11,5k)</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Wallis and Futuna</strong></td><td class="crd-td">1.084</td><td class="crd-td">9</td><td class="crd-td">60</td><td class="crd-td">Utufua (2,2k)</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Tuvalu</strong></td><td class="crd-td">1.618</td><td class="crd-td">12</td><td class="crd-td">49</td><td class="crd-td">Funafuti (Metro) (6,6k)</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Rapa Nui (Easter Island)</strong></td><td class="crd-td">611</td><td class="crd-td">1</td><td class="crd-td">8</td><td class="crd-td">Hanga Roa (7,8k)</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Niue</strong></td><td class="crd-td">649</td><td class="crd-td">13</td><td class="crd-td">118</td><td class="crd-td">Alofi (978)</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Tokelau</strong></td><td class="crd-td">933</td><td class="crd-td">3</td><td class="crd-td">36</td><td class="crd-td">Fakaofo (783)</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Pitcairn Islands</strong></td><td class="crd-td">391</td><td class="crd-td">1</td><td class="crd-td">10</td><td class="crd-td">Adamstown (148)</td><td class="crd-td">35</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, dated observations, leading recorded centre and 2025 population across the ten polities of Modern Polynesia.</figcaption>
</figure>

## Rank-Size Consolidation, Scope Breakdown and Source Saturation

Log-log rank-size regression quantifies the tightening of Modern Polynesia's urban hierarchy over the post-1960 era [@connell2013islands; @repository2003statistical]. Across all 255 catalogued settlements, upper-half regression over ranks 1 to 127 (spanning Papeete Metro at 137.030 down to rural centres near 950 inhabitants) produces an exact unit Zipf slope of $\alpha = 1,00$ ($R^2 = 0,99$; full 255-centre slope $-1,27$, $R^2 = 0,89$). Stripping out the 12 suburban communes still preserves a steep, well-ordered regional hierarchy of $\alpha = 0,91$ ($R^2 = 0,98$ across the top 121 entries; full 243-centre slope $-1,18$, $R^2 = 0,87$). Whereas fragmented colonial rule kept regional urban slopes shallow, post-1960 bureaucratic centralisation, jet airports, resort hubs and outer-island emigration pulled population decisively into the upper tail of the settlement distribution [@bertram1985mirab; @simati2009effect; @fatupaito2021samoas].

Table \ref{tab:scope-breakdown} details the spatial-scope stratification of the 255-entry register, and Table \ref{tab:saturation-waves} summarises the four-wave source saturation audit from the chapter ledger.

<figure class="crd-table-figure" id="tab:scope-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Spatial Scope</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Largest Example (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metropolitan Urban Envelope (metro)</strong></td><td class="crd-td">4</td><td class="crd-td">1,6%</td><td class="crd-td">Papeete Metro (137k)</td></tr>
<tr><td class="crd-td"><strong>Suburban Commune or Satellite (suburb)</strong></td><td class="crd-td">12</td><td class="crd-td">4,7%</td><td class="crd-td">Faaa (29,8k)</td></tr>
<tr><td class="crd-td"><strong>City Proper or Island Village (city proper)</strong></td><td class="crd-td">239</td><td class="crd-td">93,7%</td><td class="crd-td">Apia (38,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial-scope stratification across 255 catalogued modern Polynesian settlements, 1960 to 2025.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Records</th><th class="crd-th">Audit Outcome</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official national and territorial censuses</td><td class="crd-td">251</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Peer-reviewed Pacific demographic studies</td><td class="crd-td">2</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Coordinate harmonisation and alias deduplication</td><td class="crd-td">0</td><td class="crd-td">115 duplicate aliases merged</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage audit sweep</td><td class="crd-td">2</td><td class="crd-td">0,79% marginal gain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion ledger and reconciliation summary across 255 catalogued modern Polynesian settlements.</figcaption>
</figure>

# Limitations

Four methodological caveats govern interpretation of this 255-settlement modern gazetteer. First, municipal boundaries vary across statistical offices: ISPF enumerates discrete *communes associées* across French Polynesia (separating Papeete from six contiguous suburbs while simultaneously publishing the 137.030 *Unité Urbaine de Papeete*), whereas Samoa's census treats municipal Apia separately from adjoining *Tuamasaga* villages (Vaitele, Vailele and Malie), Tonga tabulates Greater Nuku'alofa alongside core Kolofo'ou and Kolomotu'a, and Cook Islands statistics report whole-island Rarotonga alongside individual traditional *tapere* villages [@ispf2023recensement; @statistics2022samoa; @department2022tonga; @mfem2022cook]. Strict adherence to spatial-scope tags is essential whenever aggregating urban shares.

Second, village-level temporal coverage is uneven before 2000 in several independent states: while French Polynesia (from 1977), Niue (from 1981) and Tokelau (from 1961) supply uninterrupted village series across virtually every census, Samoan and Tongan rural villages enter our modern series primarily from 1996–2001 onward and several small Cook Islands villages appear only in 2011–2021 [@statistics2022samoa; @department2022tonga; @mfem2022cook]. Third, peak populations combine non-synchronous eras—pairing Tureia's 1983 nuclear-garrison surge (2.934) and Rarotonga's 1971 pre-airport peak (11.478) alongside 2021–2022 urban maxima—so latest-census figures should always be consulted alongside peaks when assessing current settlement size. Fourth, abrupt disasters and border shocks—including Samoa's 2009 tsunami, Tonga's 2022 volcanic eruption and Rapa Nui's 2020–2022 pandemic air closures—create sharp intercensal shifts that five-year census snapshots smooth across intervals [@latainiusulu2023climate; @hufanga2012mortality; @l2012mortality].

# Conclusion

Cataloguing 255 settlements and 1.768 census observations across 1960–2025 documents how Modern Polynesia reorganised from dispersed island villages into a tightly stratified coastal urban system ($\alpha = 1,00$, $R^2 = 0,99$) [@andrew2019coastal; @connell2013islands]. Five metropolitan and national hubs—Greater Papeete (137k), Apia with its Northwest Upolu ring (36k core plus 14,1k in Vaitele, Vailele and Malie), Greater Nuku'alofa (34,1k), Rarotonga (10,9k) and hyper-dense Funafuti (6,6k)—now anchor every major archipelago alongside tourism-driven Hanga Roa (4,8k in 2024; 7,8k peak) and Bora Bora's Nunue (5,5k). Even as overseas diasporas across New Zealand, Australia, the United States and New Caledonia absorb a growing share of Polynesian births, domestic urban primacy continues to reshape housing, infrastructure and climate resilience across the region [@bertram1985mirab; @milan2015tuvalu; @friesen2019beyond].

# Appendix

## Admin-1 Sub-Region Gazetteer Coverage (18 Sub-Regions)

Table \ref{tab:submask-gazetteer} reports buffered mask areas, catalogued settlement counts, census observation depth, leading recorded centres and closing 2025 populations for all eighteen Admin-1 sub-regions of Modern Polynesia, confirming zero empty sub-regions across the full archipelagic mask.

<figure class="crd-table-figure" id="tab:submask-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Samoa</strong></td><td class="crd-td">5.254</td><td class="crd-td">40</td><td class="crd-td">198</td><td class="crd-td">Apia (38,8k)</td><td class="crd-td">205,6k</td></tr>
<tr><td class="crd-td"><strong>Tonga: 'Eua</strong></td><td class="crd-td">480</td><td class="crd-td">2</td><td class="crd-td">10</td><td class="crd-td">'Ohonua (1,6k)</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Tonga: Ha'apai</strong></td><td class="crd-td">1.938</td><td class="crd-td">2</td><td class="crd-td">10</td><td class="crd-td">Pangai-Hihifo (2,5k)</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Tonga: Niuas</strong></td><td class="crd-td">578</td><td class="crd-td">1</td><td class="crd-td">5</td><td class="crd-td">Hihifo (526)</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Tonga: Tongatapu</strong></td><td class="crd-td">1.200</td><td class="crd-td">26</td><td class="crd-td">132</td><td class="crd-td">Nuku'alofa (Metro) (36k)</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Tonga: Vava'u</strong></td><td class="crd-td">976</td><td class="crd-td">9</td><td class="crd-td">48</td><td class="crd-td">Neiafu (4,2k)</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>PYF: Austral Islands</strong></td><td class="crd-td">4.987</td><td class="crd-td">14</td><td class="crd-td">126</td><td class="crd-td">Tureia (2,9k)</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>PYF: Marquesas Islands</strong></td><td class="crd-td">3.475</td><td class="crd-td">10</td><td class="crd-td">90</td><td class="crd-td">Taiohae (2,2k)</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>PYF: Leeward Islands</strong></td><td class="crd-td">2.963</td><td class="crd-td">26</td><td class="crd-td">238</td><td class="crd-td">Nunue (5,6k)</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>PYF: Tuamotu-Gambier</strong></td><td class="crd-td">28.160</td><td class="crd-td">35</td><td class="crd-td">316</td><td class="crd-td">Rangiroa (2,8k)</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>PYF: Windward Islands</strong></td><td class="crd-td">3.438</td><td class="crd-td">28</td><td class="crd-td">260</td><td class="crd-td">Papeete (Metro) (137k)</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Cook Islands</strong></td><td class="crd-td">4.451</td><td class="crd-td">23</td><td class="crd-td">54</td><td class="crd-td">Rarotonga (Metro) (11,5k)</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Tuvalu</strong></td><td class="crd-td">1.618</td><td class="crd-td">12</td><td class="crd-td">49</td><td class="crd-td">Funafuti (Metro) (6,6k)</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Niue</strong></td><td class="crd-td">649</td><td class="crd-td">13</td><td class="crd-td">118</td><td class="crd-td">Alofi (978)</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Tokelau</strong></td><td class="crd-td">933</td><td class="crd-td">3</td><td class="crd-td">36</td><td class="crd-td">Fakaofo (783)</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Wallis and Futuna</strong></td><td class="crd-td">1.084</td><td class="crd-td">9</td><td class="crd-td">60</td><td class="crd-td">Utufua (2,2k)</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Pitcairn Islands</strong></td><td class="crd-td">391</td><td class="crd-td">1</td><td class="crd-td">10</td><td class="crd-td">Adamstown (148)</td><td class="crd-td">35</td></tr>
<tr><td class="crd-td"><strong>Rapa Nui (Easter Island)</strong></td><td class="crd-td">611</td><td class="crd-td">1</td><td class="crd-td">8</td><td class="crd-td">Hanga Roa (7,8k)</td><td class="crd-td">4,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlement counts, dated observations, leading centre inside each buffered submask and 2025 population across all eighteen Admin-1 sub-regions of Modern Polynesia.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. Spatial scope separates metropolitan urban envelopes (Metro), suburban communes or peri-urban satellites (Suburb) and municipal capitals or island villages (City). In Appendix Table \ref{tab:submask-gazetteer}, three southern Tuamotu-Gambier communes (Tureia, Gambier and Hereheretue) fall inside the buffered Austral Islands submask boundary; polity-level counts in Table \ref{tab:polity-gazetteer} follow official national jurisdictions directly.
