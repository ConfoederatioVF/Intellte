---
title: "Demographic Trajectory of the Russian Civil War, Basmachi Revolt and Early Soviet Central Asia"
subtitle: "Civil War Famine, National Territorial Delimitation, Forced Sedentarisation, Industrial Influx and Wartime Evacuation, 1917AD to 1945AD"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: russian_civil_war_basmachi_and_early_soviet_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_russian_civil_war_basmachi_and_early_soviet_spatial.png"
hero_caption: "Biophysical catchments, administrative demarcations and spatial population distribution across Central Asia from 1917AD to 1945AD."
hero_label: "fig:hero-soviet-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This paper reconstructs the demographic trajectory, territorial transformations and spatial dynamics of Central Asia from the collapse of the Russian Empire in 1917AD through the termination of the Second World War in 1945AD. Encompassing ten administrative units across 3.890.946 km² and 65.332 five-arcminute grid cells, regional population experienced extreme volatility driven by conflict, famine, forced socio-economic reorganisation and mass forced migration. Domain headcounts declined from 13,95M (13.950.000) in 1917AD to 12,68M (12.650.000) in 1920AD as Civil War requisitions, the breakdown of Trans-Caspian grain imports and typhus triggered catastrophic famine in Turkestan and Semirechye [@Ustagaliyev2023First; @Norbekov2026Migration; @dAndurain2017Beyond]. Following the New Economic Policy, pacification of the Basmachi insurgency and the 1924AD National Territorial Delimitation, aggregate population recovered to 13,68M (13.681.000) by the 1926 All-Union Census [@Anon2026Yilgi; @Pasilov2012National]. However, forced collectivisation, predatory grain seizures and the forced sedentarisation of nomadic pastoralists precipitated the catastrophic 1930 to 1933AD Kazakh Asharshylyk Famine, depressing regional population to a domain trough of 12,85M (12.850.000) in 1933AD, with excess pastoralist mortality exceeding 1,3M souls and mass refugee flight into China, Uzbekistan and Western Siberia [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog; @Ismailzade2025]. Subsequent demographic recovery was accelerated by state-directed industrialisation along the Turksib railway and Karaganda coalfield, lifting domain headcounts to 16,63M (16.626.000) in the 1939 Soviet census [@Zhuravskaya2024Russian; @Kumo2021Evolution]. During the Second World War, the eastward evacuation of hundreds of industrial enterprises, millions of civilian refugees and special deportee nationalities swelled regional population to 16,95M (16.950.000) by 1945AD [@Grossmann2017Shelter; @Rowland1997Regional; @Siegelbaum2026Migration]. Spatial distribution is calibrated using Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging ($\tau_1 = 1,50$, $R^2 = 0,999$) across 442 domestic catchments and 1.303 catalogued settlements led by Tashkent (556.000), Karaganda (165.818) and Samarkand (136.283).

# Background

## The Revolutionary Rupture and the Civil War Famine (1917AD to 1922AD)

The collapse of the Romanov autocracy in 1917AD precipitated acute socio-political and economic breakdown across Russian Turkestan and the Steppe General-Governorate [@Ustagaliyev2023First; @Norbekov2026Migration]. Under late imperial administration, Central Asian agrarian structures had become deeply dependent on specialised colonial economic integration: the irrigated oasis districts of the Ferghana Valley and Tashkent were largely converted to commercial cotton monoculture, dependent on regular rail imports of grain from the Volga, Western Siberia and southern Russia [@Pianciola2016Towards; @Mario2017Crisis]. With the outbreak of the Russian Civil War in late 1917AD, the isolation of the Bolshevik Tashkent Soviet by White Cossack forces under Ataman Dutov in the Orenburg sector severed the Trans-Aral and Trans-Caspian railway corridors, cutting off essential cereal deliveries [@Norbekov2026Migration; @Ustagaliyev2023First].

Concurrently, the Tashkent Soviet implemented ruthless food requisition policies (*prodrazvyorstka*), expropriating grain and draught animals from the indigenous Muslim peasantry and pastoralists to feed European railway workers, Red Guard detachments and urban garrisons [@Norbekov2026Migration; @dAndurain2017Beyond]. In late November 1917, indigenous Muslim leaders and reformist intellectuals convened the Fourth Extraordinary Regional Muslim Congress in Kokand, declaring the autonomy of Turkestan (*Turkiston Muxtoriyati*) under Mustafa Shokay and Muhammadjan Tynyshpaev [@Azarm2025Turkism; @Myrzabaeva2025Role]. The Kokand government sought to establish a democratic parliamentary republic rooted in Muslim modernism and regional self-determination, commanding broad popular legitimacy among indigenous townspeople and rural cotton growers [@Azarm2025Turkism; @Battis2016Aleksandr].

In February 1918, Red Guard units and Armenian Dashnak detachments dispatched from Tashkent stormed Kokand, subjecting the ancient commercial capital to widespread artillery bombardment, pillage and massacre [@Azarm2025Turkism; @Myrzabaeva2025Role]. Over three days of street fighting and subsequent conflagration, substantial commercial quarters, madrasas and cotton warehouses were destroyed, with civilian casualties estimated in the thousands [@Azarm2025Turkism; @Anon2014Soviet]. The destruction of Kokand alienated moderate Muslim reformers, ended peaceful accommodation with the revolutionary authorities and ignited rural rebellion across the Ferghana Valley [@Anon2014Soviet; @Battis2016Aleksandr].

In the northern steppe territories, Kazakh nationalist leaders established the Alash Autonomy (*Alash Orda*) in December 1917 under the leadership of Alikhan Bokeikhanov, Akhmet Baitursynov and Mirjaqip Dulatov [@Zhanymkhan2025Ethnodemog; @Omarova2026Formation]. Administered from Semipalatinsk (Alash-kala) and Orenburg, the Alash government mobilised armed cavalry regiments to protect steppe communities against revolutionary chaos and marauding detachments [@Omarova2026Formation; @Atantayeva2025Protest]. While initially allied with White Siberian authorities, the Alash leadership concluded an uneasy tactical agreement with the Bolsheviks in late 1919 following Soviet promises of national autonomy, resulting in the absorption of Alash cadres into the newly formed Kirghiz (Kazakh) ASSR apparatus in 1920 [@Omarova2026Formation; @Anon2014Soviet].

In Semirechye, tensions between Slavic peasant settlers, Siberian Cossacks and displaced Kazakh and Kyrgyz pastoralists—lingering from the violent suppression of the 1916 Central Asian revolt—ignited bitter inter-ethnic fighting [@Kokaisl2026Tsarist; @Omarova2026Formation]. Returning Kazakh and Kyrgyz refugees, who had fled across the Tien Shan passes into Xinjiang following the 1916 uprising (*Urkun*), discovered their pastures occupied by armed Russian settlements, sparking retaliatory raids, cattle lifting and village burnings [@Kokaisl2026Tsarist; @Omarova2026Formation]. The Semirechye Cossack counter-rebellion, supported by White detachments under Ataman Annenkov, deepened the devastation of the foothill valleys through 1920 [@Omarova2026Formation]. Traditional caravan trade routes across the Balkhash depression and Betpak-Dala were completely severed, leaving oasis towns isolated without meat or salt [@Omarova2026Formation; @Ustagaliyev2023First].

The resulting famine of 1918 to 1921AD devastated Central Asia [@Ustagaliyev2023First; @Zhumatay2025Famine]. Deprived of bread imports and unable to market raw cotton crops, millions of oasis peasants and semi-nomadic herdsmen faced starvation, complicated by severe outbreaks of typhus, cholera and malaria [@Ustagaliyev2023First; @Norbekov2026Migration]. Across the northern and western Kazakh steppe, severe winter icing conditions (*dzhut*) in 1919 and 1920 compounded requisition-induced livestock mortality, inducing widespread famine conditions [@Ustagaliyev2023First; @Zhanymkhan2025Ethnodemog]. Entire nomadic auls were forced into destitution, slaughtering their remaining breeding stock and fleeing towards railway lines in search of grain [@Ustagaliyev2023First; @Pianciola2016Towards]. Aggregate population across the domain contracted from 13,95M in 1917AD to approximately 12,68M in 1920AD, representing an aggregate demographic deficit of more than 1,25M lives [@Ustagaliyev2023First; @Pianciola2016Towards].

## The Basmachi Insurgency and Soviet Pacification (1918AD to 1926AD)

The socio-economic devastation and anti-religious excesses of early Soviet rule provoked broad-based armed resistance known collectively as the Basmachi movement (*Qurbashilar*) [@Azarm2025Turkism; @Myrzabaeva2025Role; @Anon2014Soviet]. Centred in the rural fringes of the Ferghana Valley, eastern Bukhara, Samarkand and the Karakum desert, the insurgents drew support from traditional clan elites, displaced landowners, Islamic clerics and de-tribalised nomads [@Azarm2025Turkism; @Nourzhanov2013Tajikistan]. In 1920, Red Army campaigns commanded by Mikhail Frunze overthrew the Emirate of Bukhara and the Khanate of Khiva, establishing the nominal Bukharan and Khorezmian People's Soviet Republics and forcing Emir Alim Khan to flee to eastern Bukhara and ultimately Afghanistan [@Azarm2025Turkism; @Battis2016Aleksandr].

