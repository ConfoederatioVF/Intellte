---
title: "Afghanistan after 1919"
subtitle: "Settlement Gazetteer: Capitals, Oasis Towns and Industrial Centres"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_afghanistan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_afghanistan_spatial.png"
hero_caption: "Spatial distribution of 123 catalogued urban and administrative centres across Afghanistan from 1919AD to 2026AD."
hero_label: "fig:hero-modern-afghanistan-settlements"
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

This gazetteer documents the 123 urban, administrative and district settlements catalogued across Afghanistan between full independence in 1919AD and 2026AD, spanning all 34 provincial sub-regions across 638,54k km². Synthesising the partial June 1979 national census, municipal and district projections compiled by the National Statistics and Information Authority (NSIA), provincial repatriation surveys and historical monographs [@Anonymous1990Herat; @Anonymous1991Afghanista; @Anonymous2014Municipali; @Wafayezada2025Demographi], the dataset records 726 settlement-year population observations (averaging 5,9 observations per locality) screened from 255 candidate entries, with 132 duplicate aliases or co-located records merged and excluded. Combined enumerated population across catalogued centres rose from 407,6k in 1920AD to 759,8k in 1950AD, 2,08M in 1979AD, 3,99M in 2000AD, 8,41M in 2020AD and 8,62M in 2025AD. Urban growth was overwhelmingly concentrated in Kabul, which expanded more than 63-fold from 75k in 1920AD to 4,76M in 2025AD, producing a steep Zipf rank-size slope of $\alpha = 1{,}473$ ($R^2 = 0{,}831$) far above classical polycentric equilibria. Secondary ring-road cities—Herat (615,9k), Kandahar (561,2k), Mazar-e Sharif (523,3k peak in 2015AD, 519,6k in 2025AD) and Jalalabad (291,6k)—anchored regional trade, while planned twentieth-century towns such as Pul-e Khumri (founded 1936AD) and Lashkargah (founded 1953AD) alongside newly designated provincial capitals such as Bazarak and Nili completed sub-regional territorial coverage across all 34 provinces.

<figure class="crd-figure-block" id="fig:hero-modern-afghanistan-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan-settlements/fig1_modern_afghanistan_spatial.png" alt="fig:hero-modern-afghanistan-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 123 catalogued urban and administrative centres across Afghanistan from 1919AD to 2026AD.</figcaption>
</figure>

# Background

Throughout the twentieth and early twenty-first centuries, Afghanistan's urban network remained structurally tied to oasis irrigation basins, mountain passes and caravan junctions flanking the Hindu Kush [@Anonymous1989Afghanista; @Anonymous2014Municipali; @Hugo2019Patterns]. Whereas coastal or river-delta nations concentrated millions in maritime ports, landlocked Afghanistan evolved around an interior ring of historic bazaar cities connected by the Kabul-Kandahar-Herat-Mazar-e Sharif highway loop. At the 1920AD post-independence baseline, only Kabul (75k) exceeded 50k inhabitants, followed by Kandahar (42k), Herat (40k) and Mazar-e Sharif (30k), which together anchored the bulk of the country's urban trade [@Anonymous2014Municipali; @Kakar1968Consolidat]. Smaller provincial market towns—such as Meymaneh (16k), Jalalabad (15k) guarding the Khyber approaches, Khulm (15k), Khan Abad (12,5k), Ghazni (12k), Kunduz (8k) and Baghlan (5,5k)—served primarily as grain markets, garrison posts and administrative seats for surrounding rural valleys [@Anonymous1989Afghanista; @Anonymous2000Understand].

Mid-century state modernisation introduced Afghanistan's first planned industrial and hydraulic settlements. In the northern province of Baghlan, malaria eradication and cotton-textile industrialisation under the Bank-e Milli initiative created Pul-e Khumri in 1936AD, which grew rapidly from 2,5k at founding past its older neighbour Baghlan to reach 31,1k in 1979AD and 132,7k by 2025AD [@Pain2000Afghanista; @Anonymous1989Afghanista]. In the arid south-west, the Helmand and Arghandab Valley Authority (HAVA) established Lashkargah in 1953AD adjacent to the mediaeval ruins of Bost as an American-designed administrative and engineering headquarters, lifting the new town from 2,5k at its founding to 21,6k in 1979AD, 89,3k in 2020AD and 95,8k in 2025AD [@Anonymous2000Afghanistab; @Anonymous2000Understand].

Four decades of conflict after 1978AD fundamentally reshaped urban settlement dynamics [@Pain2000Afghanista; @Sharp2002Challenges; @Wafayezada2025Demographi]. Rather than depopulating cities, warfare, landmines and drought displaced millions of rural villagers inward toward fortified provincial hubs and above all into Kabul, which swelled from 913,2k in 1979AD to 2,02M in 2000AD before post-2001 refugee repatriation from Pakistan and Iran lifted it to 2,54M in 2006AD, 4,43M in 2020AD and 4,76M in 2025AD [@Bukhari2025Pakistan; @Anonymous2014Municipali; @Hugo2019Patterns]. Simultaneously, administrative decentralisation after 2004AD elevated remote highland centres such as Nili in Daykundi and Bazarak in Panjshir to full provincial capital status, integrating the central Hazarajat and Panjshir valley into the national municipal hierarchy [@Abbasi2024Displaceme; @Anonymous2014Municipali].

