const employees = [
    { id: 1,  name: "Aram",   age: 24, city: "Yerevan", dept: "Engineering", salary: 420000, isRemote: true,  hiredAt: "2023-02-15", skills: ["JS","React"],         projects: 2,  performance: 86, managerId: 11, contacts: { email: "aram@acme.am",   phone: "091-000001" } },
    { id: 2,  name: "Mane",   age: 31, city: "Gyumri",  dept: "Design",      salary: 380000, isRemote: false, hiredAt: "2021-09-01", skills: ["Figma","Illustrator"], projects: 5,  performance: 92, managerId: 12, contacts: { email: "mane@acme.am",   phone: "093-000002" } },
    { id: 3,  name: "Suren",  age: 27, city: "Vanadzor",dept: "Engineering", salary: 510000, isRemote: true,  hiredAt: "2020-06-10", skills: ["JS","Node","SQL"],     projects: 7,  performance: 74, managerId: 11, contacts: { email: "suren@acme.am",  phone: "095-000003" } },
    { id: 4,  name: "Lilit",  age: 22, city: "Yerevan", dept: "HR",          salary: 260000, isRemote: false, hiredAt: "2024-03-20", skills: ["Excel","Hiring"],      projects: 1,  performance: 81, managerId: 13, contacts: { email: "lilit@acme.am",  phone: "094-000004" } },
    { id: 5,  name: "Tigran", age: 35, city: "Yerevan", dept: "Sales",       salary: 600000, isRemote: true,  hiredAt: "2019-11-05", skills: ["Negotiation","CRM"],   projects: 9,  performance: 88, managerId: 14, contacts: { email: "tigran@acme.am", phone: "044-000005" } },
    { id: 6,  name: "Sona",   age: 29, city: "Ijevan",  dept: "Design",      salary: 340000, isRemote: true,  hiredAt: "2022-01-12", skills: ["Figma","Branding"],    projects: 3,  performance: 69, managerId: 12, contacts: { email: "sona@acme.am",   phone: "096-000006" } },
    { id: 7,  name: "Davit",  age: 41, city: "Yerevan", dept: "Engineering", salary: 900000, isRemote: false, hiredAt: "2017-04-18", skills: ["Go","K8s","Cloud"],    projects: 11, performance: 95, managerId: 11, contacts: { email: "davit@acme.am",  phone: "099-000007" } },
    { id: 8,  name: "Anna",   age: 26, city: "Gyumri",  dept: "Support",     salary: 220000, isRemote: false, hiredAt: "2024-07-08", skills: ["Helpdesk","English"],  projects: 1,  performance: 78, managerId: 15, contacts: { email: "anna@acme.am",   phone: "098-000008" } },
    { id: 9,  name: "Karen",  age: 33, city: "Yerevan", dept: "Marketing",   salary: 480000, isRemote: true,  hiredAt: "2020-01-30", skills: ["SEO","Content"],       projects: 6,  performance: 83, managerId: 16, contacts: { email: "karen@acme.am",  phone: "091-000009" } },
    { id:10,  name: "Rita",   age: 28, city: "Hrazdan", dept: "Marketing",   salary: 370000, isRemote: false, hiredAt: "2021-03-25", skills: ["SMM","Copy"],          projects: 4,  performance: 72, managerId: 16, contacts: { email: "rita@acme.am",   phone: "093-000010" } },
    { id:11,  name: "Narek",  age: 39, city: "Yerevan", dept: "Engineering", salary: 1100000,isRemote: true,  hiredAt: "2015-10-02", skills: ["Architecture","JS"],   projects: 12, performance: 90, managerId: null, contacts: { email: "narek@acme.am", phone: "055-000011" } },
    { id:12,  name: "Mariam", age: 36, city: "Yerevan", dept: "Design",      salary: 700000, isRemote: true,  hiredAt: "2018-05-11", skills: ["UX","Figma"],          projects: 8,  performance: 93, managerId: null, contacts: { email: "mariam@acme.am",phone: "043-000012" } },
    { id:13,  name: "Artur",  age: 45, city: "Abovyan", dept: "HR",          salary: 520000, isRemote: false, hiredAt: "2016-08-22", skills: ["Org","Policy"],        projects: 5,  performance: 80, managerId: null, contacts: { email: "artur@acme.am", phone: "041-000013" } },
    { id:14,  name: "Ella",   age: 32, city: "Yerevan", dept: "Sales",       salary: 650000, isRemote: true,  hiredAt: "2019-02-14", skills: ["CRM","Pitch"],         projects: 10, performance: 87, managerId: null, contacts: { email: "ella@acme.am",  phone: "077-000014" } },
];

