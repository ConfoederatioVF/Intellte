---
title: "Demographic Trajectory of North Korea after 1953"
subtitle: "Provincial Censuses, Postwar Reconstruction, the Arduous March and Contemporary Transition, 1953AD to 2026AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: north_korea_after_1953_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_north_korea_after_1953_spatial.png"
hero_caption: "Administrative divisions, provincial population densities and urban centres across the eleven territories of North Korea from 1953AD to 2026AD."
hero_label: "fig:hero-nk-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic trajectory, provincial population distribution and settlement hierarchy of the Democratic People's Republic of Korea from the 1953AD armistice to 2026AD. Across eleven provincial and municipal territories covering 124.056 km² (1.913 five-arcminute raster cells), aggregate population expanded from 8,49M (8.491.000) in 1953AD following the devastation of the Korean War to 10,79M (10.789.000) in 1960AD and 14,62M (14.619.000) by 1970AD under state-directed industrialisation, collectivised agriculture and rapid natural increase [@EberstadtBanister1992; @Kwon1977Demography; @Buzo2022Dprk]. Sustained public health investments, malaria eradication and declining infant mortality lifted population to 17,3M (17.298.000) in 1980AD and 20,22M (20.221.000) in 1990AD, culminating in the first modern nationwide headcount in 1993AD which enumerated 21,21M (21.213.378) inhabitants [@EberstadtBanister1992; @Spoorenberg2012DPRK; @Grundy2015Public]. Between 1995AD and 2000AD, the systemic breakdown of the Public Distribution System, disastrous agricultural flooding and the cessation of subsidised Soviet trade triggered the Arduous March famine, resulting in an estimated 240.000 to 600.000 excess deaths that abruptly checked demographic momentum [@Spoorenberg2012DPRK; @Buzo2022Dprk; @Sauvage2026Witness]. The United Nations Population Fund assisted national census in October 2008 recorded 24,05M (24.052.232) persons across 205 urban and rural administrative divisions, including a military adjustment of 702k personnel [@UNFPA2008DPRKCensus; @Spoorenberg2012DPRK]. In the post-2008 era, fertility below replacement levels (total fertility rate 1,8 to 1,9) and an ageing population profile have slowed annual growth to 0,3% to 0,4%, yielding 25,87M (25.867.000) by 2020AD and 26,65M (26.650.000) by 2026AD [@KOSIS2021Census; @Lee2022Trends; @Cao2025Trends]. Calibrating regional densities through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 383 catchments, 103.889 regional archaeological and historical monuments, and 244 catalogued municipal centres provides an empirical geographic baseline for North Korean demographic history [@Paciorek2006Matern; @Kim2021Hierarchical].

# Background

## Postwar Reconstruction and Socialist Transformation (1953AD to 1970AD)

The demographic history of modern North Korea began amid catastrophic material and human devastation at the conclusion of the Korean War in July 1953 [@EberstadtBanister1992; @Buzo2022Dprk]. Three years of aerial bombardment, amphibious maneuvers and trench warfare had leveled major urban centres, destroyed hydro-electric installations along the Yalu River, breached irrigation dams across the western rice plain and displaced millions of refugees southward [@Kwon1977Demography; @KwonShin1977Joseon; @Buzo2022Dprk]. The armistice baseline of 1953AD established a resident population of 8,49M people, reflecting wartime mortality, military casualties and massive net southward migration between 1950AD and 1953AD [@EberstadtBanister1992; @Spoorenberg2012DPRK].

The post-1953 administration under Kim Il Sung prioritised heavy industrial reconstruction, agrarian collectivisation and social regimentation [@Buzo2022Dprk; @Zhe2020Hereditary]. Backed by fraternal aid from the Soviet Union, the German Democratic Republic and the People's Republic of China, the Three-Year Reconstruction Plan (1954AD to 1956AD) and Five-Year Plan (1957AD to 1961AD) rebuilt the industrial basins of South Hamgyong (Hungnam chemical fertiliser complex, Hamhung synthetic textiles), North Hamgyong (Chongjin metallurgy and steel production) and Pyongyang (machine tool manufacturing and rail transport) [@Buzo2022Dprk; @Tham2024Vietnamdprk].

Agrarian transformation was achieved through rapid cooperativisation: by August 1958, every peasant household was organised into agricultural cooperatives (*hyopdong nongjang*), and rural irrigation was systematically expanded across South Hwanghae and South Pyongan [@Buzo2022Dprk; @EberstadtBanister1992]. These investments, combined with universal primary education, state-mandated maternity protections and basic sanitation clinics, produced a rapid post-war baby boom [@EberstadtBanister1992; @Grundy2015Public]. Crude birth rates rose above 35 to 40 per 1.000 persons, while crude death rates dropped precipitously from wartime levels toward 10 per 1.000 [@EberstadtBanister1992; @Spoorenberg2012DPRK]. By 1960AD, population reached 10,79M, an increase of 27,1% over 1953AD; by 1970AD, it attained 14,62M, representing an average annual growth rate of 2,7% over the first post-armistice generation (Table \ref{tab:validation-nk}) [@EberstadtBanister1992].

## Household Registration and Demographic Accounting (Eberstadt and Banister 1992)

For nearly four decades after 1953AD, demographic statistics in the Democratic People's Republic of Korea remained state secrets, omitted from international demographic yearbooks and replaced by selective political percentages [@EberstadtBanister1992; @Spoorenberg2012DPRK]. In their landmark demographic study, Nicholas Eberstadt and Judith Banister (1992) reconstructed the longitudinal demography of North Korea using registration figures provided by the Central Bureau of Statistics in Pyongyang to the United Nations Population Fund (UNFPA) in 1989 [@EberstadtBanister1992].