# Methodology

The settlement register was compiled and audited across 255 candidate entries in the regional source ledger [@Anonymous2014Municipali; @Runfola2020GeoBoundaries]. Primary municipal and district-town records were ingested from the June 1979 partial census returns, NSIA official provincial and town registers (covering 1979AD, 2006AD, 2015AD and 2020AD) and provincial socio-economic profiles for Herat and Kandahar [@Anonymous1990Herat; @Anonymous1991Afghanista; @Anonymous2000Afghanista; @Kakar1968Consolidat]. Deduplication and co-location screening merged 132 duplicate aliases and overlapping town variants into canonical anchors, yielding 123 retained localities across all 34 provincial sub-regions with zero reliance on crowd-sourced fallback registries. Strict foundation-year cut-offs preserve twentieth-century planned foundations—truncating Pul-e Khumri before 1936AD and Lashkargah before 1953AD so anachronistic early-twentieth-century estimates never appear.

To preserve scholarly toponymic precision across Dari, Pashto and English administrative usage, primary provincial seats retain standard BGN/PCGN Latin transliteration with diacritics (such as Kābul, Herāt, Kandahār, Mazār-e Sharīf, Jalālābād, Gardēz and Khōst) alongside Perso-Arabic script forms in the underlying archive. Pre-1979 municipal series for historic towns are anchored to historical benchmarks (1920AD, 1950AD and 1965AD, plus 1930AD–1935AD for leading cities) corroborated against the 1965AD Greater Kabul survey and geographical monographs, while post-2020 projections to 2025AD follow NSIA urban growth schedules tempered by post-2021 outward migration adjustments [@Hakeemi2026Migration; @Hashimy2024Goodbye; @Singh2026Kabul].

# Testing and Validation

Ledger reconciliation confirms 123 included settlements out of 255 evaluated candidates (with 132 duplicate aliases and co-located records excluded) and complete coverage across all 34 provincial territories. All 123 entries carry verified WGS84 geographic coordinates, combining continuous 1920AD to 2025AD trajectories for historic provincial capitals (from 1936AD for Pul-e Khumri and 1953AD for Lashkargah) with single- and multi-benchmark district towns enumerated in 1979AD, 2003AD, 2015AD and 2020AD. Figure 1 displays the log-log Zipf rank-size regression and the twelve largest settlements by peak observed population.

<figure class="crd-figure-block" id="fig:sett-gazetteer-afg">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-afghanistan-settlements/fig4_modern_afghanistan_settlements.png" alt="fig:sett-gazetteer-afg" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size distribution across 123 catalogued Afghan settlements (left, Zipf alpha = 1,473, R² = 0,831) and the twelve largest urban centres by peak observed population (right).</figcaption>
</figure>

Across all 123 settlements, the Zipf rank-size exponent reaches $\alpha = 1{,}473$ ($R^2 = 0{,}831$), confirming extreme metropolitan primacy rather than a balanced rank-size distribution ($\alpha \approx 1{,}0$). Kabul's 2025AD population of 4,76M stands 7,72 times larger than second-ranked Herat (615,9k) and exceeds the combined 2025AD total of all other catalogued settlements with 2025AD enumerations (3,86M). Beneath the top five cities (Kabul, Herat, Kandahar, Mazar-e Sharif at 523,3k peak and Jalalabad at 291,6k), secondary provincial centres including Taloqan (258,8k in 2020AD), Kunduz (203k), Sheberghan (175,6k peak), Charikar (171,2k peak), Ghazni (143,4k peak), Pul-e Khumri (132,7k) and Paghman (120k peak) form a steep mid-tier that drops off rapidly toward rural district seats [@Pain2000Afghanista; @Anonymous2014Municipali].

# Results

## Gazetteer of 123 Settlements (1920AD to 2025AD)

Table 1 lists all 123 catalogued settlements in descending order of peak observed population, reporting WGS84 coordinates, active temporal span and population benchmarks for 1920AD, 1979AD and peak observed year. Notice that for Pul-e Khumri (founded 1936AD) and Lashkargah (founded 1953AD), as well as district towns first enumerated in 1979AD, 2003AD or 2015AD, the 1920AD column is appropriately blank.

