---
title: "Commonwealth of Australia after 1901"
subtitle: "Settlement Gazetteer and Metropolitan Hierarchy (1901 to 2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/modern_australia_urban_hierarchy.png"
hero_caption: "Twelve largest Australian metropolitan areas and rank-size distribution across 2.169 catalogued urban centres, 1901 to 2025."
hero_label: "fig:hero-modern-australia-hierarchy"
bibliography: modern_australia.bib
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



![Twelve largest Australian metropolitan areas and rank-size distribution across 2.169 catalogued urban centres, 1901 to 2025.](figures/modern_australia_urban_hierarchy.png)



# Abstract

This gazetteer documents 2.169 catalogued Australian settlements and 22.326 dated population observations spanning all six states, two mainland territories and offshore external territories between 1901 and 2025. Assembled across four audited ingestion waves with 0% crowd-sourced fallback, 0 empty sub-regions and 0 unaccounted candidate records—merging 86 duplicate colonial, cross-border and suburban alias records into canonical entities and closing at 0,09% marginal gain on the final verification sweep—the register draws strictly from official Australian Bureau of Statistics (ABS) historical population tables, decennial and quinquennial censuses (1911 to 2021) and annual Local Government Area (LGA) Estimated Resident Population series [@census1917census; @statistics2019australian; @statistics20222021]. Spatial scope separates 36 metropolitan statistical areas, 250 independent suburban ring municipalities and 1.883 city-proper centres ranging over five orders of magnitude from alpine Baw Baw Village (32 residents in 2016) to Greater Sydney (5.295.529 in 2020) and Greater Melbourne (5.061.107 in 2020), followed by Greater Brisbane (2.567.714 in 2021), Greater Perth (2.191.838) and Greater Adelaide (1.401.872). Because municipal consolidation varies sharply across jurisdictions—leaving the City of Brisbane (1,38M in 2025) and unitary Canberra (452,5k in 2021) non-decomposed while Sydney, Melbourne, Perth and Adelaide fragment into populous suburban councils—the upper-tier rank-size fit shifts markedly from $\alpha = 0,89$ ($R^2 = 0,96$) across all entries to $\alpha = 1,16$ ($R^2 = 1,00$) across the 1.919 non-suburban centres, reflecting enduring coastal metropolitan primacy across a continent-sized urban network [@bell2015internal; @karuppannan2011population].

# Background

Modern Australian urbanisation evolved directly atop the coastal port-capital skeleton forged during the nineteenth century, yet post-1901 economic and demographic shifts added four distinct layers to the 2.169-centre national network standing in 2025 [@borrie1994european; @statistics2019australian].

First, the six pre-Federation colonial capitals matured into multi-million metropolitan regions that absorbed nearly two thirds of all twentieth- and twenty-first-century national growth. Between 1901 and 2021, Sydney (497k to 5,26M; peak 5,3M in 2020), Melbourne (501,6k to 4,98M; peak 5,06M in 2020), Brisbane (120,7k to 2,57M), Perth (70,7k to 2,19M), Adelaide (162,2k to 1,4M) and Hobart (36,1k to 250,7k) multiplied between sevenfold and thirty-onefold, sustained by postwar European industrial immigration and post-1975 Asian, trans-Tasman and global skilled inflows [@hugo2014change; @mcdonald2017internationa; @wilson2020past].

Second, planned federal and territorial administration generated two entirely new capital tiers after 1911. Canberra rose from rural paddocks (1.150 residents in 1921) to 15.156 in 1947, 151.169 in 1971 and 452.508 in 2021 (489.227 across the cross-border Canberra–Queanbeyan metropolis), becoming Australia's largest inland city [@census1937cbcs; @statistics20222021]. Across the tropical north, Darwin grew from 1.399 in 1921 and 2.538 in 1947 to 39k in 1971 and a 2017 peak of 148.752 (backed by satellite Palmerston at 43,2k in 2025 and desert service hub Alice Springs at 30,9k), anchoring a region where Aboriginal and Torres Strait Islander communities form roughly 30% of residents [@taylor2011postcolonial].

Third, postwar suburbanisation and coastal lifestyle migration created giant non-capital conurbations and outer metropolitan ring municipalities. Along the eastern seaboard, Gold Coast–Tweed Heads (701,9k in 2021), Newcastle–Maitland (510,2k), Sunshine Coast (387,5k), Wollongong (306k) and Geelong (289,6k) crossed into major metropolitan rank, while suburban LGAs around Sydney, Melbourne, Brisbane and Perth—led by Moreton Bay (532,4k), Blacktown (449,4k), Casey (414,9k), Logan (403,5k), Canterbury-Bankstown (389,7k), Central Coast (357,8k), Wyndham (347,8k), Parramatta (279k), Stirling (254,8k) and Wanneroo (246,1k)—grew larger than entire state capitals a century earlier [@bell2015internal; @karuppannan2011population; @wilson2015new].