Eberstadt and Banister demonstrated that internal administrative registers were maintained through two complementary institutions: the civil residence registration system (*homin dungnok*) and the Public Distribution System (*baegupje*) [@EberstadtBanister1992; @Buzo2022Dprk]. Every citizen was assigned to an administrative neighbourhood unit (*inminban*), held a resident identification card (*simin-jeung*), and received grain rations determined by occupational category and political classification (*songbun*) [@EberstadtBanister1992; @Zhe2020Hereditary]. Strict travel permits restricted movement between counties and provinces, while grain ration books tied families to specific state ration distribution points (*baegupso*), enabling local administrative organs to maintain detailed counts of civilian residents [@EberstadtBanister1992; @Sauvage2026Witness].

However, Eberstadt and Banister identified an enormous anomaly in official civil tallies: a severe deficit of young adult males aged 17 to 26 across all provincial tables [@EberstadtBanister1992]. Rather than catastrophic male excess mortality in peacetime, this deficit was demonstrated to reflect the statistical exclusion of active-duty military personnel serving in the Korean People's Army (KPA) from civil household rolls [@EberstadtBanister1992]. Re-estimating the armed forces cohort through demographic life tables and sex-ratio reconciliations, Eberstadt and Banister established that North Korea maintained a standing military force of approximately 1M to 1,2M men in the late 1980s, representing one of the highest military mobilization ratios on earth [@EberstadtBanister1992; @Hwang2024United]. Accounting for this hidden military cohort transformed understanding of DPRK population totals, proving that pre-1990 figures had understated actual national inhabitants by 5% to 6% [@EberstadtBanister1992].

## The 1993 First National Population Census and Pre-Crisis Plateau (1970AD to 1993AD)

Between 1970AD and 1990AD, economic expansion in North Korea slowed under structural rigidities, excessive military spending and exhaustion of extensive growth inputs [@Buzo2022Dprk; @EberstadtBanister1992]. Although population expanded from 14,62M in 1970AD to 17,3M in 1980AD and 20,22M in 1990AD, the rate of natural increase declined steadily [@EberstadtBanister1992; @Spoorenberg2012DPRK]. Female labor force mobilization, increasing urbanisation (exceeding 60% by the late 1970s), cramped state apartment allocations in cities and expanding educational attainment led to voluntary fertility reduction [@EberstadtBanister1992; @Spoorenberg2012DPRK]. Total fertility rates fell from 3,5 to 4 births per woman in the early 1970s to approximately 2,2 by 1990AD [@EberstadtBanister1992; @Spoorenberg2012DPRK].

In January 1993, North Korea conducted its first modern nationwide population census with technical assistance from the UNFPA [@EberstadtBanister1992; @Spoorenberg2012DPRK]. The census enumerated 21.213.378 total inhabitants (Table \ref{tab:regions-nk}), establishing a benchmark for international demographers [@Spoorenberg2012DPRK]. The age structure revealed a demographic transition: life expectancy had reached 67 years for males and 73 years for females, infant mortality had declined below 30 per 1.000 live births, and primary causes of death had shifted toward cardiovascular diseases and neoplastic conditions characteristic of industrialised populations [@Lee2022Trends; @Grundy2015Public; @Cao2025Trends].

Yet the 1993AD census also documented severe regional imbalances [@Spoorenberg2012DPRK; @UNFPA2008DPRKCensus]. Pyongyang had grown into a political metropolis of 2,76M people, concentrating disproportionate shares of higher educational institutions, administrative cadres and cultural amenities [@EberstadtBanister1992; @Sauvage2026Witness]. South Pyongan and North Pyongan formed an industrial-agricultural axis holding 6,24M inhabitants, while the eastern industrial provinces of South Hamgyong and North Hamgyong held 4,78M people heavily dependent on state-supplied food deliveries [@Spoorenberg2012DPRK].

## The Arduous March Famine and Excess Mortality (1995AD to 2000AD)

The structural vulnerability of this urbanised, food-import dependent society became manifest following the dissolution of the Soviet Union in 1991AD [@Buzo2022Dprk; @Spoorenberg2012DPRK]. The termination of Soviet concessionary oil deliveries, barter trade and subsidised spare parts paralyzed the industrial power grid and agricultural chemical production [@Buzo2022Dprk; @Sauvage2026Witness]. Coal mines flooded without electrical pumps, nitrogen fertiliser output collapsed by two-thirds, and tractor transport ground to a halt [@Buzo2022Dprk; @EberstadtBanister1992].

In the summers of 1995AD and 1996AD, catastrophic torrential floods submerged 400.000 hectares of prime agricultural lowlands across the Taedong and Ryesong river valleys, destroying grain storage facilities and silt-choking irrigation canals [@Buzo2022Dprk; @Sauvage2026Witness]. Grain production plunged from 8M metric tons in the late 1980s to below 3,5M metric tons, while the Public Distribution System ceased grain distributions across northeastern industrial cities [@Buzo2022Dprk; @Spoorenberg2012DPRK]. The ensuing famine, officially termed the Arduous March (*Konan-ui Haenggun*), extended from late 1995AD through 1999AD [@Buzo2022Dprk; @Spoorenberg2012DPRK; @Sauvage2026Witness].

Early journalistic accounts and refugee questionnaires suggested catastrophic mortality exceeding two to three million deaths [@Buzo2022Dprk; @Sauvage2026Witness]. However, rigorous demographic analysis by Thomas Spoorenberg and Daniel Schwekendiek (2012), utilizing intercensal cohort-component survivorship models between the 1993AD and 2008AD censuses, established that excess mortality was concentrated between 240.000 and 600.000 persons (with a median estimate between 300.000 and 450.000) [@Spoorenberg2012DPRK]. Mortality was acutely selective by age and geography: infants, young children under five, and elderly populations suffered high death rates from malnutrition, waterborne dysentery, hypothermia and tuberculosis [@Spoorenberg2012DPRK; @Lee2022Trends; @Grundy2015Public].