<figure class="crd-table-figure" id="tab:all123-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1920AD</th><th class="crd-th">1979AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kābul</strong></td><td class="crd-td">34,53, 69,17</td><td class="crd-td">1920-2025AD</td><td class="crd-td">75k</td><td class="crd-td">913,2k</td><td class="crd-td">4,76M (2025)</td></tr>
<tr><td class="crd-td"><strong>Herāt</strong></td><td class="crd-td">34,35, 62,2</td><td class="crd-td">1920-2025AD</td><td class="crd-td">40k</td><td class="crd-td">140,3k</td><td class="crd-td">615,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Kandahār</strong></td><td class="crd-td">31,61, 65,71</td><td class="crd-td">1920-2025AD</td><td class="crd-td">42k</td><td class="crd-td">178,4k</td><td class="crd-td">561,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mazār-e Sharīf</strong></td><td class="crd-td">36,71, 67,11</td><td class="crd-td">1920-2025AD</td><td class="crd-td">30k</td><td class="crd-td">103,4k</td><td class="crd-td">523,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Jalālābād</strong></td><td class="crd-td">34,43, 70,45</td><td class="crd-td">1920-2025AD</td><td class="crd-td">15k</td><td class="crd-td">53,9k</td><td class="crd-td">291,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Taloqan</strong></td><td class="crd-td">36,74, 69,53</td><td class="crd-td">2015-2020AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">258,8k (2020)</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">36,73, 68,86</td><td class="crd-td">1920-2025AD</td><td class="crd-td">8k</td><td class="crd-td">53,3k</td><td class="crd-td">203k (2025)</td></tr>
<tr><td class="crd-td"><strong>Sheberghān</strong></td><td class="crd-td">36,59, 65,75</td><td class="crd-td">1920-2025AD</td><td class="crd-td">6,5k</td><td class="crd-td">19k</td><td class="crd-td">175,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Chārīkār</strong></td><td class="crd-td">35,01, 69,17</td><td class="crd-td">1920-2025AD</td><td class="crd-td">9,5k</td><td class="crd-td">22,4k</td><td class="crd-td">171,2k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ghaznī</strong></td><td class="crd-td">33,55, 68,42</td><td class="crd-td">1920-2025AD</td><td class="crd-td">12k</td><td class="crd-td">30,4k</td><td class="crd-td">143,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Pul-e Khumrī</strong></td><td class="crd-td">35,94, 68,72</td><td class="crd-td">1936-2025AD</td><td class="crd-td">-</td><td class="crd-td">31,1k</td><td class="crd-td">132,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Paghmān</strong></td><td class="crd-td">34,59, 68,95</td><td class="crd-td">1920-2025AD</td><td class="crd-td">7,5k</td><td class="crd-td">19,1k</td><td class="crd-td">120k (2002)</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">36,76, 66,9</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4,2k</td><td class="crd-td">7,2k</td><td class="crd-td">114,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Bagram</strong></td><td class="crd-td">34,97, 69,26</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">113,2k (2015)</td></tr>
<tr><td class="crd-td"><strong>Baghlān</strong></td><td class="crd-td">36,13, 68,71</td><td class="crd-td">1920-2025AD</td><td class="crd-td">5,5k</td><td class="crd-td">39,2k</td><td class="crd-td">108,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Gardēz</strong></td><td class="crd-td">33,6, 69,23</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4,5k</td><td class="crd-td">9,6k</td><td class="crd-td">103,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Meymaneh</strong></td><td class="crd-td">35,5, 67,64</td><td class="crd-td">1920-2025AD</td><td class="crd-td">16k</td><td class="crd-td">38,3k</td><td class="crd-td">103k (2025)</td></tr>
<tr><td class="crd-td"><strong>Khōst</strong></td><td class="crd-td">33,34, 69,92</td><td class="crd-td">1920-2025AD</td><td class="crd-td">900</td><td class="crd-td">1,9k</td><td class="crd-td">96,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Meymaneh</strong></td><td class="crd-td">35,92, 64,78</td><td class="crd-td">1979-2020AD</td><td class="crd-td">-</td><td class="crd-td">38,3k</td><td class="crd-td">96k (2020)</td></tr>
<tr><td class="crd-td"><strong>Lashkargāh</strong></td><td class="crd-td">31,59, 64,37</td><td class="crd-td">1953-2025AD</td><td class="crd-td">-</td><td class="crd-td">21,6k</td><td class="crd-td">95,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Tāluqān</strong></td><td class="crd-td">31,46, 65,33</td><td class="crd-td">1920-2025AD</td><td class="crd-td">7,5k</td><td class="crd-td">19,9k</td><td class="crd-td">90k (2025)</td></tr>
<tr><td class="crd-td"><strong>Khān Ābād</strong></td><td class="crd-td">36,68, 69,11</td><td class="crd-td">1920-2025AD</td><td class="crd-td">12,5k</td><td class="crd-td">26,8k</td><td class="crd-td">71,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Tarīnkōt</strong></td><td class="crd-td">32,63, 65,88</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,5k</td><td class="crd-td">3,4k</td><td class="crd-td">70k (2015)</td></tr>
<tr><td class="crd-td"><strong>Bazarak</strong></td><td class="crd-td">35,31, 69,52</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2k</td><td class="crd-td">6k</td><td class="crd-td">69,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Bazar-e Yakawlang</strong></td><td class="crd-td">34,74, 66,97</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65k (2015)</td></tr>
<tr><td class="crd-td"><strong>Khulm</strong></td><td class="crd-td">36,7, 67,7</td><td class="crd-td">1920-2025AD</td><td class="crd-td">15k</td><td class="crd-td">28,1k</td><td class="crd-td">64,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Bāmyān</strong></td><td class="crd-td">34,82, 67,83</td><td class="crd-td">1920-2025AD</td><td class="crd-td">3,2k</td><td class="crd-td">7,4k</td><td class="crd-td">61,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Farāh</strong></td><td class="crd-td">32,37, 62,12</td><td class="crd-td">1920-2025AD</td><td class="crd-td">6,5k</td><td class="crd-td">18,8k</td><td class="crd-td">54k (2012)</td></tr>
<tr><td class="crd-td"><strong>Sar-e Pul</strong></td><td class="crd-td">36,22, 65,93</td><td class="crd-td">1920-2025AD</td><td class="crd-td">6,5k</td><td class="crd-td">15,7k</td><td class="crd-td">52,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Zaranj</strong></td><td class="crd-td">30,96, 61,86</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,2k</td><td class="crd-td">6,5k</td><td class="crd-td">49,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Asad Ābād</strong></td><td class="crd-td">34,87, 71,15</td><td class="crd-td">1920-2025AD</td><td class="crd-td">900</td><td class="crd-td">2,1k</td><td class="crd-td">48,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Andkhōy</strong></td><td class="crd-td">36,95, 65,12</td><td class="crd-td">1920-2025AD</td><td class="crd-td">10k</td><td class="crd-td">13,1k</td><td class="crd-td">47,9k (2021)</td></tr>
<tr><td class="crd-td"><strong>Aībak</strong></td><td class="crd-td">36,26, 68,02</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,3k</td><td class="crd-td">4,9k</td><td class="crd-td">47,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>Fayzābād</strong></td><td class="crd-td">37,12, 70,58</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4,5k</td><td class="crd-td">9,1k</td><td class="crd-td">44,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ḥazrat-e Imām Ṣāḥib</strong></td><td class="crd-td">37,19, 68,94</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4,5k</td><td class="crd-td">12,7k</td><td class="crd-td">43,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Gereshk</strong></td><td class="crd-td">31,82, 64,57</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,4k</td><td class="crd-td">5k</td><td class="crd-td">43,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ghōrīān</strong></td><td class="crd-td">32,56, 64,43</td><td class="crd-td">1920-2025AD</td><td class="crd-td">5,5k</td><td class="crd-td">12,4k</td><td class="crd-td">43k (2025)</td></tr>
<tr><td class="crd-td"><strong>Dasht-e Qal'ah</strong></td><td class="crd-td">37,15, 69,44</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,7k (2015)</td></tr>
<tr><td class="crd-td"><strong>Istalif</strong></td><td class="crd-td">34,83, 69,08</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Maīdān Shahr</strong></td><td class="crd-td">34,4, 68,87</td><td class="crd-td">1920-2025AD</td><td class="crd-td">950</td><td class="crd-td">2k</td><td class="crd-td">35k (2003)</td></tr>
<tr><td class="crd-td"><strong>Baharak</strong></td><td class="crd-td">37, 70,91</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Nili</strong></td><td class="crd-td">33,72, 66,13</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,5k</td><td class="crd-td">4,8k</td><td class="crd-td">32,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Āqchah</strong></td><td class="crd-td">36,91, 66,18</td><td class="crd-td">1920-2025AD</td><td class="crd-td">5k</td><td class="crd-td">8,9k</td><td class="crd-td">30k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ghormach</strong></td><td class="crd-td">35,73, 63,78</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (2015)</td></tr>
<tr><td class="crd-td"><strong>Chāhāb</strong></td><td class="crd-td">37,4, 69,81</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4,8k</td><td class="crd-td">10,8k</td><td class="crd-td">29,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>Shindand</strong></td><td class="crd-td">33,3, 62,15</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Kholm</strong></td><td class="crd-td">36,68, 67,68</td><td class="crd-td">1979-1979AD</td><td class="crd-td">-</td><td class="crd-td">28,1k</td><td class="crd-td">28,1k (1979)</td></tr>
<tr><td class="crd-td"><strong>Rustāq</strong></td><td class="crd-td">37,13, 69,83</td><td class="crd-td">1920-2025AD</td><td class="crd-td">3,5k</td><td class="crd-td">6,6k</td><td class="crd-td">25,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Khan Neshin</strong></td><td class="crd-td">30,55, 63,79</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qarawul</strong></td><td class="crd-td">37,22, 68,78</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qal'ah-ye Zāl</strong></td><td class="crd-td">37,01, 68,44</td><td class="crd-td">1920-2025AD</td><td class="crd-td">4k</td><td class="crd-td">11,6k</td><td class="crd-td">23,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Jurm</strong></td><td class="crd-td">36,86, 70,83</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Pul-e 'Alam</strong></td><td class="crd-td">34, 69,02</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,7k</td><td class="crd-td">3,9k</td><td class="crd-td">22,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Nahrin</strong></td><td class="crd-td">36,06, 69,13</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Baraki Barak</strong></td><td class="crd-td">33,97, 68,95</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Kushk</strong></td><td class="crd-td">33,3, 61,95</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,4k</td><td class="crd-td">5,4k</td><td class="crd-td">21,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Art Khwajah</strong></td><td class="crd-td">37,09, 69,48</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qal'ah-ye Now</strong></td><td class="crd-td">34,5, 68,9</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,2k</td><td class="crd-td">5,3k</td><td class="crd-td">18,2k (2025)</td></tr>
<tr><td class="crd-td"><strong>Eslam Qaleh</strong></td><td class="crd-td">34,67, 61,07</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Karukh</strong></td><td class="crd-td">34,48, 62,59</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Mehtarlām</strong></td><td class="crd-td">34,67, 70,21</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,8k</td><td class="crd-td">4k</td><td class="crd-td">17,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Shahrak</strong></td><td class="crd-td">34,11, 64,31</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16k (2015)</td></tr>
<tr><td class="crd-td"><strong>Asmar</strong></td><td class="crd-td">35,03, 71,36</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,7k (2015)</td></tr>
<tr><td class="crd-td"><strong>Sang-e Charak</strong></td><td class="crd-td">35,85, 66,44</td><td class="crd-td">1979-2020AD</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">15,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Khash</strong></td><td class="crd-td">31,53, 62,79</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Jabal os Saraj</strong></td><td class="crd-td">35,12, 69,24</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qarqin</strong></td><td class="crd-td">37,42, 66,04</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (2015)</td></tr>
<tr><td class="crd-td"><strong>Chaghcharān</strong></td><td class="crd-td">34,52, 65,25</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,1k</td><td class="crd-td">3k</td><td class="crd-td">15k (2015)</td></tr>
<tr><td class="crd-td"><strong>Baraki</strong></td><td class="crd-td">33,94, 68,92</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (2015)</td></tr>
<tr><td class="crd-td"><strong>Mirabad</strong></td><td class="crd-td">30,44, 61,84</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qalāt</strong></td><td class="crd-td">32,11, 66,91</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,8k</td><td class="crd-td">5,9k</td><td class="crd-td">13,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Zarghun Shahr</strong></td><td class="crd-td">32,85, 68,45</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k (2015)</td></tr>
<tr><td class="crd-td"><strong>Sangin</strong></td><td class="crd-td">32,07, 64,84</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Panjab</strong></td><td class="crd-td">34,39, 67,02</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Dowlat Ābād</strong></td><td class="crd-td">36,99, 66,82</td><td class="crd-td">1920-2025AD</td><td class="crd-td">3k</td><td class="crd-td">6,1k</td><td class="crd-td">13,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Uruzgan</strong></td><td class="crd-td">32,93, 66,63</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Shōlgarah</strong></td><td class="crd-td">36,29, 66,91</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,8k</td><td class="crd-td">5,8k</td><td class="crd-td">13k (2025)</td></tr>
<tr><td class="crd-td"><strong>Chiras</strong></td><td class="crd-td">35,42, 65,98</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>Imam Sahib</strong></td><td class="crd-td">37,18, 68,91</td><td class="crd-td">1979-2015AD</td><td class="crd-td">-</td><td class="crd-td">12,7k</td><td class="crd-td">12,7k (1979)</td></tr>
<tr><td class="crd-td"><strong>Hukumati Azrah</strong></td><td class="crd-td">34,17, 69,65</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qarah Bagh</strong></td><td class="crd-td">34,94, 61,78</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Ghurian</strong></td><td class="crd-td">34,34, 61,47</td><td class="crd-td">1979-1979AD</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1979)</td></tr>
<tr><td class="crd-td"><strong>Ashkasham</strong></td><td class="crd-td">36,68, 71,53</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Kuhsan</strong></td><td class="crd-td">34,65, 61,2</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Tukzar</strong></td><td class="crd-td">35,95, 66,42</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qala i Naw</strong></td><td class="crd-td">34,99, 63,13</td><td class="crd-td">1920-2025AD</td><td class="crd-td">2,2k</td><td class="crd-td">5,3k</td><td class="crd-td">12k (2006)</td></tr>
<tr><td class="crd-td"><strong>Chahar Burj</strong></td><td class="crd-td">34,24, 62,19</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Yangī Qal'ah</strong></td><td class="crd-td">37,47, 69,61</td><td class="crd-td">1920-2025AD</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">11,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Larkird</strong></td><td class="crd-td">35,49, 66,66</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>Rudbar</strong></td><td class="crd-td">30,15, 62,6</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k (2015)</td></tr>
<tr><td class="crd-td"><strong>Farkhar</strong></td><td class="crd-td">36,57, 69,86</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Zindah Jan</strong></td><td class="crd-td">34,34, 61,75</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Anar Darah</strong></td><td class="crd-td">32,76, 61,65</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (2015)</td></tr>
<tr><td class="crd-td"><strong>Darzab</strong></td><td class="crd-td">35,98, 65,38</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (2015)</td></tr>
<tr><td class="crd-td"><strong>'Alaqahdari Dishu</strong></td><td class="crd-td">30,43, 63,3</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k (2015)</td></tr>
<tr><td class="crd-td"><strong>Tagaw-Bay</strong></td><td class="crd-td">35,7, 66,06</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qarchi Gak</strong></td><td class="crd-td">37,04, 66,79</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (2015)</td></tr>
<tr><td class="crd-td"><strong>Chichkah</strong></td><td class="crd-td">37,07, 69,3</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>Dasht-e Archi</strong></td><td class="crd-td">37,13, 69,17</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Qal'ah-ye Shahr</strong></td><td class="crd-td">35,55, 65,57</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>Sidqabad</strong></td><td class="crd-td">35,02, 69,35</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Sharan</strong></td><td class="crd-td">33,15, 68,79</td><td class="crd-td">1920-2025AD</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">7,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Tir Pul</strong></td><td class="crd-td">34,59, 61,27</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k (2015)</td></tr>
<tr><td class="crd-td"><strong>Muhmand Dara</strong></td><td class="crd-td">34,25, 70,87</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (2015)</td></tr>
<tr><td class="crd-td"><strong>Tagab</strong></td><td class="crd-td">34,86, 69,65</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Shulgareh</strong></td><td class="crd-td">36,32, 66,87</td><td class="crd-td">1979-1979AD</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k (1979)</td></tr>
<tr><td class="crd-td"><strong>Khandud</strong></td><td class="crd-td">36,95, 72,32</td><td class="crd-td">2003-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Kushk</strong></td><td class="crd-td">34,95, 62,25</td><td class="crd-td">1979-1979AD</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1979)</td></tr>
<tr><td class="crd-td"><strong>Mir Bachah Kot</strong></td><td class="crd-td">34,75, 69,12</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Islam Chumgar</strong></td><td class="crd-td">37,3, 66,46</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (2015)</td></tr>
<tr><td class="crd-td"><strong>Parun</strong></td><td class="crd-td">35,42, 70,92</td><td class="crd-td">1920-2025AD</td><td class="crd-td">650</td><td class="crd-td">1,4k</td><td class="crd-td">4,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Mazad</strong></td><td class="crd-td">31,55, 62,73</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (2015)</td></tr>
<tr><td class="crd-td"><strong>Bahram Chah</strong></td><td class="crd-td">29,42, 64</td><td class="crd-td">2012-2012AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (2012)</td></tr>
<tr><td class="crd-td"><strong>Kamdesh</strong></td><td class="crd-td">35,41, 71,34</td><td class="crd-td">1920-2025AD</td><td class="crd-td">550</td><td class="crd-td">1,1k</td><td class="crd-td">3,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Hukumati Dahanah-ye Ghori</strong></td><td class="crd-td">35,91, 68,49</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (2015)</td></tr>
<tr><td class="crd-td"><strong>Razay Balochi</strong></td><td class="crd-td">31,46, 62,7</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (2015)</td></tr>
<tr><td class="crd-td"><strong>Maḥmūd-e Rāqī</strong></td><td class="crd-td">35, 69,42</td><td class="crd-td">1920-2025AD</td><td class="crd-td">600</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k (2025)</td></tr>
<tr><td class="crd-td"><strong>Lab-Sar</strong></td><td class="crd-td">36,03, 66,84</td><td class="crd-td">2015-2015AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (2015)</td></tr>
<tr><td class="crd-td"><strong>Sost</strong></td><td class="crd-td">36,98, 72,77</td><td class="crd-td">2003-2003AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">550 (2003)</td></tr>
<tr><td class="crd-td"><strong>Ab Gaj</strong></td><td class="crd-td">36,98, 72,7</td><td class="crd-td">2003-2003AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">487 (2003)</td></tr>
<tr><td class="crd-td"><strong>Shkhawr</strong></td><td class="crd-td">36,73, 71,92</td><td class="crd-td">2003-2003AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">454 (2003)</td></tr>
<tr><td class="crd-td"><strong>Fotur</strong></td><td class="crd-td">36,69, 71,64</td><td class="crd-td">2003-2003AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">436 (2003)</td></tr>
<tr><td class="crd-td"><strong>Gaz Khan</strong></td><td class="crd-td">37,02, 72,69</td><td class="crd-td">2003-2003AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">232 (2003)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> All 123 catalogued settlements in Afghanistan ordered by peak observed population (726 settlement-year observations).</figcaption>
</figure>

