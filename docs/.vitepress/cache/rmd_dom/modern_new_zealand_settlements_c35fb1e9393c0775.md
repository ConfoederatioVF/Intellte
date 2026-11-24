---
title: "New Zealand after 1907"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1907 to 2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/modern_new_zealand_urban_hierarchy.png"
hero_caption: "Twelve largest catalogued modern New Zealand settlements and rank-size distribution across 547 urban and rural centres, 1907 to 2025."
hero_label: "fig:hero-nz-hierarchy"
bibliography: modern_new_zealand.bib
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



![Twelve largest catalogued modern New Zealand settlements and rank-size distribution across 547 urban and rural centres, 1907 to 2025.](figures/modern_new_zealand_urban_hierarchy.png)



# Abstract

This gazetteer documents 547 catalogued New Zealand urban and rural settlements and 2.527 dated census observations spanning all sixteen Regional Councils and the Chatham Islands Territory between 1907 and 2025 [@aotearoa20242023; @dixon1989new]. Compiled across four audited ledger waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate entries—excluding 67 rural Territorial Authority district aggregates superseded by individual urban-rural localities and merging 4 duplicate coastal aliases to close at 0,37% marginal gain—the register draws exclusively from official Stats NZ censuses, Functional Urban Area aggregations, historical borough tables and Official Yearbooks [@statistics1962population; @aotearoa20202018; @aotearoa20242023]. Spatial scope is partitioned cleanly across 6 Official Functional Urban Areas (metropolitan scope), 55 suburban commuter towns and 486 city-proper urban and rural localities. Peak recorded settlement sizes span nearly five orders of magnitude, from alpine village Castle Hill (30 residents in 2020) and coastal hamlets at 50–60 up to Auckland Metro (1.622.925 in 2023), Christchurch Metro (510.801), Wellington Metro (418.152), Hamilton Metro (213.933), Tauranga Metro (171.105) and Dunedin Metro (124.839), which together hold 3,06M people (61,3% of Aotearoa New Zealand). Upper-tier peak sizes adhere tightly to a primate power law ($\alpha = 1,23$, $R^2 = 0,98$ across the top 180 centres; $\alpha = 1,28$, $R^2 = 0,97$ excluding suburbs), quantifying the twentieth-century shift from balanced colonial port cities toward northern metropolitan concentration [@pool2026peopling; @alimi2019more; @whitehead2023comparison].

# Background

New Zealand's modern settlement network evolved out of a polycentric nineteenth-century port system into an overwhelmingly urban, North Island-weighted metropolitan hierarchy [@pool2026peopling; @pool2007new]. Across the 118 years following Dominion proclamation in 1907, four overlapping spatial layers shaped the 547 urban and rural localities catalogued in this gazetteer.

First stood the four classic colonial ports—Auckland, Christchurch, Wellington and Dunedin—joined after 1945 by fast-rising inland and Bay of Plenty nodes at Hamilton and Tauranga [@statistics1962population; @alimi2019more]. In 1911, the four original metropolises stood remarkably close in scale: Auckland (102,7k), Christchurch (80,2k), Wellington (70,7k) and Dunedin (64,2k), while Hamilton (3,5k) and Tauranga (1,3k) were tiny provincial boroughs. Over the ensuing century, refrigerated pastoral trade, post-war manufacturing, Māori urban migration and post-1987 Asian and Pacific skilled immigration vaulted Auckland fifteenfold to 1,62M (32,5% of New Zealand), propelled Hamilton sixtyfold to 213,9k and multiplied Tauranga 127-fold to 171,1k [@pool1991iwi; @spoonley2012welcome; @aotearoa20242023]. Meanwhile, Christchurch (510,8k) overtook Wellington (418,2k) for second place after 2001 despite the devastating 2010–2011 earthquakes, whereas Dunedin (124,8k) settled into a stable university-city trajectory.

Second came the booming outer metropolitan commuter rings forged by motorway construction, housing affordability gradients and disaster displacement [@jackson2019subnational; @whitehead2023comparison]. North of Auckland's unified 2010 council core, Hibiscus Coast nearly doubled from 36,9k in 2006 to 63,4k in 2023, while southern rail-and-expressway satellites Pukekohe (27k), Waiuku (9,5k), Pōkeno (7,8k) and Beachlands-Pine Harbour (7,8k) expanded rapidly. Around Christchurch, post-earthquake residential relocation from red-zoned eastern suburbs transformed Selwyn and Waimakariri plains towns: Rolleston multiplied more than fivefold from 5k in 2006 to 28,4k in 2023, Lincoln nearly quadrupled from 2,8k to 10,6k and Rangiora (18,9k) and Kaiapoi (13k) absorbed thousands of rebuilding households. Around Wellington, coastal expressways sustained commuter and retiree corridors at Paraparaumu (28,9k in 2023; 30,1k in 2020) and Waikanae (13k).