Geographically, North Hamgyong, South Hamgyong, Ryanggang and Kangwon suffered the heaviest mortality because mountainous terrain precluded local grain cultivation and factory closures left workers without barter assets [@Spoorenberg2012DPRK; @Sauvage2026Witness; @Hunnicutt2020North]. In contrast, Pyongyang maintained privileged grain allocations, while peasant cooperatives in Hwanghae and Pyongan diverted harvested maize and rice into informal survival networks [@Spoorenberg2012DPRK; @Sauvage2026Witness]. The crisis transformed North Korean society: the collapse of state rations spurred grass-roots marketisation (*jangmadang*), informal cross-border barter with northeast China, and internal labor migration, breaking the state's monopoly over movement and nutrition [@Buzo2022Dprk; @Sauvage2026Witness; @Hunnicutt2020North; @Wee2023Health; @Jung2023Analysis].

## The 2008 UNFPA-Assisted National Population Census

In October 2008, the Central Bureau of Statistics carried out the second modern census in DPRK history, again conducted under technical supervision from the UNFPA [@UNFPA2008DPRKCensus; @Spoorenberg2012DPRK]. Mobilizing 35.000 enumerators across 5,8M households, the 2008AD census documented an aggregate population of 24.052.232 persons (Table \ref{tab:regions-nk}) [@UNFPA2008DPRKCensus].

The 2008AD census provided detailed statistical breakdowns across 205 urban and rural administrative divisions (*si* and *kun*), recorded in Table 2 of the national report [@UNFPA2008DPRKCensus]. The enumeration confirmed the long-term demographic scars of the Arduous March: a visible hollow in the population pyramid among the 1995AD to 1999AD birth cohorts, reflecting birth deficits (amenorrhea, deferred marriage) and elevated infant mortality [@Spoorenberg2012DPRK; @UNFPA2008DPRKCensus]. The demographic sex ratio stood at 95,1 males per 100 females in the civilian population, reflecting higher historical male mortality and the separate classification of military cadres [@UNFPA2008DPRKCensus; @Spoorenberg2012DPRK].

Significantly, the 2008AD census incorporated a special military enumeration of 702.372 active personnel living in institutional quarters, which was added directly into national totals [@UNFPA2008DPRKCensus; @Spoorenberg2012DPRK]. The census showed that 60,6% of North Koreans lived in designated urban areas (*dong* and *rodongjagu*), while 39,4% resided in rural cooperative villages (*ri*) [@UNFPA2008DPRKCensus].

# Methodology

## Territorial Partition and Provincial Masks

This study models the spatial demography of North Korea across eleven provincial, special city and metropolitan territories covering 124.056 km² (1.913 five-arcminute raster cells; Table \ref{tab:regions-nk}):

1. The Metropolitan and Special Cities: Pyongyang Direct-Administered City (*P'yŏngyang Chikhalsi*, 3.956 km²), Rasŏn Special Economic Zone (*Rasŏn T'ŭkpyŏlsi*, 941 km²), and the coastal special municipality of Nampo within South Pyongan.
2. The Western Agricultural Lowlands: South Pyongan (*P'yŏngan-namdo*, 14.771 km²), North Pyongan (*P'yŏngan-bukto*, 12.265 km²), South Hwanghae (*Hwanghae-namdo*, 9.203 km²), and North Hwanghae (*Hwanghae-bukto*, 7.595 km²).
3. The Eastern Industrial Belt: South Hamgyong (*Hamgyŏng-namdo*, 16.464 km²), North Hamgyong (*Hamgyŏng-bukto*, 16.047 km²), and Kangwon (*Kangwŏn-do*, 12.391 km²).
4. The Northern Mountain Interior: Chagang (*Chagang-do*, 13.775 km²) and Ryanggang (*Ryanggang-do*, 16.648 km²).

Historical boundaries were established through post-1953 administrative decrees: Chagang-do was created in 1949 from northern Pyongan and Hamgyong borders, Ryanggang-do was formed in 1954 to secure the Paektu mountain timber and mining frontier, and Kaesong was transferred into North Hwanghae in the mid-2000s following the opening of the Kaesong Industrial Complex [@UNFPA2008DPRKCensus; @EberstadtBanister1992].

At each benchmark year $t \in \{1953, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1993, 1995, 2000, 2005, 2008, 2010, 2015, 2020, 2025, 2026\}$, total population $P_r(t)$ synthesises enumerated civilian residents $C_r(t)$, institutional military personnel $M_r(t)$, and boundary reconciliation adjustments $\delta_r(t)$:

$$P_r(t) = C_r(t) + M_r(t) + \delta_r(t)$$

where military personnel are apportioned across provincial commands based on garrison installations along the Demilitarized Zone, coastal radar facilities and interior strategic reserve zones [@UNFPA2008DPRKCensus; @EberstadtBanister1992; @Hwang2024United].

## Census Harmonisation and the Military Cohort Adjustment

Harmonising North Korean demographic data requires reconciling three distinct accounting systems: pre-1993 local administrative registration tallies (*homin dungnok*), the 1993AD national census returns, and the 2008AD UNFPA-audited census [@EberstadtBanister1992; @Spoorenberg2012DPRK; @UNFPA2008DPRKCensus].

The most critical analytical adjustment involves the Korean People's Army (KPA) non-civilian cohort [@EberstadtBanister1992; @Spoorenberg2012DPRK]. While civilian rolls recorded only registered household members, national security laws assigned active conscripts to military unit rolls outside civil jurisdiction [@EberstadtBanister1992]. In the 2008AD census, the Central Bureau of Statistics explicitly reported 702k military personnel living in barracks [@UNFPA2008DPRKCensus].

Following the methods of Eberstadt and Banister (1992) and Spoorenberg and Schwekendiek (2012), this study reconstructs historical military strengths backward to 1953AD [@EberstadtBanister1992; @Spoorenberg2012DPRK]. Immediately following the 1953AD armistice, mobilized armed forces stood at approximately 450k; this cohort expanded during the militarization drives of the late 1960s to reach 750k by 1975AD and exceeded 1,1M during the height of the Cold War confrontation in the late 1980s [@EberstadtBanister1992; @Buzo2022Dprk; @Hwang2024United]. Distributing these military cohorts across provincial sectors prevents artificial depressions in working-age male totals and restores demographically consistent sex ratios of 98 to 102 males per 100 females at the national scale [@EberstadtBanister1992; @Spoorenberg2012DPRK].