Fourth, regional agricultural, tourism and resource towns filled out the vast interior and northern perimeter: northern Queensland ports Townsville (181,6k metro) and Cairns (155,6k metro), Darling Downs hub Toowoomba (143,9k), Victorian gold-heritage and irrigation centres Ballarat (111,7k), Bendigo (102,9k), Shepparton–Mooroopna (54k) and Mildura–Buronga (53,8k), Murray border hub Albury–Wodonga (97,7k), southwestern Western Australia's Bunbury (79,2k) and Kalgoorlie–Boulder (33k peak), Tasmanian Launceston (93,2k) and Burnie–Somerset (28,5k), and remote island outposts across Norfolk Island (1.739 in 2021), Christmas Island (2.167 peak in 2011) and the Cocos (Keeling) Islands (628 in 2023) [@statistics20222021; @bernard2024pitfalls].

# Methodology

The settlement register was assembled through four documented ledger waves restricted exclusively to official national statistical sources. Wave 1 harvested all 2.169 primary time series directly from five official ABS statistical streams: the 2011, 2016 and 2021 Censuses of Population and Housing (ASGS Greater Capital City Statistical Areas, Significant Urban Areas and Urban Centres and Localities; 1.597 source links), ABS Historical Population 2021 (Catalogue 3105.65.001 spanning 1901–2021; 760 links), ABS Census 2016 and 2021 Time Series Profiles (540 links), ABS Annual LGA Estimated Resident Population tables through 2025 (538 links) and ABS Urban Centres and Localities schedules (190 links), supplemented where colonial series extend continuously past 1901 by Federation census anchor points [@census1917census; @statistics2019australian; @statistics20222021]. Wave 2 cross-checked peer-reviewed Australian migration, urban and Indigenous demographic scholarship without adding unverified rows. Wave 3 standardised WGS84 coordinates and deduplicated 86 overlapping records—primarily pre-Federation colonial stubs already represented in ABS post-1901 series, small split Murray River cross-border parts (Mulwala, Wahgunyah, Koondrook) and adjacent coastal suburban duplicates within 25 km. Wave 4 executed a sub-regional coverage sweep closing at 0,09% marginal gain (2 final entries), 0 empty sub-regions and 0 unaccounted candidates.

Explicit spatial-scope classification preserves structural comparability across Australia's divergent municipal systems: 36 metropolitan areas (8 capital GCCSAs/SUAs plus 28 secondary Significant Urban Areas), 250 independent suburban LGAs inside metropolitan rings and 1.883 city-proper centres spanning regional municipalities, inner capital councils and small rural localities. Two institutional exceptions are preserved explicitly rather than artificially split: Brisbane City—consolidated into a single 1.342 km² council in 1925 and reaching 1,38M residents in 2025—stands undivided as Australia's largest city-proper entity inside the 2,57M Brisbane metropolis, while Canberra operates under a unitary territory administration with zero subordinate suburban LGAs (452,5k city proper inside the 489,2k Canberra–Queanbeyan metropolis). No settlement relies on crowd-sourced population estimates (0% crowd fallback).

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 2.255 evaluated candidates: 2.169 included, 86 excluded (100% duplicate aliases merged within 25 km of canonical ABS records) and 0 unaccounted. Every included settlement possesses non-null WGS84 coordinates, a documented chronological span within 1901 to 2025, explicit ABS archival provenance and assignment to one of the nine constant-boundary sub-regions. Across all 2.169 settlements, 22.326 dated observations produce a rich average of 10,29 observations per centre—peaking at 106 annual/intercensal observations for each of the six colonial-era state capital metropolises (Sydney, Melbourne, Brisbane, Perth, Adelaide and Hobart, 1901–2021), 101 observations for Canberra (1921–2021) and 65 observations for Darwin Metro (1911–2021) [@statistics2019australian; @statistics20222021].