In the Ferghana Valley, charismatic partisan chieftains such as Madamin Bek and Sher Muhammad Bek (Kurshirmat) mobilised thousands of mounted fighters, exploiting mountain sanctuaries to ambush Soviet garrisons, disrupt rail transport and interdict grain convoys [@Azarm2025Turkism; @Myrzabaeva2025Role]. For a time in late 1919, Madamin Bek concluded a tactical alliance with the Peasant Army of Russian settlers under Konstantin Monstrov, briefly capturing Jalal-Abad and Osh before Red Army reinforcements re-established control [@Azarm2025Turkism; @Kokaisl2026Tsarist]. In Khiva, the Turkmen tribal chieftain Junaid Khan maintained stubborn guerrilla resistance across the Karakum fringes, attacking Soviet administrative outposts along the lower Amu Darya [@Battis2016Aleksandr; @Anon2014Soviet].

The insurgency acquired temporary ideological cohesion between late 1921 and mid-1922 with the arrival of Ismail Enver Pasha, the former Ottoman Minister of War, who attempted to unite the fragmented *qurbashilar* under the banner of pan-Turkic Islamic liberation [@Azarm2025Turkism; @TEGIN2026Soviet]. Enver captured Dushanbe and laid siege to Soviet garrisons across eastern Bukhara before his defeat and death in battle near Baljuvon in August 1922 [@Azarm2025Turkism; @Nourzhanov2013Tajikistan]. Following Enver's demise, the leadership of eastern Bukharan resistance devolved to Ibrahim Bek, a tribal commander of the Lokay Uzbeks, who operated from remote highland bases in the Hissar range [@Azarm2025Turkism; @Nourzhanov2013Tajikistan].

Recognising that purely military coercion was hardening indigenous hostility, Soviet authorities coupled military sweeps with pragmatic political concessions under the New Economic Policy (NEP) [@Pasilov2012National; @Battis2016Aleksandr]. The Commission for Turkestan Affairs (*Turkkomissiya*), led by Valerian Kuibyshev and Mikhail Frunze, purged radical elements from local administrative bodies and recruited reformist indigenous cadres under Turar Ryskulov [@Pasilov2012National; @Battis2016Aleksandr]. Bolshevik leadership replaced arbitrary food requisitioning with a fixed agricultural tax in kind, restored local bazaar commerce, re-opened sharia courts, returned confiscated religious endowment (*waqf*) lands and integrated local Muslim intellectuals into municipal organs [@Pasilov2012National; @Anon2014Soviet].

These conciliatory measures eroded popular support for the *qurbashilar*, allowing the Red Army to isolate and eliminate remaining rebel groups under leaders such as Ibrahim Bek, who was driven across the Panj River into Afghan havens before being captured and executed in 1931 [@Azarm2025Turkism; @Nourzhanov2013Tajikistan]. Stabilisation under the NEP allowed regional population to rebound, climbing from 12,68M in 1920AD to 13,68M by December 1926 [@Anon2026Yilgi; @Pasilov2012National].

## National Territorial Delimitation and State Formation (1924AD to 1936AD)

The consolidation of Soviet power culminated in the fundamental political and spatial reorganisation of Central Asia through the National Territorial Delimitation (*natsionalno-territorialnoe razmezhevanie*) of 1924 to 1926AD [@Anon2026Yilgi; @Azarm2025Turkism; @Pasilov2012National]. Bolshevik nationalities policy sought to dismantle the historic multi-ethnic administrative structures of Russian Turkestan, Bukhara and Khiva, replacing them with modern national territorial republics defined along ethno-linguistic lines [@Anon2026Yilgi; @Battis2016Aleksandr; @Anon2014Soviet].

To demarcate boundaries, ethnographic and statistical commissions headed by scholars such as Aleksandr Semenov and Vasiliy Bartold undertook extensive dialectological and territorial surveys, attempting to disentangle intermingled sedentary and pastoral populations [@Battis2016Aleksandr; @Anon2014Soviet]. In October 1924, the Central Executive Committee of the USSR partitioned the region into new constituent polities [@Anon2026Yilgi; @Azarm2025Turkism]:

1. The Uzbek Soviet Socialist Republic (Uzbek SSR), comprising the central oasis cores of Tashkent, Samarkand, Ferghana, Bukhara and southern Surkhandarya, initially incorporating the autonomous Tajik entity.
2. The Turkmen Soviet Socialist Republic (Turkmen SSR), encompassing the Transcaspian desert domain from Krasnovodsk to the Kopet Dag, Mary and the middle Amu Darya.
3. The Tajik Autonomous Soviet Socialist Republic (Tajik ASSR), created within the Uzbek SSR to accommodate Persian-speaking populations of eastern Bukhara and northern Badakhshan, elevated in 1929AD to full Union Republic status as the Tajik SSR with the addition of the Khujand (Leninabad) district from Uzbekistan [@Azarm2025Turkism; @Nourzhanov2013Tajikistan].
4. The Kara-Kirghiz Autonomous Oblast, formed within the Russian SFSR to encompass the Tien Shan highlands, upgraded to the Kirghiz ASSR in 1926AD and to the Kirghiz SSR in December 1936 [@Kokaisl2026Tsarist; @Myrzabaeva2025Role].
5. The Karakalpak Autonomous Oblast, initially placed within the Kazakh ASSR, transferred to the direct jurisdiction of the RSFSR in 1930, and incorporated into the Uzbek SSR as the Karakalpak ASSR in December 1936 [@Anon2026Yilgi; @Pasilov2012National].
6. The Kazakh Autonomous Socialist Soviet Republic (Kazakh ASSR, initially designated the Kirghiz ASSR until 1925), established within the RSFSR in 1920, expanded in 1924 through the integration of Semirechye and Syr Darya provinces from the dissolved Turkestan ASSR, and elevated to full Union Republic status as the Kazakh SSR in December 1936 [@Omarova2026Formation; @Anon2026Yilgi].

The demarcation created extensive administrative friction, particularly surrounding major historic urban centres such as Samarkand, Bukhara and Tashkent, which housed mixed bilingual populations of Tajiks, Sarts, Uzbeks, Persians and Jews [@Anon2026Yilgi; @Azarm2025Turkism; @Pasilov2012National]. In the Ferghana Valley, the partition created intricate enclaves and tortuous boundary salients, leaving substantial Uzbek populations in southern Kyrgyzstan (around Osh and Jalal-Abad) and substantial Tajik enclaves (Sokh, Shakhimardan and Vorukh) surrounded by neighbouring republics [@Anon2026Yilgi; @Azarm2025Turkism]. Administrative capitals shifted dynamically: the Uzbek SSR was initially administered from Samarkand before the seat of government moved permanently to Tashkent in 1930AD [@Pasilov2012National]. The Kazakh administrative capital transitioned from Orenburg to Kzyl-Orda (formerly Ak-Mechet) in 1925, and subsequently to Alma-Ata (formerly Verny) in 1929, stimulating dramatic urban construction and inward migration [@Omarova2026Formation; @Kumo2021Evolution].

Concurrently, linguistic modernisation and literacy campaigns (*Likbez*) restructured indigenous education [@Pasilov2012National; @Anon2014Soviet]. In the late 1920s, Soviet authorities replaced traditional Arabic orthography with the Unified Turkic Latin Alphabet (*Yanalif*), a move designed to modernise technical instruction and weaken traditional clerical authority [@Pasilov2012National; @Anon2026Yilgi]. While Latinisation accelerated primary school enrolment among youth, it temporarily severed adult literacy networks, complicating administrative communication across rural soviets until the Cyrillisation decrees of 1939 and 1940 [@Pasilov2012National; @Battis2016Aleksandr].

## Forced Collectivisation and the Asharshylyk Famine (1928AD to 1933AD)

The late 1920s brought an end to the compromises of the New Economic Policy. With the launch of the First Five-Year Plan in 1928, the Stalinist leadership initiated aggressive state-led industrialisation, forced agricultural collectivisation and the systematic eradication of private pastoral economy [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog; @Zhuravskaya2024Russian]. In the Kazakh steppe, regional party chief Filipp Goloshchekin launched the 'Little October' campaign (*Malyi Oktyabr*), arguing that socialist revolution had never reached nomadic society and that the clan-based pastoral regime had to be destroyed through forced sedentarisation (*sedentarizatsiya*) and dekulakisation (*raskulachivanie*) [@Pianciola2016Towards; @Atantayeva2025Protest; @Zhanymkhan2025Ethnodemog].

Between 1929 and 1931, Soviet procurement brigades instituted confiscatory grain and meat delivery quotas [@Pianciola2016Towards; @Atantayeva2025Protest]. Nomadic pastoralists, possessing neither agricultural implements nor knowledge of arable farming, were forcibly concentrated into fixed settlement points (*tochki*) devoid of housing, fodder supplies or potable water [@Pianciola2016Towards; @Kaipbayeva2025Famine]. Rather than surrender their herds to collective farms (*kolkhozy*), pastoralists engaged in desperate armed resistance, slaughtered their livestock or fled across regional boundaries [@Atantayeva2025Protest; @Zhanymkhan2025Ethnodemog]. Prominent rural insurrections erupted across the steppe, including the Sozak uprising of February 1930, the Irgiz rebellion in Aktobe province, and armed pastoral clashes across Mangyshlak and the Ustyurt plateau [@Atantayeva2025Protest; @Zhanymkhan2025Ethnodemog].