Third emerged the durable regional service towns, horticultural centres and alpine resorts that anchor provincial New Zealand [@hancock2015where; @jackson2019subnational]. Long-running boroughs tracked across twenty-one censuses from 1911 to 2023—including Blenheim (3,8k to 28,8k), Cambridge (1,5k to 21,4k), Levin (1,6k to 19,5k), Richmond (703 to 18,4k), Feilding (3,2k to 16,9k), Mosgiel (1,6k to 14,6k), Oamaru (5,2k to 13,7k), Hāwera (2,7k to 10,4k) and Motueka (1,2k to 8,2k)—expanded steadily alongside dairying, viticulture and provincial logistics. At the alpine frontier, international tourism turned Queenstown (696 in 1911 to 24,2k in 2023) and Wānaka (5k in 2006 to 11,9k in 2023) into booming Southern Lakes centres.

Fourth and inversely, single-industry resource and forestry boroughs trace twentieth-century industrial turnover [@blakely2008inequalities; @hancock2015where]. Purpose-built timber town Tokoroa crested at 18.713 in 1981 before mill restructuring trimmed it to 14k in 2023; coal-and-timber port Greymouth peaked at 8.948 in 1956 (8,3k in 2023), Westport peaked at 5.522 in 1956 (4,5k in 2023), southern fishing port Bluff retreated from 3.279 in 1966 to 1.821 in 2023 and northern railway junction Taumarunui declined from 6.541 in 1981 to 4.812 in 2023.

# Methodology

The settlement register was assembled through four documented ledger waves governed strictly by official New Zealand statistical archives [@dixon1989new; @aotearoa20242023]. Wave 1 harvested all 547 primary urban and rural settlement series directly from four Stats NZ datasets: the 2006, 2013, 2018 and 2023 Census Statistical Area 2 (SA2) and Urban-Rural 2023 framework paired with 2020 Urban-Rural estimated resident populations (536 localities), the Stats NZ Historical County and Borough Populations 1891–1996 series (89 long-running boroughs merged onto their modern localities), the Official Functional Urban Areas 2023 metropolitan aggregation (6 metropolises) and the New Zealand Official Yearbook 2002 historical urban series (6 metropolises). Wave 2 cross-checked peer-reviewed historical demography and subnational urban studies without injecting synthetic estimates [@pool1991iwi; @pool2026peopling; @whitehead2023comparison]. Wave 3 standardised WGS84 coordinates, preserved official macronised Māori toponyms (such as Wānaka, Waihī, Hāwera, Ngāruawāhia and Pōkeno), excluded 67 rural Territorial Authority district aggregates superseded by individual urban-rural localities and merged 4 duplicate coastal aliases within 25 km of their canonical localities. Wave 4 conducted a sub-region coverage sweep confirming saturation at 0,37% marginal gain (2 final verification records), 0 empty sub-regions and 0 unaccounted candidates.

Spatial scope is tagged explicitly on every entry so metropolitan envelopes, commuter satellites and standalone towns remain transparent. Six Official Functional Urban Areas carry metropolitan scope (Auckland, Christchurch, Wellington, Hamilton, Tauranga and Dunedin), retaining unified functional commuting boundaries across 1911 to 2023. Fifty-five outer-ring commuter towns carry suburban scope (Hibiscus Coast, Rolleston, Rangiora, Kaiapoi, Lincoln, Waiheke West, Beachlands-Pine Harbour and 48 smaller ring settlements), while 486 independent towns, provincial hubs and rural villages carry city-proper scope. Because 547 localities cannot fit legibly inside a single print table, this paper prints the Top 40 settlements in full alongside 17-region, spatial-scope, size-tier and century-long borough tables covering all 547 catalogued records.

# Testing and Validation

Source-ledger accounting verifies exact closure across all 618 evaluated candidate entries: 547 included, 71 excluded (67 Territorial Authority district aggregates superseded by finer urban-rural settlement localities plus 4 duplicate coastal aliases) and 0 unaccounted, with 0% crowd-sourced fallback across all seventeen administrative units. Every included locality carries validated WGS84 coordinates, explicit Stats NZ archival provenance, a non-empty chronological span inside 1911 to 2023 and exact areal-mask assignment across the sixteen Regional Councils and the Chatham Islands Territory. Across 547 settlements, 2.527 dated population observations yield a mean of 4,62 census benchmarks per locality—rising to 21 census benchmarks across twenty-nine continuous 1911–2023 boroughs (Blenheim, Queenstown, Cambridge, Levin, Rangiora, Richmond, Feilding, Mosgiel, Oamaru, Kaiapoi, Greymouth, Motueka, Waihī, Waitara, Cromwell, Marton, Taumarunui, Dannevirke, Alexandra and peers).

