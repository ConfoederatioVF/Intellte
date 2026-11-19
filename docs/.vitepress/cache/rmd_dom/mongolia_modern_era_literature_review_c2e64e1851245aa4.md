---
title: "Mongolia After 1912: From the Bogd Khanate to the Contemporary Era"
subtitle: "JADE: Twenty-One Aimags, Capital Hyper-Primacy and Steppe Demographic Transition, 1912AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: mongolia_modern_era_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mongolia_modern_era_spatial.png"
hero_caption: "Sub-regional territorial mask and 256 catalogued settlements across 21 aimags and Ulaanbaatar from 1912AD to 2026AD."
hero_label: "fig:hero-mongolia-modern-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This study reconstructs the demographic and settlement trajectory of modern Mongolia across 114 years from the proclamation of independence under the Bogd Khanate in 1912AD to the contemporary horizon of 2026AD under JADE. Covering 1.562.476 km² (26.461 five-arcminute grid cells) partitioned into 22 administrative territories (21 aimags and the municipality of Ulaanbaatar), the population expanded more than sixfold from 596.340 in 1912AD and 599.582 in the 1918AD Maiskii census to 788.826 in 1956AD, 1.577.561 in 1979AD, 2.098.710 in 1990AD, 2.738.622 in 2010AD and 3.615.710 by 2026AD [@NSOMongolia2025PxWeb; @NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic; @maiskii1921sovremennaya]. In the pre-revolutionary era, widespread Buddhist monastic celibacy, epidemic syphilis and high infant mortality circumscribed natural increase, restricting sedentary settlement to Ikh Khüree (Urga, 48k to 50k, 8,1% of national population), secondary monasteries and frontier trading depots [@pozdneyev1971mongolia; @maiskii1921sovremennaya; @bawden1989modern]. Following the foundation of the Mongolian People's Republic in 1924AD, administrative aimag restructuring in 1931AD and pastoral collectivisation (*negdel*) during the 1950s established permanent soum centres with public clinics and primary schools [@sneath2000pastoral; @humphrey1999end; @rupen1964mongols]. The introduction of the Soviet Semashko healthcare model, universal childhood immunisations and pronatalist subsidies ignited a demographic revolution between 1950AD and 1980AD, driving the total fertility rate above 7,3 children per woman while infant mortality dropped sharply [@Spoorenberg2015Reconstructing; @Spoorenberg2008What; @WT2025Strength]. Planned socialist industrialisation along the Trans-Mongolian Railway corridor founded major industrial new towns at Darkhan in 1961AD, Erdenet in 1974AD and Choir in 1956AD [@sanders2010historical; @Bai2023Human]. Following the 1990AD democratic revolution, livestock privatisation, the removal of domestic movement controls and catastrophic winter freezes (*dzud*) in 1999–2002 and 2009–2010 triggered an unprecedented rural-to-urban migration wave, expanding peripheral *ger* districts and lifting Ulaanbaatar to 1,73M in the urban city and 1,81M in the capital municipality (50% of national population) by 2025-2026AD [@Bai2023Human; @Shugatai2021Population; @Kwon2026Governing; @Sharapov2026Quiet]. Density surfaces are calibrated through Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging across 87.810 East Asian archaeological site records and 1.274 domestic catchments ($\tau_1 = 1,50$, effective short range 73,43 km, regularised nugget-to-sill 0,04, WLS $R^2 = 0,9994$) harmonised with 256 catalogued settlements [@paciorek2006spatial; @S2026Spatial].

# Background

## The Steppe Baseline and the Bogd Khanate (1912 to 1924AD)

At the collapse of the Qing dynasty in late 1911 and the proclamation of national independence under the Eighth Jebtsundamba Khutuktu (Bogd Khan) in 1912AD, Outer Mongolia presented an extreme pastoral demographic regime [@bawden1989modern; @atwood2004encyclopedia; @campi2019mongolia]. Across 1.562.476 km² extending from the Altai Mountains in the west across the Khangai and Khentii ranges to the eastern steppes and the arid Gobi depression, the environment supported mobile pastoral nomadism based on the five traditional herds: horses, cattle, sheep, goats and two-humped Bactrian camels [@S2024Role; @Bai2025Pastoral; @EnkhAmgalan2026Perspective].

Permanent arable agriculture was negligible, confined to small Russian and Chinese market gardens along the Tuul and Selenge river valleys [@pozdneyev1971mongolia; @maiskii1921sovremennaya]. The human population of approximately 596k was organised across four historical Khalkha aimags (Tüsheet Khan, Setsen Khan, Sain Noyon Khan and Zasagt Khan), the western Khovd frontier district and the personal ecclesiastical estate of the Bogd Gegeen (*Ikh Shabi*) [@HouYangfang2001Republic; @caoshuji2001zhongguo; @bawden1989modern].

Steppe society was constrained by severe demographic stagnation [@bawden1989modern; @rupen1964mongols]. The primary structural depressant was the Tibetan Buddhist monastic institution [@pozdneyev1971mongolia; @maiskii1921sovremennaya]. Russian surveys by Pozdneyev in 1892–1893 and Ivan Maiskii in 1919–1920 estimated that between 35% and 45% of the adult male population were ordained Buddhist lamas residing in more than seven hundred and fifty monasteries and temple colleges across the country [@pozdneyev1971mongolia; @maiskii1921sovremennaya]. Monastic vows of celibacy removed a large proportion of reproductive males from marital unions, depressing the crude birth rate to an estimated 25 to 30 per thousand [@maiskii1921sovremennaya; @Spoorenberg2015Reconstructing].

Concurrently, infectious diseases—particularly endemic syphilis, gonorrhoea, tuberculosis and recurrent typhus—inflicted immense reproductive impairment and infant wastage [@maiskii1921sovremennaya; @WT2025Strength; @E2026Stratified]. Contemporary observers reported that secondary syphilis caused high rates of miscarriages and congenital infant mortality, while untreated venereal infections induced primary and secondary sterility in nearly a third of pastoral women [@maiskii1921sovremennaya; @Spoorenberg2015Reconstructing]. Crude death rates routinely hovered between 25 and 35 per thousand, and infant mortality frequently exceeded 250 deaths per thousand live births, resulting in essentially zero net population growth across the late nineteenth and early twentieth centuries [@maiskii1921sovremennaya; @Spoorenberg2008What].

## The 1918AD Maiskii Census and Pre-Revolutionary Demography

The baseline demographic enumeration of early twentieth-century Mongolia was conducted in 1918AD by an expedition organised under Russian economist and diplomat Ivan Mikhailovich Maiskii [@maiskii1921sovremennaya; @HouYangfang2001Republic]. Published in Irkutsk in 1921AD as *Sovremennaya Mongoliya*, Maiskii's survey harmonised local banner tax returns, monastic roll books and consular reports into the first comprehensive statistical accounting of Outer Mongolia [@maiskii1921sovremennaya; @HouYangfang2001Republic; @rupen1964mongols].

Maiskii registered a total resident indigenous population of 599.582 individuals, supplemented by approximately 100k foreign residents consisting predominantly of Chinese merchants, seasonal artisans, money-lenders and a smaller community of Russian fur traders, consular guards and transport agents [@maiskii1921sovremennaya; @HouYangfang2001Republic]. The indigenous population comprised 542.500 Khalkha Mongols, 26.000 Oirats and Durbets in the western Khovd basin, 16.000 Buriats in the northern forest-steppe, and roughly 15.000 Kazakhs, Uriankhai and Darkhad nomads [@maiskii1921sovremennaya; @sanders2010historical].

