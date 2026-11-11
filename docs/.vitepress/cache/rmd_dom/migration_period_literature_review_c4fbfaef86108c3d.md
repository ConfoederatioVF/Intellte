---
title: "Slavs, Finns, Balts and Steppe Nomads across Eastern Europe and Siberia"
subtitle: "Population and Settlement from the Late Iron Age to the Early Rus'"
date: "7 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: migration_period_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_migration_period_cultures_map.png"
hero_caption: "Six ecological zones and twenty archaeological cultures from the Dnieper-Desna forest-steppe to the Minusinsk and Baikal basins, showing the shift from open steppe pastures to fortified woodland and mountain valleys between 250AD and 750AD."
hero_label: "fig:hero-map"

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper estimates the population of Belarus, Ukraine and Russia during the Migration Period (*Epokha Velikogo pereseleniya narodov*, c. 250-750AD) and sets those figures in a longer series running from 100AD to the 1897 Russian census (1900AD). Using house floor areas, village sizes, cemetery grave counts and river-valley surveys across six regions, we trace how population shifted between the open steppe and the northern forests. Across the whole territory (excluding the Baltic provinces), total numbers rose from 2,05M (1,6-2,54M) in 100AD to a Late Roman peak of 2,56M (2-3,17M) around 350AD. When the Huns swept across the steppe in the 370s and broke up the eastern Chernyakhov and Late Sarmatian settlements, the total fell to 2,28M (1,78-2,83M) by 450AD, before recovering after the cold spell of the 530s to reach 3,13M (2,44-3,88M) in 700AD and 4,5M (3,51-5,58M) in 900AD. The Migration Period did not empty the land; it moved people north and into the hills. While population on the open Pontic-Caspian steppe and the southern forest-steppe fell by a third between 350AD and 450AD, sheltered woodland and mountain valleys - Pripyat Polesia and Volhynia (*Prague-Korchak*), the Middle Volga (*Imenkovo*), the Belarusian, Volga-Oka and northwestern forests (*Tushemlya-Bantserovshchina*, *Late Dyakovo*, *Moshchiny*, *Ryazan-Oka* and *Pskov Long Barrows*), the Kama basin (*Bakhmutino*, *Turaevo*, *Lomovatovo* and *Polom*) and the North Caucasus (*Alanian Kislovodsk* and *Derbent-Palasa-Syrt*) - grew steadily [@oblomskiy2002dneprovskoe; @vyazov2019middle; @korobov2013terraced; @krenke2019moskvorechye]. Over the next thousand years, forest clearing and the later ploughing of the southern steppe carried the population of these lands to 6,6M in 1200AD, 13,8M in 1700AD and 67,5M by 1900AD [@vodarsky1973naselenie; @kabuzan1990narody; @rashin1956naselenie; @troinitsky1905perepis].



# Background

Estimating the population of Eastern Europe and Siberia during the Migration Period (c. 250-750AD) is harder than for the Roman Mediterranean or early medieval Western Europe, where tax lists and charters survive [@shchukin2005gotskiy; @kazanski2010middle; @oblomskiy2016kolochinskaya]. Across the East European Plain, the North Caucasus, the Urals and Siberia, numbers have to be worked out from the ground up: the size and count of houses inside fortified hillforts (*gorodishcha*) and open villages (*selishcha*), age-at-death figures from cemeteries, pollen cores showing forest clearing and grain growing (*Cerealia*, *Secale*, *Plantago lanceolata* and *Rumex*) and systematic river-valley walks [@krenke2011dyakovo; @vyazov2019middle; @korobov2013terraced; @goldina1999drevnyaya].

Older studies often treated rises and falls in the raw number of known sites between the third and seventh centuries AD as dramatic swings in total population. Newer fieldwork shows that site counts usually reflect changes in village size and how often farmers moved rather than real gains or losses of people [@oblomskiy2002dneprovskoe; @vyazov2019middle; @matveeva2024migratsii]. In the Desna, Seim and Upper Donets forest-steppe, for example, large Chernyakhov farming villages (4-12 ha) broke up in the late fourth century AD into smaller, scattered Kolochin and early Penkovka hamlets (0,8-2,2 ha) along the river terraces. That shift multiplied the number of small pottery scatters on each river bend while cutting the average village from 145 to 45 inhabitants [@terpylovsky2000kievskaya; @oblomskiy2016kolochinskaya; @goryunova1999velikie]. In the Moskva-Oka basin and the Kislovodsk mountain valley, the opposite happened: families gathered into fortified hillforts or stone cliff forts, reducing the number of separate sites even as iron ploughshares and manured hillside terraces fed more mouths [@krenke2019moskvorechye; @korobov2013terraced; @korobov2023alany].^[Throughout this paper, regional population estimates are based on excavated house counts, village areas and cemetery burial totals rather than raw site counts.]

Two events reshaped settlement across Belarus, Ukraine and Russia during these centuries. First, when the Huns crossed the Volga and Don in 370-378AD, they shattered the Late Sarmatian grazing network and drove farmers from the exposed eastern Chernyakhov frontier in the Kursk-Belgorod forest-steppe [@shchukin2005gotskiy; @medvedev2018postsarmat; @novikova2026istoriografiya]. Rather than vanishing, many of these farming communities moved north and north-east into the safer river valleys of the Upper Oka (*Moshchiny*), the Middle Oka (*Ryazan-Oka*) and the Samara-Sviyaga-Lower Kama confluence (*Imenkovo*) [@vorontsov2021fibuly; @vyazov2019middle; @zhikh2019rannie].

Second, tree-ring and pollen records from the Upper Volga, Novgorod-Pskov and the Middle Volga show a sharp cold snap in 536-542AD [@vyazov2019middle; @krenke2019moskvorechye]. Across the Middle Volga and the forest-steppe, cooler weather sped up the switch to hardy winter rye (*Secale cereale*) and iron-shod ploughs, allowing Early Slavic (*Prague-Korchak*, *Kolochin* and *Penkovka*) and Finno-Permic (*Lomovatovo*, *Polom* and *Nevolino*) farming villages to grow steadily from the late sixth to the eighth centuries AD [@kazanski2010middle; @goldina2012nevolino; @nazarov2025lomovatovo].

# Methodology

## Settlement and Household Estimates

To compare populations across different archaeological cultures, we combine excavated house sizes, the number of houses occupied at the same time in each village and river-valley survey counts [@oblomskiy2002dneprovskoe; @krenke2011dyakovo; @goldina1999drevnyaya; @matveeva2000sargat]. For an archaeological culture c in region z at date t, the regional population is estimated as:

$$P_{c,z}(t) = N_{\text{clusters}}(t) \times \bar{S}_{\text{contemp}} \times \bar{H}_{\text{active}} \times \mu_{\text{house}}(c)$$