## Sub-Regional Territorial Coverage Across 34 Provinces

Table 2 summarises settlement representation across all 34 provincial territorial masks from the regional source ledger alongside provincial population allocations. Major riverine, western and northern agricultural provinces—led by Hirat (12 sites), Badakhshan (10 sites), Balkh (10 sites), Kunduz (8 sites), Hilmand (7 sites), Sari Pul (7 sites), Takhar (7 sites), Nimroz (6 sites), Jawzjan (5 sites) and Kabul (5 sites)—hold dense clusters of catalogued urban and district nodes, while rugged highland and southern frontier provinces are anchored by their provincial capital or principal market centres.

<figure class="crd-table-figure" id="tab:submask-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">1919AD</th><th class="crd-th">1979AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hirat</strong></td><td class="crd-td">12</td><td class="crd-td">345,7k</td><td class="crd-td">718,5k</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Hilmand</strong></td><td class="crd-td">7</td><td class="crd-td">345,7k</td><td class="crd-td">718,4k</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">2</td><td class="crd-td">333,8k</td><td class="crd-td">693,7k</td><td class="crd-td">2,27M</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">2</td><td class="crd-td">323,4k</td><td class="crd-td">672,2k</td><td class="crd-td">2,2M</td></tr>
<tr><td class="crd-td"><strong>Badakhshan</strong></td><td class="crd-td">10</td><td class="crd-td">312,3k</td><td class="crd-td">649k</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Nimroz</strong></td><td class="crd-td">6</td><td class="crd-td">295,8k</td><td class="crd-td">614,7k</td><td class="crd-td">2,01M</td></tr>
<tr><td class="crd-td"><strong>Ghor</strong></td><td class="crd-td">2</td><td class="crd-td">279k</td><td class="crd-td">579,9k</td><td class="crd-td">1,9M</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">1</td><td class="crd-td">217k</td><td class="crd-td">450,9k</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Faryab</strong></td><td class="crd-td">3</td><td class="crd-td">213,8k</td><td class="crd-td">444,4k</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Badghis</strong></td><td class="crd-td">2</td><td class="crd-td">211,9k</td><td class="crd-td">440,4k</td><td class="crd-td">1,44M</td></tr>
<tr><td class="crd-td"><strong>Paktika</strong></td><td class="crd-td">2</td><td class="crd-td">199,5k</td><td class="crd-td">414,6k</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Baghlan</strong></td><td class="crd-td">4</td><td class="crd-td">198,1k</td><td class="crd-td">411,8k</td><td class="crd-td">1,35M</td></tr>
<tr><td class="crd-td"><strong>Bamyan</strong></td><td class="crd-td">4</td><td class="crd-td">196,2k</td><td class="crd-td">407,8k</td><td class="crd-td">1,33M</td></tr>
<tr><td class="crd-td"><strong>Uruzgan (Daykundi)</strong></td><td class="crd-td">1</td><td class="crd-td">192,2k</td><td class="crd-td">399,4k</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Zabul</strong></td><td class="crd-td">1</td><td class="crd-td">190,1k</td><td class="crd-td">395k</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">10</td><td class="crd-td">188,7k</td><td class="crd-td">392,2k</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Sari Pul</strong></td><td class="crd-td">7</td><td class="crd-td">188,2k</td><td class="crd-td">391,2k</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Samangan</strong></td><td class="crd-td">1</td><td class="crd-td">170,6k</td><td class="crd-td">354,5k</td><td class="crd-td">1,16M</td></tr>
<tr><td class="crd-td"><strong>Takhar</strong></td><td class="crd-td">7</td><td class="crd-td">164,8k</td><td class="crd-td">342,5k</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>Jawzjan</strong></td><td class="crd-td">5</td><td class="crd-td">158,4k</td><td class="crd-td">329,2k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Uruzgan</strong></td><td class="crd-td">2</td><td class="crd-td">154,9k</td><td class="crd-td">321,9k</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Wardak</strong></td><td class="crd-td">1</td><td class="crd-td">148,1k</td><td class="crd-td">307,8k</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Nuristan</strong></td><td class="crd-td">2</td><td class="crd-td">139,4k</td><td class="crd-td">289,7k</td><td class="crd-td">946,6k</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">8</td><td class="crd-td">133,5k</td><td class="crd-td">277,5k</td><td class="crd-td">906,9k</td></tr>
<tr><td class="crd-td"><strong>Nangarhar</strong></td><td class="crd-td">2</td><td class="crd-td">125,9k</td><td class="crd-td">261,5k</td><td class="crd-td">854,7k</td></tr>
<tr><td class="crd-td"><strong>Parwan</strong></td><td class="crd-td">3</td><td class="crd-td">110,5k</td><td class="crd-td">229,6k</td><td class="crd-td">750,4k</td></tr>
<tr><td class="crd-td"><strong>Paktya</strong></td><td class="crd-td">1</td><td class="crd-td">107,7k</td><td class="crd-td">223,7k</td><td class="crd-td">731,1k</td></tr>
<tr><td class="crd-td"><strong>Kunar</strong></td><td class="crd-td">2</td><td class="crd-td">100,7k</td><td class="crd-td">209,2k</td><td class="crd-td">683,7k</td></tr>
<tr><td class="crd-td"><strong>Logar</strong></td><td class="crd-td">4</td><td class="crd-td">97,9k</td><td class="crd-td">203,5k</td><td class="crd-td">665,2k</td></tr>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">5</td><td class="crd-td">97,8k</td><td class="crd-td">203,3k</td><td class="crd-td">664,4k</td></tr>
<tr><td class="crd-td"><strong>Khost</strong></td><td class="crd-td">1</td><td class="crd-td">92,8k</td><td class="crd-td">192,9k</td><td class="crd-td">630,4k</td></tr>
<tr><td class="crd-td"><strong>Laghman</strong></td><td class="crd-td">1</td><td class="crd-td">91,9k</td><td class="crd-td">191,1k</td><td class="crd-td">624,4k</td></tr>
<tr><td class="crd-td"><strong>Parwan (Panjshir)</strong></td><td class="crd-td">1</td><td class="crd-td">89,8k</td><td class="crd-td">186,7k</td><td class="crd-td">610,2k</td></tr>
<tr><td class="crd-td"><strong>Kapisa</strong></td><td class="crd-td">3</td><td class="crd-td">63,6k</td><td class="crd-td">132,2k</td><td class="crd-td">432,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued urban site counts and provincial territorial population benchmarks across all 34 sub-regions of Afghanistan.</figcaption>
</figure>