Maiskii's data documented profound institutional skewing: out of roughly 300k adult males, approximately 105k were enrolled as lamas, of whom 50k resided permanently in monastic compounds while 55k lived in nomadic pastoral encampments but retained clerical exemptions from military service and banner corvée (*alba*) [@maiskii1921sovremennaya; @bawden1989modern].

Sedentary urbanisation was dominated by Ikh Khüree (Urga, renamed Niislel Khüree in 1912AD), which Maiskii enumerated at 48.562 permanent and seasonal residents (amounting to 8,1% of the national aggregate) [@maiskii1921sovremennaya; @NSOMongoliaHistoricalCensuses]. Beyond the capital, urban centres were modest: the western Qing administrative seat of Khovd contained roughly 6k inhabitants; Uliastai housed 5k; the Russian border trading hub of Altanbulag (Kyakhta Maimaicheng) accommodated 7k; and major monastic centres such as Erdene Zuu, Tsetserleg (Zaya Gegeenii Khüree) and Choibalsan (San Beisiin Khüree) contained between 3k and 5k monks and traders [@maiskii1921sovremennaya; @pozdneyev1971mongolia; @Bai2023Human]. Outside these nucleated monastic and commercial settlements, regional human density across the plateau stood at just 0,38 persons per km² [@maiskii1921sovremennaya].

## Foundation of the Mongolian People's Republic and Aimag Reorganisation (1924 to 1940AD)

The Mongolian Revolution of 1921AD, led by Damdin Sükhbaatar, Khorloogiin Choibalsan and the Mongolian People's Revolutionary Party (MPRP) with Red Army military backing, ousted Chinese warlord forces and Roman von Ungern-Sternberg's White Russian division [@bawden1989modern; @rupen1964mongols]. Following the death of the Bogd Khan in May 1924, the first Great State Khural convened in November 1924, officially abolishing the theocratic monarchy and proclaiming the Mongolian People's Republic (MPR) [@bawden1989modern; @atwood2004encyclopedia]. Niislel Khüree was renamed Ulaanbaatar ("Red Hero"), and state ownership of all rangeland was enshrined in the constitution [@bawden1989modern; @sanders2010historical].

Between 1924AD and 1931AD, the revolutionary government systematically dismantled the Qing feudal and ecclesiastical governance structures [@bawden1989modern; @rupen1964mongols]. The ecclesiastical *Ikh Shabi* estates were abolished in 1925AD, bringing several hundred thousand former temple serfs under direct state administration [@bawden1989modern; @HouYangfang2001Republic]. In February 1931, the Seventh Great Khural enacted a comprehensive territorial-administrative reform that eliminated the four historical Chinggisid aimags [@sanders2010historical; @HouYangfang2001Republic].

In their place, the national territory was partitioned into thirteen rationalised aimags named after prominent geographic features, mountains and rivers: Arkhangai, Bayantümen (later Dornod), Gov-Altai, Zavkhan, Övörkhangai, Ömnögovi, Töv, Uvs, Khovd, Khövsgöl, Khentii, Selenge and Dornogovi [@sanders2010historical; @HouYangfang2001Republic]. Each aimag was sub-divided into *soum* (administrative districts), which were in turn partitioned into *bag* (rural pastoral brigades) [@humphrey1999end; @sneath2000pastoral]. Further administrative subdivisions in 1938AD and 1941AD created Bayan-Ölgii in the far west to accommodate Kazakh-speaking pastoralists, Bulgan in the north-central agricultural belt, Dundgovi in the central desert steppe, and Sükhbaatar in the eastern rangelands [@sanders2010historical; @NSOMongoliaHistoricalCensuses].

The late 1930s were marked by severe state terror and religious purges directed by Choibalsan with Soviet NKVD coordination [@bawden1989modern; @atwood2004encyclopedia; @rupen1964mongols]. Between 1937AD and 1939AD, over seven hundred Buddhist monasteries were systematically destroyed or closed, and an estimated twenty to thirty thousand lamas, intellectuals and political dissidents were executed or imprisoned in labor camps [@bawden1989modern; @rupen1964mongols]. Tens of thousands of junior lamas were forcibly defrocked, secularised and conscripted into military service or state enterprises [@bawden1989modern; @Spoorenberg2015Reconstructing].

Despite its tragic human toll, the forced dissolution of the monastic estate had monumental long-term demographic consequences: it returned nearly one hundred thousand young adult males to civilian society, eliminating institutional celibacy and dramatically increasing marriage rates and household formation across the 1940s [@Spoorenberg2015Reconstructing; @rupen1964mongols]. National census returns recorded the population climbing from 683.567 in 1935AD to 704.688 in 1944AD and 788.826 by 1956AD [@NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic].

## Collectivisation, the Negdel System and Pastoral Sedentarisation (1940 to 1960AD)

Following World War II, during which Mongolia provided substantial livestock and material supplies to the Soviet war effort, the MPRP regime embarked on the collectivisation of pastoral agriculture [@bawden1989modern; @sneath2000pastoral; @humphrey1999end]. Earlier attempts at forced collectivisation during the leftist period (1929–1932AD) had provoked armed uprisings and the slaughter of millions of animals, forcing the government to adopt the "New Turn" policy that temporarily restored private herding [@bawden1989modern; @rupen1964mongols]. In the 1950s, the state renewed collectivisation through gradual economic incentives, progressive taxation and veterinary subsidies [@sneath2000pastoral; @humphrey1999end].

By 1959AD, the collectivisation of pastoralism was complete: over 99% of nomadic households were organised into approximately three hundred pastoral cooperatives (*negdel*) [@sneath2000pastoral; @humphrey1999end; @sanders2010historical]. The *negdel* represented a hybrid socioeconomic institution: the state owned the collective rangeland and the bulk of the livestock herds (allowing each herding household a private allotment of up to 50 to 75 animals in the Gobi and 30 to 50 in northern zones), while herders were organised into specialised brigades (*brigad*) managed by collective directors and agronomists [@sneath2000pastoral; @humphrey1999end; @S2024Role].

Crucially for settlement geography, each *negdel* was territorialised to coincide exactly with an administrative *soum*, creating approximately three hundred permanent soum centres across Mongolia [@sneath2000pastoral; @humphrey1999end; @Bai2023Human]. Each soum centre was equipped with standardised modern infrastructure: a primary or ten-year boarding school (*doniin surguul*), a medical clinic with a resident physician and maternity beds, a veterinary diagnostic and dipping station, a post and telegraph office, a communal club and cinema, an administrative building, a public bathhouse and retail shops operated by the state consumer cooperative (*tsayz*) [@humphrey1999end; @WT2025Strength; @B2026Efficiency].

The boarding school system removed school-age pastoral children from nomadic encampments for nine months of the year, lodging them in heated dormitories at the soum centre, which achieved near-universal literacy by the late 1960s [@sanders2010historical; @Bai2025Pastoral]. While pastoral families continued seasonal herd migrations between summer pastures (*zuslan*) and sheltered winter quarters (*öwoljoo*), their logistical, educational and medical gravity became permanently anchored to the fixed built environment of the soum centre [@humphrey1999end; @S2026Spatial].

## Public Health, the Semashko System and the Socialist Demographic Transition (1950 to 1990AD)