where $N_{\text{clusters}}(t)$ is the estimated number of active village groups across the surveyed river valleys (adjusted for survey coverage $\kappa_z \in [0{,}3,\, 0{,}65]$), $\bar{S}_{\text{contemp}}$ is the mean number of villages inhabited at the same time per group after adjusting for how long each village stood ($\tau_{\text{site}} / \Delta T_{\text{phase}}$), $\bar{H}_{\text{active}}$ is the average number of houses in use at one time per village and $\mu_{\text{house}}(c)$ is the average household size for that house type.

Excavations across Belarus, Ukraine and Russia show three main house types during the Migration Period. Square sunken-floored huts (*poluzemlyanki*) were standard in the Kiev, Kolochin, Penkovka, Prague-Korchak and Imenkovo cultures [@oblomskiy2002dneprovskoe; @oblomskiy2016kolochinskaya; @vyazov2008zemledelie; @goryunova1999velikie]; their floors average 12-22,5 m² with a single stone or clay oven in the corner, holding a nuclear family of 4,5-5,5 people ($P_{\text{house}} \approx 0{,}28 \cdot A_d^{0{,}92}$). Surface timber-frame and log houses (*nazemnye postroyki*) were typical of the Late Dyakovo, Moshchiny, Tushemlya and Ryazan-Oka forest cultures as well as the eastern Chernyakhov longhouses [@krenke2011dyakovo; @islanova2012ozero; @lopatin2007severnye; @shchukin2005gotskiy], covering 20-36 m² and housing families of 5,5-7,5 people. Large multi-hearth log longhouses were built by the Kama-Vyatka-Belaya Permic and Ugrian peoples (*Azeevo*, *Mazunino*, *Bakhmutino*, *Lomovatovo* and *Polom*) and West Siberian forest-fringe groups (*Karym* and *Potchevash*) [@goldina1999drevnyaya; @chizhevskiy2020oboronitelnye; @matveeva2000sargat]; measuring 34-72 m² with two to four central hearths, these longhouses held extended families of 10-16 people.

## Cemetery Mortality Estimates

Where seasonal camps or surface timber houses leave faint traces in the soil - especially among steppe herders, North Caucasian catacomb communities and Middle Oka or Kama-Ural burial groups - village populations are checked against cemetery grave counts using the Acsádi-Nemeskéri formula [@veselovskaya2021ryazan; @zelenkov2025potchevash; @vodyasov2023tashtyk]:

$$P_{\text{community}} = \frac{\text{MNI}_{\text{total}} \times e_0}{\Delta t_{\text{use}} \times \eta_{\text{recovery}}}$$

where $\text{MNI}_{\text{total}}$ is the minimum number of individuals excavated or projected across the cemetery, e0 is life expectancy at birth (ranging between 21,5 and 25,5 years in Migration Period burials, with mean adult age at death e20 + 20 ~ 36,5-41 years and child mortality d0-14 ~ 42-50%), $\Delta t_{\text{use}}$ is the number of years the cemetery was in use and $\eta_{\text{recovery}} \in [0{,}55,\, 0{,}85]$ allows for lost infant bones and undug cemetery edges [@veselovskaya2021ryazan; @seregin2021altai; @vodyasov2023tashtyk].

# Results

## Pontic-Caspian Steppe and Forest-Steppe Frontier

### The Kiev and Eastern Chernyakhov Cultures

Across the Dnieper, Volhynia, Podolia, Southern Pripyat, Desna, Seim, Psyol, Vorskla and Upper Donets valleys of Ukraine, southern Belarus and the Russian Central Black-Earth borderlands, the Late Roman period saw two neighbours living side by side: the forest-steppe Kiev culture (*Kievskaya kul'tura*, c. 200-420AD) and the provincial-Roman Chernyakhov culture (*Chernyakhovskaya kul'tura*, c. 260-400AD) [@oblomskiy2002dneprovskoe; @terpylovsky2000kievskaya; @shchukin2005gotskiy; @novikova2026istoriografiya].

Surveys compiled by Oblomskiy and Terpylovsky show that Kiev villages sat on low flood-plain terraces in strings of 3-10 unfortified *selishcha* spaced 0,5-2 km apart [@oblomskiy2002dneprovskoe; @terpylovsky2000kievskaya]. Each village covered 0,5-2,5 ha (mean 1,8 ha) and had 5-12 square sunken huts (*poluzemlyanki*, 12-20 m², mean 16,5 m², dug 0,4-0,8 m into the ground with a central or side post and open hearth) in use at one time, giving 30-70 inhabitants per village (midpoint 48) and a river-valley density of 1,2-2,5 persons/km² [@oblomskiy2002dneprovskoe].

Further south in the Seim, Oskol and Upper Donets valleys (*Gochevo*, *Komsomolskoye* and *Khokhlovo*), the eastern Chernyakhov frontier brought heavy iron ploughs, rotary querns, wheel-thrown grey-ware kilns and much larger unfortified valley-slope villages of 4-15 ha (mean 6,5 ha) [@shchukin2005gotskiy; @novikova2026istoriografiya]. Excavations reveal rows of 15-35 surface wattle-and-daub longhouses (*Wohnstallhäuser*, 24-45 m²) beside craft workshops and mixed cremation-inhumation cemeteries (80-250 graves), supporting 95-210 people per village (midpoint 145) and valley densities of 3,5-6,5 persons/km² [@terpylovsky2000kievskaya; @shchukin2005gotskiy]. Together with Chernyakhov and Prague-Korchak villages in Volhynia, Podolia and the Right-Bank Dnieper (*Lepesovka*, *Korchak* and *Pastyrskoye*) and Late Sarmatian settlements on the Middle Don [@medvedev2018postsarmat; @zemtsov2013migratsii], the forest-steppe reached a Late Roman peak of 690k (550-830k) around 350AD.

### The Hunnic Invasion, Kolochin, Penkovka and Nomadic Groups

When the Huns crossed the Volga-Don steppe in 370-378AD and broke up the Gothic-Chernyakhov realm, farmers pulled back from the exposed southern forest-steppe edge [@shchukin2005gotskiy; @kazanski2020steppe; @oblomskiy2022torgovyy]. Between 375AD and 450AD, population across the Dnieper-Desna-Don forest-steppe fell from 690k to 460k (-33,3%), while the open Pontic-Caspian and Crimean steppe dropped from 225k to 140k (-37,8%) [@medvedev2018postsarmat; @botalov2009gunny].