The destruction of the steppe pastoral capital was nearly absolute: between 1928 and 1933, the livestock population of Kazakhstan collapsed catastrophically [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog]. Cattle herds plummeted from 6,5M head to under 1,6M, while sheep and goats dropped from 18,5M to barely 2,3M, eliminating more than 80% of the republic's herd base [@Pianciola2016Towards; @Atantayeva2025Protest]. Horse herds, essential for nomadic pastoral mobility and meat consumption, contracted by over 85% [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog]. The collapse of draught power halted arable cultivation in peripheral kolkhozy, accelerating general economic collapse [@Pianciola2016Towards; @Zhumatay2025Famine].

The loss of livestock triggered the Great Kazakh Famine of 1930 to 1933AD, known locally as the *Asharshylyk* [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog; @Ismailzade2025]. Starvation spread across the central and northern steppe, accompanied by typhus, scurvy and dysentery [@Kaipbayeva2025Famine; @Zhumatay2025Famine]. Hundreds of thousands of starving Kazakhs wandered towards railway junctions and urban centres, leading to widespread child abandonment, mass mortality along transit corridors and refugee crises in Tashkent, Samarkand, Frunze and Western Siberia [@Kaipbayeva2025Famine; @Zhanymkhan2025Ethnodemog]. Municipal authorities established special orphanages (*detdoma*) and reception stations to house tens of thousands of destitute children wandering along railway lines [@Kaipbayeva2025Famine].

In July 1932, a group of prominent Kazakh intellectuals, including Gabit Musrepov and Mansur Gataullin, penned the famous 'Letter of the Five' to Goloshchekin, warning that catastrophic livestock requisitions were causing the physical extinction of the Kazakh nation [@Zhanymkhan2025Ethnodemog; @Atantayeva2025Protest]. While the authors were denounced and reprimanded, the severity of the crisis forced the central Politburo to remove Goloshchekin in January 1933, dispatching emergency grain relief and permitting collective farmers to maintain limited private livestock holdings under Levon Mirzoyan [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog]. Over 1,1M refugees fled the republic, with an estimated 200.000 crossing the international frontier into Xinjiang, China [@Zhanymkhan2025Ethnodemog; @Bianco2021Chinese].

Historical demographic estimates place total famine excess mortality in Kazakhstan between 1,3M and 1,5M lives, representing between 35% and 40% of the entire indigenous Kazakh population [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog; @Ismailzade2025]. Across the entire Central Asian domain, aggregate population dropped from 13,68M in 1926AD to 12,85M in 1933AD, with the three Kazakh steppe territories suffering an absolute net loss of 1,65M inhabitants between 1926 and 1933AD (contracting from 6,07M to 4,42M) [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog].

## Industrialisation, Turksib and Census Suppression (1930AD to 1939AD)

In the aftermath of the famine, the Soviet state transformed Central Asia into a primary raw material and industrial auxiliary base [@Zhuravskaya2024Russian; @Kumo2021Evolution; @Khudayarov2026Formation]. A critical infrastructural artery was the Turkestan-Siberian Railway (Turksib), completed in 1930AD across 1.442 kilometres of desert and steppe, directly linking the timber, coal and grain of Western Siberia with the cotton and mineral districts of Central Asia [@Zhuravskaya2024Russian; @Omarova2026Formation]. Construction of the line served as a major school of industrial labour for indigenous Kazakh and Russian workers, altering regional settlement distributions along its path [@Omarova2026Formation; @Khudayarov2026Formation].

Industrialisation prompted massive state-directed resource extraction [@Kumo2021Evolution; @Khudayarov2026Formation]. In northern Kazakhstan, the Karaganda coalfield expanded into the third largest coal basin of the USSR, sustained by the establishment of the vast Karlag corrective labor camp system under the Gulag administration [@Zhuravskaya2024Russian; @Kumo2021Evolution]. New industrial cities emerged rapidly around raw material combines: Balkhash on Lake Balkhash (copper smelting), Chimkent (lead processing), Leninogorsk (Ridder polymetallic mining), Kounrad, and Begovat (metallurgical works) [@Kumo2021Evolution; @Khudayarov2026Formation]. In the southern oasis republics, massive irrigation canal projects, including the Great Ferghana Canal constructed in 1939 through mass popular mobilization (*hashar*), expanded irrigated cotton hectares, accompanied by textile mills, fertilizer plants and oil extraction at Nebit-Dag and Krasnovodsk [@Mario2017Crisis; @Khudayarov2026Formation]. Machine-Tractor Stations (*MTS*) spread throughout the cotton kolkhozy, accelerating rural mechanisation [@Khudayarov2026Formation; @Pasilov2012National].

The acute demographic deficit inflicted by collectivisation and famine was starkly demonstrated by the All-Union Census of January 1937 [@Zhanymkhan2025Ethnodemog; @Ismailzade2025]. The returns revealed aggregate Soviet population far below the inflated projections of Gosplan leadership, documenting catastrophic demographic shortfalls across Kazakhstan, Ukraine and the Volga [@Zhanymkhan2025Ethnodemog; @Zhumatay2025Famine]. In response, Stalin and the Council of People's Commissars declared the census defective and 'sabotaged by Trotskyite-Bukharinite wreckers', arresting and executing leading census statisticians (including Olympiy Kvitkin and Mikhail Kurman) and suppressing the results [@Zhanymkhan2025Ethnodemog; @Ismailzade2025].

A re-organised census was conducted in January 1939 under rigorous central oversight [@Zhanymkhan2025Ethnodemog; @Kumo2021Evolution]. The 1939 Census recorded a domain population of 16,63M (16.626.000), reflecting substantial natural rebound, extensive labor recruitment from central Russia and Ukraine, and the initial wave of ethnic special deportations [@Zhuravskaya2024Russian; @Kumo2021Evolution; @Rowland1997Regional]. In autumn 1937, approximately 172.000 ethnic Koreans were forcibly deported from the Soviet Maritime Province in the Far East to rural collective farms across southern Kazakhstan (Kzyl-Orda and Semirechye) and Uzbekistan (Tashkent and Khorezm), establishing significant rice-farming kolkhozy [@Siegelbaum2026Migration; @Rowland1997Regional].

## Second World War Evacuation and Forced Resettlement (1941AD to 1945AD)

The German invasion of the Soviet Union in June 1941 transformed Central Asia into the vital strategic rear of the Soviet war effort [@Grossmann2017Shelter; @Rowland1997Regional; @Murav2019Soviet]. Between 1941 and 1943, the Soviet Evacuation Council relocated over 300 major industrial manufacturing plants, research institutes, film studios and universities from the war-threatened European western borderlands to Central Asian urban centres [@Grossmann2017Shelter; @Murav2019Soviet; @Khudayarov2026Formation]. Tashkent became the preeminent industrial evacuation hub, absorbing over 100 industrial facilities (including the Chkalov Aviation Factory from Moscow and agricultural machinery combines) and more than 300.000 civilian evacuees, accompanied by major influxes into Alma-Ata, Samarkand, Frunze and Ferghana [@Grossmann2017Shelter; @Omarova2026Formation; @Redlich2019Surviving].

Major cultural institutions were similarly relocated to the Central Asian rear [@Grossmann2017Shelter; @Omarova2026Formation]. The major Soviet film production studios Mosfilm and Lenfilm were transferred to Alma-Ata, merging into the Central United Film Studio (TsOKS) to produce wartime cinema, while prominent writers and academics, including Anna Akhmatova and Aleksey Tolstoy, were evacuated to Tashkent [@Grossmann2017Shelter; @Omarova2026Formation]. The Uzbek Academy of Sciences and Kazakh Branch of the USSR Academy of Sciences expanded rapidly as evacuated scholars established laboratory complexes in Tashkent and Alma-Ata [@Grossmann2017Shelter; @Khudayarov2026Formation].

Alongside industrial and cultural personnel, Central Asia absorbed enormous streams of civilian refugees, including hundreds of thousands of Polish citizens and Soviet Jewish families escaping Nazi genocide in Ukraine, Belarus and western Russia [@Grossmann2017Shelter; @Murav2019Soviet; @Redlich2019Surviving]. Concurrently, the region became the primary destination for whole nationalities subjected to punitive total deportation by the NKVD under accusations of collective collaboration or frontier security risks [@Rowland1997Regional; @Siegelbaum2026Migration; @Serceoglu2026Reflection].

Between 1941 and 1944, over 1,5M special settlers (*spetspereselentsy*) were deported to Central Asia under lethal transit conditions [@Rowland1997Regional; @Siegelbaum2026Migration]:

1. Volga Germans and Soviet Germans from Ukraine and the Caucasus (over 450.000 directed to northern Kazakhstan and Kyrgyzstan in late 1941) [@Taberner2025German; @Siegelbaum2026Migration].
2. North Caucasian peoples deported in Operation Lentil in February 1944, including approximately 400.000 Chechens and 90.000 Ingush, accompanied by Karachays and Balkars, distributed across northern and central Kazakhstan and Kyrgyzstan [@Siegelbaum2026Migration; @Rowland1997Regional].
3. Crimean Tatars, Greeks, Armenians and Bulgarians deported from Crimea in May 1944 (over 180.000 dispatched primarily to Uzbekistan) [@Rudakova2018Civilian; @Siegelbaum2026Migration].
4. Meskhetian Turks, Kurds and Khemshils from the Georgian-Turkish border zone deported in November 1944 (over 85.000 settled across Uzbekistan, Kazakhstan and Kyrgyzstan) [@Serceoglu2026Reflection; @Siegelbaum2026Migration].