Between 1950AD and 1990AD, Mongolia underwent one of the most compressed and dramatic demographic transitions in Eurasian history [@Spoorenberg2015Reconstructing; @Spoorenberg2008What; @WT2025Strength]. The catalyst was the comprehensive implementation of the Soviet Semashko public health model, supported by substantial financial and technical subsidies from the Soviet Union and Eastern European Comecon partners [@WT2025Strength; @B2026Efficiency].

A network of specialised medical expeditionary teams systematically treated venereal disease throughout the country, deploying newly available penicillin and antibiotics to eradicate syphilis and gonorrhoea by the late 1950s [@Spoorenberg2015Reconstructing; @WT2025Strength]. Universal childhood immunisation programmes eliminated smallpox, polio and diphtheria, while mobile tuberculosis sanitariums and fluorography units brought primary epidemiology into remote desert-steppe districts [@WT2025Strength; @E2026Stratified]. The physician-to-population ratio expanded dramatically from 1 doctor per 10.000 residents in 1940AD to over 27 per 10.000 by 1985AD, supported by maternal rest homes (*toroh gazar*) in every soum where expectant pastoral mothers were accommodated two weeks prior to delivery [@WT2025Strength; @B2026Efficiency; @NE2026Pregnancy].

As maternal and infant mortality fell, fertility surged to historic peaks [@Spoorenberg2015Reconstructing; @Spoorenberg2008What]. The MPRP government pursued aggressively pronatalist policies: access to modern contraception and induced abortion was strictly restricted, family allowances were paid per child, and mothers bearing four or more children were celebrated with state medals: the Order of Maternal Glory (*Aldart Ekhiin Odon*), First and Second Class, which conferred lifetime pension entitlements, free annual sanitarium stays and housing preferences [@Spoorenberg2015Reconstructing; @sanders2010historical].

The total fertility rate (TFR) rose from an estimated 4,5 children per woman in 1945AD to an astonishing peak of 7,3 to 7,6 in the mid-1960s, before easing to 6,1 in 1975AD and 4,4 by 1989AD [@Spoorenberg2015Reconstructing; @NSOMongoliaHistoricalCensuses]. Concurrently, infant mortality declined from over 200 per thousand before World War II to 57 per thousand by 1985AD [@Spoorenberg2008What; @T2025Trends]. Crude death rates fell from 25 per thousand to under 8 per thousand, yielding an annual rate of natural increase exceeding 3% between 1960AD and 1980AD [@NSOMongoliaHistoricalCensuses; @Spoorenberg2015Reconstructing]. National population grew from 788.826 in 1956AD to 973.849 in 1963AD, 1.146.672 in 1969AD, 1.577.561 in 1979AD and 2.098.710 by 1990AD [@NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic].

```
Table: Variogram diagnostics across ten Holocene horizons
```