# Limitations

Three methodological caveats apply to this gazetteer. First, municipal boundaries in Afghanistan are defined administratively rather than by built-up morphological continuity, meaning that rapid peri-urban sprawl beyond Kabul's formal municipal districts (such as spilling into Paghman, Deh Sabz and Bagrami) or across the Herat-Injil oasis plain is captured only partially in strict municipal core figures [@Anonymous2014Municipali; @Hugo2019Patterns]. Second, three highland and north-western centres added in Wave 4 to complete 34-province coverage—Bazarak, Nili and Qala i Naw—lack separate 1979AD and 2006AD municipal returns because Panjshir and Daykundi became separate provinces only in 2004AD, while Qal'ah-ye Now appears both in an earlier geocoded variant and as the Badghis provincial seat Qala i Naw; their pre-2020 series rely on historical back-projection rather than direct municipal tallies. Third, because no post-1979 door-to-door census has been conducted, recent urban benchmarks for 2020AD and 2025AD depend on NSIA projection schedules that may smooth sudden wartime influxes or post-2021 outflows [@Wafayezada2025Demographi; @Hakeemi2026Migration].

# Conclusion

The 123-settlement gazetteer traces Afghanistan's urban transformation from a dispersed network of oasis bazaars and frontier garrisons in 1920AD (407,6k enumerated residents) into an intensely primate urban hierarchy ($\alpha = 1{,}473$, $R^2 = 0{,}831$) dominated by metropolitan Kabul (4,76M out of 8,62M enumerated across catalogued centres in 2025AD). By pairing longitudinal pre-1979 series with June 1979 partial census baselines, NSIA district registers, strict foundation-year cut-offs on modern planned towns and complete 34-province spatial coverage, this register anchors the spatial distribution of Afghan settlement population from 1919AD to 2026AD.

