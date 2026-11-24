---
title: "Durrani and Barakzai Afghanistan until 1919"
subtitle: "Settlement Gazetteer of Oasis Centres, Bazaars and Mountain Hubs, 1747AD to 1919AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: durrani_barakzai_afghanistan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_durrani_barakzai_afghanistan_spatial.png"
hero_caption: "Spatial distribution of 75 catalogued settlements across five subregions of Durrani and Barakzai Afghanistan, 1747AD to 1919AD."
hero_label: "fig:hero-durrani-settlements"
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

This gazetteer catalogues 75 urban settlements, oasis market towns and historical site nodes active within Durrani and Barakzai Afghanistan between 1747AD and 1919AD across a 641.887 km² domain partitioned into five hydrological subregions. Synthesised from national census backprojections, nineteenth-century administrative registers and historical geographic compendia [@Bosworth2007Historic; @Kakar1968Consolidat; @Lally2018Beyond; @Lally2020Landscape; @Runfola2020GeoBoundaries], the settlement ledger evaluates 84 candidate entries, retaining 75 active nodes and excluding 9 entries comprising two twentieth-century post-domain canal towns, six subordinate suburban clusters within 2 km of primary urban cores and one variant-spelling alias. The urban hierarchy exhibits pronounced primacy centred on Kābul (398.982 inhabitants in 1910AD), followed by Kandahār (77.951), Herāt (61.310), Mazār-e Sharīf (45.166), Jalālābād (23.557), Kunduz (23.267), Baghlān (17.140), Meymaneh (16.713) and Ghaznī (13.293), yielding a Zipf rank-size exponent of $\alpha = 1,116$ ($R^2 = 0,857$). Subregional allocation places 41 catalogued entries across Afghan Turkestan, 16 in Kabul and the Eastern Provinces, 13 across Kandahar and Helmand, 3 in the Hazarajat and Central Highlands and 2 in Herat and the Western Provinces. Alongside modern district benchmarks from 355 geoBoundaries ADM2 polygons, the gazetteer anchors spatial population surfaces while documenting underlying archival consolidation rules and coordinate caveats.

# Background

Urban settlement in eighteenth- and nineteenth-century Afghanistan was overwhelmingly an oasis and caravan phenomenon [@Bosworth2007Historic; @Rezvan2012Physical; @Lally2020Landscape]. Across an arid plateau bisected by the Hindu Kush, cities survived only where perennial snowmelt rivers or engineered *karez* systems guaranteed year-round irrigation for orchards, grain fields and urban gardens [@Anonymous2015Rural; @Akbari2024Research]. Consequently, the country's principal towns functioned simultaneously as agrarian collection hubs, fortified provincial seats and caravanserai junctions linking Central Asia, Khorasan and the Indus plains [@Lally2018Beyond; @Khan2022Good; @Nourzhanov2013Tajikistan].

Four functional settlement tiers structured the Afghan urban landscape between 1747AD and 1919AD. At the summit stood the dynastic and regional capitals: Kandahār (rebuilt by Ahmad Shah Durrani after 1747AD on a walled four-quarter grid fed by Arghandab canals), Kābul (elevated to royal seat by Timur Shah in 1775AD and fortified around the Bala Hisar) and Herāt (the western Timurid-Safavid bastion commanding the Hari Rud plain) [@Lally2018Beyond; @Dzhandosova2023Reign; @MacLeod2020Iran; @Bosworth2007Historic]. Below them sat northern shrine and oasis capitals—most notably Mazār-e Sharīf, which eclipsed ancient Balkh in the mid-nineteenth century as Barakzai governors shifted administration away from malarial ruins—together with Kunduz, Khulm, Meymaneh, Andkhōy and Sheberghān across Afghan Turkestan [@Nourzhanov2013Tajikistan; @Fitzhardinge1968Establishm; @Bosworth2007Historic].