<figure class="crd-table-figure" id="tab:kriging-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (to 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000005</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0106</td><td class="crd-td">0,1177</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0471</td><td class="crd-td">0,7343</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00004</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0722</td><td class="crd-td">1,0729</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age, Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000066</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,1232</td><td class="crd-td">1,6294</td></tr>
<tr><td class="crd-td"><strong>5. Spring, Autumn and Warring States (771 to 221BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000038</td><td class="crd-td">0,04</td><td class="crd-td">0,9995</td><td class="crd-td">0,0654</td><td class="crd-td">0,9254</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,00001</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0214</td><td class="crd-td">0,2085</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin and Northern and Southern (220 to 589AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0323</td><td class="crd-td">0,3491</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000017</td><td class="crd-td">0,04</td><td class="crd-td">0,9996</td><td class="crd-td">0,0345</td><td class="crd-td">0,3384</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,05</td><td class="crd-td">0,9991</td><td class="crd-td">0,0367</td><td class="crd-td">0,3187</td></tr>
<tr><td class="crd-td"><strong>10. Ming, Qing and Modern (1368 to 2026AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000032</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0879</td><td class="crd-td">0,706</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> East Asian kriging variogram diagnostics across ten Holocene horizons (163.892 valid land cells, regularised tau1 = 1,5, tau2 = 2,775).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:kriging-epochs-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Sites</th><th class="crd-th">Active Catchments</th><th class="crd-th">Habitability Beta</th><th class="crd-th">Ecozone Beta</th><th class="crd-th">Fluvial Beta</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Palaeolithic and Early Neolithic (to 5000BC)</strong></td><td class="crd-td">1.435</td><td class="crd-td">575</td><td class="crd-td">0,001</td><td class="crd-td">0,001</td><td class="crd-td">0,0487</td></tr>
<tr><td class="crd-td"><strong>2. Middle Neolithic Yangshao (5000 to 3000BC)</strong></td><td class="crd-td">6.450</td><td class="crd-td">666</td><td class="crd-td">0,0013</td><td class="crd-td">0,0185</td><td class="crd-td">0,0553</td></tr>
<tr><td class="crd-td"><strong>3. Late Neolithic Longshan (3000 to 2000BC)</strong></td><td class="crd-td">9.929</td><td class="crd-td">738</td><td class="crd-td">0,0034</td><td class="crd-td">0,0234</td><td class="crd-td">0,0566</td></tr>
<tr><td class="crd-td"><strong>4. Bronze Age, Shang and Western Zhou (2000 to 771BC)</strong></td><td class="crd-td">17.043</td><td class="crd-td">777</td><td class="crd-td">0,008</td><td class="crd-td">0,035</td><td class="crd-td">0,0549</td></tr>
<tr><td class="crd-td"><strong>5. Spring, Autumn and Warring States (771 to 221BC)</strong></td><td class="crd-td">9.355</td><td class="crd-td">761</td><td class="crd-td">0,001</td><td class="crd-td">0,0315</td><td class="crd-td">0,0537</td></tr>
<tr><td class="crd-td"><strong>6. Qin, Han and Xiongnu (221BC to 220AD)</strong></td><td class="crd-td">3.078</td><td class="crd-td">746</td><td class="crd-td">0,001</td><td class="crd-td">0,0204</td><td class="crd-td">0,049</td></tr>
<tr><td class="crd-td"><strong>7. Wei, Jin and Northern and Southern (220 to 589AD)</strong></td><td class="crd-td">4.615</td><td class="crd-td">565</td><td class="crd-td">0,001</td><td class="crd-td">0,0256</td><td class="crd-td">0,0495</td></tr>
<tr><td class="crd-td"><strong>8. Sui, Tang and Five Dynasties (589 to 960AD)</strong></td><td class="crd-td">4.926</td><td class="crd-td">648</td><td class="crd-td">0,001</td><td class="crd-td">0,0278</td><td class="crd-td">0,0508</td></tr>
<tr><td class="crd-td"><strong>9. Liao, Song, Jin and Yuan (960 to 1368AD)</strong></td><td class="crd-td">5.284</td><td class="crd-td">803</td><td class="crd-td">0,001</td><td class="crd-td">0,0282</td><td class="crd-td">0,0551</td></tr>
<tr><td class="crd-td"><strong>10. Ming, Qing and Modern (1368 to 2026AD)</strong></td><td class="crd-td">12.894</td><td class="crd-td">962</td><td class="crd-td">0,0083</td><td class="crd-td">0,0409</td><td class="crd-td">0,0594</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Horizon archaeological site counts and WLS covariate slopes in the East Asian kriging domain.</figcaption>
</figure>

## Socialist Industrialisation and New Towns: Darkhan, Erdenet and Choir

Complementing pastoral development, the MPR state orchestrated large-scale planned industrialisation designed to create a modern socialist working class [@rupen1964mongols; @Bai2023Human; @sanders2010historical]. The infrastructural backbone was the Trans-Mongolian Railway, constructed with Soviet and Chinese assistance between 1949AD and 1955AD, connecting the Soviet railway network at Naushki with Ulaanbaatar and the Chinese border at Zamiin Uud [@sanders2010historical; @Bank2020Mongolia]. The railway unlocked the mineral and agricultural resources of northern and central Mongolia, creating a powerful north-south demographic development spine [@Bai2023Human; @S2026Spatial].

In 1961AD, the government inaugurated the construction of Darkhan ("Blacksmith") in the Sharyngol coal and Selenge arable basin, planned as an international Comecon exemplar industrial city [@sanders2010historical; @Bai2023Human]. Built with Soviet, Polish, Hungarian and Czechoslovak engineering cadres, Darkhan incorporated modern pre-cast concrete apartment blocks, thermal power stations, cement plants, a sheepskin coat factory and grain storage elevators [@Bai2023Human]. Darkhan expanded rapidly, reaching 23k in 1969AD, 50k in 1979AD and 90,5k in contemporary censuses, becoming the secondary industrial metropolis of the republic [@NSOMongolia2025PxWeb; @Bai2023Human].

In 1974AD, the discovery of the world-class Erdenetiin-Ovoo copper-molybdenum porphyry deposit in Bulgan aimag led to the founding of Erdenet as a joint Soviet-Mongolian mining complex [@sanders2010historical; @Bai2023Human]. Connected by a branch railway line, Erdenet was constructed at lightning speed, housing thousands of Soviet engineers and Mongolian miners in prefabricated residential micro-districts [@Bai2023Human]. Erdenet grew from 35k in 1979AD to 60k in 1989AD and 106,8k by 2025AD, becoming the second-largest city in Mongolia and the primary generator of national export revenue [@NSOMongolia2025PxWeb; @Bai2023Human; @Bank2020Mongolia].

Along the southern railway corridor, the garrison and transit town of Choir in Govisümber aimag was expanded from 1956AD onward, housing a massive Soviet tank division and airbase with over 30k Soviet military personnel until their withdrawal in 1989–1992AD [@sanders2010historical; @rupen1964mongols]. In 1994AD, recognising their distinct urban-industrial profiles, the State Great Khural detached Darkhan from Selenge aimag to form Darkhan-Uul aimag, detached Erdenet from Bulgan aimag to form Orkhon aimag, and detached Choir from Dornogovi aimag to establish Govisümber aimag [@sanders2010historical; @NSOMongolia2025PxWeb].

## Democratic Transition, Market Reforms and the Post-1990 Fertility Contraction

The peaceful democratic revolution of March 1990 terminated seven decades of MPRP one-party rule and initiated a traumatic economic transition toward a multi-party democracy and market economy [@bawden1989modern; @atwood2004encyclopedia; @humphrey1999end]. The sudden collapse of the Soviet Union in 1991AD brought the abrupt termination of Soviet financial subsidies, which had historically financed up to a third of Mongolia's gross domestic product [@Bank2020Mongolia; @sneath2000pastoral].

Industrial enterprises in Ulaanbaatar, Darkhan and Erdenet suffered acute shortages of fuel, spare parts and raw materials, leading to factory closures, widespread urban unemployment and hyperinflation reaching 325% in 1992–1993AD [@Bank2020Mongolia; @humphrey1999end]. In response, the state dismantled the *negdel* collective farms and privatised livestock herds (*mal khuvchslol*) between 1991AD and 1993AD, distributing animals directly to pastoral households [@humphrey1999end; @sneath2000pastoral].

Economic crisis produced a steep contraction in fertility [@Spoorenberg2015Reconstructing; @Xue2014Research; @Delventhal2021Demographic]. Total fertility collapsed from 4,4 children per woman in 1989AD to 2,8 in 1995AD, 2,1 in 2005AD and a trough of 1,95 in 2006AD [@Spoorenberg2015Reconstructing; @NSOMongoliaHistoricalCensuses]. This sharp drop reflected multiple compounding factors: the repeal of socialist pronatalist subsidies, the widespread availability of modern intrauterine devices and hormonal contraceptives, the introduction of legal elective abortion in 1989AD, and the economic postponement of marriage and childbearing by young urban couples facing employment insecurity [@Spoorenberg2015Reconstructing; @Sobotka2021Post; @Drflinger2024Fertility]. Only after 2008AD, aided by rising copper and coal export revenues and renewed child allowance payments (*huukhdin mongo*), did fertility partially rebound to between 2,8 and 3,1 children per woman [@Spoorenberg2015Reconstructing; @NSOMongolia2025PxWeb].

## Winter Dzud Disasters and Mass Rural-to-Urban Displacement (1999 to 2010AD)

While livestock privatisation initially buffered rural families against urban starvation, it removed socialist risk-management structures: state fodder reserves, emergency motorised transport and cooperative veterinary fencing were abandoned [@humphrey1999end; @sneath2000pastoral; @C2022Effectiveness]. The vulnerability of the privatised pastoral economy was demonstrated by catastrophic multi-year winter disasters known as *dzud* [@Kwon2026Governing; @C2022Effectiveness; @Imoli2025Perceiving].

A *dzud* occurs when severe summer drought deprives livestock of adequate forage to build autumn fat reserves, followed by extreme winter blizzards, impenetrable ice sheets (*tsagaan dzud* or *tumur dzud*) and temperatures below -45°C, preventing animals from reaching grass beneath frozen crusts [@Kwon2026Governing; @C2022Effectiveness; @Imoli2025Perceiving].

Between 1999AD and 2002AD, consecutive winter *dzud* struck central and western aimags, killing over eleven million head of livestock—approximately 30% of the national herd [@Kwon2026Governing; @C2022Effectiveness; @Shugatai2021Population]. Entire pastoral lineages were rendered destitute overnight. A second catastrophic disaster struck in the winter of 2009–2010, killing 8,5M animals across nineteen aimags [@Kwon2026Governing; @Imoli2025Perceiving; @C2022Effectiveness].

Having lost their entire productive capital, tens of thousands of bankrupt herding families abandoned the steppe [@Kwon2026Governing; @Sharapov2026Quiet; @Bai2023Human]. In contrast to the socialist era, when domestic movement was strictly controlled by residence permits (*pasport*), the 1992 democratic constitution guaranteed universal freedom of domestic travel and residence [@sanders2010historical; @Bai2023Human]. This legal freedom enabled a massive rural exodus toward regional urban hubs, and above all toward the national capital [@Bai2023Human; @Shugatai2021Population; @Sharapov2026Quiet].

## Hyper-Primacy and Ger-District Urbanisation in Ulaanbaatar (1990 to 2026AD)

The influx of rural migrants fundamentally transformed Ulaanbaatar's spatial and demographic structure [@Bai2023Human; @Shugatai2021Population; @Sharapov2026Quiet]. Under the 2002 Law on Land, every Mongolian citizen is legally entitled to acquire a private parcel of residential land (up to 700 m² in urban zones) free of charge [@Bai2023Human; @Bank2020Mongolia]. Arriving herders claimed plots on the steep mountain slopes and unserviced alluvial plains surrounding the city, erecting wooden fences (*khashaa*) and pitching traditional felt gers or constructing uninsulated brick houses [@Bai2023Human; @Sharapov2026Quiet].

These informal peri-urban neighborhoods, known collectively as *ger* districts (*ger khoroolol*), expanded exponentially, climbing up the ridges of Chingeltei, Bayanzürkh and Songinokhairkhan districts [@Bai2023Human; @Sharapov2026Quiet; @R2026Facilitators]. By 2020AD, approximately 60% of Ulaanbaatar's population resided in *ger* districts lacking connection to central municipal district heating, piped sewage or running water [@Bai2023Human; @Bank2020Mongolia; @R2026Facilitators]. Residents rely on communal water kiosks supplied by tanker trucks, unlined pit latrines that contaminate the shallow groundwater table, and individual cast-iron stoves burning raw coal and briquettes for domestic heating during sub-zero winters [@Bai2023Human; @R2026Facilitators; @O2026Associations]. The resulting smoke inversions trap dense concentrations of fine particulate matter ($PM_{2.5}$) in the mountain basin, causing severe winter respiratory morbidity among children and the elderly [@O2026Associations; @E2026Stratified; @R2026Facilitators].

Despite municipal infrastructure bottlenecks, Ulaanbaatar continued to draw migrants seeking tertiary education, healthcare, trade and formal employment [@Bai2023Human; @Bank2020Mongolia]. The capital expanded from 567.308 inhabitants in 1990AD to 777.397 in 2000AD, 1.220.620 in 2010AD, 1.571.526 in 2020AD and 1.806.496 in the wider municipality (1.732.000 in the central urban core) by 2026AD [@NSOMongolia2025PxWeb; @Bai2023Human]. Ulaanbaatar's share of the national population surged from 8,1% in 1912AD and 27,03% in 1990AD to 49,96% by 2026AD [@NSOMongolia2025PxWeb]. This represents one of the most extreme instances of urban demographic hyper-primacy on earth, where half of an entire nation's population resides within a single metropolitan valley [@Bai2023Human; @S2026Spatial].

# Methodology

## Sub-Regional Population Partitioning and NSO Census Calibration

Demographic calibration across the 1.562.476 km² territory of Mongolia harmonises two primary official data series under JADE: historical census compendia published by the State Statistical Office of the MPR (1918, 1935, 1944, 1956, 1963, 1969, 1979 and 1989AD) and annual registry returns from the National Statistics Office of Mongolia 1212.mn PxWeb statistical portal spanning 1990AD to 2026AD [@NSOMongolia2025PxWeb; @NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic; @maiskii1921sovremennaya].

To provide unbroken longitudinal continuity across changing administrative boundaries, historical county and banner data were back-projected onto the 22 canonical administrative units (the 21 modern aimags plus the municipality of Ulaanbaatar) using spatial overlay techniques and soum-level territorial concordances [@NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic; @S2026Spatial].

Each aimag is represented by its official WGS84 bounding polygon, pixel count and area, establishing a standardised sub-regional matrix (Table \ref{tab:regions-mongol-modern}). In parallel, 256 catalogued settlements were linked to their parent aimag jurisdictions, recording longitudinal population benchmarks across modern census rounds [@NSOMongolia2025PxWeb; @Bai2023Human].

## Non-Stationary Kriging and Covariate Surface Estimation

Continuous intra-regional population density surfaces are generated via Paciorek-Schervish non-stationary Matérn kriging ($\nu = 3/2$) across the East Asian terrestrial domain [@paciorek2006spatial]. The regional variogram model incorporates 87.810 archaeological and historical site records and 1.274 domestic catchments, regularised with short range parameter $\tau_1 = 1,50$ (effective short range 73,43 km), long range parameter $\tau_2 = 2,775$, nugget-to-sill ratio 0,04 and residual weighted least squares $R^2 = 0,9994$ (Table \ref{tab:kriging-mongol-modern}).

Residual kriging incorporates five environmental and historical covariates calibrated through weighted least squares (WLS) regression: terrestrial habitability indices ($\beta_0 = 0,0083$), natural resource potential ($\beta_1 = 0,0010$), ecozone pasture productivity ($\beta_2 = 0,0409$), riverine and fluvial proximity ($\beta_3 = 0,0594$) and coastal/drainage connectivity ($\beta_4 = 0,1235$) (Table \ref{tab:kriging-epochs-mongol-modern}). The resulting density fields are bounded by the 22 aimag areal masks, ensuring exact mathematical conservation of census population totals while reflecting local ecological and infrastructural attraction [@S2026Spatial; @Bemmann2020Karakorum].

# Results

## Sub-Regional Trajectories and Demographic Regimes

The demographic trajectory of modern Mongolia displays three distinct developmental epochs: baseline stagnation (1912 to 1950AD), socialist acceleration and industrial dispersion (1950 to 1990AD), and post-socialist hyper-primate concentration (1990 to 2026AD) (Figure \ref{fig:traj-mongolia-modern}).

<figure class="crd-figure-block" id="fig:traj-mongolia-modern">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-mongolia-modern-era/fig2_mongolia_modern_era_trajectory.png" alt="fig:traj-mongolia-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectory of Mongolia from 1912AD to 2026AD across 22 administrative territories with sub-regional trajectory bands.</figcaption>
</figure>

In the first epoch (1912 to 1950AD), population grew at a modest annual rate of 0,44%, rising from 596.340 in 1912AD to 704.316 in 1950AD [@NSOMongoliaHistoricalCensuses; @HouYangfang2001Republic]. Regional shares remained remarkably stable: the central Khalkha pastoral territories of Arkhangai, Töv, Övörkhangai and Zavkhan each maintained between 5% and 8% of the national total, while Ulaanbaatar held roughly 8% to 10% [@NSOMongoliaHistoricalCensuses; @maiskii1921sovremennaya].

The second epoch (1950 to 1990AD) witnessed dramatic demographic acceleration: total population tripled from 704k to 2,1M, driven by natural increase rates exceeding 30 per thousand [@Spoorenberg2015Reconstructing; @NSOMongoliaHistoricalCensuses]. Growth during this phase occurred simultaneously across both rural pastoral soums and urban industrial hubs [@sneath2000pastoral; @Bai2023Human]. Rural aimags expanded to all-time historical population highs around 1990AD: Arkhangai reached 86.754, Khövsgöl reached 101.800, Zavkhan reached 88.900, Övörkhangai reached 96.500 and Uvs reached 83.900 [@NSOMongolia2025PxWeb; @NSOMongoliaHistoricalCensuses]. Concurrently, planned industrialisation expanded Ulaanbaatar from 75k to 567k, while Darkhan (in Selenge/Darkhan-Uul) and Erdenet (in Orkhon) emerged as major secondary urban magnets [@Bai2023Human; @sanders2010historical].

<figure class="crd-figure-block" id="fig:shares-mongolia-modern">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-mongolia-modern-era/fig3_mongolia_modern_era_shares.png" alt="fig:shares-mongolia-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Percentage demographic shares and benchmark population comparison across the 22 Mongolian territories between 1912AD and 2026AD.</figcaption>
</figure>

The third epoch (1990 to 2026AD) reversed rural demographic expansion (Figure \ref{fig:shares-mongolia-modern}). Following livestock privatisation and recurring winter *dzud* disasters, seventeen out of twenty-one rural aimags experienced sustained demographic stagnation or outright depopulation as young adults migrated toward the capital [@Shugatai2021Population; @Kwon2026Governing; @Sharapov2026Quiet]. Zavkhan contracted from 88.900 in 1990AD to 69.800 in 2010AD and 71.300 by 2026AD; Gov-Altai fell from 62.700 to 53.500; and Dundgovi dropped from 49.300 to 38.800 [@NSOMongolia2025PxWeb].

In sharp contrast, Ulaanbaatar absorbed more than 1,2M net residents between 1990AD and 2026AD, climbing from 567k to 1,81M in the capital municipality, elevating its national population share from 27,03% in 1990AD to 49,96% by 2026AD (Table \ref{tab:regions-mongol-modern}). Secondary growth was confined to mining and transport corridors: Orkhon (Erdenet) expanded from 56k in 1990AD to 108k in 2026AD, Darkhan-Uul grew from 74k to 109k, and Ömnögovi in the South Gobi expanded from 42k to 74k driven by the massive Oyu Tolgoi copper-gold and Tavan Tolgoi coking coal mining booms [@NSOMongolia2025PxWeb; @Bank2020Mongolia; @Bai2023Human].

<figure class="crd-table-figure" id="tab:regions-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1912AD</th><th class="crd-th">1925AD</th><th class="crd-th">1944AD</th><th class="crd-th">1969AD</th><th class="crd-th">1995AD</th><th class="crd-th">2026AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arkhangai</strong></td><td class="crd-td">50.714</td><td class="crd-td">33,3k</td><td class="crd-td">33,7k</td><td class="crd-td">38,2k</td><td class="crd-td">52,2k</td><td class="crd-td">95,6k</td><td class="crd-td">93,2k</td></tr>
<tr><td class="crd-td"><strong>Bayan-Ulgii</strong></td><td class="crd-td">43.734</td><td class="crd-td">36,5k</td><td class="crd-td">36,9k</td><td class="crd-td">41,8k</td><td class="crd-td">57,2k</td><td class="crd-td">78,2k</td><td class="crd-td">120,6k</td></tr>
<tr><td class="crd-td"><strong>Bayankhongor</strong></td><td class="crd-td">114.543</td><td class="crd-td">29,3k</td><td class="crd-td">29,7k</td><td class="crd-td">33,6k</td><td class="crd-td">46k</td><td class="crd-td">83,3k</td><td class="crd-td">89,8k</td></tr>
<tr><td class="crd-td"><strong>Bulgan</strong></td><td class="crd-td">46.440</td><td class="crd-td">20,6k</td><td class="crd-td">20,8k</td><td class="crd-td">23,6k</td><td class="crd-td">32,2k</td><td class="crd-td">59,7k</td><td class="crd-td">61,3k</td></tr>
<tr><td class="crd-td"><strong>Darkhan-Uul</strong></td><td class="crd-td">56</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">18k</td><td class="crd-td">82,2k</td><td class="crd-td">112,3k</td></tr>
<tr><td class="crd-td"><strong>Dornod</strong></td><td class="crd-td">121.403</td><td class="crd-td">31,5k</td><td class="crd-td">31,9k</td><td class="crd-td">36,1k</td><td class="crd-td">49,4k</td><td class="crd-td">79,4k</td><td class="crd-td">85,9k</td></tr>
<tr><td class="crd-td"><strong>Dornogovi</strong></td><td class="crd-td">112.626</td><td class="crd-td">22,4k</td><td class="crd-td">22,7k</td><td class="crd-td">25,7k</td><td class="crd-td">35,2k</td><td class="crd-td">46k</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Dundgovi</strong></td><td class="crd-td">72.991</td><td class="crd-td">19,3k</td><td class="crd-td">19,5k</td><td class="crd-td">22,1k</td><td class="crd-td">30,2k</td><td class="crd-td">52,8k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Zavkhan</strong></td><td class="crd-td">78.608</td><td class="crd-td">34,7k</td><td class="crd-td">35,1k</td><td class="crd-td">39,8k</td><td class="crd-td">54,4k</td><td class="crd-td">95,9k</td><td class="crd-td">71,8k</td></tr>
<tr><td class="crd-td"><strong>Govi-Altai</strong></td><td class="crd-td">145.504</td><td class="crd-td">24,5k</td><td class="crd-td">24,8k</td><td class="crd-td">28,1k</td><td class="crd-td">38,4k</td><td class="crd-td">66,5k</td><td class="crd-td">57,4k</td></tr>
<tr><td class="crd-td"><strong>Govisumber</strong></td><td class="crd-td">290</td><td class="crd-td">7,7k</td><td class="crd-td">7,8k</td><td class="crd-td">8,8k</td><td class="crd-td">12k</td><td class="crd-td">13k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Khentii</strong></td><td class="crd-td">80.240</td><td class="crd-td">28,8k</td><td class="crd-td">29,2k</td><td class="crd-td">33,1k</td><td class="crd-td">45,2k</td><td class="crd-td">72,9k</td><td class="crd-td">80,6k</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">75.739</td><td class="crd-td">30,3k</td><td class="crd-td">30,7k</td><td class="crd-td">34,8k</td><td class="crd-td">47,5k</td><td class="crd-td">84k</td><td class="crd-td">94,2k</td></tr>
<tr><td class="crd-td"><strong>Khuvsgul</strong></td><td class="crd-td">102.467</td><td class="crd-td">40,2k</td><td class="crd-td">40,7k</td><td class="crd-td">46,1k</td><td class="crd-td">63k</td><td class="crd-td">116,1k</td><td class="crd-td">138,9k</td></tr>
<tr><td class="crd-td"><strong>Orkhon</strong></td><td class="crd-td">855</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">18k</td><td class="crd-td">64,1k</td><td class="crd-td">113,1k</td></tr>
<tr><td class="crd-td"><strong>Selenge</strong></td><td class="crd-td">43.597</td><td class="crd-td">34,5k</td><td class="crd-td">34,9k</td><td class="crd-td">39,5k</td><td class="crd-td">54k</td><td class="crd-td">93,7k</td><td class="crd-td">108,3k</td></tr>
<tr><td class="crd-td"><strong>Sukhbaatar</strong></td><td class="crd-td">85.987</td><td class="crd-td">20k</td><td class="crd-td">20,2k</td><td class="crd-td">22,9k</td><td class="crd-td">31,3k</td><td class="crd-td">56,7k</td><td class="crd-td">67,1k</td></tr>
<tr><td class="crd-td"><strong>Tuv</strong></td><td class="crd-td">77.893</td><td class="crd-td">39,1k</td><td class="crd-td">39,5k</td><td class="crd-td">44,8k</td><td class="crd-td">61,3k</td><td class="crd-td">103,2k</td><td class="crd-td">94k</td></tr>
<tr><td class="crd-td"><strong>Ulaanbaatar</strong></td><td class="crd-td">5.394</td><td class="crd-td">48,3k</td><td class="crd-td">48,9k</td><td class="crd-td">75,9k</td><td class="crd-td">263,5k</td><td class="crd-td">631,8k</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Uvs</strong></td><td class="crd-td">67.264</td><td class="crd-td">33,2k</td><td class="crd-td">33,6k</td><td class="crd-td">38k</td><td class="crd-td">52k</td><td class="crd-td">95,7k</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Umnugovi</strong></td><td class="crd-td">169.028</td><td class="crd-td">16,6k</td><td class="crd-td">16,8k</td><td class="crd-td">19k</td><td class="crd-td">26k</td><td class="crd-td">45,5k</td><td class="crd-td">79,2k</td></tr>
<tr><td class="crd-td"><strong>Uvurkhangai</strong></td><td class="crd-td">67.103</td><td class="crd-td">38k</td><td class="crd-td">38,5k</td><td class="crd-td">43,6k</td><td class="crd-td">59,6k</td><td class="crd-td">108,5k</td><td class="crd-td">116,5k</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">1.562.476</td><td class="crd-td">596,3k</td><td class="crd-td">603,5k</td><td class="crd-td">704,7k</td><td class="crd-td">1,15M</td><td class="crd-td">2,22M</td><td class="crd-td">3,62M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional population benchmarks across 22 Mongolian administrative territories from 1912AD to 2026AD.</figcaption>
</figure>

## Intra-Regional Density Gradients and Settlement Concentration

Table \ref{tab:density-mongol-modern} outlines catalogued settlement counts, population benchmarks and terminal 2026AD areal densities across the 22 administrative territories. Overall national human density rose from 0,38 persons per km² in 1912AD to 2,31 persons per km² in 2026AD across 1.562.476 km².

<figure class="crd-table-figure" id="tab:density-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">1912AD</th><th class="crd-th">2026AD</th><th class="crd-th">2026AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Arkhangai</strong></td><td class="crd-td">13</td><td class="crd-td">33,3k</td><td class="crd-td">93,2k</td><td class="crd-td">1,84</td></tr>
<tr><td class="crd-td"><strong>Bayan-Ulgii</strong></td><td class="crd-td">10</td><td class="crd-td">36,5k</td><td class="crd-td">120,6k</td><td class="crd-td">2,76</td></tr>
<tr><td class="crd-td"><strong>Bayankhongor</strong></td><td class="crd-td">16</td><td class="crd-td">29,3k</td><td class="crd-td">89,8k</td><td class="crd-td">0,78</td></tr>
<tr><td class="crd-td"><strong>Bulgan</strong></td><td class="crd-td">13</td><td class="crd-td">20,6k</td><td class="crd-td">61,3k</td><td class="crd-td">1,32</td></tr>
<tr><td class="crd-td"><strong>Darkhan-Uul</strong></td><td class="crd-td">0</td><td class="crd-td">3,9k</td><td class="crd-td">112,3k</td><td class="crd-td">2.006,09</td></tr>
<tr><td class="crd-td"><strong>Dornod</strong></td><td class="crd-td">12</td><td class="crd-td">31,5k</td><td class="crd-td">85,9k</td><td class="crd-td">0,71</td></tr>
<tr><td class="crd-td"><strong>Dornogovi</strong></td><td class="crd-td">15</td><td class="crd-td">22,4k</td><td class="crd-td">73,2k</td><td class="crd-td">0,65</td></tr>
<tr><td class="crd-td"><strong>Dundgovi</strong></td><td class="crd-td">10</td><td class="crd-td">19,3k</td><td class="crd-td">46,8k</td><td class="crd-td">0,64</td></tr>
<tr><td class="crd-td"><strong>Zavkhan</strong></td><td class="crd-td">20</td><td class="crd-td">34,7k</td><td class="crd-td">71,8k</td><td class="crd-td">0,91</td></tr>
<tr><td class="crd-td"><strong>Govi-Altai</strong></td><td class="crd-td">15</td><td class="crd-td">24,5k</td><td class="crd-td">57,4k</td><td class="crd-td">0,39</td></tr>
<tr><td class="crd-td"><strong>Govisumber</strong></td><td class="crd-td">1</td><td class="crd-td">7,7k</td><td class="crd-td">18,7k</td><td class="crd-td">64,46</td></tr>
<tr><td class="crd-td"><strong>Khentii</strong></td><td class="crd-td">12</td><td class="crd-td">28,8k</td><td class="crd-td">80,6k</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Khovd</strong></td><td class="crd-td">11</td><td class="crd-td">30,3k</td><td class="crd-td">94,2k</td><td class="crd-td">1,24</td></tr>
<tr><td class="crd-td"><strong>Khuvsgul</strong></td><td class="crd-td">19</td><td class="crd-td">40,2k</td><td class="crd-td">138,9k</td><td class="crd-td">1,36</td></tr>
<tr><td class="crd-td"><strong>Orkhon</strong></td><td class="crd-td">2</td><td class="crd-td">3,9k</td><td class="crd-td">113,1k</td><td class="crd-td">132,33</td></tr>
<tr><td class="crd-td"><strong>Selenge</strong></td><td class="crd-td">14</td><td class="crd-td">34,5k</td><td class="crd-td">108,3k</td><td class="crd-td">2,48</td></tr>
<tr><td class="crd-td"><strong>Sukhbaatar</strong></td><td class="crd-td">12</td><td class="crd-td">20k</td><td class="crd-td">67,1k</td><td class="crd-td">0,78</td></tr>
<tr><td class="crd-td"><strong>Tuv</strong></td><td class="crd-td">20</td><td class="crd-td">39,1k</td><td class="crd-td">94k</td><td class="crd-td">1,21</td></tr>
<tr><td class="crd-td"><strong>Ulaanbaatar</strong></td><td class="crd-td">2</td><td class="crd-td">48,3k</td><td class="crd-td">1,81M</td><td class="crd-td">334,91</td></tr>
<tr><td class="crd-td"><strong>Uvs</strong></td><td class="crd-td">13</td><td class="crd-td">33,2k</td><td class="crd-td">86,3k</td><td class="crd-td">1,28</td></tr>
<tr><td class="crd-td"><strong>Umnugovi</strong></td><td class="crd-td">14</td><td class="crd-td">16,6k</td><td class="crd-td">79,2k</td><td class="crd-td">0,47</td></tr>
<tr><td class="crd-td"><strong>Uvurkhangai</strong></td><td class="crd-td">12</td><td class="crd-td">38k</td><td class="crd-td">116,5k</td><td class="crd-td">1,74</td></tr>
<tr><td class="crd-td"><strong>Module Total</strong></td><td class="crd-td">256</td><td class="crd-td">596,3k</td><td class="crd-td">3,62M</td><td class="crd-td">2,31</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued settlements (n=253), population benchmarks and terminal 2026AD areal density (persons per km²).</figcaption>
</figure>

However, national density exhibits extreme spatial divergence. In Ulaanbaatar, areal density reaches an intense 383,63 persons per km² across its 4.709 km² municipal jurisdiction [@NSOMongolia2025PxWeb]. The mining and industrial aimags of Orkhon (128,42 persons per km² across 844 km²) and Darkhan-Uul (33,4 persons per km² across 3.275 km²) likewise exhibit high urban concentrations [@NSOMongolia2025PxWeb; @Bai2023Human].

In stark contrast, rural pastoral rangelands remain among the least densely populated landscapes on earth: the vast arid desert-steppe territories of Ömnögovi (0,45 persons per km² across 165.380 km²), Dornogovi (0,66 across 109.472 km²), Gov-Altai (0,38 across 141.447 km²) and Dundgovi (0,52 across 74.694 km²) accommodate fewer than one person per square kilometre [@NSOMongolia2025PxWeb]. The northern forest-steppe and central mountain aimags maintain intermediate densities between 1,5 and 2,5 persons per km²: Arkhangai (1,84), Bulgan (1,24), Khövsgöl (1,39), Selenge (2,66) and Övörkhangai (1,87) [@NSOMongolia2025PxWeb; @S2026Spatial].

<figure class="crd-figure-block" id="fig:sett-mongolia-modern">
<img class="crd-figure-img" src="/artefacts/project_jade/1.0-mongolia-modern-era/fig4_mongolia_modern_era_settlements.png" alt="fig:sett-mongolia-modern" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and leading fifteen settlement peaks across the 256 catalogued centres of modern Mongolia from 1912AD to 2026AD.</figcaption>
</figure>

Settlement rank-size distribution confirms extreme urban primacy (Figure \ref{fig:sett-mongolia-modern}). The primacy ratio between Ulaanbaatar (1.732.000 urban city residents) and the second-ranked city Erdenet (106.800) is 16,2, while third-ranked Darkhan contains 90.500 [@NSOMongolia2025PxWeb; @Bai2023Human].

Below the three major cities, fifteen aimag capitals form a remarkably uniform secondary tier housing between 20k and 47k residents, including Choibalsan (Kherlen, 47.070), Mörön (43.173), Arvayheer (37.323), Khovd (34.548), Ulaangom (34.003), Dalandzadgad (32.992), Saynshand (28.382), Dzüünkharaa (27.092), Baruun-Urt (25.139), Herlen (Chinggis, 24.783), Sühbaatar (22.539) and Erdenebulgan (Tsetserleg, 21.566) [@NSOMongolia2025PxWeb; @Bai2023Human]. Below this secondary tier, roughly two hundred rural soum centres form a broad base of small administrative nodes with populations between 1,5k and 8k inhabitants [@NSOMongolia2025PxWeb; @S2026Spatial].

<figure class="crd-table-figure" id="tab:source-corpora-mongol-modern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hosner et al. PANGAEA East Asian Archaeological Synthesis</strong></td><td class="crd-td">51.432</td><td class="crd-td">58,46%</td></tr>
<tr><td class="crd-td"><strong>National Cultural Heritage Administration Major Historical Sites</strong></td><td class="crd-td">4.063</td><td class="crd-td">4,62%</td></tr>
<tr><td class="crd-td"><strong>China Historical GIS (CHGIS V6) Dynastic Time Series</strong></td><td class="crd-td">12.651</td><td class="crd-td">14,38%</td></tr>
<tr><td class="crd-td"><strong>CHGIS 1820 Qing Administrative Centres and Towns</strong></td><td class="crd-td">8.516</td><td class="crd-td">9,68%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource (AADR V66)</strong></td><td class="crd-td">739</td><td class="crd-td">0,84%</td></tr>
<tr><td class="crd-td"><strong>XRONOS Radiocarbon Database for East Asia</strong></td><td class="crd-td">1.446</td><td class="crd-td">1,64%</td></tr>
<tr><td class="crd-td"><strong>PEOPLE 3000 Global Radiocarbon Chronology</strong></td><td class="crd-td">325</td><td class="crd-td">0,37%</td></tr>
<tr><td class="crd-td"><strong>Deduplicated Global Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">43</td><td class="crd-td">0,05%</td></tr>
<tr><td class="crd-td"><strong>Archaeological Atlas Excavation Registry</strong></td><td class="crd-td">4.963</td><td class="crd-td">5,64%</td></tr>
<tr><td class="crd-td"><strong>Taiwan Bureau of Cultural Heritage National Register</strong></td><td class="crd-td">1.286</td><td class="crd-td">1,46%</td></tr>
<tr><td class="crd-td"><strong>Tibet and Kham Monastic Heritage Registry</strong></td><td class="crd-td">1.562</td><td class="crd-td">1,78%</td></tr>
<tr><td class="crd-td"><strong>Russian Academy of Sciences Steppe Conditioning Belt</strong></td><td class="crd-td">925</td><td class="crd-td">1,05%</td></tr>
<tr><td class="crd-td"><strong>Mongolian Steppe Archaeological Survey Corpus</strong></td><td class="crd-td">30</td><td class="crd-td">0,03%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Component archaeological and historical registries aggregated into the East Asian kriging domain (87.810 site records).</figcaption>
</figure>

# Limitations

Three principal historiographical and statistical limitations govern demographic reconstruction across modern Mongolia. First, early twentieth-century census enumerations (the 1918AD Maiskii census and early MPR registrations in 1935AD and 1944AD) were conducted in a predominantly mobile nomadic society lacking universal civil registries or identity documents [@maiskii1921sovremennaya; @rupen1964mongols; @HouYangfang2001Republic]. While Maiskii's survey was exceptionally rigorous, mobile households on remote pastoral frontiers and itinerant Buddhist monks were susceptible to under-registration, introducing an estimated uncertainty margin of approximately plus or minus 8% to 10% on baseline pre-1950 figures [@maiskii1921sovremennaya; @Spoorenberg2015Reconstructing].

Second, post-1990 statistical records distinguish between de jure registered residency and de facto actual physical occupancy [@NSOMongolia2025PxWeb; @Bai2023Human; @Shugatai2021Population]. Following the abolition of domestic movement controls, thousands of rural migrants settled in Ulaanbaatar's peri-urban ger districts without formally transferring their official civil registration from their home soums, motivated by lingering land claims, pension procedures or administrative inertia [@Bai2023Human; @Sharapov2026Quiet]. Consequently, official NSO soum population figures in rural aimags tend to modestly overstate resident populations, while Ulaanbaatar's actual de facto physical population may exceed de jure civil registration by 50k to 100k unregistered seasonal dwellers [@Bai2023Human; @Shugatai2021Population].

Third, spatial smoothing via non-stationary kriging models continuous pastoral density decays between catalogued nucleated settlements [@paciorek2006spatial; @S2026Spatial]. Because mobile herders circulate between seasonal grazing tracts without erecting permanent architectural foundations, rural density surfaces capture seasonal pasture carrying capacity and water basin accessibility rather than permanent residential permanence [@humphrey1999end; @S2024Role; @Imoli2025Perceiving].

# Conclusion

Between 1912AD and 2026AD, Mongolia underwent a sweeping demographic, institutional and spatial transformation. Emerging from centuries of Qing suzerainty as an impoverished, stagnating pastoral society of 596k inhabitants where monastic celibacy and epidemic disease circumscribed natural increase, the nation established a socialist state that eliminated clerical feudalism, reorganised rangelands into collective *negdel* cooperatives, and built permanent soum administrative centres across the plateau. The introduction of universal Soviet Semashko healthcare and aggressive pronatalist welfare drove an unprecedented demographic revolution between 1950AD and 1980AD, tripling national population within four decades.

Planned socialist industrialisation along the Trans-Mongolian Railway corridor founded major modern mining cities at Darkhan, Erdenet and Choir. Following the 1990AD democratic revolution, livestock privatisation, the removal of migration barriers and catastrophic winter *dzud* disasters triggered an unprecedented internal rural migration wave.

This rural exodus transformed the capital metropolis of Ulaanbaatar into an extreme hyper-primate city, expanding its peripheral *ger* districts and lifting its population from 48k (8,1%) in 1912AD to 1,81M (49,96%) out of 3,62M national residents by 2026AD. Integrating primary NSO census series, Russian expeditionary surveys and 256 catalogued settlements into the East Asian kriging domain establishes a definitive spatial-demographic framework for modern Inner Asian state development.

# Sources

<div id="refs"></div>
