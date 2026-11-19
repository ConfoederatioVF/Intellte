---
title: "Arizona Hydrological Unit (HU 15): Demographic Reconstruction"
subtitle: "CENTAUR-II: Hohokam Irrigation, Mogollon Rim and Lower Colorado Series, 10.000BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arizona_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arizona_spatial.png"
hero_caption: "Sub-regional areal masks and excavated settlement centres across Arizona Hydrological Unit 15 (363,8k km2), spanning the Little Colorado Plateau, Salt-Gila Hohokam canals, Tucson Basin and Lower Colorado corridor."
hero_label: "fig:hero-arizona"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This paper reconstructs the human population of Arizona Hydrological Unit 15 (363.784 km² across 5.109 5-arcminute grid cells) from 10.000BC to 1600AD [@kelly2025; @seaber1987hydrologic]. Spanning the Little Colorado and Hopi Mesas Plateau, the Salt-Verde-Middle Gila Phoenix Basin, the Santa Cruz-San Pedro highlands and the Lower Colorado Sonoran corridor, HU 15 sustained North America's largest pre-Columbian canal-irrigation networks alongside upland Puebloan towns [@haury1976hohokam; @fish2007hohokam; @adams2002homolovi]. Integrating N = 2.116 radiocarbon dates from Kelly et al. with non-stationary Matérn ($\nu = 3/2$) kriging and architectural room-count anchors, regional population grew from 800 (736-864) in 10.000BC to 72,7k (66,9-78,5k) in 0AD and peaked at 156,9k (144,3-169,5k) in 1100AD, matching the Kelly et al. HU 15 median radiocarbon peak of 1078AD (872 cal BP) [@kelly2025]. Classic Period coalescence in the Phoenix Basin held population at 153,3k in 1200AD before canal-system destabilisation, drought and crowding-related disease reduced basin numbers to 97,4k in 1400AD and 76k (69,9-82,1k) by 1600AD [@hill2004southwest; @phillips2018village; @robinson2021dendro].



# Background

Arizona Hydrological Unit 15 drains the Lower Colorado basin below Lees Ferry together with the Gila, Salt, Verde, Bill Williams, Santa Cruz and Little Colorado rivers across Arizona, western New Mexico and southern Utah [@seaber1987hydrologic]. Ecological zonation runs from hyper-arid Sonoran creosote plains along the Colorado River through irrigated desert riverine terraces in the Phoenix and Tucson basins to piñon-juniper plateaus along the Mogollon Rim and Hopi Mesas [@fish2007hohokam; @adams2002homolovi].

Early maize cultivation entered the Santa Cruz and San Pedro valleys before 2000BC, underwriting sedentary pit-structure farming long before large ceramic villages appeared [@hill2004southwest]. From 400AD to 1100AD, Hohokam engineers excavated hundreds of kilometres of gravity-fed irrigation canals across the Salt and Middle Gila floodplains, supporting ballcourt towns such as Snaketown and Pueblo Grande [@haury1976hohokam; @fish2007hohokam]. After 1150AD, platform-mound compounds replaced ballcourts during the Classic Period while Hopi, Zuni and Mogollon Rim pueblos consolidated on defensible mesas and perennial springs [@adams2002homolovi; @nichols2019violence].

# Methodology

## Radiocarbon Calibration and Sub-Regional Partitioning

Temporal calibration uses the Kelly et al. IntCal20 radiocarbon distribution for HU 15 (N = 2.116 dates; error <= 100 years) [@kelly2025]. Because Arizona radiocarbon records in CARD are referenced to 1 x 1 degree grid cells rather than counties and over 90% of Arizona falls inside HU 15, Kelly et al. assign statewide dates directly to HU 15 [@kelly2025]. Across 500 running-mean windows, the HU 15 peak spans 833 to 991 cal BP (959-1117AD), with a first quartile at 857 cal BP (1093AD), a third quartile at 955 cal BP (995AD), a mean of 898 cal BP (1052AD) and a median peak of 872 cal BP (1078AD) [@kelly2025].