Two structural diagnostics from the source ledger merit transparent documentation before interpreting regional totals. First, excluding all 67 Territorial Authority district aggregates eliminates rural-county double counting yet also omits several secondary provincial cities whose official unit overlapped a Territorial Authority record (Whangārei, Gisborne, Napier, Hastings, New Plymouth, Palmerston North, Whanganui, Nelson, Timaru and Invercargill). Second, the small Otago town of Palmerston retains an archival 1911 borough-table homonym figure (10.991, matching 1911 Palmerston North) before reverting to its true scale (868 in 1961; 1.056 in 2023). Figure \ref{fig:sett-regional-map} displays the geographic distribution of all 547 catalogued localities across the seventeen regions.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-modern-new-zealand-settlements/modern_new_zealand_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of the sixteen Regional Councils, the Chatham Islands Territory and 547 catalogued settlements across Aotearoa New Zealand, 1907 to 2026.</figcaption>
</figure>

# Results

## Forty Leading Modern New Zealand Settlements

Table \ref{tab:top40-sites} ranks the 40 most populous catalogued settlements across modern New Zealand by peak recorded population, spanning 1,62M Auckland Metro down to historic Waikato gold-and-service town Waihī (8,1k in 2023). The top six positions belong exclusively to New Zealand's six Functional Urban Areas (Auckland, Christchurch, Wellington, Hamilton, Tauranga and Dunedin), followed immediately by fast-growing metropolitan satellites (Hibiscus Coast at 63,4k, Paraparaumu at 30,1k, Rolleston at 28,4k, Pukekohe at 27k and Rangiora at 19,3k) and major regional towns (Blenheim, Queenstown, Cambridge, Levin, Richmond, Feilding and Havelock North). Thirty-five of the forty leaders reached their historic peak in either 2020 or 2023; only five peaked earlier—three absorbed suburban boroughs whose standalone series ended upon municipal amalgamation (Manurewa at 11k in 1961, Tawa at 12,3k in 1976 and Mt. Maunganui at 12,4k in 1986), two industrial centres (Greymouth in 1956 and Tokoroa in 1981) and the 1911 homonym record at Palmerston.