Two minor geographic boundary effects separate ABS administrative jurisdictions from continental raster submask pixels and are reported transparently across Tables \ref{tab:subregion-gazetteer} and \ref{tab:admin1-scope}. Along the Murray River border, 16 Victorian-side border localities fall within adjacent New South Wales raster cells alongside coastal Jervis Bay and offshore external territories (raising the New South Wales submask count to 631 against 610 administratively, while reducing Victoria's mask tally from 415 to 399). Meanwhile, eight tiny external-territory settlements (Christmas Island, Flying Fish Cove, Cocos Islands, Home Island, West Island, Jervis Bay, Norfolk Island and Unincorporated Other Territories) sit inside the ABS Other Territories administrative group, with Norfolk Island assigned directly to its dedicated offshore submask tile. Figure \ref{fig:sett-regional-map} displays the continental spatial footprint across all nine federal jurisdictions.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-modern-australia-settlements/modern_australia_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of Australia's six states, two mainland territories, Norfolk Island and 2.169 catalogued settlements, 1901 to 2025.</figcaption>
</figure>

# Results

## Twenty-Five Leading Modern Australian Settlements

Because the full register contains 2.169 settlements—far too extensive for a single printed PDF table—this gazetteer presents the top 50 settlements cleanly across Table \ref{tab:top25-sites} (ranks 1 to 25) and Appendix Table \ref{tab:ranks26-50-sites} (ranks 26 to 50), complemented by a full inventory of all 36 metropolitan areas in Appendix Table \ref{tab:all-metros}. Ranks 1 to 25 span from Greater Sydney (5,3M peak in 2020) and Greater Melbourne (5,06M peak in 2020) down to outer Melbourne growth municipality Hume (278,9k in 2025). Queensland contributes 8 of the top 25 entries—reflecting both South East Queensland's explosive Sunbelt expansion and its massive amalgamated councils (Brisbane Metro, Brisbane City, Gold Coast–Tweed Heads, Gold Coast City, Moreton Bay, Logan, Sunshine Coast Metro and Sunshine Coast City)—followed by New South Wales (6), Victoria (6), Australian Capital Territory (2: Canberra–Queanbeyan Metro and Canberra), Western Australia (1: Perth Metro), and South Australia (1: Adelaide Metro). Notice the unmistakable demographic imprint of COVID-19 international border closures in 2020–2021: both Sydney Metro (5.295.529 in 2020 to 5.261.801 in 2021) and Melbourne Metro (5.061.107 to 4.975.319) recorded their series peaks in 2020 immediately before pandemic restrictions briefly reversed net overseas inflows, whereas suburban LGAs with annual ERP series extending to 2025 all reached new highs in 2025 [@eshragh2020modeling; @wilson2019introduction].

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sydney (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Metro</td><td class="crd-td">-33,87, 151,21</td><td class="crd-td">1901 to 2021</td><td class="crd-td">5,3M (2020)</td></tr>
<tr><td class="crd-td"><strong>Melbourne (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Metro</td><td class="crd-td">-37,81, 144,96</td><td class="crd-td">1901 to 2021</td><td class="crd-td">5,06M (2020)</td></tr>
<tr><td class="crd-td"><strong>Brisbane (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Metro</td><td class="crd-td">-27,47, 153,03</td><td class="crd-td">1901 to 2021</td><td class="crd-td">2,57M (2021)</td></tr>
<tr><td class="crd-td"><strong>Perth (Metro)</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Metro</td><td class="crd-td">-31,95, 115,86</td><td class="crd-td">1901 to 2021</td><td class="crd-td">2,19M (2021)</td></tr>
<tr><td class="crd-td"><strong>Adelaide (Metro)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">Metro</td><td class="crd-td">-34,93, 138,6</td><td class="crd-td">1901 to 2021</td><td class="crd-td">1,4M (2021)</td></tr>
<tr><td class="crd-td"><strong>Brisbane</strong></td><td class="crd-td">Queensland</td><td class="crd-td">City</td><td class="crd-td">-27,44, 152,92</td><td class="crd-td">1911 to 2025</td><td class="crd-td">1,38M (2025)</td></tr>
<tr><td class="crd-td"><strong>Gold Coast - Tweed Heads (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Metro</td><td class="crd-td">-28,09, 153,39</td><td class="crd-td">1961 to 2021</td><td class="crd-td">701,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Gold Coast</strong></td><td class="crd-td">Queensland</td><td class="crd-td">City</td><td class="crd-td">-27,98, 153,32</td><td class="crd-td">1966 to 2025</td><td class="crd-td">691,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Moreton Bay</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Suburb</td><td class="crd-td">-27,12, 152,87</td><td class="crd-td">2001 to 2025</td><td class="crd-td">532,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Newcastle - Maitland (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Metro</td><td class="crd-td">-32,82, 151,59</td><td class="crd-td">1911 to 2021</td><td class="crd-td">510,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Canberra - Queanbeyan (Metro)</strong></td><td class="crd-td">Australian Capital Territory</td><td class="crd-td">Metro</td><td class="crd-td">-35,31, 149,13</td><td class="crd-td">2001 to 2021</td><td class="crd-td">489,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Canberra</strong></td><td class="crd-td">Australian Capital Territory</td><td class="crd-td">City</td><td class="crd-td">-35,28, 149,13</td><td class="crd-td">1921 to 2021</td><td class="crd-td">452,5k (2021)</td></tr>
<tr><td class="crd-td"><strong>Blacktown</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,74, 150,86</td><td class="crd-td">1911 to 2025</td><td class="crd-td">449,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Casey</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-38,11, 145,31</td><td class="crd-td">1996 to 2025</td><td class="crd-td">414,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Logan</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Suburb</td><td class="crd-td">-27,76, 153,04</td><td class="crd-td">1981 to 2025</td><td class="crd-td">403,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Canterbury-Bankstown</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,92, 151,04</td><td class="crd-td">2001 to 2025</td><td class="crd-td">389,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sunshine Coast (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Metro</td><td class="crd-td">-26,56, 152,98</td><td class="crd-td">1981 to 2021</td><td class="crd-td">387,5k (2021)</td></tr>
<tr><td class="crd-td"><strong>Sunshine Coast</strong></td><td class="crd-td">Queensland</td><td class="crd-td">City</td><td class="crd-td">-26,62, 153,07</td><td class="crd-td">1981 to 2025</td><td class="crd-td">382k (2025)</td></tr>
<tr><td class="crd-td"><strong>Central Coast</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,35, 151,44</td><td class="crd-td">2001 to 2025</td><td class="crd-td">357,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Wyndham</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,89, 144,62</td><td class="crd-td">1996 to 2025</td><td class="crd-td">347,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Wollongong (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Metro</td><td class="crd-td">-34,41, 150,86</td><td class="crd-td">1911 to 2021</td><td class="crd-td">306k (2021)</td></tr>
<tr><td class="crd-td"><strong>Greater Geelong</strong></td><td class="crd-td">Victoria</td><td class="crd-td">City</td><td class="crd-td">-38,07, 144,42</td><td class="crd-td">1996 to 2025</td><td class="crd-td">295,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Geelong (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Metro</td><td class="crd-td">-38,1, 144,4</td><td class="crd-td">1911 to 2021</td><td class="crd-td">289,6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Parramatta</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,8, 151,03</td><td class="crd-td">1901 to 2025</td><td class="crd-td">279k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hume</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,59, 144,82</td><td class="crd-td">1996 to 2025</td><td class="crd-td">278,9k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 catalogued modern Australian settlements ordered by peak recorded population, 1901 to 2025.</figcaption>
</figure>

## Sub-Regional Coverage and Administrative Scope Breakdown

Tables \ref{tab:subregion-gazetteer} and \ref{tab:admin1-scope} summarise the full 2.169-entry register by both areal mask sub-region and ABS administrative jurisdiction paired with spatial scope. Observation density is highest in Western Australia (4.564 administrative observations across 249 centres, mean 18,33 per site—reflecting deep continuous LGA time series back to 1911) and South Australia (2.548 across 222 centres, mean 11,48), while the three populous eastern states account for 68,3% of all catalogued settlements: New South Wales (610 sites, 5.666 observations), Queensland (457 sites, 3.671 observations) and Victoria (415 sites, 3.599 observations) [@statistics2019australian; @statistics20222021].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Mask Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs.</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New South Wales</strong></td><td class="crd-td">818.174</td><td class="crd-td">631</td><td class="crd-td">5.868</td><td class="crd-td">Sydney (Metro) (5,3M)</td><td class="crd-td">8,64M</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">231.261</td><td class="crd-td">399</td><td class="crd-td">3.463</td><td class="crd-td">Melbourne (Metro) (5,06M)</td><td class="crd-td">7,12M</td></tr>
<tr><td class="crd-td"><strong>Queensland</strong></td><td class="crd-td">1.792.994</td><td class="crd-td">453</td><td class="crd-td">3.631</td><td class="crd-td">Brisbane (Metro) (2,57M)</td><td class="crd-td">5,71M</td></tr>
<tr><td class="crd-td"><strong>South Australia</strong></td><td class="crd-td">1.007.246</td><td class="crd-td">227</td><td class="crd-td">2.607</td><td class="crd-td">Adelaide (Metro) (1,4M)</td><td class="crd-td">1,91M</td></tr>
<tr><td class="crd-td"><strong>Western Australia</strong></td><td class="crd-td">2.608.358</td><td class="crd-td">250</td><td class="crd-td">4.567</td><td class="crd-td">Perth (Metro) (2,19M)</td><td class="crd-td">3,08M</td></tr>
<tr><td class="crd-td"><strong>Tasmania</strong></td><td class="crd-td">82.862</td><td class="crd-td">119</td><td class="crd-td">1.360</td><td class="crd-td">Hobart (Metro) (250,7k)</td><td class="crd-td">579,1k</td></tr>
<tr><td class="crd-td"><strong>Northern Territory</strong></td><td class="crd-td">1.369.990</td><td class="crd-td">84</td><td class="crd-td">699</td><td class="crd-td">Darwin (Metro) (148,8k)</td><td class="crd-td">267,7k</td></tr>
<tr><td class="crd-td"><strong>Australian Capital Territory</strong></td><td class="crd-td">3.635</td><td class="crd-td">5</td><td class="crd-td">128</td><td class="crd-td">Canberra - Queanbeyan (Metro) (489,2k)</td><td class="crd-td">487,3k</td></tr>
<tr><td class="crd-td"><strong>Norfolk Island</strong></td><td class="crd-td">375</td><td class="crd-td">1</td><td class="crd-td">3</td><td class="crd-td">Norfolk Island (1,7k)</td><td class="crd-td">2,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts (by areal mask sub-region), dated observations, leading recorded centre and 2025 population across Australia's nine federal units.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:admin1-scope">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">ABS Jurisdiction</th><th class="crd-th">Metro</th><th class="crd-th">City Proper</th><th class="crd-th">Suburb</th><th class="crd-th">Total Sites</th><th class="crd-th">Obs.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>New South Wales</strong></td><td class="crd-td">9</td><td class="crd-td">552</td><td class="crd-td">49</td><td class="crd-td">610</td><td class="crd-td">5.666</td></tr>
<tr><td class="crd-td"><strong>Queensland</strong></td><td class="crd-td">7</td><td class="crd-td">419</td><td class="crd-td">31</td><td class="crd-td">457</td><td class="crd-td">3.671</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">10</td><td class="crd-td">358</td><td class="crd-td">47</td><td class="crd-td">415</td><td class="crd-td">3.599</td></tr>
<tr><td class="crd-td"><strong>Western Australia</strong></td><td class="crd-td">3</td><td class="crd-td">209</td><td class="crd-td">37</td><td class="crd-td">249</td><td class="crd-td">4.564</td></tr>
<tr><td class="crd-td"><strong>South Australia</strong></td><td class="crd-td">2</td><td class="crd-td">169</td><td class="crd-td">51</td><td class="crd-td">222</td><td class="crd-td">2.548</td></tr>
<tr><td class="crd-td"><strong>Tasmania</strong></td><td class="crd-td">3</td><td class="crd-td">85</td><td class="crd-td">31</td><td class="crd-td">119</td><td class="crd-td">1.360</td></tr>
<tr><td class="crd-td"><strong>Northern Territory</strong></td><td class="crd-td">1</td><td class="crd-td">80</td><td class="crd-td">4</td><td class="crd-td">85</td><td class="crd-td">702</td></tr>
<tr><td class="crd-td"><strong>Other Territories</strong></td><td class="crd-td">0</td><td class="crd-td">8</td><td class="crd-td">0</td><td class="crd-td">8</td><td class="crd-td">90</td></tr>
<tr><td class="crd-td"><strong>Australian Capital Territory</strong></td><td class="crd-td">1</td><td class="crd-td">3</td><td class="crd-td">0</td><td class="crd-td">4</td><td class="crd-td">126</td></tr>
<tr><td class="crd-td"><strong>Australia Total</strong></td><td class="crd-td">36</td><td class="crd-td">1.883</td><td class="crd-td">250</td><td class="crd-td">2.169</td><td class="crd-td">22.326</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Administrative-jurisdiction breakdown of all 2.169 catalogued settlements by spatial scope (Metro, City Proper and Suburb) and dated observation totals.</figcaption>
</figure>

## Rank-Size Primacy and Source Saturation Audit

Log-log rank-size regression across the 2.169-entry register exposes the stark structural impact of suburban municipal fragmentation [@wilson2015new; @karuppannan2011population]. Across all 2.169 entries, the top-180 upper-tier regression produces a gentle Zipf slope of $\alpha = 0,89$ ($R^2 = 0,96$; full 2.169-site slope $-1,82$, $R^2 = 0,96$) because 250 populous suburban LGAs cluster tightly between 100k and 532k inhabitants, artificially thickening the middle of the distribution. Filtering out those 250 suburban ring councils isolates Australia's 1.919 independent metropolitan areas, regional cities and rural towns, restoring a textbook primate power law across the top 180 centres: $\alpha = 1,16$ with an extraordinary linear fit of $R^2 = 1,00$ (0,9958; full 1.919-site slope $-1,63$, $R^2 = 0,97$). That gradient captures Australia's enduring two-tier coastal urban structure: twin five-million global metropolises (Sydney and Melbourne) and three multi-million state capitals (Brisbane, Perth and Adelaide) standing far above a secondary tier of half-million coastal and federal hubs (Gold Coast–Tweed Heads, Newcastle–Maitland, Canberra–Queanbeyan, Sunshine Coast, Wollongong, Geelong and Hobart) and over 1.800 regional townships.

Tables \ref{tab:scope-breakdown} and \ref{tab:saturation-waves} document the register's spatial-scope stratification and four-wave source saturation audit, confirming 100% official ABS provenance and 0% crowd-sourced fallback.

<figure class="crd-table-figure" id="tab:scope-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Spatial Scope</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Largest Example (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metropolitan Area (metro)</strong></td><td class="crd-td">36</td><td class="crd-td">1,7%</td><td class="crd-td">Sydney Metro (5,3M)</td></tr>
<tr><td class="crd-td"><strong>City Proper (city proper)</strong></td><td class="crd-td">1.883</td><td class="crd-td">86,8%</td><td class="crd-td">Brisbane City (1,38M)</td></tr>
<tr><td class="crd-td"><strong>Suburban Ring Municipality (suburb)</strong></td><td class="crd-td">250</td><td class="crd-td">11,5%</td><td class="crd-td">Moreton Bay (532,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Spatial-scope stratification across 2.169 catalogued modern Australian settlements, 1901 to 2025.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Records</th><th class="crd-th">Audit Outcome</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Official ABS censuses, historical series and LGA ERP tables</td><td class="crd-td">2.169</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Australian demographic and urban monograph cross-check</td><td class="crd-td">0</td><td class="crd-td">0% crowd fallback</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal municipal reconciliation and alias deduplication</td><td class="crd-td">0</td><td class="crd-td">86 duplicate aliases merged</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional coverage verification sweep</td><td class="crd-td">2</td><td class="crd-td">0,09% marginal gain</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Four-wave gazetteer ingestion ledger and reconciliation summary across 2.169 catalogued Australian settlements.</figcaption>
</figure>

# Limitations

Four structural and statistical constraints qualify use of this 2.169-settlement register. First, metropolitan statistical boundaries (GCCSA and SUA) and Local Government Area borders changed repeatedly across 1901–2025—notably during the 1925 Greater Brisbane amalgamation, Victoria's 1994 council mergers, Queensland's 2008 amalgamations and New South Wales's 2016 mergers—meaning suburban LGA time series frequently begin in 1981, 1996 or 2001 rather than 1901, and Brisbane City (1,38M) or unitary Canberra (452,5k) cannot be equated directly to narrow inner-city municipalities such as Sydney City (241,8k) or Melbourne City (194,5k) [@statistics2019australian; @wilson2015new]. Second, ABS Historical Population metropolitan tables terminate at the 2021 census while annual LGA ERP tables extend to 2025; consequently, Sydney and Melbourne show 2020–2021 pandemic-era peaks whereas outer suburban councils record 2025 highs [@eshragh2020modeling]. Third, pre-1967 urban schedules excluded "full-blood" Aboriginal residents living inside or around regional towns, producing step increases between 1961 and 1971 across northern and central Australian centres such as Alice Springs, Katherine and Broome [@taylor2011postcolonial; @allen2021understandin]. Fourth, summing metropolitan, city-proper and suburban entries blindly would double-count residents living inside overlapping spatial envelopes; analytical aggregations must always filter by spatial scope.

# Conclusion

Cataloguing 2.169 evidence-based Australian settlements and 22.326 dated ABS observations from 1901 to 2025 maps the full modern urban hierarchy of the Commonwealth from five-million coastal gateways down to outback localities and Indian and Pacific Ocean islands. Separating metropolitan envelopes (36), independent suburban ring councils (250) and city-proper centres (1.883) resolves municipal boundary asymmetries—preserving non-decomposed Brisbane City and unitary Canberra cleanly alongside fragmented Sydney, Melbourne, Perth and Adelaide—and demonstrates that Australia's independent urban system still obeys a tight primate power law ($\alpha = 1,16$, $R^2 = 1,00$) anchored in eight capital metropolises holding two thirds of the nation [@statistics20222021; @bell2015internal].

# Appendix

## Settlements Ranked Twenty-Six to Fifty

Table \ref{tab:ranks26-50-sites} continues the top-50 settlement ranking from Northern Beaches (272,7k in 2025) down to outer Perth municipality Swan (187,1k in 2025), illustrating the extraordinary scale of suburban LGAs alongside inner municipal capitals (Sydney City 241,8k, Melbourne City 194,5k), Hobart Metro (250,7k) and regional cities such as Wollongong (239,6k peak), Lake Macquarie (224,5k) and Townsville (206,3k).

<figure class="crd-table-figure" id="tab:ranks26-50-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Beaches</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,7, 151,25</td><td class="crd-td">2001 to 2025</td><td class="crd-td">272,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ipswich</strong></td><td class="crd-td">Queensland</td><td class="crd-td">Suburb</td><td class="crd-td">-27,66, 152,67</td><td class="crd-td">1901 to 2025</td><td class="crd-td">268,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Liverpool</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,93, 150,82</td><td class="crd-td">1901 to 2025</td><td class="crd-td">261,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Whittlesea</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,51, 145,13</td><td class="crd-td">1911 to 2025</td><td class="crd-td">259,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Cumberland</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,84, 150,98</td><td class="crd-td">2001 to 2025</td><td class="crd-td">256,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Stirling</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Suburb</td><td class="crd-td">-31,89, 115,82</td><td class="crd-td">1981 to 2025</td><td class="crd-td">254,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hobart (Metro)</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">Metro</td><td class="crd-td">-42,88, 147,33</td><td class="crd-td">1901 to 2021</td><td class="crd-td">250,7k (2021)</td></tr>
<tr><td class="crd-td"><strong>Wanneroo</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Suburb</td><td class="crd-td">-31,61, 115,76</td><td class="crd-td">1911 to 2025</td><td class="crd-td">246,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sydney (City)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">City</td><td class="crd-td">-33,89, 151,2</td><td class="crd-td">1901 to 2025</td><td class="crd-td">241,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sutherland Shire</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-34,07, 151,05</td><td class="crd-td">1996 to 2025</td><td class="crd-td">241,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Wollongong</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">City</td><td class="crd-td">-34,47, 150,85</td><td class="crd-td">1901 to 2025</td><td class="crd-td">239,6k (1991)</td></tr>
<tr><td class="crd-td"><strong>Penrith</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,76, 150,72</td><td class="crd-td">1911 to 2025</td><td class="crd-td">231,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Melton</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,69, 144,58</td><td class="crd-td">1911 to 2025</td><td class="crd-td">231,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Lake Macquarie</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">City</td><td class="crd-td">-33,04, 151,52</td><td class="crd-td">1911 to 2025</td><td class="crd-td">224,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>The Hills Shire</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,59, 150,96</td><td class="crd-td">2001 to 2025</td><td class="crd-td">222,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Fairfield</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,87, 150,9</td><td class="crd-td">1933 to 2025</td><td class="crd-td">213,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Monash</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,9, 145,15</td><td class="crd-td">1996 to 2025</td><td class="crd-td">211,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Geelong</strong></td><td class="crd-td">Victoria</td><td class="crd-td">City</td><td class="crd-td">-38,17, 144,36</td><td class="crd-td">1901 to 2021</td><td class="crd-td">210,9k (2006)</td></tr>
<tr><td class="crd-td"><strong>Brimbank</strong></td><td class="crd-td">Victoria</td><td class="crd-td">Suburb</td><td class="crd-td">-37,75, 144,8</td><td class="crd-td">1996 to 2025</td><td class="crd-td">207k (2018)</td></tr>
<tr><td class="crd-td"><strong>Townsville</strong></td><td class="crd-td">Queensland</td><td class="crd-td">City</td><td class="crd-td">-19,27, 146,74</td><td class="crd-td">1901 to 2025</td><td class="crd-td">206,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Melbourne (City)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">City</td><td class="crd-td">-37,81, 144,94</td><td class="crd-td">1901 to 2025</td><td class="crd-td">194,5k (2025)</td></tr>
<tr><td class="crd-td"><strong>Inner West</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,89, 151,16</td><td class="crd-td">2001 to 2025</td><td class="crd-td">193,1k (2025)</td></tr>
<tr><td class="crd-td"><strong>Campbelltown</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-34,08, 150,84</td><td class="crd-td">1911 to 2025</td><td class="crd-td">191,3k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bayside</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">Suburb</td><td class="crd-td">-33,95, 151,17</td><td class="crd-td">2001 to 2025</td><td class="crd-td">187,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Swan</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">Suburb</td><td class="crd-td">-31,74, 116,06</td><td class="crd-td">1911 to 2025</td><td class="crd-td">187,1k (2025)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Modern Australian settlements ranked 26 to 50 by peak recorded population, 1901 to 2025.</figcaption>
</figure>

## All Thirty-Six Metropolitan Statistical Areas

Table \ref{tab:all-metros} lists all 36 catalogued metropolitan statistical areas across Australia ordered by peak population from Sydney Metro (5,3M) down to Whitsunday resort hub Airlie Beach–Cannonvale (14,8k), providing an undivided metropolitan-tier reference free from suburban double counting.

<figure class="crd-table-figure" id="tab:all-metros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Metropolitan Area</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Obs.</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sydney (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-33,87, 151,21</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">5,3M (2020)</td></tr>
<tr><td class="crd-td"><strong>Melbourne (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-37,81, 144,96</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">5,06M (2020)</td></tr>
<tr><td class="crd-td"><strong>Brisbane (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-27,47, 153,03</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">2,57M (2021)</td></tr>
<tr><td class="crd-td"><strong>Perth (Metro)</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">-31,95, 115,86</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">2,19M (2021)</td></tr>
<tr><td class="crd-td"><strong>Adelaide (Metro)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">-34,93, 138,6</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">1,4M (2021)</td></tr>
<tr><td class="crd-td"><strong>Gold Coast - Tweed Heads (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-28,09, 153,39</td><td class="crd-td">1961 to 2021</td><td class="crd-td">29</td><td class="crd-td">701,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Newcastle - Maitland (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-32,82, 151,59</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">510,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Canberra - Queanbeyan (Metro)</strong></td><td class="crd-td">Australian Capital Territory</td><td class="crd-td">-35,31, 149,13</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">489,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Sunshine Coast (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-26,56, 152,98</td><td class="crd-td">1981 to 2021</td><td class="crd-td">25</td><td class="crd-td">387,5k (2021)</td></tr>
<tr><td class="crd-td"><strong>Wollongong (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-34,41, 150,86</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">306k (2021)</td></tr>
<tr><td class="crd-td"><strong>Geelong (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-38,1, 144,4</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">289,6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Hobart (Metro)</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">-42,88, 147,33</td><td class="crd-td">1901 to 2021</td><td class="crd-td">106</td><td class="crd-td">250,7k (2021)</td></tr>
<tr><td class="crd-td"><strong>Townsville (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-19,33, 146,72</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">181,6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Cairns (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-16,88, 145,71</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">155,6k (2021)</td></tr>
<tr><td class="crd-td"><strong>Darwin (Metro)</strong></td><td class="crd-td">Northern Territory</td><td class="crd-td">-14,33, 131,18</td><td class="crd-td">1911 to 2021</td><td class="crd-td">65</td><td class="crd-td">148,8k (2017)</td></tr>
<tr><td class="crd-td"><strong>Toowoomba (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-27,57, 151,89</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">143,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Ballarat (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-37,56, 143,84</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">111,7k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bendigo (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-36,75, 144,29</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">102,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Albury - Wodonga (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-36,11, 146,91</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">97,7k (2021)</td></tr>
<tr><td class="crd-td"><strong>Launceston (Metro)</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">-41,46, 147,08</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">93,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bunbury (Metro)</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">-33,36, 115,66</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">79,2k (2021)</td></tr>
<tr><td class="crd-td"><strong>Shepparton - Mooroopna (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-36,4, 145,41</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">54k (2021)</td></tr>
<tr><td class="crd-td"><strong>Mildura - Buronga (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-34,16, 142,08</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">53,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Traralgon - Morwell (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-38,2, 146,52</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">43,1k (2021)</td></tr>
<tr><td class="crd-td"><strong>Warragul - Drouin (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-38,18, 145,87</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">42,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Bowral - Mittagong (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-34,44, 150,45</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">41,4k (2021)</td></tr>
<tr><td class="crd-td"><strong>Nowra - Bomaderry (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-34,87, 150,59</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">39k (2021)</td></tr>
<tr><td class="crd-td"><strong>Kalgoorlie - Boulder (Metro)</strong></td><td class="crd-td">Western Australia</td><td class="crd-td">-30,76, 121,47</td><td class="crd-td">1911 to 2021</td><td class="crd-td">34</td><td class="crd-td">33k (2013)</td></tr>
<tr><td class="crd-td"><strong>Victor Harbor - Goolwa (Metro)</strong></td><td class="crd-td">South Australia</td><td class="crd-td">-35,52, 138,71</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">28,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Burnie - Somerset (Metro)</strong></td><td class="crd-td">Tasmania</td><td class="crd-td">-41,05, 145,8</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">28,5k (2021)</td></tr>
<tr><td class="crd-td"><strong>Morisset - Cooranbong (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-33,09, 151,46</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">27,8k (2021)</td></tr>
<tr><td class="crd-td"><strong>Echuca - Moama (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-36,12, 144,77</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">22,5k (2021)</td></tr>
<tr><td class="crd-td"><strong>Moe - Newborough (Metro)</strong></td><td class="crd-td">Victoria</td><td class="crd-td">-38,11, 146,45</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">22k (2021)</td></tr>
<tr><td class="crd-td"><strong>Forster - Tuncurry (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-32,21, 152,52</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">21,2k (2019)</td></tr>
<tr><td class="crd-td"><strong>St Georges Basin - Sanctuary Point (Metro)</strong></td><td class="crd-td">New South Wales</td><td class="crd-td">-35,09, 150,63</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">20,1k (2021)</td></tr>
<tr><td class="crd-td"><strong>Airlie Beach - Cannonvale (Metro)</strong></td><td class="crd-td">Queensland</td><td class="crd-td">-20,96, 146,34</td><td class="crd-td">2001 to 2021</td><td class="crd-td">21</td><td class="crd-td">14,8k (2021)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> All 36 catalogued Australian metropolitan statistical areas (capital GCCSAs and non-capital Significant Urban Areas) ordered by peak recorded population, 1901 to 2025.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Geographic coordinates follow WGS84 decimal degrees formatted with European decimal commas. Spatial scope distinguishes metropolitan envelopes (Metro), suburban ring municipalities (Suburb) and municipal or urban-area cores (City). All 2.169 settlements and 22.326 dated observations derive strictly from official Australian Bureau of Statistics censuses, historical population series and annual Local Government Area Estimated Resident Population tables with zero crowd-sourced fallback.