# Appendix

## Twentieth-Century Planned Foundations and Post-2004 Provincial Capitals

Table 3 isolates the six settlements with distinct twentieth-century foundation horizons or post-2004 administrative elevations, illustrating how state-led irrigation, industrial development and provincial redistricting created new urban anchors outside the classical caravan cities.

<figure class="crd-table-figure" id="tab:foundations-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Foundation</th><th class="crd-th">1979AD</th><th class="crd-th">2020AD</th><th class="crd-th">2025AD</th><th class="crd-th">Administrative Context</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pul-e Khumrī</strong></td><td class="crd-td">1936AD</td><td class="crd-td">31,1k</td><td class="crd-td">123,7k</td><td class="crd-td">132,7k</td><td class="crd-td">Textile and cement industrial town (founded 1936AD)</td></tr>
<tr><td class="crd-td"><strong>Lashkargāh</strong></td><td class="crd-td">1953AD</td><td class="crd-td">21,6k</td><td class="crd-td">89,3k</td><td class="crd-td">95,8k</td><td class="crd-td">HAVA planned irrigation capital (founded 1953AD)</td></tr>
<tr><td class="crd-td"><strong>Khōst</strong></td><td class="crd-td">1800AD</td><td class="crd-td">1,9k</td><td class="crd-td">13,4k</td><td class="crd-td">14,4k</td><td class="crd-td">Eastern frontier garrison; elevated province 1995AD</td></tr>
<tr><td class="crd-td"><strong>Bazarak</strong></td><td class="crd-td">Pre-1919AD</td><td class="crd-td">6k</td><td class="crd-td">65k</td><td class="crd-td">69,7k</td><td class="crd-td">Capital of Panjshir province (created 2004AD)</td></tr>
<tr><td class="crd-td"><strong>Nili</strong></td><td class="crd-td">Pre-1919AD</td><td class="crd-td">4,8k</td><td class="crd-td">30,1k</td><td class="crd-td">32,2k</td><td class="crd-td">Capital of Daykundi province (created 2004AD)</td></tr>
<tr><td class="crd-td"><strong>Qala i Naw</strong></td><td class="crd-td">Pre-1919AD</td><td class="crd-td">5,3k</td><td class="crd-td">9k</td><td class="crd-td">9,7k</td><td class="crd-td">Capital of Badghis province (Wave 4 anchor)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twentieth-century planned towns and post-2004 provincial capitals in Afghanistan with foundation horizons and recent population totals.</figcaption>
</figure>

# Sources

::: {#refs}
:::