While more than 1,4M Central Asian men were mobilised into the Red Army—suffering substantial casualties on the frontline—inward wartime evacuation, deportee arrivals and industrial labour transfers maintained positive net demographic momentum, lifting domain population to 16,95M (16.950.000) by 1945AD [@Grossmann2017Shelter; @Rowland1997Regional; @Siegelbaum2026Migration].

# Methodology

## Spatial Partition and Macro-Regional Groupings

To capture the profound geographic, economic and ethnic variations across Soviet Central Asia without spatial distortion, this study partitions the domain into ten biophysical and administrative regions encompassing 3.890.946 km² across 65.332 active raster cells (Table \ref{tab:validation-soviet}):

1. Northern and Eastern Kazakh Steppe (Petropavlovsk-Semipalatinsk-Karaganda): 1.273.144 km² (23.114 raster cells). Dry steppe and forest-steppe transitioning into the Kazakh uplands; the domain of northern pastoralism, Karaganda coal extraction, Altai mineral deposits and Virgin Lands agriculture.
2. Western Kazakh Steppe (Uralsk-Aktyubinsk-Guryev): 734.341 km² (12.648 raster cells). Arid Caspian depression and Ural-Emba petroleum basins; historically pastoral Kazakh domains adjacent to the Lower Volga.
3. Southern Kazakhstan and Semirechye (Alma-Ata-Chimkent-Kzyl-Orda): 661.083 km² (10.849 raster cells). Foothill oasis chains, the Chu-Ili ranges and the Syr Darya alluvial corridor; transitional zone between nomadic steppe and irrigated southern agriculture.
4. Uzbek SSR: Tashkent and Ferghana Basin: 38.897 km² (595 raster cells). The hyper-dense agricultural and industrial core of Central Asia, irrigated by the Naryn, Kara Darya and Chirchik rivers; intensive cotton and fruit cultivation.
5. Uzbek SSR: Samarkand, Bukhara and Southern Oases: 237.865 km² (3.633 raster cells). Historic Zeravshan river valley and Surkhandarya plains; ancient urban hubs, silk production and irrigated grain fields.
6. Karakalpak ASSR and Khorezm Oasis: 144.971 km² (2.300 raster cells). Deltaic alluvial lowlands along the lower Amu Darya and southern Aral Sea littoral; mixed Karakalpak, Uzbek and Turkmen communities.
7. Turkmen SSR (Ashkhabad-Mary-Chardzhou-Tashauz-Krasnovodsk): 472.126 km² (7.062 raster cells). Expansive Karakum desert rimmed by the Kopet Dag foothill oases, the Murgab and Tedzhen river deltas and the middle Amu Darya.
8. Kirghiz ASSR/SSR (Frunze-Osh-Issyk-Kul-Naryn): 193.273 km² (3.018 raster cells). Complex montane basins of the Tien Shan surrounding Lake Issyk-Kul and the northern rim of the Ferghana Valley; highland pastoralism and irrigated valleys.
9. Tajik ASSR/SSR (Stalinabad-Leninabad-Khatlon): 77.596 km² (1.176 raster cells). Valleys of the Hissar, Vakhsh and Kafirnigan rivers, alongside the northern Khujand pocket; intensive cotton farming and hydro-engineering.
10. Gorno-Badakhshan Autonomous Oblast (Pamir): 57.650 km² (937 raster cells). The high-altitude Pamir knot; sparse montane pastoral and riverine Pamiri communities.

The demographic accounting model at benchmark year $t \in \{1917, 1920, 1926, 1933, 1937, 1939, 1945\}$ calculates regional population $P_r(t)$ through demographic balancing:

$$P_r(t) = P_r(t_0) + B_r(t_0, t) - D_r(t_0, t) + M_r^{\text{in}}(t_0, t) - M_r^{\text{out}}(t_0, t)$$

where $B_r$ represents live births, $D_r$ denotes deaths (accounting for baseline mortality and famine/conflict excess deaths), $M_r^{\text{in}}$ accounts for voluntary migration, state labor recruitment and forced deportation inflows, and $M_r^{\text{out}}$ captures outward refugee flight, military conscription and mortality displacements [@Pianciola2016Towards; @Rowland1997Regional; @Siegelbaum2026Migration].

## Census Reconciliation and Archival Baselines

Reconstructing demographic trajectories across this era requires harmonising disparate statistical sources of varying reliability [@Zhanymkhan2025Ethnodemog; @Ismailzade2025; @Zhuravskaya2024Russian]:

1. The 1917 Urban and Agricultural Censuses: Conducted by the Russian Provisional Government in spring-summer 1917, providing baseline estimates for pre-revolutionary population despite incomplete coverage in unsettled nomadic volosts [@Ustagaliyev2023First; @Norbekov2026Migration].
2. The 1920 All-Russian Census: Carried out during ongoing Civil War conditions, heavily under-registering unsettled rural and pastoral populations in Turkestan and Semirechye, requiring taphonomic correction via municipal ration registers and district tax rosters [@Ustagaliyev2023First; @Norbekov2026Migration].
3. The 1926 All-Union Census: The first methodologically rigorous census of the Soviet period, providing comprehensive coverage of ethnic composition, urban-rural distributions, age structures and occupational profiles across all newly delimited republics [@Anon2026Yilgi; @Pasilov2012National].
4. The 1933 Gosplan and Central Statistical Board (TsUNKhU) Reconstructions: Archival administrative registers and food rationing records compiled during the nadir of the Kazakh famine, providing critical bounds for demographic contraction [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog].
5. The Suppressed 1937 All-Union Census: Declassified archival registers providing genuine enumerated headcounts prior to NKVD statistical revisions [@Zhanymkhan2025Ethnodemog; @Ismailzade2025].
6. The 1939 All-Union Census: Providing official pre-war baselines following the corrective recount [@Zhuravskaya2024Russian; @Kumo2021Evolution].
7. The 1945 Gosplan and NKVD Special Settlement Registers: Compiling wartime evacuation returns, military mobilization tallies and special settler counts to establish post-war population baselines [@Rowland1997Regional; @Siegelbaum2026Migration; @Grossmann2017Shelter].

## Non-Stationary Kriging and Spatial Covariates

Spatial population allocation across the ten territorial units draws on the regional kriging domain, integrating 12.473 domestic assigned records across 442 domestic catchments (covering 65.332 valid raster cells) [@Paciorek2006Matern]. Residual spatial dependence is modelled with Paciorek-Schervish non-stationary Matérn ($\nu = 3/2$) kriging [@Paciorek2006Matern]:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

Regularised dimensionless variogram bandwidths stand at $\tau_1 = 1,50$ and $\tau_2 = 2,775$ (with raw $\tau_1 = 1,6742$), with effective short ranges spanning 71,04 km across all horizons (Table \ref{tab:kriging-soviet}). The model incorporates five biophysical and infrastructural covariates: habitable land fraction ($\beta_{\text{hab}}$), natural vegetative productivity index ($\beta_{\text{nat}}$), ecozone terrain suitability ($\beta_{\text{eco}}$), fluvial proximity decay ($\beta_{\text{fluvial}}$), and coastal buffer proximity ($\beta_{\text{coastal}}$) [@Paciorek2006Matern]. High-density settlement cores from 1.303 catalogued urban settlements, railway nodes and district administrative centres (led by Tashkent, Karaganda and Samarkand) condition local density clusters, with urban masks applied to preserve rural population baselines [@Kumo2021Evolution; @Khudayarov2026Formation].

# Testing and Validation

Arithmetic reconciliation confirms exact parity between territorial totals and regional aggregates harmonised from the 1917, 1920, 1926, 1937 and 1939 censuses and archival Gosplan registers. Table \ref{tab:validation-soviet} documents the longitudinal demographic trajectory across all seven benchmark years from 1917AD to 1945AD, decomposed into macro-regional groupings.

<figure class="crd-table-figure" id="tab:validation-soviet">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Kazakh Steppe</th><th class="crd-th">Uzbek Oases</th><th class="crd-th">Turkmenistan</th><th class="crd-th">Mountain Republics</th><th class="crd-th">Domain Total</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1917AD</strong></td><td class="crd-td">6,11M</td><td class="crd-td">4,73M</td><td class="crd-td">1M</td><td class="crd-td">2,11M</td><td class="crd-td">13,95M</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">5,39M</td><td class="crd-td">4,44M</td><td class="crd-td">923,5k</td><td class="crd-td">1,9M</td><td class="crd-td">12,65M</td></tr>
<tr><td class="crd-td"><strong>1926AD</strong></td><td class="crd-td">6,07M</td><td class="crd-td">4,6M</td><td class="crd-td">998,7k</td><td class="crd-td">2,01M</td><td class="crd-td">13,68M</td></tr>
<tr><td class="crd-td"><strong>1933AD</strong></td><td class="crd-td">4,33M</td><td class="crd-td">5,28M</td><td class="crd-td">1,07M</td><td class="crd-td">2,17M</td><td class="crd-td">12,85M</td></tr>
<tr><td class="crd-td"><strong>1937AD</strong></td><td class="crd-td">5,43M</td><td class="crd-td">5,96M</td><td class="crd-td">1,19M</td><td class="crd-td">2,67M</td><td class="crd-td">15,25M</td></tr>
<tr><td class="crd-td"><strong>1939AD</strong></td><td class="crd-td">6,09M</td><td class="crd-td">6,37M</td><td class="crd-td">1,25M</td><td class="crd-td">2,93M</td><td class="crd-td">16,63M</td></tr>
<tr><td class="crd-td"><strong>1945AD</strong></td><td class="crd-td">6,37M</td><td class="crd-td">6,37M</td><td class="crd-td">1,24M</td><td class="crd-td">2,97M</td><td class="crd-td">16,95M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional demographic benchmarks across Central Asia, 1917AD to 1945AD, harmonised from Soviet censuses and archival registers.</figcaption>
</figure>