HU 15 is divided into four 5-arcminute areal masks totalling 5.109 cells (363.784 km²): Little Colorado and Hopi Mesas Plateau (175.270 km²), Salt-Verde-Middle Gila Core (79.768 km²), Santa Cruz, San Pedro and Cochise Highlands (65.588 km²) and Lower Colorado Corridor and Western Sonoran Desert (43.158 km²). Benchmark series from 10.000BC to 1600AD reconcile continental anchors [@mcevedy1978; @ubelaker2006; @kleingoldewijk2017] with Southwest room-count and canal-command demographic models [@hill2004southwest; @peros2010prehistoric].

## Dasymetric Kriging and Uncertainty Bounds

Spatial disaggregation applies Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) log-linear residual kriging over `p3k14c` site densities across ten Holocene horizons with a 300 km cross-frontier conditioning belt spanning Sonora, Baja California and neighbouring United States units [@bird2022p3k14c]. North American variograms ($\tau_1 = 1,25$, $\tau_2 = 2,6$) yield $R^2 = 0,9733$ to $0,9992$, with diagnostics stamped in GMT+0. Each benchmark carries a symmetric $\pm 8\%$ structural uncertainty interval.

<figure class="crd-table-figure" id="tab:subregions-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Grid Cells</th><th class="crd-th">Area (km2)</th><th class="crd-th">Bounding Box</th><th class="crd-th">Peak Year (Pop.)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado &amp; Hopi Mesas Plateau</strong></td><td class="crd-td">2.507</td><td class="crd-td">175.270</td><td class="crd-td">34,46-39,21N, 108,04-115,62W</td><td class="crd-td">1100AD (49k)</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">1.108</td><td class="crd-td">79.768</td><td class="crd-td">32,88-34,38N, 107,79-112,88W</td><td class="crd-td">1200AD (65k)</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro &amp; Cochise Highlands</strong></td><td class="crd-td">896</td><td class="crd-td">65.588</td><td class="crd-td">31,38-32,79N, 108,21-112,88W</td><td class="crd-td">1100AD (28,5k)</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor &amp; Western Sonoran Desert (Patayan/Yuman)</strong></td><td class="crd-td">598</td><td class="crd-td">43.158</td><td class="crd-td">31,96-34,38N, 112,96-115,29W</td><td class="crd-td">1100AD (16,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional areal masks, grid cells, land areas and peak population dates across Arizona HU 15.</figcaption>
</figure>

# Testing and Validation

Independent Southwest chronometric series confirm the HU 15 trajectory. First, the basin maximum of 156,9k in 1100AD stands within 22 years of the Kelly et al. radiocarbon median peak of 1078AD (872 cal BP) [@kelly2025]. Second, dendrochronological and ceramic seriation counts analysed by Robinson et al. and Hill et al. verify that late precontact demographic contraction began after 1200AD rather than representing an artefact of radiocarbon replacement [@robinson2021dendro; @hill2004southwest; @anyon2017mimbres].

Third, sub-regional divergence captures the Classic Hohokam peak at 1200AD (65k in the Salt-Verde-Middle Gila Core) followed by a 46,7% drop between 1300AD (60k) and 1400AD (32k), consistent with destructive Gila-Salt flood events, salinisation and endemic infectious crowding in platform-mound compounds [@hill2004southwest; @phillips2018village; @fish2007hohokam]. Source-ledger checks confirm all 14 included sites and 2 excluded candidates (`Ventana Cave` and `Cíbola`) with zero unaccounted entries.

# Results

## Long-Term Basin Trajectory

Population in HU 15 rose from 800 in 10.000BC to 13,1k in 5000BC and 38,5k in 2000BC as early floodplain maize supplemented Desert Archaic foraging (Figure \ref{fig:trajectory-arizona}). Expansion of sedentary pit-house villages and canal networks lifted basin population to 72,7k (66,9-78,5k) in 0AD, 101,5k in 400AD and 135,4k in 800AD [@haury1976hohokam; @hill2004southwest].

<figure class="crd-figure-block" id="fig:trajectory-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona/fig2_arizona_trajectory.png" alt="fig:trajectory-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Total and sub-regional population trajectory across Arizona HU 15 from 10.000BC to 1600AD, with shaded 8 percent uncertainty interval.</figcaption>
</figure>

Basin numbers peaked at 156,9k (144,3-169,5k) in 1100AD and remained at 153,3k in 1200AD as the Salt-Gila canal core reached 65k [@fish2007hohokam]. Between 1300AD (135,3k) and 1400AD (97,4k), abandonment of the Lower Salt and Middle Gila platform-mound districts alongside Mogollon Rim and Mimbres contractions lowered basin totals to 88,5k in 1500AD and 76k (69,9-82,1k) in 1600AD, concentrated at Hopi, Zuni, Akimel O'odham riverine villages and Yuman floodplains [@adams2002homolovi; @hill2004southwest].

<figure class="crd-table-figure" id="tab:trajectory-arizona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">10000BC</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">400AD</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1300AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Little Colorado &amp; Hopi Mesas Plateau</strong></td><td class="crd-td">250</td><td class="crd-td">3,9k</td><td class="crd-td">20k</td><td class="crd-td">29k</td><td class="crd-td">41k</td><td class="crd-td">49k</td><td class="crd-td">37k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Salt-Verde-Middle Gila Core (Phoenix Basin Hohokam)</strong></td><td class="crd-td">200</td><td class="crd-td">3,8k</td><td class="crd-td">26k</td><td class="crd-td">38k</td><td class="crd-td">53k</td><td class="crd-td">63k</td><td class="crd-td">60k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz, San Pedro &amp; Cochise Highlands</strong></td><td class="crd-td">200</td><td class="crd-td">3,1k</td><td class="crd-td">16,5k</td><td class="crd-td">21,5k</td><td class="crd-td">26k</td><td class="crd-td">28,5k</td><td class="crd-td">23,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Lower Colorado Corridor &amp; Western Sonoran Desert (Patayan/Yuman)</strong></td><td class="crd-td">150</td><td class="crd-td">2,3k</td><td class="crd-td">10,2k</td><td class="crd-td">13k</td><td class="crd-td">15,4k</td><td class="crd-td">16,4k</td><td class="crd-td">14,8k</td><td class="crd-td">12k</td></tr>
<tr><td class="crd-td"><strong>Arizona HU 15 Total</strong></td><td class="crd-td">800</td><td class="crd-td">13,1k</td><td class="crd-td">72,7k</td><td class="crd-td">101,5k</td><td class="crd-td">135,4k</td><td class="crd-td">156,9k</td><td class="crd-td">135,3k</td><td class="crd-td">76k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Benchmark population series by sub-region in Arizona HU 15, 10.000BC-1600AD.</figcaption>
</figure>

## Sub-Regional Composition

Despite occupying only 21,9% of basin area (79.768 km²), the Salt-Verde-Middle Gila Core held 42,4% of HU 15 inhabitants in 1200AD (65k of 153,3k) and 44,3% in 1300AD (60k of 135,3k) before falling to 28,9% in 1600AD (Figure \ref{fig:shares-arizona}). Meanwhile, the Little Colorado and Hopi Mesas Plateau accounted for 27,5% to 35,5% across the Common Era, and the Lower Colorado Patayan-Yuman corridor expanded its relative share from 10,5% in 1100AD to 15,8% in 1600AD [@adams2002homolovi; @kelly2025].

<figure class="crd-figure-block" id="fig:shares-arizona">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-arizona/fig3_arizona_shares.png" alt="fig:shares-arizona" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional percentage shares of total population across Arizona HU 15 from 10.000BC to 1600AD.</figcaption>
</figure>

# Limitations

Three methodological limitations apply to HU 15. First, CARD site coordinates in Arizona are binned to 1 x 1 degree squares for statutory heritage protection, limiting fine-scale spatial kriging inside mountain canyons [@kelly2025]. Second, replacement of radiocarbon dating by tree-ring and ceramic cross-dating after 1100AD depresses raw late-precontact radiocarbon counts unless cross-checked against architectural room sequences [@robinson2021dendro; @anyon2017mimbres]. Third, early Akimel O'odham (Pima) and Tohono O'odham ranchería persistence between 1450AD and 1600AD leaves ephemeral brush-house remains that carry wider demographic uncertainty than Classic Period adobe compounds [@hill2004southwest].

# Sources

<div id="refs"></div>