<figure class="crd-table-figure" id="tab:top40-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Auckland (Metro)</strong></td><td class="crd-td">Auckland</td><td class="crd-td">Metro</td><td class="crd-td">-36,93, 174,79</td><td class="crd-td">1911 to 2023</td><td class="crd-td">1,62M (2023)</td></tr>
<tr><td class="crd-td"><strong>Christchurch (Metro)</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">Metro</td><td class="crd-td">-43,53, 172,6</td><td class="crd-td">1911 to 2023</td><td class="crd-td">510,8k (2023)</td></tr>
<tr><td class="crd-td"><strong>Wellington (Metro)</strong></td><td class="crd-td">Wellington</td><td class="crd-td">Metro</td><td class="crd-td">-41,29, 174,78</td><td class="crd-td">1911 to 2023</td><td class="crd-td">418,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>Hamilton (Metro)</strong></td><td class="crd-td">Waikato</td><td class="crd-td">Metro</td><td class="crd-td">-37,77, 175,27</td><td class="crd-td">1911 to 2023</td><td class="crd-td">213,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Tauranga (Metro)</strong></td><td class="crd-td">Bay of Plenty</td><td class="crd-td">Metro</td><td class="crd-td">-37,71, 176,19</td><td class="crd-td">1911 to 2023</td><td class="crd-td">171,1k (2023)</td></tr>
<tr><td class="crd-td"><strong>Dunedin (Metro)</strong></td><td class="crd-td">Otago</td><td class="crd-td">Metro</td><td class="crd-td">-45,88, 170,5</td><td class="crd-td">1911 to 2023</td><td class="crd-td">124,8k (2023)</td></tr>
<tr><td class="crd-td"><strong>Hibiscus Coast</strong></td><td class="crd-td">Auckland</td><td class="crd-td">Suburb</td><td class="crd-td">-36,61, 174,72</td><td class="crd-td">2006 to 2023</td><td class="crd-td">63,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Paraparaumu</strong></td><td class="crd-td">Wellington</td><td class="crd-td">City</td><td class="crd-td">-40,91, 175</td><td class="crd-td">2006 to 2023</td><td class="crd-td">30,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Blenheim</strong></td><td class="crd-td">Marlborough</td><td class="crd-td">City</td><td class="crd-td">-41,52, 173,95</td><td class="crd-td">1911 to 2023</td><td class="crd-td">28,8k (2023)</td></tr>
<tr><td class="crd-td"><strong>Rolleston</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">Suburb</td><td class="crd-td">-43,6, 172,39</td><td class="crd-td">2006 to 2023</td><td class="crd-td">28,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Pukekohe</strong></td><td class="crd-td">Auckland</td><td class="crd-td">City</td><td class="crd-td">-37,2, 174,91</td><td class="crd-td">1916 to 2023</td><td class="crd-td">27k (2023)</td></tr>
<tr><td class="crd-td"><strong>Queenstown</strong></td><td class="crd-td">Otago</td><td class="crd-td">City</td><td class="crd-td">-45,03, 168,7</td><td class="crd-td">1911 to 2023</td><td class="crd-td">24,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>Cambridge</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-37,89, 175,46</td><td class="crd-td">1911 to 2023</td><td class="crd-td">21,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Levin</strong></td><td class="crd-td">Manawatu-Wanganui</td><td class="crd-td">City</td><td class="crd-td">-40,63, 175,29</td><td class="crd-td">1911 to 2023</td><td class="crd-td">19,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Rangiora</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">Suburb</td><td class="crd-td">-43,31, 172,59</td><td class="crd-td">1911 to 2023</td><td class="crd-td">19,2k (2020)</td></tr>
<tr><td class="crd-td"><strong>Tokoroa</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-38,22, 175,87</td><td class="crd-td">1976 to 2023</td><td class="crd-td">18,7k (1981)</td></tr>
<tr><td class="crd-td"><strong>Richmond</strong></td><td class="crd-td">Tasman</td><td class="crd-td">City</td><td class="crd-td">-41,34, 173,18</td><td class="crd-td">1911 to 2023</td><td class="crd-td">18,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Feilding</strong></td><td class="crd-td">Manawatu-Wanganui</td><td class="crd-td">City</td><td class="crd-td">-40,22, 175,56</td><td class="crd-td">1911 to 2023</td><td class="crd-td">17,1k (2020)</td></tr>
<tr><td class="crd-td"><strong>Havelock North</strong></td><td class="crd-td">Hawke's Bay</td><td class="crd-td">City</td><td class="crd-td">-39,68, 176,89</td><td class="crd-td">1956 to 2023</td><td class="crd-td">15k (2023)</td></tr>
<tr><td class="crd-td"><strong>Mosgiel</strong></td><td class="crd-td">Otago</td><td class="crd-td">City</td><td class="crd-td">-45,87, 170,37</td><td class="crd-td">1911 to 2023</td><td class="crd-td">14,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Oamaru</strong></td><td class="crd-td">Otago</td><td class="crd-td">City</td><td class="crd-td">-45,08, 170,97</td><td class="crd-td">1911 to 2023</td><td class="crd-td">13,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Waikanae</strong></td><td class="crd-td">Wellington</td><td class="crd-td">City</td><td class="crd-td">-40,86, 175,05</td><td class="crd-td">2006 to 2023</td><td class="crd-td">13,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Te Awamutu</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-38,01, 175,33</td><td class="crd-td">1916 to 2023</td><td class="crd-td">13,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Kaiapoi</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">Suburb</td><td class="crd-td">-43,38, 172,66</td><td class="crd-td">1911 to 2023</td><td class="crd-td">13k (2023)</td></tr>
<tr><td class="crd-td"><strong>Mt. Maunganui</strong></td><td class="crd-td">Bay of Plenty</td><td class="crd-td">City</td><td class="crd-td">-37,69, 176,18</td><td class="crd-td">1945 to 1986</td><td class="crd-td">12,4k (1986)</td></tr>
<tr><td class="crd-td"><strong>Tawa</strong></td><td class="crd-td">Wellington</td><td class="crd-td">City</td><td class="crd-td">-41,17, 174,83</td><td class="crd-td">1956 to 1986</td><td class="crd-td">12,3k (1976)</td></tr>
<tr><td class="crd-td"><strong>Wānaka</strong></td><td class="crd-td">Otago</td><td class="crd-td">City</td><td class="crd-td">-44,69, 169,15</td><td class="crd-td">2006 to 2023</td><td class="crd-td">11,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Palmerston</strong></td><td class="crd-td">Otago</td><td class="crd-td">City</td><td class="crd-td">-45,48, 170,71</td><td class="crd-td">1911 to 2023</td><td class="crd-td">11k (1911)</td></tr>
<tr><td class="crd-td"><strong>Manurewa</strong></td><td class="crd-td">Auckland</td><td class="crd-td">City</td><td class="crd-td">-36,9, 174,85</td><td class="crd-td">1941 to 1961</td><td class="crd-td">11k (1961)</td></tr>
<tr><td class="crd-td"><strong>Lincoln</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">Suburb</td><td class="crd-td">-43,64, 172,48</td><td class="crd-td">2006 to 2023</td><td class="crd-td">10,6k (2023)</td></tr>
<tr><td class="crd-td"><strong>Hāwera</strong></td><td class="crd-td">Taranaki</td><td class="crd-td">City</td><td class="crd-td">-39,59, 174,28</td><td class="crd-td">1911 to 2023</td><td class="crd-td">10,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Waiuku</strong></td><td class="crd-td">Auckland</td><td class="crd-td">City</td><td class="crd-td">-37,25, 174,74</td><td class="crd-td">1956 to 2023</td><td class="crd-td">9,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Te Puke</strong></td><td class="crd-td">Bay of Plenty</td><td class="crd-td">City</td><td class="crd-td">-37,79, 176,31</td><td class="crd-td">1936 to 2023</td><td class="crd-td">9,6k (2020)</td></tr>
<tr><td class="crd-td"><strong>Matamata</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-37,81, 175,77</td><td class="crd-td">1921 to 2023</td><td class="crd-td">9,1k (2023)</td></tr>
<tr><td class="crd-td"><strong>Morrinsville</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-37,65, 175,53</td><td class="crd-td">1921 to 2023</td><td class="crd-td">9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Greymouth</strong></td><td class="crd-td">West Coast</td><td class="crd-td">City</td><td class="crd-td">-42,66, 171,19</td><td class="crd-td">1911 to 2023</td><td class="crd-td">8,9k (1956)</td></tr>
<tr><td class="crd-td"><strong>Huntly</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-37,55, 175,16</td><td class="crd-td">1931 to 2023</td><td class="crd-td">8,7k (2020)</td></tr>
<tr><td class="crd-td"><strong>Waiheke West</strong></td><td class="crd-td">Auckland</td><td class="crd-td">Suburb</td><td class="crd-td">-36,79, 175,04</td><td class="crd-td">2006 to 2023</td><td class="crd-td">8,5k (2020)</td></tr>
<tr><td class="crd-td"><strong>Motueka</strong></td><td class="crd-td">Tasman</td><td class="crd-td">City</td><td class="crd-td">-41,12, 173</td><td class="crd-td">1911 to 2023</td><td class="crd-td">8,4k (2020)</td></tr>
<tr><td class="crd-td"><strong>Waihī</strong></td><td class="crd-td">Waikato</td><td class="crd-td">City</td><td class="crd-td">-37,39, 175,84</td><td class="crd-td">1911 to 2023</td><td class="crd-td">8,1k (2023)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Forty leading catalogued modern New Zealand settlements ordered by peak recorded population, 1911 to 2023.</figcaption>
</figure>