Out of the remaining Kiev villagers and newcomers from the northern woods grew the Kolochin culture (*Kolochinskaya kul'tura*, c. 400/420-680AD) in the Desna, Seim, Upper Psyol and Kursk-Bryansk valleys, the Penkovka culture (*Pen'kovskaya kul'tura*, fifth to seventh centuries AD) further south and Early Slavic settlements on the Upper Don (*Zemtsov* and *Chertovitskoye-Zamyatino*) [@oblomskiy2016kolochinskaya; @goryunova1999velikie; @sereda1999kolochinskiy; @zemtsov2013migratsii]. At excavated sites such as *Velikie Budki (Khutor)*, *Kolochin I* and *Kartamyshevo*, Kolochin families lived in small flood-plain *selishcha* (0,8-2,5 ha) paired with refuge hillforts (*gorodishcha*, 0,4-1 ha, 18% of sites fortified), each holding 5-10 square *poluzemlyanki* (12-18 m² with stone or clay ovens) and flat cremation cemeteries (*Kartamyshevo*, *Knippovo* and *Lebedka*, 20-65 burials per cemetery), or 28-68 people per village (mean 45) [@oblomskiy2016kolochinskaya; @goryunova1999velikie; @sereda1999kolochinskiy]. During the late sixth and seventh centuries AD - the era of the "Antian" silver and bronze hoards (*Sudzha*, *Gaponovo* and *Kolocha*) - Slavic villages multiplied across the Desna-Don forest-steppe, bringing regional population back to 550k by 600AD and 690k by 700AD ahead of the later Borshevo and Romny tribal towns [@kazanski2010middle; @sedov1999drevnerusskaya; @gavritukhin2005chronology].

## Mixed and Boreal Forest Zone of Belarus and European Russia

### Late Dyakovo, Moshchiny and Ryazan-Oka Finnic Cultures

While the southern steppe frontier was battered by nomadic raids, the mixed forests of the Moskva, Upper Volga and Oka basins offered a safe haven throughout the Migration Period [@krenke2011dyakovo; @krenke2019moskvorechye; @vorontsov2021fibuly; @akhmedov2018ryazan]. In the Late Dyakovo culture (*Pozdned'yakovskaya kul'tura*, c. 250-550/600AD), Krenke's excavations at *Dyakovo*, *Troitskoye*, *Lukovskoye* and *Kuntsevo* along the Moskva River show that 62% of sites were fortified promontory hillforts (*gorodishcha*, 0,3-1,2 ha, ringed by double or triple timber-and-earth ramparts) with open villages outside the walls [@krenke2011dyakovo; @krenke2019moskvorechye; @veksler2017dyakovo]. Round huts gave way to rectangular surface post-built and log houses (18-32 m², mean 24 m²), with 8-15 houses per hillfort holding 40-95 people (mean 65) and river-valley densities of 1-2,2 persons/km² [@krenke2011dyakovo].

Further south, in the Upper Oka, Ugra and Protva valleys (Kaluga, Tula and western Oryol oblasts), Baltic-speaking villagers of the Moshchiny culture (*Moshchinskaya kul'tura*, fourth to seventh centuries AD) took in refugees from the Chernyakhov and Middle Dnieper lands after 375AD, bringing *Kartavtsevo-Serensk* brooches, red champlevé enamels and wheel-thrown pottery copies [@vorontsov2021fibuly; @mayorov2016moschiny; @sevostyanov2022keramika]. Grouped around fortified hillforts (*Moshchiny*, *Serensk* and *Supruty*, 0,5-1,5 ha) and open villages (1-2,5 ha) with cremation barrows (*kurgany*), the Upper Oka population rose from 95k in 250AD to 145k by 600AD [@vorontsov2021fibuly; @mayorov2016moschiny].

Along the Middle Oka bend from Kolomna to Kasimov (*Nikitino*, *Borki*, *Kuzminskoye*, *Shatrishche*, *Undrikh* and *Korablino*), Finnic farmers and fur traders of the Ryazan-Oka cemetery culture (*Kul'tura ryazano-okskikh mogil'nikov*, third to seventh centuries AD) formed one of the thickest clusters of villages in woodland Russia [@akhmedov2018ryazan; @veselovskaya2021ryazan; @semenov2022ryazan]. Promontory hillforts and large terrace villages (1,5-3,5 ha) stood beside flat cemeteries of 100-600+ graves rich in cross-shaped brooches, Roman and Sassanian silver bowls and riding weapons [@akhmedov2018ryazan; @veselovskaya2021ryazan; @vikhlyaev2011erzya; @mokshina2012peterburgskiy]. Grave counts and skeletons point to villages of 55-125 people (mean 85) and a Middle Oka-Mordvin total rising from 135k in 250AD to 215k by 700AD.

### Northwestern Forest Zone: Tushemlya and Pskov Long Barrows

Across the Belarusian Upper Dnieper, Berezina, Pripyat and Western Dvina valleys and the Russian Smolensk, Velikaya and Ilmen-Msta watersheds (excluding Estonia, Latvia and Lithuania), Lopatin, Furasiev, Mikhailova and Islanova trace the steady settlement of sandy pine river terraces [@lopatin2007severnye; @mikhailova2014poseleniya; @mikhailova2014snaryazhenie; @markov2024pskov; @islanova2012ozero]. While the Belarusian and Smolensk Tushemlya-Bantserovshchina group (fourth to seventh centuries AD) paired small open *selishcha* (0,5-1,8 ha) with oval timber-walled refuge forts (*Bantserovshchina* near Minsk, *Tushemlya*, *Gorodok* and *Kovsharovo*), the Culture of Pskov Long Barrows (*Kul'tura pskovskikh dlinnykh kurganov*, fifth to ninth centuries AD) spread across the Velikaya, Lovat, Msta and Upper Volga watersheds [@mikhailova2014poseleniya; @markov2024pskov; @islanova2012ozero]. Each long barrow cemetery (3-25 long or oval mounds, each holding 2-12 cremations) served 2-4 unfortified lakeshore hamlets (25-50 inhabitants apiece), carrying the northwestern forest population from 115k in 250AD to 165k in 550AD and 230k by 700AD [@mikhailova2014poseleniya; @islanova2012ozero].

## Middle Volga, Kama-Vyatka and Cis-Urals

### The Imenkovo Agricultural Expansion on the Middle Volga

One of the biggest shifts of Migration Period Russia was the rapid settlement of the Middle Volga, Samara Bend (*Samarskaya Luka*), Sviyaga, Cheremshan and Lower Kama valleys by plough farmers of the Imenkovo culture (*Imenkovskaya kul'tura*, c. 400-650/700AD) [@vyazov2019middle; @vyazov2008zemledelie; @vyazov2020kompleks; @zhikh2019rannie]. Combining over 600 mapped sites (*Staraya Maina*, *Imenkovo*, *Maklasheevo*, *Osh-Pando-Ner'* and *Scherbet'*) with pollen cores and radiocarbon dates, Vyazov et al. show that cleared farmland and village numbers on the Middle Volga quadrupled between 400AD and 600AD [@vyazov2019middle; @vyazov2008zemledelie].

Founded by post-Zarubintsy and post-Chernyakhov farmers from the Dnieper-Desna forest-steppe who mingled with local Finno-Volgaic villagers, Imenkovo settlements were laid out in tight clusters: a central fortified *gorodishche* (1-3 ha) ringed by 4-12 large open *selishcha* (2-8 ha, with *Staraya Maina* topping 6 ha) [@vyazov2019middle; @zhikh2019rannie]. Using heavy iron ploughshares (*ral'niki*), sickles, bell-shaped grain pits (*khlebnye yamy* holding 300-800 kg of millet, wheat and winter rye) and iron furnaces, Imenkovo villages had 12-30 sunken huts (*poluzemlyanki*, 16-26 m²) in use at once, supporting 70-160 people per village (mean 110) and lifting the Middle Volga population from 145k in 350AD to 240k by 550-600AD [@vyazov2019middle; @vyazov2008zemledelie]. In the late seventh century AD, when Early Bulgar horsemen arrived (*Novinkovka* barrows on the Samara Bend and *Shilovka*), part of the Imenkovo population trekked west toward the Middle Dnieper (*Volyntsevo* culture), while the rest were absorbed into early Volga Bulgaria [@vyazov2020kompleks; @skarbovenko2012kochevniki; @lifanov2020alekseevskoe; @zhikh2019rannie].

### Permic and Cis-Ural Groups: Mazunino, Bakhmutino, Turaevo, Lomovatovo and Polom

In the Kama, Vyatka, Belaya and Sylva basins west of the Urals (Udmurtia, Perm Krai, Bashkortostan and eastern Tatarstan), excavations compiled by Goldina, Gening, Chizhevskiy, Bakhshiev and Shmuratko show steady growth among Permic and Ugrian peoples [@goldina1999drevnyaya; @goldina2012nevolino; @gening1988turaevo; @bakhshiev2017bakhmutino; @shmuratko2011prikamye; @chizhevskiy2020oboronitelnye; @belitskaya2026slitki]. After the Late Pyanobor union broke up between the third and sixth centuries AD, the Mazunino culture (Middle Kama and Lower Belaya) and Bakhmutino culture (Belaya-Ufa basin, including the large *Ufa II* fortified town and *Birsk* cemetery with over 1k graves) built thick networks of timber-walled hillforts (0,8-2,5 ha) and open villages [@goldina1999drevnyaya; @bakhshiev2017bakhmutino; @chizhevskiy2020oboronitelnye]. In the fifth century AD, armed newcomers from the steppe fringe established the Turaevo barrow group (*Turaevo* and *Bartym*) on the Middle Kama [@gening1988turaevo; @shmuratko2011prikamye].

Between the fifth and eighth centuries AD, across the Upper Kama (*Lomovatovo*), Cheptsa (*Polom*) and Sylva (*Nevolino*, e.g. *Brody* and *Verkh-Saya*) valleys, Permic families lived in multi-hearth log longhouses (35-65 m², mean 42 m², holding 10-15 people) and buried their dead in flat cemeteries of several hundred graves furnished with Sassanian and Byzantine silver bowls (*Bartym* and *Kudymkar*) bought with northern sable and squirrel pelts [@goldina1999drevnyaya; @goldina2012nevolino; @nazarov2025lomovatovo; @ivanov2021ugrian]. Total population across the Kama-Vyatka-Belaya basin rose from 265k in 250AD to 335k in 550AD and 395k by 700AD.

## North Caucasus and Caspian Corridor

The North Caucasus and the narrow Caspian coastal strip of Dagestan guarded the main passes between the Eurasian steppe and Persia and Byzantium [@korobov2013terraced; @korobov2023alany; @gadzhiev2002derbent; @gmyrya2022palasa]. Mapping 268 Early Alanian forts and catacomb cemeteries (*Klin-Yar III-IV*, *Mokraya Balka* and *Gornoe Ekho*), Korobov and Borisov showed that after the Huns overran the open Ciscaucasian plain in 375AD, Alanian communities crowded into the sheltered Kislovodsk mountain basin (800-1,4k m elevation) [@korobov2013terraced; @korobov2023alany; @fomenko2018alany]. To feed these numbers, Alanian farmers carved thousands of hectares of manured terraces into the mountain slopes [@korobov2013terraced]. Each stone cliff fort (0,8-2,5 ha, spaced 1-2,5 km apart) and catacomb cemetery (*Klin-Yar* and *Mokraya Balka*, with 400-1k+ family vaults) held 80-175 people (mean 120), giving valley densities of 12-22 persons/km² and a central Alanian foothill population of 195-260k between the fifth and eighth centuries AD [@korobov2013terraced; @korobov2023alany].

On the Lower Kuban and Taman-Abkhazian coast (*Dyurso*, *Pashkovskiy* and *Borisovskiy*), Mastykova's study of grave goods traces mixed Alanian, Adyghe-Zikh and East Germanic (*Tetraxite Goth*) farming and port towns [95-130k] [@mastykova2009kuban; @mastykova2009ierarkhiya]. Along the Caspian coast in Dagestan, the Sassanian shahs Kavad I and Khosrow I Anushirvan built the stone fortress and long walls of Derbent in the sixth century AD, shielding an urban garrison and irrigated farming belt beside the huge Palasa-Syrt kurgan-catacomb cemetery (1,5k+ mounds of the fourth to sixth centuries AD, dug by Gmyrya, Gadzhiev and Malashev) [@gadzhiev2002derbent; @gmyrya2022palasa; @malashev2011palasa]. Total population across the North Caucasus and Dagestan climbed from 435k in 250AD to 480k in 550AD and 570k by 700AD.

## Western and Southern Siberia

### Tobol-Ishim-Irtysh-Ob Forest-Steppe and Southern Taiga

In Western Siberia, Matveeva, Zelenkov and Sleptsova have traced how settlement changed across the Tobol, Ishim, Irtysh and Middle Ob basins after the Sargat culture broke up [@matveeva2000sargat; @matveeva2024migratsii; @zelenkov2025potchevash]. In the third and fourth centuries AD, the Sargat barrow union (*Tsarev Kurgan* and *Isakovka*, put by Matveeva at 110-145k across the Tobol-Irtysh forest-steppe with 50-100 people per fortified settlement group) gave way under a drier steppe climate, Hunnic-Xianbei movements and the southward push of taiga Karym and Kozlov hunters, fishers and iron-workers [@matveeva2000sargat; @matveeva2024migratsii].

From this mix arose the Bakalskaya culture in the Tobol-Ishim forest-steppe and the Potchevash culture (*Potchevash*, *Vikulovo*, *Okunevo* and *Likhachevo*) along the Irtysh and Middle Ob between the fifth and eighth centuries AD [@matveeva2024migratsii; @zelenkov2025potchevash]. Living in promontory hillforts (0,6-1,5 ha) and multi-family half-sunken log houses (28-42 m²) while raising horses, sowing floodplain plots and trapping furs, West Siberian populations stood at 145-165k in 450-550AD and reached 185k by 700AD [@matveeva2024migratsii; @zelenkov2025potchevash].

### Minusinsk Basin, Altai, Tuva and Cis-Baikal

Across the mountain-steppe basins of Southern Siberia, three local traditions flourished. In the Yenisei-Abakan Minusinsk Basin (*Oglakhty*, *Tepsen*, *Bateni* and *Izzykhtash*), Azbelev, Vodyasov and Zaitseva follow the Tashtyk culture (first to sixth centuries AD) as single pit graves gave way to great timber-lined underground vaults (*sklepy*, up to 60-80 m²) holding 20-150+ cremated and mummified bodies with painted plaster masks [@azbelev2007oglakhty; @vodyasov2023tashtyk]. Fed by irrigated millet fields and valley herds, the Minusinsk Basin supported 55-75k people before the rise of the Yenisei Kyrgyz (*Chaatas* period, sixth to ninth centuries AD) [@vodyasov2023tashtyk].

Further south and east across Tuva, the Altai and Lake Baikal, cemetery digs show hardy herding and iron-smelting communities. In Tuva, the post-Xiongnu Kokel culture (*Kokel*, *Eerbek* and *Khemchik*, second to fifth centuries AD) dug by Wainstein, Teterin and Mit'ko left large graveyards of 100-400+ plank coffins [30-45k] [@teterin2013kokel]. In the Russian Altai, Seregin and Matrenin's work on the Bulan-Koba (Xianbei-Rouran period, second to fifth centuries AD, e.g. *Choburak-I*, *Stepushka* and *Ust'-Steklyannoe*) and Early Turkic (*Kudyrge*, *Katanda*, *Tuekta* and *Berel*, sixth to eighth centuries AD) graves shows high child mortality (40-48%) alongside growing iron-working and herding camps [35-55k] under the First Turkic Khaganate after 552AD [@seregin2021altai; @seregin2022xianbei; @matrenin2015pryazhki; @tishin2018turks]. West of Lake Baikal and along the Angara-Lena divide, Kharinsky traces the shift from the Elga graves (third century BC to fourth century AD) to the iron-smelting and irrigation-farming Kurumchin (*Kurykan*) culture (sixth to tenth centuries AD) [20-35k] [@kharinsky2005baikal; @kharinsky2014elga].

## Population and Settlement Estimates

### Population Estimates

Putting these six regional series together gives a continuous picture of population across Belarus, Ukraine and Russia from 100AD to 1900AD (Table \ref{tab:zonal-trajectories} and Figure \ref{fig:trajectories}). During the mild Late Roman centuries (100-350AD), trade with the Black Sea ports helped lift total population from 2,05M (1,6-2,54M) in 100AD to 2,45M in 250AD and 2,56M (2-3,17M) in 350AD, led by the Chernyakhov and Kiev farming villages of the forest-steppe (690k) and steady growth in the Late Dyakovo, Ryazan-Oka and Mazunino woodland and Kama valleys [@oblomskiy2002dneprovskoe; @shchukin2005gotskiy; @krenke2011dyakovo].

The Hunnic onslaught of 370-378AD and fifth-century steppe warfare cut the overall total by a tenth to 2,28M (1,78-2,83M) around 450AD. As Figure \ref{fig:redistribution} shows, however, that loss fell entirely on the open Pontic-Caspian steppe (-37,8%) and the exposed southern forest-steppe border (-33,3%). Over the same two centuries (350-550AD), numbers grew briskly in the Middle Volga *Imenkovo* valleys and Kama basin (+23,9%, from 440k to 545k), the Volga-Oka and northwestern forests (+19,4%, from 465k to 555k) and the terraced valleys of the North Caucasus (+4,3%, from 460k to 480k) [@vyazov2019middle; @korobov2013terraced; @vorontsov2021fibuly]. As a result, the share of all inhabitants living in the northern woods, the Middle Volga-Kama and the North Caucasian valleys rose from just over half (52,5%) in 250AD to nearly two thirds (63,4%) by 550AD.

From the late sixth century onward (560-900AD), winter rye, iron ploughshares and river trade along the Volga, Don and Dnieper under the Khazar and First Turkic khaganates carried the total from 2,49M in 550AD to 3,13M in 700AD and 4,5M (3,51-5,58M) by 900AD [@kazanski2010middle; @vyazov2019middle; @goldina1999drevnyaya; @korobov2023alany].

### Growth to the 1897 Census

Table \ref{tab:zonal-trajectories} and Figure \ref{fig:trajectories} carry these regional figures forward from 900AD to the First All-Russian Census of 1897 (1900AD) [@vodarsky1973naselenie; @kabuzan1990narody; @rashin1956naselenie; @troinitsky1905perepis]. Between 900AD and 1200AD, under Kievan Rus' and Volga Bulgaria, the clearing of woodland across Novgorod-Pskov, Vladimir-Suzdal, Smolensk, Murom-Ryazan and the Middle Volga raised the total from 4,5M to 6,6M (5,28-7,92M), with the forest zone reaching 1,95M and the Middle Volga-Kama basin 1,3M [@krenke2019moskvorechye; @vyazov2019middle].

Despite the Mongol sack of 1237-1240AD and fourteenth-century plagues, steady peasant clearing in the Moscow-Upper Volga basin carried the population to 9,1M (7,46-10,74M) by 1500AD, as recorded in early Muscovite land books (*pistsovye knigi*) [@vodarsky1973naselenie]. In the sixteenth and seventeenth centuries, the building of the southern timber and earth defence lines (*zasechnye cherty*) let farmers return to the rich black earth of Kursk, Voronezh, Tambov and Penza; by the 1678 household count (*perepisnye knigi*) and Peter the Great's First Soul Revision of 1719 (c. 1700AD), total population stood at 13,8M (12,14-15,46M), led by the forest zone (5,2M), the forest-steppe (3,4M) and the Middle Volga-Ural provinces (2,65M) [@vodarsky1973naselenie; @kabuzan1990narody].

In the eighteenth and nineteenth centuries, the ploughing up of the Lower Volga-Don steppe, the ironworks of the Urals and peasant migration into Siberia more than doubled the population from 13,8M in 1700AD to 28,1M in 1800AD, and then more than doubled it again to 67,5M (65,48-69,53M) at the 1897 census [@kabuzan1990narody; @rashin1956naselenie; @troinitsky1905perepis; @fedoseev2021povolzhe].

<figure class="crd-figure-block" id="fig:trajectories">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russia/fig2_migration_period_demographic_trajectories.png" alt="fig:trajectories" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Panel A tracks Migration Period totals from the Late Roman peak (2,56M in 350AD) through the Hunnic dip (2,28M in 450AD) to the Early Rus' recovery (4,5M in 900AD), while Panel B carries the six ecological zones forward to 67,5M at the 1897 census.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:zonal-trajectories">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Forest-Steppe</th><th class="crd-th">Forest Zone</th><th class="crd-th">Volga &amp; Urals</th><th class="crd-th">North Caucasus</th><th class="crd-th">Siberia</th><th class="crd-th">Steppe</th><th class="crd-th">Total</th><th class="crd-th">Range</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>100AD</strong></td><td class="crd-td">490k</td><td class="crd-td">390k</td><td class="crd-td">340k</td><td class="crd-td">360k</td><td class="crd-td">240k</td><td class="crd-td">230k</td><td class="crd-td">2,05M</td><td class="crd-td">1,6-2,54M</td></tr>
<tr><td class="crd-td"><strong>250AD</strong></td><td class="crd-td">640k</td><td class="crd-td">440k</td><td class="crd-td">410k</td><td class="crd-td">435k</td><td class="crd-td">275k</td><td class="crd-td">250k</td><td class="crd-td">2,45M</td><td class="crd-td">1,91-3,04M</td></tr>
<tr><td class="crd-td"><strong>350AD</strong></td><td class="crd-td">690k</td><td class="crd-td">465k</td><td class="crd-td">440k</td><td class="crd-td">460k</td><td class="crd-td">280k</td><td class="crd-td">225k</td><td class="crd-td">2,56M</td><td class="crd-td">2-3,17M</td></tr>
<tr><td class="crd-td"><strong>450AD</strong></td><td class="crd-td">460k</td><td class="crd-td">500k</td><td class="crd-td">485k</td><td class="crd-td">450k</td><td class="crd-td">245k</td><td class="crd-td">140k</td><td class="crd-td">2,28M</td><td class="crd-td">1,78-2,83M</td></tr>
<tr><td class="crd-td"><strong>550AD</strong></td><td class="crd-td">500k</td><td class="crd-td">555k</td><td class="crd-td">545k</td><td class="crd-td">480k</td><td class="crd-td">255k</td><td class="crd-td">155k</td><td class="crd-td">2,49M</td><td class="crd-td">1,94-3,09M</td></tr>
<tr><td class="crd-td"><strong>700AD</strong></td><td class="crd-td">690k</td><td class="crd-td">720k</td><td class="crd-td">630k</td><td class="crd-td">570k</td><td class="crd-td">300k</td><td class="crd-td">220k</td><td class="crd-td">3,13M</td><td class="crd-td">2,44-3,88M</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">890k</td><td class="crd-td">920k</td><td class="crd-td">740k</td><td class="crd-td">660k</td><td class="crd-td">335k</td><td class="crd-td">285k</td><td class="crd-td">3,83M</td><td class="crd-td">2,99-4,75M</td></tr>
<tr><td class="crd-td"><strong>900AD</strong></td><td class="crd-td">1,08M</td><td class="crd-td">1,14M</td><td class="crd-td">850k</td><td class="crd-td">730k</td><td class="crd-td">365k</td><td class="crd-td">335k</td><td class="crd-td">4,5M</td><td class="crd-td">3,51-5,58M</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">1,55M</td><td class="crd-td">1,95M</td><td class="crd-td">1,3M</td><td class="crd-td">950k</td><td class="crd-td">450k</td><td class="crd-td">400k</td><td class="crd-td">6,6M</td><td class="crd-td">5,28-7,92M</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">1,85M</td><td class="crd-td">3,5M</td><td class="crd-td">1,65M</td><td class="crd-td">1,05M</td><td class="crd-td">550k</td><td class="crd-td">500k</td><td class="crd-td">9,1M</td><td class="crd-td">7,46-10,74M</td></tr>
<tr><td class="crd-td"><strong>1700AD</strong></td><td class="crd-td">3,4M</td><td class="crd-td">5,2M</td><td class="crd-td">2,65M</td><td class="crd-td">1,25M</td><td class="crd-td">700k</td><td class="crd-td">600k</td><td class="crd-td">13,8M</td><td class="crd-td">12,14-15,46M</td></tr>
<tr><td class="crd-td"><strong>1800AD</strong></td><td class="crd-td">7,8M</td><td class="crd-td">9,4M</td><td class="crd-td">5,8M</td><td class="crd-td">1,95M</td><td class="crd-td">1,35M</td><td class="crd-td">1,8M</td><td class="crd-td">28,1M</td><td class="crd-td">25,85-30,35M</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">18,9M</td><td class="crd-td">19,8M</td><td class="crd-td">13,6M</td><td class="crd-td">5,4M</td><td class="crd-td">5,75M</td><td class="crd-td">4,05M</td><td class="crd-td">67,5M</td><td class="crd-td">65,48-69,53M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Estimated population across the six ecological zones from 100AD to 1900AD, with combined totals and upper and lower uncertainty bounds.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:redistribution">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russia/fig3_zonal_population_redistribution.png" alt="fig:redistribution" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> As Hunnic and post-Hunnic warfare reduced the open steppe and southern forest-steppe populations by a third after 375AD, the combined share of the northern forests, the Middle Volga-Kama basin and the North Caucasus rose from 52,5% in 250AD to 63,4% by 550AD.</figcaption>
</figure>

### Settlement Estimates

Figure \ref{fig:settlement-metrics} and Table \ref{tab:culture-metrics} summarise village areas, fortification shares and house floor areas across 20 Migration Period archaeological cultures in Belarus, Ukraine and Russia. A sharp contrast separates the unfortified river-terrace hamlets of the Desna-Seim forest-steppe (*Kiev* and *Kolochin*, where only 8-18% of sites are fortified and square *poluzemlyanki* average 15-16,5 m²) from the fortified promontory hillforts of the Moskva-Oka forest zone (*Late Dyakovo*, 62% fortified) and the stone cliff fortresses of the North Caucasian *Kislovodsk Alans* (48% fortified) [@oblomskiy2002dneprovskoe; @oblomskiy2016kolochinskaya; @krenke2011dyakovo; @korobov2013terraced]. The largest village populations occur in the plough-farming *Chernyakhov* (145 inhabitants per site) and *Imenkovo* (110 inhabitants per site) clusters, the terraced Alanian mountain valleys (120 inhabitants per site) and the multi-hearth log longhouse communities of the Kama-Ural *Lomovatovo-Polom* cultures (95 inhabitants per site, mean house floor area 42 m²) [@shchukin2005gotskiy; @vyazov2019middle; @goldina1999drevnyaya].

<figure class="crd-figure-block" id="fig:settlement-metrics">
<img class="crd-figure-img" src="/artefacts/project_polaris/1.0-russia/fig4_settlement_fortification_metrics.png" alt="fig:settlement-metrics" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Comparison of ten excavated traditions showing how unfortified Kiev and Kolochin sunken-hut hamlets (45-48 people per site) differed from heavily fortified Late Dyakovo hillforts (62% fortified), Kislovodsk Alan cliff forts (120 per site) and multi-family Lomovatovo log longhouses (42 m² mean floor area).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:culture-metrics">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Archaeological Culture</th><th class="crd-th">Dates</th><th class="crd-th">Core River Basins</th><th class="crd-th">House Type &amp; Area</th><th class="crd-th">Site Pop. (Mean)</th><th class="crd-th">Regional Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kiev Culture</strong></td><td class="crd-td">200-420AD</td><td class="crd-td">Desna, Seim, Upper Donets</td><td class="crd-td">Poluzemlyanka (12-20 m²)</td><td class="crd-td">30-70 (48)</td><td class="crd-td">140-210k</td></tr>
<tr><td class="crd-td"><strong>Chernyakhov (Eastern Frontier)</strong></td><td class="crd-td">260-400AD</td><td class="crd-td">Seim, Psyol, Oskol, Donets</td><td class="crd-td">Surface longhouse (22-42 m²)</td><td class="crd-td">95-210 (145)</td><td class="crd-td">180-260k</td></tr>
<tr><td class="crd-td"><strong>Kolochin Culture</strong></td><td class="crd-td">420-680AD</td><td class="crd-td">Desna, Seim, Kursk-Bryansk</td><td class="crd-td">Poluzemlyanka (12-18 m²)</td><td class="crd-td">28-68 (45)</td><td class="crd-td">150-230k</td></tr>
<tr><td class="crd-td"><strong>Penkovka (NE Forest-Steppe)</strong></td><td class="crd-td">450-680AD</td><td class="crd-td">Seim, Vorskla, Middle Donets</td><td class="crd-td">Poluzemlyanka (12-19 m²)</td><td class="crd-td">30-72 (48)</td><td class="crd-td">90-145k</td></tr>
<tr><td class="crd-td"><strong>Post-Sarmatian / Middle Don</strong></td><td class="crd-td">250-450AD</td><td class="crd-td">Middle &amp; Lower Don, Hopjor</td><td class="crd-td">Yurt / light frame (14-22 m²)</td><td class="crd-td">25-60 (40)</td><td class="crd-td">60-110k</td></tr>
<tr><td class="crd-td"><strong>Late Dyakovo Culture</strong></td><td class="crd-td">250-580AD</td><td class="crd-td">Moskva, Upper Volga, Oka</td><td class="crd-td">Surface log/post (18-32 m²)</td><td class="crd-td">40-95 (65)</td><td class="crd-td">110-165k</td></tr>
<tr><td class="crd-td"><strong>Moshchiny Culture</strong></td><td class="crd-td">350-680AD</td><td class="crd-td">Upper Oka, Ugra, Protva</td><td class="crd-td">Surface log/sunken (16-26 m²)</td><td class="crd-td">35-80 (55)</td><td class="crd-td">95-145k</td></tr>
<tr><td class="crd-td"><strong>Ryazan-Oka Cemetery Culture</strong></td><td class="crd-td">250-680AD</td><td class="crd-td">Middle Oka, Moksha, Tsna</td><td class="crd-td">Surface timber house (20-34 m²)</td><td class="crd-td">55-125 (85)</td><td class="crd-td">135-215k</td></tr>
<tr><td class="crd-td"><strong>Tushemlya-Bantserovshchina</strong></td><td class="crd-td">350-680AD</td><td class="crd-td">Smolensk Dnieper, W. Dvina</td><td class="crd-td">Post/log house (16-24 m²)</td><td class="crd-td">25-55 (38)</td><td class="crd-td">65-105k</td></tr>
<tr><td class="crd-td"><strong>Pskov Long Barrows</strong></td><td class="crd-td">420-850AD</td><td class="crd-td">Velikaya, Peipus, Ilmen, Msta</td><td class="crd-td">Surface timber house (16-25 m²)</td><td class="crd-td">25-50 (35)</td><td class="crd-td">75-135k</td></tr>
<tr><td class="crd-td"><strong>Imenkovo Culture</strong></td><td class="crd-td">400-680AD</td><td class="crd-td">Middle Volga, Samara, Sviyaga</td><td class="crd-td">Poluzemlyanka (16-26 m²)</td><td class="crd-td">70-160 (110)</td><td class="crd-td">145-240k</td></tr>
<tr><td class="crd-td"><strong>Early Bulgars (Novinkovka)</strong></td><td class="crd-td">630-780AD</td><td class="crd-td">Samara Bend, Ulyanovsk Volga</td><td class="crd-td">Yurt / semi-sunken (14-20 m²)</td><td class="crd-td">35-85 (55)</td><td class="crd-td">45-85k</td></tr>
<tr><td class="crd-td"><strong>Mazunino / Azeevo</strong></td><td class="crd-td">250-500AD</td><td class="crd-td">Middle Kama, Lower Belaya</td><td class="crd-td">Multi-hearth log (30-50 m²)</td><td class="crd-td">55-120 (82)</td><td class="crd-td">85-130k</td></tr>
<tr><td class="crd-td"><strong>Bakhmutino / Turaevo</strong></td><td class="crd-td">300-650AD</td><td class="crd-td">Belaya, Ufa, Middle Kama</td><td class="crd-td">Timber frame / log (26-45 m²)</td><td class="crd-td">65-145 (98)</td><td class="crd-td">110-165k</td></tr>
<tr><td class="crd-td"><strong>Lomovatovo &amp; Polom</strong></td><td class="crd-td">450-850AD</td><td class="crd-td">Upper Kama, Cheptsa, Sylva</td><td class="crd-td">Multi-hearth longhouse (35-65 m²)</td><td class="crd-td">60-140 (95)</td><td class="crd-td">120-195k</td></tr>
<tr><td class="crd-td"><strong>Kislovodsk Basin Alans</strong></td><td class="crd-td">250-750AD</td><td class="crd-td">Kislovodsk, Upper Kuban, Terek</td><td class="crd-td">Stone-walled compound (24-42 m²)</td><td class="crd-td">80-175 (120)</td><td class="crd-td">180-260k</td></tr>
<tr><td class="crd-td"><strong>Derbent &amp; Palasa-Syrt Corridor</strong></td><td class="crd-td">300-750AD</td><td class="crd-td">Caspian Dagestan, Rubas, Sulak</td><td class="crd-td">Mudbrick/stone urban &amp; rural</td><td class="crd-td">90-250 (140)</td><td class="crd-td">130-200k</td></tr>
<tr><td class="crd-td"><strong>Lower Kuban / Dyurso</strong></td><td class="crd-td">400-750AD</td><td class="crd-td">Lower Kuban, Taman, Black Sea</td><td class="crd-td">Timber/stone house (18-30 m²)</td><td class="crd-td">50-115 (78)</td><td class="crd-td">85-130k</td></tr>
<tr><td class="crd-td"><strong>Potchevash &amp; Bakalskaya</strong></td><td class="crd-td">420-800AD</td><td class="crd-td">Tobol, Ishim, Irtysh, Middle Ob</td><td class="crd-td">Semi-sunken log (26-42 m²)</td><td class="crd-td">45-115 (75)</td><td class="crd-td">130-185k</td></tr>
<tr><td class="crd-td"><strong>Tashtyk / Kokel / Altai Turks</strong></td><td class="crd-td">200-750AD</td><td class="crd-td">Minusinsk, Altai, Tuva, Baikal</td><td class="crd-td">Log polygonal / yurt (18-36 m²)</td><td class="crd-td">30-80 (50)</td><td class="crd-td">115-165k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Chronology, river basins, house floor areas and estimated village and regional populations across 20 Migration Period cultures, 250AD - 750AD.</figcaption>
</figure>

# Limitations

Three practical difficulties account for the uncertainty margins (+/- 18-24%) in our Migration Period estimates. First, across the forest and forest-steppe zones (*Kiev*, *Kolochin*, *Moshchiny*, *Tushemlya*, *Pskov Long Barrows* and *Imenkovo*), cremation on open pyres or in shallow pits destroys fragile infant and child bones [@oblomskiy2016kolochinskaya; @mikhailova2014poseleniya; @vyazov2019middle]. For cremation cultures, population estimates must therefore rest on excavated house counts (*poluzemlyanki* and surface timber dwellings) rather than burial urn totals.

Second, unfortified forest-steppe and woodland villages (*selishcha*) shifted along the river terraces every 25-50 years as nearby fields or firewood gave out [@oblomskiy2002dneprovskoe; @islanova2012ozero]. Without radiocarbon dates for individual building layers (such as Krenke's series from *Dyakovo* and Vyazov's from the *Samara-Middle Volga* basin), adding up every pottery scatter from a two-century period would count the same moving village two or three times over [@krenke2019moskvorechye; @vyazov2019middle]. Our calculations apply an occupation-span adjustment ($\tau_{\text{site}} / \Delta T_{\text{phase}} \in [0{,}28,\, 0{,}5]$) so that only villages inhabited at the same time are counted.

Third, on the open Pontic-Caspian, Lower Volga-Don and South Siberian steppes, winter herding camps (*zimovki*) now lie drowned beneath twentieth-century reservoirs (Tsimlyansk, Volgograd, Saratov and Krasnoyarsk) or washed away by riverbanks, leaving burial mounds (*Tanais*, *Palasa-Syrt*, *Novinkovka* and *Kudyrge*) as the main record [@medvedev2018postsarmat; @skarbovenko2012kochevniki; @seregin2021altai]. Steppe population densities (0,15-0,45 persons/km²) therefore carry wider margins of error than settled river valleys.

# Conclusion

The archaeological evidence for the Migration Period (c. 250-750AD) shows that the population of Belarus, Ukraine and Russia did not collapse; it moved. While the Hunnic invasion of the 370s and the breakup of the eastern Chernyakhov and Late Sarmatian settlements cut population on the open steppe and the southern forest-steppe border from 915k in 350AD to 600k in 450AD, steady migration into the woods and hills fed growth along the Middle Volga (*Imenkovo*), in the Volga-Oka and northwestern forests (*Late Dyakovo*, *Moshchiny*, *Ryazan-Oka* and *Pskov Long Barrows*), across the Kama basin (*Bakhmutino*, *Lomovatovo* and *Polom*) and in the terraced valleys of the North Caucasus (*Kislovodsk Alans* and *Derbent*). Across the whole territory, total population dipped only briefly from 2,56M in 350AD to 2,28M in 450AD before climbing with the spread of winter rye and iron ploughs to 3,13M in 700AD and 4,5M by 900AD. That shift into the forest belt and the Middle Volga laid the foundations for medieval Rus' and Volga Bulgaria, and for the later growth that carried the population to 13,8M by 1700AD and 67,5M at the 1897 census.

# Appendix

## Regional Density and Life-Table Estimates

Table \ref{tab:appendix-benchmarks} summarises the river-valley population densities, farming systems and cemetery life-table figures compiled across the six regions of Belarus, Ukraine and Russia.

<figure class="crd-table-figure" id="tab:appendix-benchmarks">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table">
<thead><tr><th class="crd-th">Region</th><th class="crd-th">River-Valley Density</th><th class="crd-th">Farming &amp; Herding</th><th class="crd-th">Life-Table Estimates</th><th class="crd-th">Key Regional Studies</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. European Forest-Steppe</strong></td><td class="crd-td">1,2-6,5 persons/km² (river valleys)</td><td class="crd-td">Millet, barley, wheat; iron plough (Chernyakhov) to winter rye (6th-8th c.)</td><td class="crd-td">e0 = 22,5-24,8 yr; child d(0-14) = 44-48%</td><td class="crd-td">Oblomskiy (2002, 2016); Terpylovsky (2000); Shchukin (2005)</td></tr>
<tr><td class="crd-td"><strong>2. Mixed &amp; Boreal Forest Zone</strong></td><td class="crd-td">0,6-2,2 persons/km² (terrace corridors)</td><td class="crd-td">Forest-fallow &amp; flood-plain plots; barley, wheat, flax, livestock, fur trade</td><td class="crd-td">e0 = 22-24,5 yr; adult mean age 37,5-40,2 yr (Ryazan-Oka)</td><td class="crd-td">Krenke (2011, 2019); Vorontsov (2021); Veselovskaya et al. (2021)</td></tr>
<tr><td class="crd-td"><strong>3. Middle Volga (Imenkovo Core)</strong></td><td class="crd-td">2,5-5,8 persons/km² (Samara-Sviyaga)</td><td class="crd-td">Intensive iron-plough farming; winter rye, millet, wheat; cylindrical grain pits</td><td class="crd-td">e0 = 23-25 yr; high cereal-starch dental caries rate</td><td class="crd-td">Vyazov (2008); Vyazov et al. (2019, 2020); Zhikh (2019)</td></tr>
<tr><td class="crd-td"><strong>4. Kama-Vyatka-Belaya Cis-Urals</strong></td><td class="crd-td">1,1-3 persons/km² (Kama-Belaya)</td><td class="crd-td">Mixed arable-pastoralism, horse breeding, bronze/iron metallurgy, fur export</td><td class="crd-td">e0 = 21,8-24,2 yr; Birsk / Nevolino / Lomovatovo series</td><td class="crd-td">Goldina (1999, 2012); Gening (1988); Bakhshiev et al. (2017)</td></tr>
<tr><td class="crd-td"><strong>5. North Caucasus (Kislovodsk &amp; Dagestan)</strong></td><td class="crd-td">12-22 persons/km² (terraced valleys)</td><td class="crd-td">Manured artificial hillside terraces (Kislovodsk); irrigated coast (Derbent)</td><td class="crd-td">e0 = 23,5-26 yr; Klin-Yar &amp; Palasa-Syrt catacomb series</td><td class="crd-td">Korobov &amp; Borisov (2013); Korobov (2023); Gmyrya (2022)</td></tr>
<tr><td class="crd-td"><strong>6. Western &amp; Southern Siberia</strong></td><td class="crd-td">0,4-1,8 persons/km² (forest-steppe valleys)</td><td class="crd-td">Floodplain millet/barley (Minusinsk/Irtysh), valley horse-sheep pastoralism</td><td class="crd-td">e0 = 21,5-24 yr; child mortality 42-48% (Altai / Tashtyk)</td><td class="crd-td">Matveeva et al. (2024); Vodyasov &amp; Zaitseva (2023); Seregin (2021)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> River-valley population densities, farming systems and cemetery life-table estimates across the six regions, 250AD - 750AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>