A third tier comprised strategic pass towns and *karez* market hubs guarding internal trade corridors: Jalālābād and Mehtarlām on the Kabul–Peshawar descent, Chārīkār and Paghmān in the Kohdaman foothills, Ghaznī and Qalāt along the Kabul–Kandahar trunk road, and Farāh, Gereshk and Zaranj across the southern Helmand–Sistan arc [@Lally2020Landscape; @Khan2022Good; @Kakar1968Consolidat]. Finally, remote upland valleys such as Bāmyān, Chaghcharān, Fayzābād, Gardēz, Khōst, Parun and Kamdesh sustained small administrative garrisons and seasonal barter centres serving surrounding pastoral and mountain-farming lineages [@Rahil2026Communicat; @Kakar1968Consolidat].

# Methodology

Candidate settlements were assembled through a four-wave saturation protocol documented in the chapter source ledger. Wave 1 ingested 48 primary urban and provincial centres anchored to National Statistics and Information Authority (NSIA) enumerations and longitudinal nineteenth-century historical backprojections [@Kakar1968Consolidat; @Runfola2020GeoBoundaries]. Wave 2 added 27 historical and archaeological gazetteer entries drawn from classical and regional site compendia across the Oxus, Kabul and Arghandab basins [@Bosworth2007Historic]. Waves 3 and 4 audited longitudinal continuity, geographic bounds and cross-subregion completeness across all five areal masks, yielding zero marginal additions (0% gain) and confirming asymptotic saturation across 84 total evaluated candidate records.

Deduplication and boundary rules enforced three exclusion criteria. First, candidate towns founded after the 1919AD terminal boundary—specifically Pul-e Khumrī (founded 1936) and Lashkargāh (founded 1953 during the Helmand Valley irrigation project)—were excluded as post-domain foundations. Second, six ancient or suburban nuclei located within 2 km of primary urban cores (including Alexandria Ariorum near Herāt, Bactra near Balkh, Cartana near Bagram–Chārīkār, Farah Bala Hisar, Phra and the un-diacriticised Jalālābād doublet) were merged into their host centres to prevent double-counting. Third, one un-diacriticised variant alias (Kabul) was consolidated into canonical Kābul. Every retained entry carries WGS84 coordinates, a dated population series spanning part or all of 1747AD to 1910AD and an explicit subregion assignment.

# Testing and Validation

Source ledger reconciliation confirms exact accounting across all 84 evaluated entities: 75 included settlements (48 from Wave 1 and 27 from Wave 2) plus 9 excluded entries, leaving zero unaccounted candidates. All five hydrological subregions exhibit non-zero settlement coverage in the source ledger (41 in Afghan Turkestan, 16 in Kabul and the Eastern Provinces, 13 in Kandahar and Helmand, 3 in the Hazarajat and Central Highlands and 2 in Herat and the Western Provinces).

Figure \ref{fig:sett-gazetteer} displays the rank-size hierarchy of the 75 catalogued settlements alongside the ordinary least-squares Zipf fit ($\alpha = 1,116$, $R^2 = 0,857$). The upper distribution closely follows log-linear primate scaling from Kābul (398.982) through Kandahār (77.951), Herāt (61.310) and Mazār-e Sharīf (45.166) down to Qal'ah-ye Zāl (5.082), while the mid-table plateau near 5k reflects inherited Wave 2 ancient mound anchors.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-durrani-barakzai-afghanistan-settlements/fig4_durrani_barakzai_afghanistan_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading catalogued settlements across Durrani and Barakzai Afghanistan through 1919AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-afg} lists the 45 largest settlements in the gazetteer ordered by peak documented population between 1747AD and 1910AD. All twenty leading modern regional centres—from Kābul and Kandahār down to Ghōrīān—attain their chapter peaks in 1910AD under late Barakzai administration, whereas the mid-table Wave 2 historical mound anchors cluster around 4.965 to 5.129 across 1747AD to 1900AD.