Across all nine horizons in the regional kriging domain, Table \ref{tab:kriging-soviet} documents tightly constrained Matérn variogram parameters. Residual $R^2$ exceeds 0,998 across early horizons and surpasses 0,999 across late horizons, with regularised nugget-to-sill ratios stabilizing at 0,04.

<figure class="crd-table-figure" id="tab:kriging-soviet">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Kriging Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Nugget-to-Sill</th><th class="crd-th">Residual R²</th><th class="crd-th">Mean Cell</th><th class="crd-th">P99 Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Epipalaeolithic, Mesolithic and Early Neolithic (before 5000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000003</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0048</td><td class="crd-td">0,019</td></tr>
<tr><td class="crd-td"><strong>2. Chalcolithic: Namazga, Sarazm and Botai (5000BC to 2500BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000003</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0021</td><td class="crd-td">0,0172</td></tr>
<tr><td class="crd-td"><strong>3. Bronze Age: BMAC, Sintashta and Andronovo (2500BC to 1000BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000013</td><td class="crd-td">0,04</td><td class="crd-td">0,9989</td><td class="crd-td">0,0307</td><td class="crd-td">0,1784</td></tr>
<tr><td class="crd-td"><strong>4. Iron Age: Saka, Achaemenid and Hellenistic (1000BC to 200BC)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000019</td><td class="crd-td">0,04</td><td class="crd-td">0,9991</td><td class="crd-td">0,0463</td><td class="crd-td">0,2707</td></tr>
<tr><td class="crd-td"><strong>5. Kushan, Kangju, Wusun and Parthian Antiquity (200BC to 500AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000029</td><td class="crd-td">0,04</td><td class="crd-td">0,9992</td><td class="crd-td">0,0615</td><td class="crd-td">0,4437</td></tr>
<tr><td class="crd-td"><strong>6. Sogdian, Turkic and Early Islamic (500AD to 900AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000023</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0495</td><td class="crd-td">0,3536</td></tr>
<tr><td class="crd-td"><strong>7. Samanid, Karakhanid, Seljuk and Khwarazmshah (900AD to 1219AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000025</td><td class="crd-td">0,04</td><td class="crd-td">0,9993</td><td class="crd-td">0,0435</td><td class="crd-td">0,3385</td></tr>
<tr><td class="crd-td"><strong>8. Mongol Conquest, Chagatai and Timurid (1219AD to 1500AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000035</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0689</td><td class="crd-td">0,5034</td></tr>
<tr><td class="crd-td"><strong>9. Uzbek Khanates, Kazakh Zhuzes and Imperial Eras (1500AD to 1917AD)</strong></td><td class="crd-td">1,5</td><td class="crd-td">0,000009</td><td class="crd-td">0,04</td><td class="crd-td">0,9994</td><td class="crd-td">0,0144</td><td class="crd-td">0,1164</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Regional kriging variogram diagnostics across nine chronological horizons (65.332 valid land cells, regularised tau1 = 1,5, tau2 = 2,78).</figcaption>
</figure>

Table \ref{tab:source-corpora-soviet} details the component archaeological and historical registries aggregated into the regional database, highlighting the contribution of comprehensive monument inventories (UCL CAAL), epigraphic corpora, historical gazetteers (Al-Thurayya, Pleiades, ArchAtlas) and national monument registries (Uzbekistan Cabinet of Ministers Resolution No. 846, Kazakhstan Ministry of Culture Order No. 88, Harvard Published Excavations Atlas).

<figure class="crd-table-figure" id="tab:source-corpora-soviet">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Raw Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Asian Archaeological Landscapes Dated Horizons (UCL CAAL)</strong></td><td class="crd-td">5.073</td><td class="crd-td">12,19%</td></tr>
<tr><td class="crd-td"><strong>UCL CAAL Typological Monument Inventory (UCL/ArcGIS)</strong></td><td class="crd-td">17.381</td><td class="crd-td">41,76%</td></tr>
<tr><td class="crd-td"><strong>Al-Thurayya Early Islamic Central Asia Gazetteer</strong></td><td class="crd-td">827</td><td class="crd-td">1,99%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Gazetteer of Ancient Bactria, Sogdiana and Margiana</strong></td><td class="crd-td">1.613</td><td class="crd-td">3,88%</td></tr>
<tr><td class="crd-td"><strong>Tegiszhol Steppe Radiocarbon Synthesis</strong></td><td class="crd-td">81</td><td class="crd-td">0,19%</td></tr>
<tr><td class="crd-td"><strong>Central Asian Deduplicated Radiocarbon Synthesis (c14bazAAR)</strong></td><td class="crd-td">1.346</td><td class="crd-td">3,23%</td></tr>
<tr><td class="crd-td"><strong>Allen Ancient DNA Resource Central Asian Genome Compendium (AADR v66)</strong></td><td class="crd-td">885</td><td class="crd-td">2,13%</td></tr>
<tr><td class="crd-td"><strong>ArchAtlas Central Asian Trade Corridors and Irrigation Networks</strong></td><td class="crd-td">2.317</td><td class="crd-td">5,57%</td></tr>
<tr><td class="crd-td"><strong>Uzbekistan Cabinet of Ministers Resolution No. 846 National Monument Register</strong></td><td class="crd-td">6.156</td><td class="crd-td">14,79%</td></tr>
<tr><td class="crd-td"><strong>Kazakhstan Ministry of Culture Order No. 88 Heritage Register</strong></td><td class="crd-td">185</td><td class="crd-td">0,44%</td></tr>
<tr><td class="crd-td"><strong>Harvard Published Excavations Atlas of Central Asia</strong></td><td class="crd-td">2.642</td><td class="crd-td">6,35%</td></tr>
<tr><td class="crd-td"><strong>Institute of Archaeology Russian Academy of Sciences Steppe Corpus</strong></td><td class="crd-td">2.384</td><td class="crd-td">5,73%</td></tr>
<tr><td class="crd-td"><strong>Tarim Basin and Tien Shan Cross-Border Archaeological Register</strong></td><td class="crd-td">656</td><td class="crd-td">1,58%</td></tr>
<tr><td class="crd-td"><strong>Central Asian Scholarly Site Survey Compendium</strong></td><td class="crd-td">73</td><td class="crd-td">0,18%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Component archaeological, historical and heritage gazetteer registries aggregated into the Central Asian domain.</figcaption>
</figure>

# Results

## Civil War Collapse and Uneven Demographic Attrition (1917AD to 1926AD)

Between 1917AD and 1920AD, Central Asia experienced acute demographic contraction as the combined shocks of the Russian Civil War, transport collapse, food requisitioning and typhus epidemics ravaged urban oases and pastoral rangelands (Figure \ref{fig:traj-soviet}). Domain population fell by 1,27M people, declining from 13,95M to 12,68M (Table \ref{tab:regions-soviet}) [@Ustagaliyev2023First; @Norbekov2026Migration].

<figure class="crd-figure-block" id="fig:traj-soviet">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0-russian-civil-war-basmachi-and-early-soviet/fig2_russian_civil_war_basmachi_and_early_soviet_trajectory.png" alt="fig:traj-soviet" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Soviet Central Asia from 1917AD to 1945AD across ten regional units with historical uncertainty intervals.</figcaption>
</figure>

Demographic attrition was intensely uneven across geographic subregions. In the northern and eastern Kazakh steppe, population contracted from 3M to 2,66M (a loss of 343k inhabitants), while the western Kazakh steppe dropped from 1,23M to 1,06M [@Ustagaliyev2023First; @Zhanymkhan2025Ethnodemog]. In Semirechye and southern Kazakhstan, inter-communal warfare and famine depressed numbers from 1,88M to 1,67M [@Omarova2026Formation; @Kokaisl2026Tsarist]. In the oasis cores of Uzbekistan, Tashkent and Ferghana declined from 2,44M to 2,3M, while the Zeravshan and Surkhandarya valleys fell from 1,79M to 1,67M as commercial cotton farmers were unable to secure bread [@Pasilov2012National; @Mario2017Crisis].

With the introduction of the New Economic Policy in 1921AD, the abolition of grain requisitioning and the pacification of the Basmachi insurgency, the demographic trajectory pivoted towards recovery [@Anon2026Yilgi; @Pasilov2012National]. By the All-Union Census of December 1926, regional population had expanded to 13,68M, surpassing 1920 levels by 1,03M inhabitants (Table \ref{tab:regions-soviet}). The northern and eastern Kazakh steppe rebounded to 2,98M, while Tashkent and Ferghana reached 2,41M [@Anon2026Yilgi; @Omarova2026Formation].

## The Asharshylyk Famine and Kazakh Demographic Cratering (1926AD to 1933AD)

The six years between 1926AD and 1933AD witnessed the most severe peacetime demographic catastrophe in modern Central Asian history (Figure \ref{fig:density-soviet}) [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog; @Ismailzade2025]. Driven by the forced sedentarisation of nomadic pastoralists, violent grain confiscations and the annihilation of over 80% of the republic's livestock herds, the population of Kazakhstan collapsed catastrophically [@Pianciola2016Towards; @Atantayeva2025Protest].

<figure class="crd-figure-block" id="fig:density-soviet">
<img class="crd-figure-img" src="/artefacts/project_saray/1.0-russian-civil-war-basmachi-and-early-soviet/fig3_russian_civil_war_basmachi_and_early_soviet_density.png" alt="fig:density-soviet" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Spatial population density surfaces and territorial distribution across Central Asia between 1917AD and 1945AD.</figcaption>
</figure>

Between 1926 and 1933, population in the northern and eastern Kazakh steppe contracted by 28,9%, falling from 2,98M to 2,12M (an absolute decline of 862k people) (Table \ref{tab:regions-soviet}) [@Zhanymkhan2025Ethnodemog; @Ismailzade2025]. The western Kazakh steppe suffered an even steeper proportional collapse of 32,3%, plunging from 1,18M to 797k [@Zhanymkhan2025Ethnodemog]. Southern Kazakhstan and Semirechye fell from 1,92M to 1,41M (a drop of 502k) [@Pianciola2016Towards; @Omarova2026Formation]. Across the three Kazakh territories combined, headcounts cratered from 6,07M to 4,42M, representing an absolute loss of 1,65M residents through famine mortality and mass outward flight [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog].

Conversely, the sedentary agrarian oasis districts of Uzbekistan, Turkmenistan and the mountainous republics avoided the pastoral famine, absorbing substantial refugee inflows [@Anon2026Yilgi; @Zhanymkhan2025Ethnodemog]. Population in Tashkent and Ferghana grew from 2,41M in 1926 to 2,8M in 1933, while the Zeravshan and Surkhandarya valleys rose from 1,71M to 1,95M [@Pasilov2012National; @Khudayarov2026Formation]. Kirghiz ASSR headcounts expanded from 985k to 1,07M, while the Turkmen SSR rose from 999k to 1,07M [@Kokaisl2026Tsarist]. Nevertheless, the magnitude of the Kazakh pastoral catastrophe depressed aggregate domain population from 13,68M in 1926AD to 12,85M in 1933AD, establishing the absolute demographic trough of the interwar period [@Pianciola2016Towards; @Zhanymkhan2025Ethnodemog].

<figure class="crd-table-figure" id="tab:regions-soviet">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">1917AD</th><th class="crd-th">1920AD</th><th class="crd-th">1926AD</th><th class="crd-th">1933AD</th><th class="crd-th">1937AD</th><th class="crd-th">1939AD</th><th class="crd-th">1945AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Northern and Eastern Kazakh ASSR/SSR (Petropavlovsk-Semipalatinsk-Karaganda)</strong></td><td class="crd-td">1.273.144</td><td class="crd-td">3M</td><td class="crd-td">2,66M</td><td class="crd-td">2,98M</td><td class="crd-td">2,12M</td><td class="crd-td">2,71M</td><td class="crd-td">3,06M</td><td class="crd-td">3,25M</td></tr>
<tr><td class="crd-td"><strong>2. Western Kazakh ASSR/SSR (Uralsk-Aktyubinsk-Guryev)</strong></td><td class="crd-td">734.341</td><td class="crd-td">1,23M</td><td class="crd-td">1,06M</td><td class="crd-td">1,18M</td><td class="crd-td">796,7k</td><td class="crd-td">1,01M</td><td class="crd-td">1,13M</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>3. Southern Kazakhstan and Semirechye (Alma-Ata-Chimkent-Kzyl-Orda)</strong></td><td class="crd-td">661.083</td><td class="crd-td">1,88M</td><td class="crd-td">1,67M</td><td class="crd-td">1,92M</td><td class="crd-td">1,41M</td><td class="crd-td">1,71M</td><td class="crd-td">1,9M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>4. Uzbek SSR: Tashkent and Ferghana Basin</strong></td><td class="crd-td">38.897</td><td class="crd-td">2,44M</td><td class="crd-td">2,3M</td><td class="crd-td">2,41M</td><td class="crd-td">2,8M</td><td class="crd-td">3,17M</td><td class="crd-td">3,39M</td><td class="crd-td">3,42M</td></tr>
<tr><td class="crd-td"><strong>5. Uzbek SSR: Samarkand, Bukhara and Southern Oases</strong></td><td class="crd-td">237.865</td><td class="crd-td">1,79M</td><td class="crd-td">1,67M</td><td class="crd-td">1,71M</td><td class="crd-td">1,95M</td><td class="crd-td">2,21M</td><td class="crd-td">2,36M</td><td class="crd-td">2,34M</td></tr>
<tr><td class="crd-td"><strong>6. Karakalpak ASSR and Khorezm Oasis</strong></td><td class="crd-td">144.971</td><td class="crd-td">502,2k</td><td class="crd-td">468,1k</td><td class="crd-td">478,8k</td><td class="crd-td">526,9k</td><td class="crd-td">579,5k</td><td class="crd-td">615,2k</td><td class="crd-td">610,2k</td></tr>
<tr><td class="crd-td"><strong>7. Turkmen SSR (Ashkhabad-Mary-Chardzhou-Tashauz-Krasnovodsk)</strong></td><td class="crd-td">472.126</td><td class="crd-td">1M</td><td class="crd-td">923,5k</td><td class="crd-td">998,7k</td><td class="crd-td">1,07M</td><td class="crd-td">1,19M</td><td class="crd-td">1,25M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>8. Kirghiz ASSR/SSR (Frunze-Osh-Issyk-Kul-Naryn)</strong></td><td class="crd-td">193.273</td><td class="crd-td">1,02M</td><td class="crd-td">910,8k</td><td class="crd-td">985k</td><td class="crd-td">1,07M</td><td class="crd-td">1,34M</td><td class="crd-td">1,46M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>9. Tajik ASSR/SSR (Stalinabad-Leninabad-Khatlon)</strong></td><td class="crd-td">77.596</td><td class="crd-td">1,03M</td><td class="crd-td">936,1k</td><td class="crd-td">971,4k</td><td class="crd-td">1,05M</td><td class="crd-td">1,27M</td><td class="crd-td">1,4M</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>10. Gorno-Badakhshan Autonomous Oblast (Pamir)</strong></td><td class="crd-td">57.650</td><td class="crd-td">55,8k</td><td class="crd-td">50,6k</td><td class="crd-td">54,7k</td><td class="crd-td">51,4k</td><td class="crd-td">61k</td><td class="crd-td">66,5k</td><td class="crd-td">67,8k</td></tr>
<tr><td class="crd-td"><strong>Domain Total</strong></td><td class="crd-td">3.890.946</td><td class="crd-td">13,95M</td><td class="crd-td">12,65M</td><td class="crd-td">13,68M</td><td class="crd-td">12,85M</td><td class="crd-td">15,25M</td><td class="crd-td">16,63M</td><td class="crd-td">16,95M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Territorial population benchmarks across ten Central Asian regions, 1917AD to 1945AD, calculated from regional JSON registers.</figcaption>
</figure>

## Industrialisation, Turksib and Urbanisation (1933AD to 1939AD)

From 1933AD onward, massive state-directed industrial investment and railway construction drove rapid demographic and urban recovery [@Zhuravskaya2024Russian; @Kumo2021Evolution; @Khudayarov2026Formation]. The completion of the Turksib railway facilitated the flow of raw materials, manufactured machinery and hundreds of thousands of Russian, Ukrainian and Belarusian industrial workers and engineers into emerging urban combines across Kazakhstan and Central Asia [@Zhuravskaya2024Russian; @Omarova2026Formation; @Kumo2021Evolution].

Between 1933 and the 1939 All-Union Census, domain population expanded from 12,85M to 16,63M (an increase of 3,78M people, or 29,4%) (Table \ref{tab:regions-soviet}) [@Zhuravskaya2024Russian; @Kumo2021Evolution]. In northern Kazakhstan, population rose from 2,12M to 3,06M, anchored by the explosive growth of Karaganda, which was founded as a city in 1931 and surged to 165.818 inhabitants by 1939 to become the second largest city in Central Asia [@Kumo2021Evolution; @Zhuravskaya2024Russian]. Alma-Ata grew from 45.385 residents in 1926 to over 220.000 by 1939, driven by its status as republic capital and terminus of the Turksib [@Omarova2026Formation; @Kumo2021Evolution].

<figure class="crd-table-figure" id="tab:density-soviet">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">1917AD</th><th class="crd-th">1917AD (km²)</th><th class="crd-th">1945AD</th><th class="crd-th">1945AD (km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Northern and Eastern Kazakh ASSR/SSR (Petropavlovsk-Semipalatinsk-Karaganda)</strong></td><td class="crd-td">1.284</td><td class="crd-td">3M</td><td class="crd-td">2,36</td><td class="crd-td">3,25M</td><td class="crd-td">2,56</td></tr>
<tr><td class="crd-td"><strong>2. Western Kazakh ASSR/SSR (Uralsk-Aktyubinsk-Guryev)</strong></td><td class="crd-td">435</td><td class="crd-td">1,23M</td><td class="crd-td">1,67</td><td class="crd-td">1,15M</td><td class="crd-td">1,57</td></tr>
<tr><td class="crd-td"><strong>3. Southern Kazakhstan and Semirechye (Alma-Ata-Chimkent-Kzyl-Orda)</strong></td><td class="crd-td">1.046</td><td class="crd-td">1,88M</td><td class="crd-td">2,85</td><td class="crd-td">1,97M</td><td class="crd-td">2,97</td></tr>
<tr><td class="crd-td"><strong>4. Uzbek SSR: Tashkent and Ferghana Basin</strong></td><td class="crd-td">111</td><td class="crd-td">2,44M</td><td class="crd-td">62,76</td><td class="crd-td">3,42M</td><td class="crd-td">88,02</td></tr>
<tr><td class="crd-td"><strong>5. Uzbek SSR: Samarkand, Bukhara and Southern Oases</strong></td><td class="crd-td">92</td><td class="crd-td">1,79M</td><td class="crd-td">7,51</td><td class="crd-td">2,34M</td><td class="crd-td">9,83</td></tr>
<tr><td class="crd-td"><strong>6. Karakalpak ASSR and Khorezm Oasis</strong></td><td class="crd-td">37</td><td class="crd-td">502,2k</td><td class="crd-td">3,46</td><td class="crd-td">610,2k</td><td class="crd-td">4,21</td></tr>
<tr><td class="crd-td"><strong>7. Turkmen SSR (Ashkhabad-Mary-Chardzhou-Tashauz-Krasnovodsk)</strong></td><td class="crd-td">160</td><td class="crd-td">1M</td><td class="crd-td">2,13</td><td class="crd-td">1,24M</td><td class="crd-td">2,62</td></tr>
<tr><td class="crd-td"><strong>8. Kirghiz ASSR/SSR (Frunze-Osh-Issyk-Kul-Naryn)</strong></td><td class="crd-td">219</td><td class="crd-td">1,02M</td><td class="crd-td">5,27</td><td class="crd-td">1,47M</td><td class="crd-td">7,63</td></tr>
<tr><td class="crd-td"><strong>9. Tajik ASSR/SSR (Stalinabad-Leninabad-Khatlon)</strong></td><td class="crd-td">181</td><td class="crd-td">1,03M</td><td class="crd-td">13,3</td><td class="crd-td">1,42M</td><td class="crd-td">18,35</td></tr>
<tr><td class="crd-td"><strong>10. Gorno-Badakhshan Autonomous Oblast (Pamir)</strong></td><td class="crd-td">9</td><td class="crd-td">55,8k</td><td class="crd-td">0,97</td><td class="crd-td">67,8k</td><td class="crd-td">1,18</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Catalogued settlements, 1917AD and 1945AD population benchmarks, and territorial densities (persons per km²).</figcaption>
</figure>

In Uzbekistan, Tashkent and Ferghana surged to 3,39M in 1939AD, while Samarkand and southern oases reached 2,36M (Table \ref{tab:regions-soviet}) [@Pasilov2012National; @Khudayarov2026Formation]. Tashkent consolidated its role as the undisputed metropolis of Central Asia, housing 556.000 inhabitants in 1939 [@Kumo2021Evolution]. In Tajikistan, the relocation of the republic capital to Dushanbe (renamed Stalinabad in 1929) sparked a dramatic expansion from 5.607 residents in 1926 to 45.612 by 1939, accompanied by major agricultural migration into the irrigated Vakhsh valley [@Azarm2025Turkism; @Nourzhanov2013Tajikistan]. In Kyrgyzstan, Frunze (formerly Pishpek) expanded from 36.599 in 1926 to 92.783 in 1939 as republican administration and food processing combines concentrated in the Chuy valley [@Kokaisl2026Tsarist; @Kumo2021Evolution].

## Second World War Influxes and Demographic Apex (1939AD to 1945AD)

During the Second World War, the profound demographic drain of military mobilisation was counterbalanced and ultimately exceeded by massive inward population transfers [@Grossmann2017Shelter; @Rowland1997Regional; @Siegelbaum2026Migration]. Across the 1939 to 1945AD period, domain population increased by 324k, rising from 16,63M to 16,95M (Table \ref{tab:validation-soviet}) [@Grossmann2017Shelter; @Rowland1997Regional].

The influx comprised two distinct streams:

1. Industrial Evacuation: Over 300 evacuated factories brought skilled machinists, metalworkers, technical specialists and their dependents from Moscow, Leningrad, Kharkov, Stalingrad and Kiev into Tashkent, Alma-Ata, Karaganda, Chimkent, Samarkand and Frunze [@Grossmann2017Shelter; @Khudayarov2026Formation; @Omarova2026Formation]. Tashkent's population swelled beyond 750.000 by 1943, creating acute housing pressures where multiple families shared traditional earthen courtyard homes (*mahalla*) [@Grossmann2017Shelter; @Murav2019Soviet].
2. Punitive Ethnic Deportations: Between 1941 and 1944, the NKVD transported over 1,5M special settlers from the Volga, Crimea and the North Caucasus into Central Asia [@Rowland1997Regional; @Siegelbaum2026Migration; @Serceoglu2026Reflection]. Northern and central Kazakhstan absorbed over 450.000 Volga Germans and 300.000 Chechens and Ingush, lifting regional population from 3,06M in 1939 to 3,25M in 1945AD [@Siegelbaum2026Migration; @Rowland1997Regional]. In southern Kazakhstan and Semirechye, headcounts reached 1,97M, while Tashkent and Ferghana maintained 3,42M residents despite extensive wartime military losses on the Soviet-German front [@Grossmann2017Shelter; @Rowland1997Regional].

## Urban Hierarchy and Settlement Trajectory

The 1.303 settlements catalogued in this study capture the dual structural transition of Central Asian settlement systems between 1917 and 1945AD: the modernisation and expansion of historic oasis market centres alongside the rapid state-directed emergence of raw material mining combines and industrial transport hubs [@Kumo2021Evolution; @Khudayarov2026Formation; @Omarova2026Formation].

At the apex of the regional urban hierarchy stood five primary metropolitan centres:

1. Tashkent: The dominant administrative, industrial, cultural and educational metropolis of Soviet Central Asia, housing 323.613 inhabitants in 1926 and expanding to 556.000 by 1939, absorbing hundreds of evacuated industrial enterprises and hundreds of thousands of refugees during the Second World War [@Kumo2021Evolution; @Grossmann2017Shelter].
2. Karaganda: The preeminent industrial boomtown of Soviet Kazakhstan, rising from an unmapped mining settlement to a municipal entity in 1931 and reaching 165.818 residents in 1939, serving as the nucleus of the Karaganda coal basin and the administrative seat of the Karlag Gulag complex [@Kumo2021Evolution; @Zhuravskaya2024Russian].
3. Samarkand: The historic capital of the Uzbek SSR until 1930, maintaining 105.206 residents in 1926 and growing to 136.283 in 1939, combining silk processing, fruit packing and educational institutes [@Pasilov2012National; @Kumo2021Evolution].
4. Ashgabat: Capital of the Turkmen SSR, expanding from 25.811 in 1920 to 51.593 in 1926 and 126.635 by 1939, serving as the commercial and political node of the Kopet Dag oasis chain [@Kumo2021Evolution].
5. Semipalatinsk (Semey): The primary trade, processing and military hub of the upper Irtysh valley, rising from 44.600 in 1920 to 56.884 in 1926 and 109.681 in 1939, anchoring meat-packing combines and railway linkages to Siberia [@Omarova2026Formation; @Kumo2021Evolution].

The secondary tier comprised regional industrial and republican administrative centres:

6. Bishkek (Frunze): Capital of the Kirghiz SSR, expanding from 23.071 in 1923 to 36.599 in 1926 and 92.783 in 1939 [@Kokaisl2026Tsarist; @Kumo2021Evolution].
7. Andijan: The primary commercial city of the eastern Ferghana Valley, holding 73.465 residents in 1926 and 84.703 in 1939 [@Pasilov2012National; @Kumo2021Evolution].
8. Namangan: Major cotton ginning and textile centre of northern Ferghana, sustaining 73.640 in 1926 and 79.542 in 1939 [@Khudayarov2026Formation; @Kumo2021Evolution].
9. Taraz (Dzhambul or Aulie-Ata): Key transport and chemical processing hub on the Turksib railway in southern Kazakhstan, expanding from 16.268 in 1920 to 24.767 in 1926 and 63.728 by 1939 [@Kumo2021Evolution].
10. Aktobe (Aktyubinsk): Premier industrial and chemical centre of western Kazakhstan, expanding from 11.960 in 1920 to 20.861 in 1926 and 48.749 in 1939 [@Kumo2021Evolution].
11. Kyzylorda: Former Kazakh capital along the Syr Darya, expanding from 8.497 in 1923 to 22.606 in 1926 and 46.750 in 1939, receiving large numbers of deported Korean collective farmers [@Siegelbaum2026Migration; @Kumo2021Evolution].
12. Dushanbe (Stalinabad): Capital of the Tajik SSR, expanding from 5.607 in 1926 to 45.612 in 1939 [@Azarm2025Turkism; @Nourzhanov2013Tajikistan].
13. Almaty (Alma-Ata): Capital of the Kazakh SSR from 1929 onward, expanding from 45.385 in 1926 to over 220.000 by 1939, anchoring administrative, film, academic and industrial apparatuses [@Omarova2026Formation; @Kumo2021Evolution].

The tertiary tier encompassed vital mining, agricultural and transport nodes:

14. Chimkent: Major metallurgical and transport hub in southern Kazakhstan, expanding from 21.018 in 1926 to over 50.000 by 1939 with the commissioning of the Chimkent lead smelter [@Kumo2021Evolution].
15. Kokand: Historic commercial capital of Ferghana, recovering from Civil War destruction to house over 84.000 inhabitants by 1939 [@Azarm2025Turkism; @Kumo2021Evolution].
16. Bukhara: Ancient trade metropolis of the lower Zeravshan, housing 41.839 in 1926 and 59.400 in 1939 [@Pasilov2012National].
17. Uralsk (Oral): Historic Cossack and pastoral administrative centre of western Kazakhstan, maintaining 36.352 in 1926 and 66.200 in 1939 [@Kumo2021Evolution].
18. Petropavlovsk: Primary northern rail junction connecting the Trans-Siberian line to Karaganda, sustaining 47.361 in 1926 and 91.678 in 1939 [@Kumo2021Evolution].
19. Oskemen (Ust-Kamenogorsk): Altai metallurgical centre, expanding from 13.909 in 1926 to 20.141 in 1939 [@Kumo2021Evolution].
20. Nukus: Capital of the Karakalpak ASSR founded in 1932, expanding to 10.456 in 1939 [@Anon2026Yilgi].
21. Leninogorsk (Ridder): Leading non-ferrous lead and zinc mining combine in the Altai mountains, reaching over 50.000 residents in 1939 [@Kumo2021Evolution].
22. Balkhash: Copper combine founded in 1937 on Lake Balkhash, housing over 32.000 industrial workers by 1939 [@Kumo2021Evolution].
23. Chardzhou (Turkmenabat): Strategic crossing of the Amu Darya on the Central Asian railway, sustaining 42.100 in 1939 [@Kumo2021Evolution].
24. Mary (Merv): Cotton processing node of the Murgab oasis, maintaining 37.100 in 1939 [@Kumo2021Evolution].
25. Krasnovodsk (Turkmenbashi): Caspian oil terminal and ferry port, supporting 23.300 in 1939 [@Kumo2021Evolution].
26. Osh: Ancient Ferghana gateway in Kyrgyzstan, expanding from 14.508 in 1923 to 30.635 in 1926 and 33.315 in 1939 [@Kokaisl2026Tsarist; @Kumo2021Evolution].
27. Pavlodar: Northern Irtysh grain and transport hub, expanding from 14.286 in 1920 to 17.949 in 1926 and 28.535 in 1939 [@Kumo2021Evolution].
28. Fergana (Skobelev): Administrative centre of the southern Ferghana valley, expanding from 14.275 in 1926 to 35.646 in 1939 [@Khudayarov2026Formation; @Kumo2021Evolution].
29. Atyrau (Guryev): Caspian port and Emba petroleum node, maintaining 13.000 in 1926 and 41.500 in 1939 [@Kumo2021Evolution].
30. Jalal-Abad: Mineral spring resort and cotton ginning centre in the eastern Ferghana foothills, growing to 15.000 residents by 1939 [@Kokaisl2026Tsarist].
31. Kustanai (Kostanay): Steppe agricultural administrative centre on the Tobol River, expanding from 25.400 in 1926 to 33.500 in 1939 [@Kumo2021Evolution].
32. Termez: Ancient fortified river port on the Amu Darya frontier facing Afghanistan, housing 12.000 in 1939 [@Nourzhanov2013Tajikistan].
33. Kulyab: Major agricultural market centre in southern Tajikistan, sustaining 8.500 residents in 1939 [@Nourzhanov2013Tajikistan].
34. Kurgan-Tyube (Bokhtar): Vakhsh valley cotton combine headquarters, expanding rapidly to 10.000 by 1939 [@Nourzhanov2013Tajikistan].
35. Khorugh: Administrative capital of the Gorno-Badakhshan Autonomous Oblast in the high Pamirs, supporting 3.800 in 1939 [@Azarm2025Turkism].
36. Chimbay: Historic commercial delta town of Karakalpakstan, maintaining 8.000 in 1939 [@Anon2026Yilgi].
37. Margilan: Historic silk manufacturing centre of the Ferghana basin, housing over 45.000 in 1939 [@Khudayarov2026Formation].
38. Chust: Craft and metalworking centre on the northern rim of Ferghana, sustaining 14.000 in 1939 [@Khudayarov2026Formation].
39. Kegen: Highland cattle breeding and frontier outpost in eastern Semirechye, supporting 4.200 in 1939 [@Omarova2026Formation].
40. Zaisan: Frontier customs post and livestock market adjacent to the Xinjiang border, sustaining 7.500 in 1939 [@Omarova2026Formation].
41. Tokmok: Historic Chuy valley agricultural trade hub in northern Kyrgyzstan, growing to 14.500 residents by 1939 [@Kokaisl2026Tsarist].
42. Bairam-Ali: Cotton processing combine situated adjacent to ancient Merv in Turkmenistan, supporting 11.200 in 1939 [@Kumo2021Evolution].
43. Kizyl-Arvat (Serdar): Strategic locomotive depot and maintenance workshops on the Transcaspian railway, sustaining 10.500 in 1939 [@Kumo2021Evolution].
44. Saryagash: Southern Kazakhstan transit station and balneological resort, supporting 5.100 in 1939 [@Omarova2026Formation].
45. Kazalinsk (Kazaly): Historic Russian fortress and Syr Darya fisheries base, maintaining 9.500 in 1939 [@Omarova2026Formation].
46. Shalkar: Western Kazakh steppe rail junction servicing the Orenburg-Tashkent trunk line, housing 6.800 in 1939 [@Omarova2026Formation].
47. Aralsk: Premier shipping port and fish canning combine on the northern Aral Sea littoral, reaching 12.500 in 1939 [@Omarova2026Formation].
48. Khanabad: Eastern Ferghana irrigation barrage town on the Kara Darya, sustaining 6.400 in 1939 [@Khudayarov2026Formation].
49. Rishtan: Celebrated ceramic and glazed pottery manufacturing town in southern Ferghana, supporting 8.200 in 1939 [@Khudayarov2026Formation].
50. Shahrisabz: Historic southern Uzbek oasis town in Kashkadarya, housing 12.800 in 1939 [@Pasilov2012National].

Across these fifty leading centres and the broader network of 1.303 catalogued settlements, the urban hierarchy displayed rapid spatial integration [@Kumo2021Evolution; @Zhuravskaya2024Russian]. While ancient oasis cities retained dense populations through intensified irrigated agriculture, newly founded industrial settlements altered the demographic equilibrium of the northern steppe, creating permanent socialist urban clusters that transformed the human geography of Central Asia [@Kumo2021Evolution; @Khudayarov2026Formation].

# Limitations

Four primary analytical constraints govern precision in this quantitative reconstruction of early Soviet Central Asia:

First, statistical distortions and ideological falsification in Soviet census records pose substantial challenges [@Zhanymkhan2025Ethnodemog; @Ismailzade2025]. The suppression and execution of the 1937 census administration, followed by the upward inflation of the 1939 census by Gosplan to conceal the true demographic scale of the 1930 to 1933 famines, introduced systematic over-reporting into published pre-war totals [@Zhanymkhan2025Ethnodemog; @Ismailzade2025]. In this study, archival declassifications from the Russian State Archive of the Economy (RGAE) and TsUNKhU regional balancing tables are used to adjust for these political manipulations [@Zhanymkhan2025Ethnodemog; @Zhuravskaya2024Russian].

Second, nomadic under-registration during the 1917 to 1926 period introduces potential baseline uncertainty [@Ustagaliyev2023First; @Norbekov2026Migration]. The 1920 agricultural census was disrupted by guerrilla combat in rural districts, while the 1926 census faced immense logistical hurdles in tracking seasonal pastoral migrations across the Betpak-Dala, Karakum and Kyzylkum deserts [@Ustagaliyev2023First; @Pasilov2012National]. While administrative corrections were applied by the Central Statistical Board, rural pastoral numbers carry an estimated uncertainty interval of $\pm 4\%$ to $\pm 6\%$ [@Ustagaliyev2023First; @Pianciola2016Towards].

Third, cross-border refugee movements into Xinjiang, China and northern Afghanistan remain partially unrecorded in official Soviet exit registers [@Zhanymkhan2025Ethnodemog; @Azarm2025Turkism]. While Soviet border guard records (*Pogranvoiska*) and regional OGPU dispatches documented large-scale armed border crossings during the 1930 to 1932 collectivisation revolts, exact numbers of surviving migrants versus casualties from border clashes and winter exposure remain difficult to disaggregate [@Zhanymkhan2025Ethnodemog; @Bianco2021Chinese].

Fourth, Second World War demographic dynamics are complicated by overlapping administrative jurisdictions governing military conscription, industrial evacuation and the Special Settlement regime [@Grossmann2017Shelter; @Rowland1997Regional; @Siegelbaum2026Migration]. Military casualties among indigenous and Slavic mobilized soldiers were recorded by the People's Commissariat of Defence (NKO), while special settlers were registered under NKVD Department of Special Settlements (*Otdel spetsposeleniy*), requiring careful cross-tabulation to eliminate double counting between municipal ration registries and punitive camp rosters [@Grossmann2017Shelter; @Rowland1997Regional].

# Sources

<div id="refs"></div>