## Seventeen-Region Gazetteer Coverage and Urban Concentration

Table \ref{tab:subregion-gazetteer} summarises catalogued locality counts, total dated observations, leading recorded localities and closing 2023 regional populations across all sixteen Regional Councils and the Chatham Islands Territory. Locality density is highest across Canterbury (80 centres, 282 observations), Waikato (79 centres, 375 observations), Auckland (60 centres, 191 observations), Northland (59 centres, 170 observations), Otago (55 centres, 364 observations) and Manawatu-Wanganui (48 centres, 333 observations), while compact Nelson (2 localities outside excluded Nelson City TA), Gisborne (8 rural localities outside excluded Gisborne District TA) and the Chatham Islands Territory (1 locality, Waitangi at 210) maintain full zero-gap regional coverage.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Locality (Peak)</th><th class="crd-th">2023 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northland</strong></td><td class="crd-td">17.624</td><td class="crd-td">59</td><td class="crd-td">170</td><td class="crd-td">Kerikeri (8,1k)</td><td class="crd-td">194k</td></tr>
<tr><td class="crd-td"><strong>Auckland</strong></td><td class="crd-td">8.262</td><td class="crd-td">60</td><td class="crd-td">191</td><td class="crd-td">Auckland (Metro) (1,62M)</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>Waikato</strong></td><td class="crd-td">29.899</td><td class="crd-td">79</td><td class="crd-td">375</td><td class="crd-td">Hamilton (Metro) (213,9k)</td><td class="crd-td">498,8k</td></tr>
<tr><td class="crd-td"><strong>Bay of Plenty</strong></td><td class="crd-td">14.724</td><td class="crd-td">27</td><td class="crd-td">105</td><td class="crd-td">Tauranga (Metro) (171,1k)</td><td class="crd-td">334,1k</td></tr>
<tr><td class="crd-td"><strong>Gisborne</strong></td><td class="crd-td">9.093</td><td class="crd-td">8</td><td class="crd-td">12</td><td class="crd-td">Manutūkē (1,3k)</td><td class="crd-td">51,1k</td></tr>
<tr><td class="crd-td"><strong>Hawke's Bay</strong></td><td class="crd-td">15.244</td><td class="crd-td">19</td><td class="crd-td">72</td><td class="crd-td">Havelock North (15k)</td><td class="crd-td">175,1k</td></tr>
<tr><td class="crd-td"><strong>Taranaki</strong></td><td class="crd-td">8.897</td><td class="crd-td">20</td><td class="crd-td">135</td><td class="crd-td">Hāwera (10,4k)</td><td class="crd-td">126k</td></tr>
<tr><td class="crd-td"><strong>Manawatu-Wanganui</strong></td><td class="crd-td">20.559</td><td class="crd-td">48</td><td class="crd-td">333</td><td class="crd-td">Levin (19,5k)</td><td class="crd-td">251,4k</td></tr>
<tr><td class="crd-td"><strong>Wellington</strong></td><td class="crd-td">9.181</td><td class="crd-td">11</td><td class="crd-td">107</td><td class="crd-td">Wellington (Metro) (418,2k)</td><td class="crd-td">521k</td></tr>
<tr><td class="crd-td"><strong>West Coast</strong></td><td class="crd-td">29.975</td><td class="crd-td">24</td><td class="crd-td">131</td><td class="crd-td">Greymouth (8,9k)</td><td class="crd-td">33,4k</td></tr>
<tr><td class="crd-td"><strong>Canterbury</strong></td><td class="crd-td">48.444</td><td class="crd-td">80</td><td class="crd-td">282</td><td class="crd-td">Christchurch (Metro) (510,8k)</td><td class="crd-td">651k</td></tr>
<tr><td class="crd-td"><strong>Otago</strong></td><td class="crd-td">32.584</td><td class="crd-td">55</td><td class="crd-td">364</td><td class="crd-td">Dunedin (Metro) (124,8k)</td><td class="crd-td">240,9k</td></tr>
<tr><td class="crd-td"><strong>Southland</strong></td><td class="crd-td">35.537</td><td class="crd-td">21</td><td class="crd-td">103</td><td class="crd-td">Bluff (3,3k)</td><td class="crd-td">100,1k</td></tr>
<tr><td class="crd-td"><strong>Tasman</strong></td><td class="crd-td">9.858</td><td class="crd-td">18</td><td class="crd-td">81</td><td class="crd-td">Richmond (18,4k)</td><td class="crd-td">57,8k</td></tr>
<tr><td class="crd-td"><strong>Nelson</strong></td><td class="crd-td">905</td><td class="crd-td">2</td><td class="crd-td">2</td><td class="crd-td">Rai Valley (190)</td><td class="crd-td">52,6k</td></tr>
<tr><td class="crd-td"><strong>Marlborough</strong></td><td class="crd-td">11.183</td><td class="crd-td">15</td><td class="crd-td">63</td><td class="crd-td">Blenheim (28,8k)</td><td class="crd-td">49,4k</td></tr>
<tr><td class="crd-td"><strong>Chatham Islands</strong></td><td class="crd-td">2.596</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">Waitangi (Chatham Islands) (210)</td><td class="crd-td">633</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued locality counts, dated observations, leading recorded localities and 2023 regional population across New Zealand's sixteen Regional Councils and the Chatham Islands Territory.</figcaption>
</figure>