<figure class="crd-table-figure" id="tab:top45-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Subregion</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kābul</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,53, 69,17</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">399k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kandahār</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,61, 65,71</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">78k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Herāt</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">34,35, 62,2</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">61,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Mazār-e Sharīf</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,71, 67,11</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">45,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Jalālābād</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,43, 70,45</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">23,6k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,73, 68,86</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">23,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Baghlān</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,13, 68,71</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">17,1k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Meymaneh</strong></td><td class="crd-td">Hazarajat Highlands</td><td class="crd-td">35,5, 67,64</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">16,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Ghaznī</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">33,55, 68,42</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">13,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Khulm</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,7, 67,7</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">12,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Khān Ābād</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,68, 69,11</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">11,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Chārīkār</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">35,01, 69,17</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">9,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Tāluqān</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,46, 65,33</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">8,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Paghmān</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,59, 68,95</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">8,4k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Sheberghān</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,59, 65,75</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">8,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Farāh</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">32,37, 62,12</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">8,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Sar-e Pul</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,22, 65,93</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">6,9k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Andkhōy</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,95, 65,12</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">5,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Ḥazrat-e Imām Ṣāḥib</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,19, 68,94</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">5,5k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Ghōrīān</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">32,56, 64,43</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">5,4k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Hadda</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,37, 70,47</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Sharawan Gur tepe</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,07, 69,28</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Siah Rigan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,89, 67,69</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Uljatu</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,75, 67,66</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Utaq</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37, 69,18</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Qal'ah-ye Zāl</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,01, 68,44</td><td class="crd-td">1747AD to 1910AD</td><td class="crd-td">5,1k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Kampir-Tepe</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,41, 67,03</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,99, 69,31</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Ai Khanoum</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,17, 69,41</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Aornos</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,68, 67,68</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Takht-i Sangin</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,1, 68,29</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,6, 65,66</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Qurghan tepe</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,71, 69,5</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Samti</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,58, 69,85</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Tarmita</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,26, 67,19</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Zard Kamar</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,46, 69,67</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Zulm</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,17, 69,52</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Bigis</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,51, 64,36</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Arachosiorum Oppidum</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">33,5, 68,39</td><td class="crd-td">1747AD to 1900AD</td><td class="crd-td">5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Chim Qurghan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,1, 69,35</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Khusti Qishlaq</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,76, 69,41</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Tam'ali</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,04, 69,48</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Tepe Ahingaran</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,73, 68,89</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Tepe Qarya-i Afghan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,22, 69,21</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Tepe Shaidan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,73, 67,83</td><td class="crd-td">1900AD</td><td class="crd-td">5k (1900AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Durrani and Barakzai Afghanistan ordered by peak documented population (75 total entries).</figcaption>
</figure>

## Subregional Distribution and Ledger Exclusions

Table \ref{tab:regsum-afg} summarises the subregional count of catalogued settlements alongside the leading urban centre in each of the five hydrological territories. Afghan Turkestan accounts for over half of all catalogued sites (41 of 75) owing to dense Bactrian archaeological mounds along the Amu Darya and Kokcha valleys as well as the oasis belt from Meymaneh to Kunduz. Kabul and the Eastern Provinces ranks second (16 settlements, anchored by Kābul at 399k), followed by Kandahar and Helmand (13 settlements, led by Kandahār at 78k). Table \ref{tab:excluded-afg} documents all 9 candidate records excluded during source ledger audit.

<figure class="crd-table-figure" id="tab:regsum-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul and Eastern Provinces</strong></td><td class="crd-td">16</td><td class="crd-td">Kābul (399k)</td></tr>
<tr><td class="crd-td"><strong>Kandahar and Helmand</strong></td><td class="crd-td">13</td><td class="crd-td">Kandahār (78k)</td></tr>
<tr><td class="crd-td"><strong>Afghan Turkestan (Balkh and Badakhshan)</strong></td><td class="crd-td">41</td><td class="crd-td">Mazār-e Sharīf (45,2k)</td></tr>
<tr><td class="crd-td"><strong>Herat and Western Provinces</strong></td><td class="crd-td">2</td><td class="crd-td">Herāt (61,3k)</td></tr>
<tr><td class="crd-td"><strong>Hazarajat and Central Highlands</strong></td><td class="crd-td">3</td><td class="crd-td">Meymaneh (16,7k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts and leading urban centres across five Afghan subregions (75 total entries).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Country</th><th class="crd-th">Classification</th><th class="crd-th">Audit Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lashkargāh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Post-1919AD foundation</td><td class="crd-td">Settlement foundation_year (1953) post-dates chapter domain [1747, 1919].</td></tr>
<tr><td class="crd-td"><strong>Pul-e Khumrī</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Post-1919AD foundation</td><td class="crd-td">Settlement foundation_year (1936) post-dates chapter domain [1747, 1919].</td></tr>
<tr><td class="crd-td"><strong>Jalālābād</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
<tr><td class="crd-td"><strong>Phra</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Cartana</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
<tr><td class="crd-td"><strong>Alexandria Ariorum</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
<tr><td class="crd-td"><strong>Bactra</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
<tr><td class="crd-td"><strong>Farah Bala Hisar</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2 km core</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Afghanistan.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 9 excluded candidate entries documented in the Afghan settlement source ledger.</figcaption>
</figure>

# Limitations

Four technical caveats qualify interpretation of the 75-settlement register. First, twenty-seven entries ingested from Wave 2 historical and archaeological gazetteers (including Ai Khanoum, Takht-i Sangin, Kampir-Tepe, Aornos, Hadda, Arachosiorum Oppidum and nine Oxus *tepe* mounds) carry uniform c. 4.965 to 5.129 baseline anchors across 1747AD to 1900AD rather than nineteenth-century bazaar counts, slightly exaggerating site counts in Afghan Turkestan relative to western and central Afghanistan [@Bosworth2007Historic]. Second, Kābul's individual series displays a transient 4.965 dip across 1750AD to 1800AD between its 1747AD (58.757) and 1830AD (152.767) benchmarks, reflecting an early backprojection splice rather than historical depopulation after Timur Shah's 1775AD transfer of the royal court [@Dzhandosova2023Reign; @Lally2018Beyond].

Third, four historical toponyms inherit geocoding offsets relative to their provincial namesakes in the WGS84 coordinate field: Meymaneh (35,5°N, 67,64°E) plots inside the central northern highlands rather than Faryab, Tāluqān (31,46°N, 65,33°E) plots in Kandahar rather than Takhar, Ghōrīān (32,56°N, 64,43°E) plots in Helmand rather than western Herat and Qal'ah-ye Now (34,5°N, 68,9°E) plots in the Kabul periphery rather than Badghis. Finally, pre-1919AD settlement totals omit dispersed nomadic *kuchi* encampments and minor highland hamlets, which are instead captured within subregional rural carrying-capacity aggregates [@Anonymous2015Rural; @Kakar1968Consolidat].

# Conclusion

The 75 catalogued settlements of Durrani and Barakzai Afghanistan capture an enduring spatial skeleton anchored on the Kābul–Kandahār–Herāt–Mazār-e Sharīf ring and the Amu Darya oasis piedmont. Despite recurrent succession wars, foreign invasions and frontier delimitations between 1747AD and 1919AD, every major regional node expanded substantially by 1910AD, led by Kābul's rise toward 400k inhabitants and the commercial consolidation of northern oasis towns under Barakzai administration. Paired with the 355 modern ADM2 district baselines and the regional Matérn habitability surface, this settlement gazetteer provides the point-level foundation for subnational population reconstruction across pre-independence Afghanistan.

# Appendix

All settlement coordinates conform to the WGS84 geographic datum (decimal degrees presented with European decimal commas in tabular outputs). Historical toponyms follow standard BGN/PCGN and ALA-LC Latin romanisation with full diacritics preserved (Kābul, Kandahār, Herāt, Mazār-e Sharīf, Jalālābād, Ghaznī, Bāmyān, Fayzābād, Ḥazrat-e Imām Ṣāḥib) for consistent rendering in XeLaTeX. Subregional assignment follows the five-arcminute hydrological partition defined in the chapter regional register, with three Oxus-bank Bactrian archaeological sites (Kampir-Tepe, Takht-i Sangin, Tarmita) grouped into Afghan Turkestan in alignment with the source ledger coverage audit.

# Sources

<div id="refs"></div>