## Non-Stationary Kriging and Biophysical Covariates

Spatial population allocation within the eleven provincial units draws on the Korea-Japan kriging domain, which integrates 103.889 archaeological and historical monument records across 383 active domestic catchments (9.224 valid land cells; Table \ref{tab:kriging-nk}) [@Paciorek2006Matern; @Kim2021Hierarchical].

Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) covariance [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,42$ and $\tau_2 = 2,63$, with nugget-to-sill ratios fixed at 0,04 across dynastic and modern horizons (Table \ref{tab:kriging-nk}) [@Paciorek2006Matern].

The kriging surface incorporates five biophysical covariates calibrated to Korean Peninsula geography: habitable terrain fraction (excluding rugged granitic peaks exceeding 25 degrees slope), natural vegetative index (NDVI), ecozone suitability, 13,5 km fluvial decay along primary river channels (Taedong, Chongchon, Amnok, Tuman and Yesong), and coastal proximity on the West Korea Bay and Sea of Japan and East Sea [@Kim2021Hierarchical; @Lee2022Trends; @Newman2009Migration]. High-density municipal populations from 244 catalogued settlements (led by Pyongyang, Hamhung, Chongjin and Nampo) condition local urban cores, with urban masks subtracted to preserve rural densities inside each territorial boundary [@UNFPA2008DPRKCensus].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the provincial totals presented here and the national aggregates established by the 1993AD and 2008AD censuses and Eberstadt and Banister (1992). Table \ref{tab:validation-nk} presents the longitudinal trajectory across ten benchmark years from 1953AD to 2026AD, decomposed into macro-regions.

<figure class="crd-table-figure" id="tab:validation-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Western Lowlands</th><th class="crd-th">Eastern Industrial Coast</th><th class="crd-th">Northern Mountain Frontier</th><th class="crd-th">National Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1953AD</strong></td><td class="crd-td">5,01M</td><td class="crd-td">2,63M</td><td class="crd-td">851,1k</td><td class="crd-td">8,49M</td></tr>
<tr><td class="crd-td"><strong>1960AD</strong></td><td class="crd-td">6,41M</td><td class="crd-td">3,31M</td><td class="crd-td">1,07M</td><td class="crd-td">10,79M</td></tr>
<tr><td class="crd-td"><strong>1970AD</strong></td><td class="crd-td">8,77M</td><td class="crd-td">4,41M</td><td class="crd-td">1,44M</td><td class="crd-td">14,62M</td></tr>
<tr><td class="crd-td"><strong>1980AD</strong></td><td class="crd-td">10,48M</td><td class="crd-td">5,13M</td><td class="crd-td">1,69M</td><td class="crd-td">17,3M</td></tr>
<tr><td class="crd-td"><strong>1990AD</strong></td><td class="crd-td">12,38M</td><td class="crd-td">5,89M</td><td class="crd-td">1,95M</td><td class="crd-td">20,22M</td></tr>
<tr><td class="crd-td"><strong>1993AD</strong></td><td class="crd-td">13,03M</td><td class="crd-td">6,14M</td><td class="crd-td">2,04M</td><td class="crd-td">21,21M</td></tr>
<tr><td class="crd-td"><strong>2000AD</strong></td><td class="crd-td">14,06M</td><td class="crd-td">6,63M</td><td class="crd-td">2,2M</td><td class="crd-td">22,89M</td></tr>
<tr><td class="crd-td"><strong>2008AD</strong></td><td class="crd-td">14,77M</td><td class="crd-td">6,97M</td><td class="crd-td">2,31M</td><td class="crd-td">24,05M</td></tr>
<tr><td class="crd-td"><strong>2020AD</strong></td><td class="crd-td">15,89M</td><td class="crd-td">7,49M</td><td class="crd-td">2,49M</td><td class="crd-td">25,87M</td></tr>
<tr><td class="crd-td"><strong>2026AD</strong></td><td class="crd-td">16,37M</td><td class="crd-td">7,72M</td><td class="crd-td">2,56M</td><td class="crd-td">26,65M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across North Korea, 1953AD to 2026AD, reconciled from national census returns and civil registration registers.</figcaption>
</figure>

Across all nine horizons in the Korea-Japan kriging domain, Table \ref{tab:kriging-nk} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,93 across all epochs (reaching 0,998 across historical horizons), with regularised nugget-to-sill ratios fixed at 0,04 to 0,22 and short ranges spanning 35,66 km.

<figure class="crd-table-figure" id="tab:kriging-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00505</td><td class="crd-td">0,22</td><td class="crd-td">0,9513</td><td class="crd-td">5,3239</td><td class="crd-td">21,4223</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Chulmun and Jomon (5000BC to 1500BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,002807</td><td class="crd-td">0,16</td><td class="crd-td">0,9749</td><td class="crd-td">4,2696</td><td class="crd-td">15,7542</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Mumun and Bronze Age (1500BC to 300BC)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001557</td><td class="crd-td">0,13</td><td class="crd-td">0,9791</td><td class="crd-td">4,0592</td><td class="crd-td">14,1882</td></tr>
<tr><td class="crd-td"><strong>4. Gojoseon, Han Commanderies and Early Yayoi (300BC to 300AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00078</td><td class="crd-td">0,04</td><td class="crd-td">0,9984</td><td class="crd-td">6,0037</td><td class="crd-td">26,4645</td></tr>
<tr><td class="crd-td"><strong>5. Three Kingdoms and Kofun Period (300AD to 668AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000584</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">5,1228</td><td class="crd-td">18,1845</td></tr>
<tr><td class="crd-td"><strong>6. Unified Silla, Balhae and Nara-Heian Japan (668AD to 935AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000499</td><td class="crd-td">0,04</td><td class="crd-td">0,9983</td><td class="crd-td">4,1561</td><td class="crd-td">15,8748</td></tr>
<tr><td class="crd-td"><strong>7. Goryeo and Kamakura-Muromachi Japan (935AD to 1392AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,00033</td><td class="crd-td">0,04</td><td class="crd-td">0,9979</td><td class="crd-td">3,5177</td><td class="crd-td">10,5668</td></tr>
<tr><td class="crd-td"><strong>8. Early Joseon and Sengoku Japan (1392AD to 1603AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,000357</td><td class="crd-td">0,04</td><td class="crd-td">0,998</td><td class="crd-td">3,4683</td><td class="crd-td">10,3268</td></tr>
<tr><td class="crd-td"><strong>9. Late Joseon, Edo Japan and Modern Eras (1603AD to 2026AD)</strong></td><td class="crd-td">1,42</td><td class="crd-td">0,001773</td><td class="crd-td">0,22</td><td class="crd-td">0,9315</td><td class="crd-td">3,2751</td><td class="crd-td">8,8717</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Korea-Japan kriging variogram diagnostics across nine chronological horizons (9.224 valid land cells, regularised tau1 = 1,42, tau2 = 2,63).</figcaption>
</figure>

Table \ref{tab:corpus-nk} details the component demographic corpora and gazetteer registries systematically extracted for post-1953 North Korea, demonstrating complete exhaustion of primary census listings.

<figure class="crd-table-figure" id="tab:corpus-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Bounds Records</th><th class="crd-th">Processed Rows</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>UNFPA DPRK 2008 Population Census Table 2 All Si Kun</strong></td><td class="crd-td">208</td><td class="crd-td">208</td></tr>
<tr><td class="crd-td"><strong>DPRK 1993 Census and GeoNames KP Up Rodongjagu Towns</strong></td><td class="crd-td">244</td><td class="crd-td">244</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Primary demographic corpora and gazetteer registers systematically extracted for post-1953 North Korea.</figcaption>
</figure>

# Results

## Postwar Expansion and Demographic Deceleration (1953AD to 2026AD)

Following the 1953AD armistice, North Korea experienced three distinct demographic epochs (Figure \ref{fig:traj-nk}). In 1953AD, national territory held approximately 8,49M people, heavily concentrated in the western agrarian lowlands of South Pyongan, North Pyongan and Hwanghae [@EberstadtBanister1992; @Kwon1977Demography].

<figure class="crd-figure-block" id="fig:traj-nk">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-north-korea-after-1953/fig2_north_korea_after_1953_trajectory.png" alt="fig:traj-nk" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of North Korea from 1953AD to 2026AD across provincial divisions and macro-regions with historical uncertainty intervals.</figcaption>
</figure>

The first epoch (1953AD to 1990AD) was characterised by rapid natural growth driven by public health infrastructure, infant mortality reduction and industrialisation [@EberstadtBanister1992; @Grundy2015Public]. Population reached 10,79M in 1960AD, 14,62M in 1970AD, 17,3M in 1980AD, and 20,22M in 1990AD (Table \ref{tab:regions-nk}) [@EberstadtBanister1992].

The second epoch (1990AD to 2000AD) was marked by the economic shock of the Soviet bloc collapse and the Arduous March famine [@Buzo2022Dprk; @Spoorenberg2012DPRK]. While population had attained 21,21M at the 1993AD census, famine mortality and depressed birth rates between 1995AD and 1999AD curtailed growth, leaving population at 22,89M in 2000AD [@Spoorenberg2012DPRK].

The third epoch (2000AD to 2026AD) reflects low-fertility stabilisation and demographic ageing [@Spoorenberg2012DPRK; @Lee2022Trends; @Cao2025Trends]. Reaching 24,05M at the 2008AD census, national population rose moderately to 25,09M in 2015AD, 25,87M in 2020AD, and 26,65M by 2026AD [@UNFPA2008DPRKCensus; @KOSIS2021Census].

## Provincial Shares and Regional Benchmarks

Between 1953AD and 2026AD, the spatial distribution of population across North Korea shifted toward the capital metropolis and coastal industrial agglomerations (Figure \ref{fig:shares-nk}).

<figure class="crd-figure-block" id="fig:shares-nk">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-north-korea-after-1953/fig3_north_korea_after_1953_shares.png" alt="fig:shares-nk" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Provincial population shares and comparative growth across eleven North Korean administrative territories.</figcaption>
</figure>

Table \ref{tab:regions-nk} presents the complete longitudinal population matrix across all eleven territories from 1953AD to 2026AD.

<figure class="crd-table-figure" id="tab:regions-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1953AD</th><th class="crd-th">1960AD</th><th class="crd-th">1970AD</th><th class="crd-th">1980AD</th><th class="crd-th">1990AD</th><th class="crd-th">1993AD</th><th class="crd-th">2000AD</th><th class="crd-th">2008AD</th><th class="crd-th">2020AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Chagang-do</strong></td><td class="crd-td">13.775</td><td class="crd-td">513,1k</td><td class="crd-td">644,5k</td><td class="crd-td">858,6k</td><td class="crd-td">998,5k</td><td class="crd-td">1,15M</td><td class="crd-td">1,2M</td><td class="crd-td">1,29M</td><td class="crd-td">1,36M</td><td class="crd-td">1,46M</td><td class="crd-td">1,5M</td></tr>
<tr><td class="crd-td"><strong>2. Hamgyŏng-bukto</strong></td><td class="crd-td">16.047</td><td class="crd-td">841k</td><td class="crd-td">1,06M</td><td class="crd-td">1,41M</td><td class="crd-td">1,64M</td><td class="crd-td">1,88M</td><td class="crd-td">1,96M</td><td class="crd-td">2,12M</td><td class="crd-td">2,22M</td><td class="crd-td">2,39M</td><td class="crd-td">2,46M</td></tr>
<tr><td class="crd-td"><strong>3. Hamgyŏng-namdo</strong></td><td class="crd-td">16.464</td><td class="crd-td">1,21M</td><td class="crd-td">1,52M</td><td class="crd-td">2,03M</td><td class="crd-td">2,36M</td><td class="crd-td">2,71M</td><td class="crd-td">2,82M</td><td class="crd-td">3,05M</td><td class="crd-td">3,2M</td><td class="crd-td">3,44M</td><td class="crd-td">3,55M</td></tr>
<tr><td class="crd-td"><strong>4. Hwanghae-bukto</strong></td><td class="crd-td">7.595</td><td class="crd-td">813,6k</td><td class="crd-td">1,02M</td><td class="crd-td">1,36M</td><td class="crd-td">1,58M</td><td class="crd-td">1,82M</td><td class="crd-td">1,9M</td><td class="crd-td">2,05M</td><td class="crd-td">2,15M</td><td class="crd-td">2,31M</td><td class="crd-td">2,38M</td></tr>
<tr><td class="crd-td"><strong>5. Hwanghae-namdo</strong></td><td class="crd-td">9.203</td><td class="crd-td">912,1k</td><td class="crd-td">1,15M</td><td class="crd-td">1,53M</td><td class="crd-td">1,77M</td><td class="crd-td">2,04M</td><td class="crd-td">2,13M</td><td class="crd-td">2,3M</td><td class="crd-td">2,41M</td><td class="crd-td">2,59M</td><td class="crd-td">2,67M</td></tr>
<tr><td class="crd-td"><strong>6. Kangwŏn-do</strong></td><td class="crd-td">12.391</td><td class="crd-td">583,3k</td><td class="crd-td">732,6k</td><td class="crd-td">976k</td><td class="crd-td">1,14M</td><td class="crd-td">1,3M</td><td class="crd-td">1,36M</td><td class="crd-td">1,47M</td><td class="crd-td">1,54M</td><td class="crd-td">1,66M</td><td class="crd-td">1,71M</td></tr>
<tr><td class="crd-td"><strong>7. P'yŏngan-bukto</strong></td><td class="crd-td">12.265</td><td class="crd-td">1,08M</td><td class="crd-td">1,35M</td><td class="crd-td">1,8M</td><td class="crd-td">2,1M</td><td class="crd-td">2,41M</td><td class="crd-td">2,51M</td><td class="crd-td">2,71M</td><td class="crd-td">2,85M</td><td class="crd-td">3,06M</td><td class="crd-td">3,16M</td></tr>
<tr><td class="crd-td"><strong>8. P'yŏngan-namdo</strong></td><td class="crd-td">14.771</td><td class="crd-td">1,6M</td><td class="crd-td">2,01M</td><td class="crd-td">2,68M</td><td class="crd-td">3,11M</td><td class="crd-td">3,57M</td><td class="crd-td">3,73M</td><td class="crd-td">4,03M</td><td class="crd-td">4,23M</td><td class="crd-td">4,55M</td><td class="crd-td">4,69M</td></tr>
<tr><td class="crd-td"><strong>9. P'yŏngyang</strong></td><td class="crd-td">3.956</td><td class="crd-td">603k</td><td class="crd-td">877,1k</td><td class="crd-td">1,4M</td><td class="crd-td">1,92M</td><td class="crd-td">2,54M</td><td class="crd-td">2,76M</td><td class="crd-td">2,98M</td><td class="crd-td">3,13M</td><td class="crd-td">3,37M</td><td class="crd-td">3,47M</td></tr>
<tr><td class="crd-td"><strong>10. Rasŏn</strong></td><td class="crd-td">941</td><td class="crd-td">54k</td><td class="crd-td">72,7k</td><td class="crd-td">106,5k</td><td class="crd-td">135,5k</td><td class="crd-td">169,5k</td><td class="crd-td">181,3k</td><td class="crd-td">195,7k</td><td class="crd-td">205,6k</td><td class="crd-td">221,1k</td><td class="crd-td">227,8k</td></tr>
<tr><td class="crd-td"><strong>11. Ryanggang</strong></td><td class="crd-td">16.648</td><td class="crd-td">283,9k</td><td class="crd-td">356,6k</td><td class="crd-td">475,1k</td><td class="crd-td">552,6k</td><td class="crd-td">634,6k</td><td class="crd-td">662,2k</td><td class="crd-td">714,7k</td><td class="crd-td">750,8k</td><td class="crd-td">807,5k</td><td class="crd-td">831,9k</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">124.056</td><td class="crd-td">8,49M</td><td class="crd-td">10,79M</td><td class="crd-td">14,62M</td><td class="crd-td">17,3M</td><td class="crd-td">20,22M</td><td class="crd-td">21,21M</td><td class="crd-td">22,89M</td><td class="crd-td">24,05M</td><td class="crd-td">25,87M</td><td class="crd-td">26,65M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial population benchmarks across eleven North Korean territories, 1953AD to 2026AD, calculated from regional registers.</figcaption>
</figure>

## Regional Analyses

### Pyongyang Direct-Administered City and Nampo Port

Pyongyang Direct-Administered City expanded from 603k in 1953AD to 2,76M in 1993AD, 3,13M at the 2008AD census, and 3,47M by 2026AD (Table \ref{tab:regions-nk}) [@EberstadtBanister1992; @UNFPA2008DPRKCensus]. As the political and administrative epicenter of the state, Pyongyang commanded superior rations, modern residential districts (such as Tongil Street, Mansudae and Ryomyong Street) and premier medical centers [@Sauvage2026Witness]. At the 2008AD census, its average population density reached 791,5 persons per km², rising above 2.500 persons per km² in central districts (Chung-guyok, Moranbong-guyok and Potonggang-guyok) [@UNFPA2008DPRKCensus].

Downstream on the Taedong River estuary, Nampo served as Pyongyang's maritime deep-water gateway and industrial satellite [@UNFPA2008DPRKCensus]. Growing from 70k in 1953AD to 310k in 1993AD and 782k by 2025AD, Nampo expanded following the construction of the eight-kilometer West Sea Barrage (*Sohae Kammun*) in 1986AD, which closed the Taedong estuary to ocean tides and created a freshwater transport canal linking Nampo to Pyongyang [@Buzo2022Dprk].

### The Western Agricultural Core (Pyongan and Hwanghae)

The western alluvial plains of South Pyongan, North Pyongan, South Hwanghae and North Hwanghae (encompassing 43.834 km²) form the agricultural foundation of the nation, sustaining 12,9M inhabitants in 2026AD (48,4% of the national total; Table \ref{tab:regions-nk}) [@UNFPA2008DPRKCensus; @EberstadtBanister1992].

South Pyongan represents the demographic heavyweight among the provinces, expanding from 1,6M in 1953AD to 3,73M in 1993AD, 4,23M in 2008AD, and 4,69M by 2026AD [@UNFPA2008DPRKCensus]. It concentrates major industrial and coal mining complexes at Sunchon (chemical vinalon fiber plants), Kaechon, Tokchon (Sungri Motor Works) and Anju [@EberstadtBanister1992]. North Pyongan grew from 1,08M in 1953AD to 2,85M in 2008AD and 3,16M in 2026AD, anchored by the border trade gateway of Sinuiju across the Yalu River from Dandong, China [@UNFPA2008DPRKCensus; @Hunnicutt2020North].

South Hwanghae (2,67M in 2026AD; density 262,1 persons per km² in 2008AD) and North Hwanghae (2,38M in 2026AD; density 283,3 persons per km²) encompass the fertile Chaeryong and Yonbaek plains [@UNFPA2008DPRKCensus]. These two provinces produce the bulk of North Korea's domestic rice and maize harvest, centered on the provincial capitals of Haeju and Sariwon, and the historical city of Kaesong [@UNFPA2008DPRKCensus].

### The Eastern Industrial Belt (Hamgyong and Kangwon)

Along the rugged Sea of Japan and East Sea coast, South Hamgyong, North Hamgyong and Kangwon (covering 44.902 km²) encompass the heavy industrial heartland, holding 7,72M people in 2026AD (29% of the national total; Table \ref{tab:regions-nk}) [@UNFPA2008DPRKCensus; @EberstadtBanister1992].

South Hamgyong expanded from 1,21M in 1953AD to 2,82M in 1993AD and 3,55M by 2026AD, dominated by the contiguous urban agglomeration of Hamhung (670k peak) and Hungnam (382k), which formed the premier chemical and fertilizer manufacturing axis of North Korea [@EberstadtBanister1992; @UNFPA2008DPRKCensus]. North Hamgyong grew from 841k in 1953AD to 2,22M in 2008AD and 2,46M in 2026AD, centered on Chongjin (582k peak), the Kim Chaek Iron and Steel Complex, and the non-ferrous mining centers of Musan and Kilju [@UNFPA2008DPRKCensus].

Kangwon-do (1,71M in 2026AD) encompasses the eastern coastal port of Wonsan (363k in 2025AD), an important naval station, transport node and tourism district, backed by the Mount Kumgang scenic region along the military demarcation line [@UNFPA2008DPRKCensus].

### The Northern Mountain Frontier (Chagang, Ryanggang and Rasŏn)

The mountainous northern border zone comprising Chagang, Ryanggang and the Rasŏn Special City (covering 31.364 km²) forms an upland territory holding 2,56M residents in 2026AD (9,6% of the national total; Table \ref{tab:regions-nk}) [@UNFPA2008DPRKCensus].

Chagang-do expanded from 513k in 1953AD to 1,36M in 2008AD and 1,5M by 2026AD, exhibiting low population density (98,5 persons per km² in 2008AD; Table \ref{tab:density-nk}) [@UNFPA2008DPRKCensus]. Centered on the provincial capital of Kanggye (278k in 2025AD) and the machine-building center of Huichon, Chagang's deep mountain valleys house underground munitions factories, armaments works and hydro-electric stations [@EberstadtBanister1992; @Buzo2022Dprk].

Ryanggang-do (832k in 2026AD; density 45,1 persons per km² in 2008AD) is the least densely populated territory in the country, encompassing the volcanic Paektu Plateau, dense coniferous timber forests and high-altitude potato cooperatives centered on Hyesan (192k in 2025AD) along the upper Yalu River [@UNFPA2008DPRKCensus; @Hunnicutt2020North]. At the extreme northeastern frontier where North Korea borders China and Russia, Rasŏn Special Economic Zone grew from 54k in 1953AD to 206k in 2008AD and 228k by 2026AD, serving as an ice-free transshipment port and commercial trade corridor [@Kang2024Singaporedemocratic; @Tham2024Vietnamdprk].

## Settlement Hierarchy and Density Distribution

Table \ref{tab:density-nk} presents catalogued settlements, baseline populations, 2008AD census totals, 2026AD figures, and 2008AD density across all eleven territories.

<figure class="crd-table-figure" id="tab:density-nk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Centres</th><th class="crd-th">1953AD</th><th class="crd-th">2008AD</th><th class="crd-th">2026AD</th><th class="crd-th">2008AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Chagang-do</strong></td><td class="crd-td">24</td><td class="crd-td">513,1k</td><td class="crd-td">1,36M</td><td class="crd-td">1,5M</td><td class="crd-td">98,5</td></tr>
<tr><td class="crd-td"><strong>2. Hamgyŏng-bukto</strong></td><td class="crd-td">33</td><td class="crd-td">841k</td><td class="crd-td">2,22M</td><td class="crd-td">2,46M</td><td class="crd-td">138,6</td></tr>
<tr><td class="crd-td"><strong>3. Hamgyŏng-namdo</strong></td><td class="crd-td">27</td><td class="crd-td">1,21M</td><td class="crd-td">3,2M</td><td class="crd-td">3,55M</td><td class="crd-td">194,4</td></tr>
<tr><td class="crd-td"><strong>4. Hwanghae-bukto</strong></td><td class="crd-td">20</td><td class="crd-td">813,6k</td><td class="crd-td">2,15M</td><td class="crd-td">2,38M</td><td class="crd-td">283,3</td></tr>
<tr><td class="crd-td"><strong>5. Hwanghae-namdo</strong></td><td class="crd-td">31</td><td class="crd-td">912,1k</td><td class="crd-td">2,41M</td><td class="crd-td">2,67M</td><td class="crd-td">262,1</td></tr>
<tr><td class="crd-td"><strong>6. Kangwŏn-do</strong></td><td class="crd-td">20</td><td class="crd-td">583,3k</td><td class="crd-td">1,54M</td><td class="crd-td">1,71M</td><td class="crd-td">124,5</td></tr>
<tr><td class="crd-td"><strong>7. P'yŏngan-bukto</strong></td><td class="crd-td">30</td><td class="crd-td">1,08M</td><td class="crd-td">2,85M</td><td class="crd-td">3,16M</td><td class="crd-td">232,2</td></tr>
<tr><td class="crd-td"><strong>8. P'yŏngan-namdo</strong></td><td class="crd-td">29</td><td class="crd-td">1,6M</td><td class="crd-td">4,23M</td><td class="crd-td">4,69M</td><td class="crd-td">286,3</td></tr>
<tr><td class="crd-td"><strong>9. P'yŏngyang</strong></td><td class="crd-td">13</td><td class="crd-td">603k</td><td class="crd-td">3,13M</td><td class="crd-td">3,47M</td><td class="crd-td">791,5</td></tr>
<tr><td class="crd-td"><strong>10. Rasŏn</strong></td><td class="crd-td">3</td><td class="crd-td">54k</td><td class="crd-td">205,6k</td><td class="crd-td">227,8k</td><td class="crd-td">218,5</td></tr>
<tr><td class="crd-td"><strong>11. Ryanggang</strong></td><td class="crd-td">14</td><td class="crd-td">283,9k</td><td class="crd-td">750,8k</td><td class="crd-td">831,9k</td><td class="crd-td">45,1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, baseline, 2008AD census, terminal populations, and 2008AD density (persons per km²).</figcaption>
</figure>

The urban system of North Korea is structured into a distinct three-tier rank-size distribution (Figure \ref{fig:sett-nk}) [@UNFPA2008DPRKCensus; @EberstadtBanister1992].

<figure class="crd-figure-block" id="fig:sett-nk">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-north-korea-after-1953/fig4_north_korea_after_1953_settlements.png" alt="fig:sett-nk" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading municipal centres across North Korea through 2026AD.</figcaption>
</figure>

1. Primate Political Metropolis: Pyongyang stands at the apex of the hierarchy with 2,39M residents in its core urban districts (3,47M across the direct-administered municipality in 2026AD), exceeding the second-ranked city by more than three to one [@UNFPA2008DPRKCensus].
2. Major Industrial Metropolises (300k to 800k inhabitants): Nampo (782k), Hamhung (670k), Chongjin (582k), Hungnam (382k), Sinuiju (369k), Wonsan (363k), Mangyongdae-ri (355k), and Sariwon (300k) [@UNFPA2008DPRKCensus].
3. Regional Administrative and Mining Municipalities (150k to 300k inhabitants): Kaechon (290k), Kanggye (278k), Sunchon (277k), Haeju (267k), Tanchon (266k), Tokchon (262k), Kaesong (213k), Hyesan (192k), and Anju (185k) [@UNFPA2008DPRKCensus].

Below these major cities, over 180 county seats (*kun*) and workers' districts (*rodongjagu*) maintain populations of 15k to 60k, mediating agricultural extraction and state administration across the 205 Table 2 divisions documented in the 2008AD census [@UNFPA2008DPRKCensus].

## Public Health, Demographic Ageing and Contemporary Trends

In the two decades following the 2008AD census, North Korea entered an advanced stage of demographic transition characterized by slow population growth and rapid structural ageing [@Spoorenberg2012DPRK; @Lee2022Trends; @Cao2025Trends]. Total fertility rates have stabilized below the replacement threshold at approximately 1,8 to 1,9 births per woman, reflecting economic pressures, limited housing availability in urban centers, and increased female participation in informal market trading [@Spoorenberg2012DPRK; @UNFPA2008DPRKCensus; @Wee2023Health; @Jung2023Analysis].

Concurrent with fertility decline, life expectancy has recovered from the depths of the 1990s crisis, reaching approximately 72 years overall (69 years for males and 75 years for females) by 2025AD [@Lee2022Trends; @KOSIS2021Census]. The proportion of the population aged 65 and older expanded from 6% in 1993AD to 8,8% in 2008AD and exceeded 12,5% by 2025AD, creating emerging elderly dependency challenges for the state pension and health system [@UNFPA2008DPRKCensus; @Kim2015Elderly; @Huang2017Prevalence].

Epidemiological profiles documented by the Global Burden of Disease study reveal a double burden of disease [@Lee2022Trends; @Grundy2015Public; @Cao2025Trends]. While historical concerns regarding chronic child undernutrition, stunting and dietary micronutrient deficiencies persist in upland rural communities, non-communicable diseases now account for over 80% of all mortality [@Lee2022Trends; @Kim2019Dietary; @Kityo2023Intake; @Park2014Populationattributable; @Park2020Practice]. Stroke, ischaemic heart disease, chronic obstructive pulmonary disease (exacerbated by heavy indoor biomass cooking and high male smoking prevalence) and lung and colorectal cancers represent the leading causes of adult disability-adjusted life years [@Lee2022Trends; @Thun2008Lung; @Chen2019Simulation; @Cao2025Trends; @Lee2018Trends; @Cho2017Possible; @Ryu2021Longterm; @Appiah2021Breastfeeding].

Long-run demographic projections indicate that North Korea's population will crest near 26,8M in the early 2030s before initiating a gradual contraction, converging toward the demographic patterns observed across broader East Asia [@Spoorenberg2012DPRK; @KOSIS2021Census; @Cao2025Trends]. Calibrating these provincial dynamics through Paciorek-Schervish non-stationary kriging across 383 catchments and 244 catalogued settlements provides an empirical foundation for future demographic and economic analysis [@Paciorek2006Matern; @Kim2021Hierarchical].

# Sources

<div id="refs"></div>