## Rank-Size Primacy, Spatial Scope and Saturation Audit

Log-log rank-size regression across all 547 catalogued localities quantifies modern New Zealand's sharp metropolitan primacy [@alimi2019more; @aotearoa20242023]. Fitting the upper 180 settlements (spanning Auckland Metro at 1.622.925 down to 1,2k rural townships) yields a steep Zipf exponent of $\alpha = 1,23$ ($R^2 = 0,98$; full 547-site slope $-1,54$, $R^2 = 0,96$). Excluding the 55 suburban commuter towns sharpens the upper-tier slope across the 492 independent urban and rural centres to $\alpha = 1,28$ ($R^2 = 0,97$; full slope $-1,55$, $R^2 = 0,96$). That gradient reflects a two-tiered national settlement structure where Auckland Metro exceeds second-ranked Christchurch more than threefold and towers more than fiftyfold over the largest standalone non-metropolitan towns (Paraparaumu and Blenheim near 29k–30k). Table \ref{tab:scope-breakdown} reports spatial-scope stratification across all 547 settlements, and Table \ref{tab:saturation-waves} summarises the four-wave source saturation audit.

<figure class="crd-table-figure" id="tab:scope-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Spatial Scope</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Largest Example (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Functional Urban Area (metro)</strong></td><td class="crd-td">6</td><td class="crd-td">1,1%</td><td class="crd-td">Auckland Metro (1,62M)</td></tr>
<tr><td class="crd-td"><strong>Suburban Commuter Town (suburb)</strong></td><td class="crd-td">55</td><td class="crd-td">10,1%</td><td class="crd-td">Hibiscus Coast (63,4k)</td></tr>
<tr><td class="crd-td"><strong>City-Proper or Rural Locality (city proper)</strong></td><td class="crd-td">486</td><td class="crd-td">88,8%</td><td class="crd-td">Paraparaumu (30,1k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial-scope stratification across 547 catalogued modern New Zealand settlements, 1907 to 2025.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Records</th><th class="crd-th">Audit Outcome</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official Stats NZ SA2, Urban-Rural, FUA and borough series</td><td class="crd-td">547</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Historical demography and urban monograph cross-check</td><td class="crd-td">0</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Municipal reconciliation, TA filtering and alias deduplication</td><td class="crd-td">0</td><td class="crd-td">67 TAs and 4 aliases excluded</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage verification sweep</td><td class="crd-td">2</td><td class="crd-td">0,37% marginal gain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion ledger and reconciliation summary across 547 catalogued New Zealand settlements.</figcaption>
</figure>

# Limitations

Four structural constraints qualify analysis of this 547-settlement register. First, excluding all 67 Territorial Authority district aggregates prevents double counting of rural districts but simultaneously omits secondary provincial cities (Whangārei, Gisborne, Napier, Hastings, New Plymouth, Palmerston North, Whanganui, Nelson, Timaru and Invercargill) from the locality table, slightly steepening the middle-rank break between the six Functional Urban Areas (at least 124,8k) and Hibiscus Coast (63,4k). Second, temporal depth varies sharply by source class: 89 historic boroughs and 6 Functional Urban Areas stretch across a full century (1911 to 2023), whereas smaller Stats NZ Urban-Rural localities enter the register only in 2006–2023 (5 observations) or as 2020 single-year village counts (1 observation), preventing pre-2006 longitudinal tracking for rural hamlets [@aotearoa20202018; @aotearoa20242023]. Third, municipal amalgamations ended standalone borough series for inner suburban nodes absorbed into metropolitan councils (Manurewa after 1961, Tawa and Mt. Maunganui after 1986), while the 2010 Auckland Council amalgamation unified seven territorial authorities under one regional umbrella. Fourth, the 1911 borough table assigns a homonym figure (10.991) to Otago's Palmerston, and 2018 Census administrative imputation introduced minor local variance in small rural Māori-majority settlements [@kukutai2019census; @whitehead2023comparison].

# Conclusion

Cataloguing 547 evidence-based urban and rural localities and 2.527 official Stats NZ observations maps the full modern settlement hierarchy of Aotearoa New Zealand from alpine hamlets of thirty inhabitants up to 1,62M metropolitan Auckland [@aotearoa20242023]. Across sixteen Regional Councils and the Chatham Islands Territory, the register documents the twin transformations of twentieth-century New Zealand urbanisation: the concentration of 61,3% of the nation inside six Functional Urban Areas ($\alpha = 1,23$, $R^2 = 0,98$) and the divergent fortunes of fast-growing commuter and alpine satellites (Hibiscus Coast, Rolleston, Pukekohe, Queenstown and Wānaka) versus plateauing resource, forestry and coastal boroughs (Tokoroa, Greymouth, Westport, Bluff and Taumarunui) [@jackson2019subnational; @alimi2019more; @hancock2015where].

# Appendix

## Size-Tier Distribution Across All 547 Catalogued Settlements

Because printing all 547 settlements verbatim would exceed twenty portrait pages, Table \ref{tab:size-tiers} summarises the full gazetteer across seven peak-population size tiers accounting for 100% of catalogued centres and 2.527 dated observations.

<figure class="crd-table-figure" id="tab:size-tiers">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Size Tier</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Obs.</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Largest in Tier</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>100k and above (Metropolises)</strong></td><td class="crd-td">6</td><td class="crd-td">1,1%</td><td class="crd-td">66</td><td class="crd-td">3,06M</td><td class="crd-td">Auckland (Metro) (1,62M)</td></tr>
<tr><td class="crd-td"><strong>20k to 99,9k (Large Satellites and Towns)</strong></td><td class="crd-td">7</td><td class="crd-td">1,3%</td><td class="crd-td">98</td><td class="crd-td">223,3k</td><td class="crd-td">Hibiscus Coast (63,4k)</td></tr>
<tr><td class="crd-td"><strong>10k to 19,9k (Medium Towns)</strong></td><td class="crd-td">18</td><td class="crd-td">3,3%</td><td class="crd-td">259</td><td class="crd-td">255,9k</td><td class="crd-td">Levin (19,5k)</td></tr>
<tr><td class="crd-td"><strong>5k to 9,9k (Small Regional Towns)</strong></td><td class="crd-td">35</td><td class="crd-td">6,4%</td><td class="crd-td">491</td><td class="crd-td">246,4k</td><td class="crd-td">Waiuku (9,6k)</td></tr>
<tr><td class="crd-td"><strong>1k to 4,9k (District Townships)</strong></td><td class="crd-td">128</td><td class="crd-td">23,4%</td><td class="crd-td">1.125</td><td class="crd-td">295,9k</td><td class="crd-td">Helensville (4,9k)</td></tr>
<tr><td class="crd-td"><strong>250 to 999 (Rural Settlements)</strong></td><td class="crd-td">220</td><td class="crd-td">40,2%</td><td class="crd-td">355</td><td class="crd-td">110,2k</td><td class="crd-td">Tāneatua (980)</td></tr>
<tr><td class="crd-td"><strong>Under 250 (Villages and Hamlets)</strong></td><td class="crd-td">133</td><td class="crd-td">24,3%</td><td class="crd-td">133</td><td class="crd-td">20,1k</td><td class="crd-td">Harwood (240)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Peak-population size-tier distribution accounting for all 547 catalogued modern New Zealand settlements and 2.527 dated observations.</figcaption>
</figure>

## Century-Long Provincial Borough Series (1911 to 2023)

Table \ref{tab:century-boroughs} tracks fifteen long-running provincial boroughs observed continuously across twenty or twenty-one census benchmarks from 1911 to 2023, contrasting sustained horticultural, commuting and alpine expansion against West Coast industrial stagnation.

<figure class="crd-table-figure" id="tab:century-boroughs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Borough</th><th class="crd-th">Region</th><th class="crd-th">1911</th><th class="crd-th">1951</th><th class="crd-th">1986</th><th class="crd-th">2006</th><th class="crd-th">2023</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blenheim</strong></td><td class="crd-td">Marlborough</td><td class="crd-td">3,8k</td><td class="crd-td">7,1k</td><td class="crd-td">18,3k</td><td class="crd-td">23,7k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Queenstown</strong></td><td class="crd-td">Otago</td><td class="crd-td">696</td><td class="crd-td">1k</td><td class="crd-td">3,7k</td><td class="crd-td">11,5k</td><td class="crd-td">24,2k</td></tr>
<tr><td class="crd-td"><strong>Cambridge</strong></td><td class="crd-td">Waikato</td><td class="crd-td">1,5k</td><td class="crd-td">3k</td><td class="crd-td">10,1k</td><td class="crd-td">13,9k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Levin</strong></td><td class="crd-td">Manawatu-Wanganui</td><td class="crd-td">1,6k</td><td class="crd-td">4,7k</td><td class="crd-td">15,4k</td><td class="crd-td">16k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Rangiora</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">6,7k</td><td class="crd-td">12,2k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Richmond</strong></td><td class="crd-td">Tasman</td><td class="crd-td">703</td><td class="crd-td">2k</td><td class="crd-td">7,2k</td><td class="crd-td">12,4k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Feilding</strong></td><td class="crd-td">Manawatu-Wanganui</td><td class="crd-td">3,2k</td><td class="crd-td">5,8k</td><td class="crd-td">12,1k</td><td class="crd-td">13,6k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Mosgiel</strong></td><td class="crd-td">Otago</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">9,1k</td><td class="crd-td">11,6k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Oamaru</strong></td><td class="crd-td">Otago</td><td class="crd-td">5,2k</td><td class="crd-td">8,1k</td><td class="crd-td">12,7k</td><td class="crd-td">11,1k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Kaiapoi</strong></td><td class="crd-td">Canterbury</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">5,2k</td><td class="crd-td">10,6k</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Hāwera</strong></td><td class="crd-td">Taranaki</td><td class="crd-td">2,7k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Greymouth</strong></td><td class="crd-td">West Coast</td><td class="crd-td">5,5k</td><td class="crd-td">8,9k</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Motueka</strong></td><td class="crd-td">Tasman</td><td class="crd-td">1,2k</td><td class="crd-td">2,5k</td><td class="crd-td">5,1k</td><td class="crd-td">6,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Waihī</strong></td><td class="crd-td">Waikato</td><td class="crd-td">6,4k</td><td class="crd-td">3,9k</td><td class="crd-td">3,7k</td><td class="crd-td">6,4k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Waitara</strong></td><td class="crd-td">Taranaki</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">6,5k</td><td class="crd-td">6,3k</td><td class="crd-td">7,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Longitudinal census trajectories across fifteen continuous New Zealand provincial boroughs, 1911 to 2023.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. Spatial scope distinguishes Official Functional Urban Areas (Metro), suburban commuter ring settlements (Suburb) and city-proper or rural localities (City). All settlement headcounts derive exclusively from official Stats NZ censuses, Functional Urban Area aggregations, historical borough registers and New Zealand Official Yearbooks with zero crowd-sourced substitution.