//
// Առաջադրանքներ (լիքը, առանց կրկնվելու).
//
// Ամեն մեկի մոտ նշում եմ կարճ հուշում, բայց լուծումը չեմ գրում, որ հետաքրքիր լինի ✌️
//
// Տաքացում — պարզ ֆիլտր/քարտեզ
// 1. Վերցրու բոլոր remote աշխատողների անունները։
// հուշում: filter(e => e.isRemote).map(e => e.name)
// 2. Վերցրու բոլոր Երևանից աշխատողների id-ները։
// հուշում: filter(city==="Yerevan") → map(id)
// 3. Գտի՛ր առաջինին, ում performance ≥ 90 է։
// հուշում: find
// 4. Վերադարձրու այն մարդկանց անունները, ովքեր ունեն “Figma” skill։
// հուշում: skills.includes("Figma")
// 5. Վերադարձրու Design բաժնի աշխատակիցների քանակը։
// հուշում: filter(dept==="Design").length
//
// ⸻
//
// Դասավորում / սեգմենտավորում
// 6. Դասավորի՛ր ըստ salary նվազման և վերցրու առաջին 3-ի անունները։
// հուշում: sort desc → slice(0,3) → map(name)
// 7. Դասավորի՛ր ըստ hiredAt (ավելի նորերը առաջինը) և վերցրու առաջինը։
// հուշում: new Date(hiredAt)
// 8. Խմբավորի՛ր ըստ dept և ստացիր օբյեկտ՝ { Engineering: [...], Design: [...], ... }։
// հուշում: reduce groupBy pattern
// 9. Խմբավորի՛ր ըստ isRemote և հաշվի՛ր քանակները՝ { remote: X, onsite: Y }։
// հուշում: reduce with counters
//     10. Վերցրու այն աշխատակիցների անունները, ում skills length ≥ 2։
// հուշում: e.skills.length >= 2
//
// ⸻
//
// Ագրեգացիա
// 11. Հաշվի՛ր բոլոր зарплата-ների գումարը։
// հուշում: reduce((s,e)=>s+e.salary,0)
// 12. Հաշվի՛ր միջին performance-ը ամբողջ ընկերությունում։
// հուշում: sum / employees.length
// 13. Հաշվի՛ր յուրաքանչյուր dept-ում միջին salary-ն (օբյեկտով)։
// հուշում: groupBy → mapValues(avg)
// 14. Գտի՛ր աշխատակից, ով ունի ամենաշատ projects։
// հուշում: reduce max by projects
// 15. Հաշվի՛ր քանի՞ քաղաքից ունենք աշխատող (unique count)։
// հուշում: new Set(map(city)).size
//
// ⸻
//
// Բուլյան ստուգումներ
// 16. Ճի՞շտ է, որ remote Engineering-ները բոլորը performance ≥ 70 ունեն։
// հուշում: filter → every
// 17. Կա՞ գոնե մեկը, ով Design-ում է և remote։
// հուշում: some
// 18. Ճի՞շտ է, որ Support բաժնում ոչ ոք salary > 300k չունի։
// հուշում: filter(dept==="Support").every(salary ≤ 300000)
// 19. Կա՞ աշխատակից, ում skills-ում կա “SQL” և dept-ը “Engineering” չէ։
// հուշում: some with compound condition
// 20. Բոլորը՞ ունեն managerId (այսինքն՝ ոչ null)։
// հուշում: every(e => e.managerId !== null)
//
// ⸻
//
// Տվյալների վերափոխումներ
// 21. Ստեղծի՛ր նոր զանգված՝ {name, email, phone} միայն։
// հուշում: map nested path e.contacts.email
// 22. Ստեղծի՛ր նոր զանգված՝ {name, seniority} որտեղ
// seniority = "junior" եթե age < 27, "mid" եթե 27–34, այլապես "senior"։
// հուշում: map + if/else or ternary chain
//     23. Ավելացրու դաշտ tenureYears՝ քանի տարի է աշխատում ընկերությունում։
// հուշում: (Date.now() - hiredAt) / msInYear
// 24. Ստեղծի՛ր օբյեկտ՝ { high: [...], low: [...] } ըստ performance շեմի 85։
// հուշում: երկու զանգված կամ reduce-split
// 25. Ստեղծի՛ր նոր զանգված՝ marketing emails (email + “ - promo”) միայն Marketing բաժնի համար։
// հուշում: filter → map(e => e.contacts.email + " - promo")
//
// ⸻
//
// “Relational” կանխիկ հարցեր (manager–employee կապ)
// 26. Վերադարձրու բոլորի անունները իրենց մենեջերի անունով։
// Օր."Aram → Narek"
// հուշում: find by managerId կամ նախ կառուցիր id→name map
// 27. Գտի՛ր մենեջերներ, ովքեր ղեկավարում են առնվազն 2 աշխատակից։
// հուշում: count by managerId → ids → map to names
// 28. Կառուցի՛ր օբյեկտ՝ { managerName: [employeeNames...] }։
// հուշում: groupBy managerId → map keys to names (null-երը բաց թող)
// 29. Ո՞ր մենեջերի թիմն ունի ամենաբարձր միջին performance։
// հուշում: group → avg → max
// 30. Ո՞ր մենեջերն ունի թիմ, որտեղ բոլորն են remote։
// հուշում: group → every(isRemote)
//
// ⸻
//
// Թվերով/տիպերով խաղալ
// 31. Վերցրու բոլոր գումարները դրամով՝ որպես ստրինգ “650,000 AMD” ձևաչափով։
// հուշում: toLocaleString("hy-AM") կամ custom format
// 32. Հաշվի՛ր median salary (ոչ միջին, այլ median)։
// հուշում: sort salaries → pick middle (կամ միջին երկուի)
// 33. Հաշվի՛ր trimmed mean performance՝ հանելով ամենացածր և ամենաբարձր 1 արժեքները։
// հուշում: sort → slice(1,-1) → avg
// 34.Հաշվի՛ր salary per project յուրաքանչյուրը՝ (salary / projects) և վերադարձրու TOP-5 էֆեկտիվ։
// հուշում: map → sort asc
//  35. Գտի՛ր աշխատակիցներ, ում phone-ը սկսվում է “09”-ով։
// հուշում: startsWith("09")
//
// ⸻
//
// Տարիք/քաղաք/հմտություններ կոմբո
//  36. Վերադարձրու ≤ 26 տարեկան աշխատողների անունները, եթե նրանք ունեն JS կամ SQL։
// հուշում: age <= 26 && (skills.includes("JS") || skills.includes("SQL"))
//  37. Հաշվի՛ր Vanadzor + Gyumri քաղաքների աշխատողների թվի հարաբերակցությունը ընդհանուր թվին (տոկոս)։
// հուշում: count/total * 100
//  38. Գտի՛ր բոլորին, ովքեր Engineering չեն, բայց ունեն ≥ 2 projects և performance ≥ 80։
// հուշում: compound filter
//  39. Վերադարձրու միայն այն Marketing/Design աշխատակիցներին, ում email-ը վերջանում է ”@acme.am”-ով (բոլորը պիտի լինեն, բայց ստուգիր)։
// հուշում: endsWith
//  40. Կառուցի՛ր skills frequency map՝ օրինակ { JS: 3, Figma: 4, ... }։
// հուշում: iterate all skills → reduce
//
// ⸻
//
// Bonus (քիչ ավելի հնարամիտ)
//  41. Գտի՛ր այն աշխատակցին, чей hiredAt ամսաթիվը ամենամոտն է “2022-01-01”-ին։
// հուշում: Math.abs(date - targetDate) → reduce min
//  42. Սահիկանի՛ր performance-ը՝ scale 0–100 → 1–5 աստղեր (կլորացրած) և վերադարձրու {name, stars}։
// հուշում: Math.round(perf/20)
//  43. Գտի՛ր remote աշխատողի անուն, որի salary-ն վերևից 3-րդ է։
// հուշում: filter remote → sort desc → at(2)
//  44. Կառուցի՛ր “org chart” անուղղակի ցուցակ՝ մենեջերները վերևում, նրանց մարդիկ՝ ներսում (կախված ծառ պետք չի, պարզապես nested arrays)։
// հուշում: group by managerId, հետո map մենեջերների վրա
//  45. Ստուգի՛ր արդյոք կա քաղաք, որի բոլոր աշխատողները performance ≥ 80 ունեն։
// հուշում: group by city → for each group every(perf ≥ 80)