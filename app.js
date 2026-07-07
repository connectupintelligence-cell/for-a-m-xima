// ==========================================
// ACADEMIA FORÇA MÁXIMA - APP ENGINE
// ==========================================

// 1. Generic Exercise Catalog (Default database)
const DEFAULT_EXERCISES = [
    // Chest
    {
        id: "ex-supino-reto",
        name: "Supino Reto com Barra",
        muscleGroup: "peito",
        target: "Peitoral Maior",
        defaultSets: 4,
        defaultReps: 10,
        defaultWeight: 50,
        description: "Deitado no banco reto, segure a barra com pegada média. Desça a barra de forma controlada até tocar de leve o peito e empurre-a de volta para a posição inicial.",
        tip: "Mantenha as escápulas retraídas e contraídas contra o banco.",
        svgType: "bench-press"
    },
    {
        id: "ex-supino-inclinado",
        name: "Supino Inclinado com Halteres",
        muscleGroup: "peito",
        target: "Peitoral Superior (Clavicular)",
        defaultSets: 4,
        defaultReps: 12,
        defaultWeight: 20,
        description: "Sente-se no banco inclinado (30º a 45º). Segure os halteres na altura do peito e empurre-os verticalmente para cima até estender os braços.",
        tip: "Evite colidir os halteres no topo do movimento.",
        svgType: "dumbbell-press"
    },
    {
        id: "ex-crossover",
        name: "Crossover no Pulley",
        muscleGroup: "peito",
        target: "Peitoral Inferior e Estriamento",
        defaultSets: 3,
        defaultReps: 15,
        defaultWeight: 15,
        description: "Posicione as polias na altura média/alta. Dê um passo à frente, incline levemente o tronco e puxe os cabos para frente e para baixo até as mãos se aproximarem.",
        tip: "Mantenha uma leve flexão nos cotovelos durante a execução.",
        svgType: "crossover"
    },
    
    // Back
    {
        id: "ex-puxada-pulley",
        name: "Puxada Aberta no Pulley",
        muscleGroup: "costas",
        target: "Dorsal (Grande Dorsal)",
        defaultSets: 4,
        defaultReps: 10,
        defaultWeight: 45,
        description: "Sente-se no aparelho, segure a barra com pegada aberta. Puxe a barra em direção à parte superior do peito, jogando os cotovelos para trás e para baixo.",
        tip: "Não incline o tronco excessivamente para trás durante a puxada.",
        svgType: "lat-pulldown"
    },
    {
        id: "ex-remada-curvada",
        name: "Remada Curvada com Barra",
        muscleGroup: "costas",
        target: "Miolo das Costas (Rombóides e Trapézio)",
        defaultSets: 4,
        defaultReps: 8,
        defaultWeight: 40,
        description: "Incline o tronco à frente mantendo a coluna alinhada. Segure a barra e puxe-a em direção à linha do abdômen, mantendo os cotovelos próximos ao corpo.",
        tip: "Mantenha o abdômen altamente contraído para proteger a lombar.",
        svgType: "row"
    },
    
    // Legs
    {
        id: "ex-agachamento",
        name: "Agachamento Livre com Barra",
        muscleGroup: "pernas",
        target: "Quadríceps e Glúteos",
        defaultSets: 4,
        defaultReps: 8,
        defaultWeight: 60,
        description: "Apoie a barra nos trapézios. Afaste as pernas na largura dos ombros. Agache jogando o quadril para trás como se fosse sentar em uma cadeira.",
        tip: "Não deixe os joelhos colapsarem para dentro (valgo dinâmico).",
        svgType: "squat"
    },
    {
        id: "ex-legpress",
        name: "Leg Press 45º",
        muscleGroup: "pernas",
        target: "Quadríceps Geral",
        defaultSets: 4,
        defaultReps: 12,
        defaultWeight: 140,
        description: "Posicione os pés na plataforma na largura dos ombros. Destrave o aparelho e desça a plataforma de forma controlada até formar um ângulo de 90º nos joelhos.",
        tip: "Nunca estenda completamente os joelhos no topo do movimento (bloqueio articular).",
        svgType: "legpress"
    },
    {
        id: "ex-cadeira-extensora",
        name: "Cadeira Extensora",
        muscleGroup: "pernas",
        target: "Quadríceps (Isolado)",
        defaultSets: 3,
        defaultReps: 15,
        defaultWeight: 35,
        description: "Sente-se no aparelho apoiando bem as costas. Ajuste o rolo de espuma sobre os tornozelos. Estenda os joelhos até a contração máxima e retorne devagar.",
        tip: "Mantenha o quadril firme no banco sem flutuar.",
        svgType: "extension"
    },

    // Shoulders
    {
        id: "ex-desenvolvimento",
        name: "Desenvolvimento com Halteres",
        muscleGroup: "ombros",
        target: "Deltoide Anterior",
        defaultSets: 4,
        defaultReps: 10,
        defaultWeight: 14,
        description: "Sentado em um banco reto de 90 graus, eleve os halteres a partir da altura das orelhas até esticar os braços acima da cabeça.",
        tip: "Mantenha os cotovelos ligeiramente à frente do corpo.",
        svgType: "shoulder-press"
    },
    {
        id: "ex-elevacao-lateral",
        name: "Elevação Lateral com Halter",
        muscleGroup: "ombros",
        target: "Deltoide Lateral",
        defaultSets: 3,
        defaultReps: 12,
        defaultWeight: 8,
        description: "Em pé, segure os halteres ao lado do corpo. Eleve os braços lateralmente até a altura dos ombros, com uma leve flexão nos cotovelos.",
        tip: "Pense em empurrar as mãos para os lados, e não para cima.",
        svgType: "lateral-raise"
    },

    // Arms
    {
        id: "ex-rosca-direta",
        name: "Rosca Direta com Barra W",
        muscleGroup: "bracos",
        target: "Bíceps Braquial",
        defaultSets: 3,
        defaultReps: 10,
        defaultWeight: 20,
        description: "Em pé, segure a barra W com as palmas voltadas para cima. Flexione os cotovelos trazendo a barra em direção ao peito sem mover os ombros.",
        tip: "Evite usar o balanço do corpo (roubo) para levantar o peso.",
        svgType: "bicep-curl"
    },
    {
        id: "ex-triceps-pulley",
        name: "Tríceps Pulley (Polia)",
        muscleGroup: "bracos",
        target: "Tríceps (Porção Lateral e Medial)",
        defaultSets: 4,
        defaultReps: 12,
        defaultWeight: 25,
        description: "De frente para o cabo de polia alta, segure a barra reta/V. Empurre a barra para baixo até estender totalmente os braços, mantendo os cotovelos colados nas costelas.",
        tip: "Mantenha apenas os antebraços em movimento.",
        svgType: "tricep-pushdown"
    },

    // Core
    {
        id: "ex-abdominal",
        name: "Abdominal Supra Solo",
        muscleGroup: "abdomen",
        target: "Reto Abdominal (Superior)",
        defaultSets: 3,
        defaultReps: 20,
        defaultWeight: 0,
        description: "Deitado de costas, joelhos dobrados e pés no chão. Coloque as mãos atrás da cabeça e tire os ombros do chão contraindo o abdômen.",
        tip: "Não puxe o pescoço com as mãos. Force o abdômen.",
        svgType: "crunch"
    },
    {
        id: "ex-prancha",
        name: "Prancha Isométrica",
        muscleGroup: "abdomen",
        target: "Core Geral / Estabilidade",
        defaultSets: 3,
        defaultReps: 45, // em segundos
        defaultWeight: 0,
        description: "Apoie os antebraços e as pontas dos pés no solo. Mantenha o corpo perfeitamente alinhado em linha reta da cabeça aos calcanhares.",
        tip: "Não deixe o quadril cair ou levantar excessivamente.",
        svgType: "plank"
    }
];

// 2. Default Student Profiles (Preloaded Database)
const INITIAL_STUDENTS = [
    {
        id: "student-felipe",
        name: "Felipe Silva",
        phone: "(12) 99754-3211",
        email: "felipe.silva@gmail.com",
        onboardingComplete: true,
        weight: 78.0,
        height: 175,
        goal: "hipertrofia",
        frequency: 3,
        limitations: "Nenhuma limitação física relatada.",
        conditions: "Nenhum histórico médico relevante.",
        workoutOrigin: "teacher", // teacher or custom
        workoutSheetDate: "2026-06-20", // Last updated date
        activePlan: "mensal",
        paymentStatus: "pago", // pago, pendente
        nextBilling: "2026-08-03", // 1 month from now
        paymentMethod: "PIX",
        workouts: {
            "A": [
                { id: "ex-supino-reto", sets: 4, reps: 10, weight: 50, done: false },
                { id: "ex-supino-inclinado", sets: 4, reps: 12, weight: 20, done: false },
                { id: "ex-triceps-pulley", sets: 4, reps: 12, weight: 25, done: false }
            ],
            "B": [
                { id: "ex-puxada-pulley", sets: 4, reps: 10, weight: 45, done: false },
                { id: "ex-remada-curvada", sets: 4, reps: 8, weight: 40, done: false },
                { id: "ex-rosca-direta", sets: 3, reps: 10, weight: 20, done: false }
            ],
            "C": [
                { id: "ex-agachamento", sets: 4, reps: 8, weight: 60, done: false },
                { id: "ex-legpress", sets: 4, reps: 12, weight: 140, done: false },
                { id: "ex-elevacao-lateral", sets: 3, reps: 12, weight: 8, done: false }
            ]
        },
        streak: [false, true, true, false, false, false, false] // Sun - Sat checked-in status for this week
    },
    {
        id: "student-joao",
        name: "João Carlos",
        phone: "(12) 99122-3844",
        email: "joao.carlos@outlook.com",
        onboardingComplete: true,
        weight: 82.5,
        height: 180,
        goal: "condicionamento",
        frequency: 4,
        limitations: "Leve dor no ombro esquerdo ao realizar supino com barra.",
        conditions: "Nenhuma condição crônica.",
        workoutOrigin: "teacher",
        workoutSheetDate: "2026-03-01", // OUTDATED! (>3 months / 90 days ago)
        activePlan: "mensal",
        paymentStatus: "pago",
        nextBilling: "2026-07-10",
        paymentMethod: "Cartão de Crédito",
        workouts: {
            "A": [
                { id: "ex-supino-inclinado", sets: 4, reps: 12, weight: 16, done: false }, // lighter dumbbells due to shoulder
                { id: "ex-elevacao-lateral", sets: 4, reps: 12, weight: 6, done: false },
                { id: "ex-abdominal", sets: 3, reps: 20, weight: 0, done: false }
            ],
            "B": [
                { id: "ex-puxada-pulley", sets: 4, reps: 10, weight: 40, done: false },
                { id: "ex-prancha", sets: 3, reps: 45, weight: 0, done: false }
            ]
        },
        streak: [false, false, false, false, false, false, false]
    },
    {
        id: "student-mariana",
        name: "Mariana Costa",
        phone: "(12) 98845-0922",
        email: "mariana.costa@hotmail.com",
        onboardingComplete: true,
        weight: 64.2,
        height: 162,
        goal: "emagrecimento",
        frequency: 5,
        limitations: "Hérnia de disco lombar (L4-L5). Evitar agachamentos pesados ou flexões bruscas de coluna.",
        conditions: "Nenhuma.",
        workoutOrigin: "teacher",
        workoutSheetDate: "2026-05-10",
        activePlan: "semestral",
        paymentStatus: "pendente", // PENDING / OVERDUE!
        nextBilling: "2026-07-01",
        paymentMethod: "PIX",
        workouts: {
            "A": [
                { id: "ex-legpress", sets: 3, reps: 15, weight: 80, done: false }, // Legpress has back support
                { id: "ex-cadeira-extensora", sets: 4, reps: 15, weight: 25, done: false },
                { id: "ex-prancha", sets: 3, reps: 45, weight: 0, done: false }
            ],
            "B": [
                { id: "ex-puxada-pulley", sets: 4, reps: 12, weight: 30, done: false },
                { id: "ex-triceps-pulley", sets: 3, reps: 12, weight: 15, done: false }
            ]
        },
        streak: [false, true, false, true, false, false, false]
    },
    {
        id: "student-lucas",
        name: "Lucas Martins",
        phone: "(12) 99654-7878",
        email: "lucas.martins@yahoo.com",
        onboardingComplete: false, // NEW STUDENT
        weight: 0,
        height: 0,
        goal: "",
        frequency: 3,
        limitations: "",
        conditions: "",
        workoutOrigin: "custom",
        workoutSheetDate: "2026-07-03",
        activePlan: "mensal",
        paymentStatus: "pendente",
        nextBilling: "2026-07-03",
        paymentMethod: "PIX",
        workouts: {
            "A": []
        },
        streak: [false, false, false, false, false, false, false]
    }
];

// 3. Application State Variable
let state = {
    role: "aluno", // active role: aluno, professor, admin
    currentStudentId: "student-felipe", // standard logged student
    students: [],
    exercises: [],
    selectedPlanId: "mensal",
    selectedPlanPrice: 99.90,
    selectedPaymentMethod: "pix",
    editingStudentId: null,
    editingActiveTab: "A"
};

// ==========================================
// SVGs FOR DEMONSTRATIONS (Generated procedurally)
// ==========================================
const SVG_TEMPLATES = {
    "bench-press": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Bench -->
            <line x1="40" y1="130" x2="160" y2="130" stroke="#555" stroke-width="8" stroke-linecap="round" />
            <line x1="60" y1="130" x2="60" y2="170" stroke="#444" stroke-width="6" />
            <line x1="140" y1="130" x2="140" y2="170" stroke="#444" stroke-width="6" />
            <!-- Bar Support -->
            <line x1="100" y1="110" x2="100" y2="130" stroke="#333" stroke-width="4" />
            <line x1="85" y1="110" x2="115" y2="110" stroke="#333" stroke-width="3" />
            <!-- Human Model -->
            <circle cx="100" cy="115" r="10" fill="#fff" />
            <line x1="100" y1="125" x2="100" y2="130" stroke="#fff" stroke-width="6" />
            <!-- Moving Barbell -->
            <g class="anim-barbell-bench">
                <line x1="50" y1="95" x2="150" y2="95" stroke="#ff2e3b" stroke-width="5" stroke-linecap="round" />
                <rect x="40" y="85" width="10" height="20" rx="2" fill="#fff" />
                <rect x="150" y="85" width="10" height="20" rx="2" fill="#fff" />
            </g>
        </svg>
    `,
    "dumbbell-press": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Incline Bench -->
            <line x1="60" y1="150" x2="140" y2="100" stroke="#555" stroke-width="8" stroke-linecap="round" />
            <line x1="80" y1="140" x2="80" y2="170" stroke="#444" stroke-width="6" />
            <line x1="120" y1="115" x2="120" y2="170" stroke="#444" stroke-width="6" />
            <!-- Head & Torso -->
            <circle cx="125" cy="85" r="10" fill="#fff" />
            <line x1="117" y1="93" x2="85" y2="135" stroke="#fff" stroke-width="6" />
            <!-- Dumbbells -->
            <g class="anim-dumbbell-incline">
                <line x1="100" y1="70" x2="120" y2="70" stroke="#aaa" stroke-width="3" />
                <circle cx="100" cy="70" r="6" fill="#ff2e3b" />
                <circle cx="120" cy="70" r="6" fill="#ff2e3b" />
            </g>
        </svg>
    `,
    "crossover": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Pulley Pillars -->
            <line x1="30" y1="40" x2="30" y2="170" stroke="#444" stroke-width="4" />
            <line x1="170" y1="40" x2="170" y2="170" stroke="#444" stroke-width="4" />
            <line x1="30" y1="40" x2="170" y2="40" stroke="#333" stroke-width="4" />
            <!-- Human model -->
            <circle cx="100" cy="85" r="10" fill="#fff" />
            <line x1="100" y1="95" x2="100" y2="135" stroke="#fff" stroke-width="5" />
            <line x1="100" y1="135" x2="85" y2="170" stroke="#fff" stroke-width="4" />
            <line x1="100" y1="135" x2="115" y2="170" stroke="#fff" stroke-width="4" />
            <!-- Cables moving -->
            <g class="anim-cables">
                <line x1="30" y1="50" x2="80" y2="100" stroke="#888" stroke-width="2" />
                <line x1="170" y1="50" x2="120" y2="100" stroke="#888" stroke-width="2" />
                <circle cx="80" cy="100" r="5" fill="#ff2e3b" />
                <circle cx="120" cy="100" r="5" fill="#ff2e3b" />
            </g>
        </svg>
    `,
    "lat-pulldown": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="100" y1="35" x2="100" y2="170" stroke="#444" stroke-width="4" />
            <line x1="70" y1="150" x2="130" y2="150" stroke="#555" stroke-width="8" />
            <!-- Human seated -->
            <circle cx="100" cy="90" r="10" fill="#fff" />
            <line x1="100" y1="100" x2="100" y2="140" stroke="#fff" stroke-width="6" />
            <!-- Bar pulling -->
            <g class="anim-lat">
                <line x1="60" y1="55" x2="140" y2="55" stroke="#ff2e3b" stroke-width="5" stroke-linecap="round" />
                <line x1="100" y1="35" x2="100" y2="55" stroke="#888" stroke-width="2" />
            </g>
        </svg>
    `,
    "row": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="30" y1="170" x2="170" y2="170" stroke="#444" stroke-width="3" />
            <!-- Bent over stick figure -->
            <circle cx="90" cy="95" r="10" fill="#fff" />
            <line x1="90" y1="105" x2="120" y2="135" stroke="#fff" stroke-width="5" />
            <line x1="120" y1="135" x2="100" y2="170" stroke="#fff" stroke-width="4" />
            <!-- Pulling weight -->
            <g class="anim-row">
                <line x1="75" y1="120" x2="115" y2="120" stroke="#ff2e3b" stroke-width="4" />
                <circle cx="75" cy="120" r="6" fill="#fff" />
                <circle cx="115" cy="120" r="6" fill="#fff" />
            </g>
        </svg>
    `,
    "squat": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="30" y1="170" x2="170" y2="170" stroke="#444" stroke-width="3" />
            <!-- Squatting stick figure -->
            <g class="anim-squat">
                <circle cx="100" cy="95" r="10" fill="#fff" />
                <line x1="100" y1="105" x2="100" y2="135" stroke="#fff" stroke-width="5" />
                <line x1="100" y1="135" x2="90" y2="150" stroke="#fff" stroke-width="4" />
                <line x1="90" y1="150" x2="100" y2="170" stroke="#fff" stroke-width="4" />
                <!-- Barbell on shoulders -->
                <line x1="60" y1="105" x2="140" y2="105" stroke="#ff2e3b" stroke-width="5" stroke-linecap="round" />
                <rect x="50" y="95" width="10" height="20" fill="#fff" />
                <rect x="140" y="95" width="10" height="20" fill="#fff" />
            </g>
        </svg>
    `,
    "legpress": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="50" y1="150" x2="150" y2="100" stroke="#444" stroke-width="6" />
            <!-- Seated body -->
            <line x1="60" y1="140" x2="95" y2="150" stroke="#fff" stroke-width="5" />
            <circle cx="50" cy="115" r="10" fill="#fff" />
            <!-- Moving sled -->
            <g class="anim-legpress">
                <line x1="110" y1="110" x2="130" y2="90" stroke="#ff2e3b" stroke-width="6" />
                <rect x="125" y="80" width="10" height="20" transform="rotate(22 125 80)" fill="#fff" />
            </g>
        </svg>
    `,
    "extension": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="80" y1="80" x2="80" y2="150" stroke="#444" stroke-width="6" />
            <line x1="80" y1="150" x2="130" y2="150" stroke="#444" stroke-width="4" />
            <!-- Human thigh & knee extension -->
            <circle cx="80" cy="75" r="10" fill="#fff" />
            <line x1="80" y1="85" x2="105" y2="115" stroke="#fff" stroke-width="5" />
            <g class="anim-extend">
                <line x1="105" y1="115" x2="130" y2="130" stroke="#ff2e3b" stroke-width="5" />
            </g>
        </svg>
    `,
    "shoulder-press": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Seat -->
            <line x1="80" y1="100" x2="80" y2="170" stroke="#555" stroke-width="6" />
            <line x1="60" y1="160" x2="120" y2="160" stroke="#555" stroke-width="6" />
            <!-- Seated stick figure -->
            <circle cx="100" cy="90" r="10" fill="#fff" />
            <line x1="100" y1="100" x2="100" y2="140" stroke="#fff" stroke-width="5" />
            <!-- Pressing weights -->
            <g class="anim-shoulder">
                <line x1="75" y1="55" x2="125" y2="55" stroke="#ff2e3b" stroke-width="4" stroke-linecap="round" />
                <circle cx="75" cy="55" r="5" fill="#fff" />
                <circle cx="125" cy="55" r="5" fill="#fff" />
            </g>
        </svg>
    `,
    "lateral-raise": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Standing body -->
            <circle cx="100" cy="70" r="10" fill="#fff" />
            <line x1="100" y1="80" x2="100" y2="140" stroke="#fff" stroke-width="5" />
            <line x1="90" y1="140" x2="90" y2="175" stroke="#fff" stroke-width="4" />
            <line x1="110" y1="140" x2="110" y2="175" stroke="#fff" stroke-width="4" />
            <!-- Raising arms -->
            <g class="anim-lateral-left">
                <line x1="100" y1="85" x2="60" y2="85" stroke="#ff2e3b" stroke-width="4" />
                <circle cx="60" cy="85" r="5" fill="#fff" />
            </g>
            <g class="anim-lateral-right">
                <line x1="100" y1="85" x2="140" y2="85" stroke="#ff2e3b" stroke-width="4" />
                <circle cx="140" cy="85" r="5" fill="#fff" />
            </g>
        </svg>
    `,
    "bicep-curl": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Body -->
            <circle cx="100" cy="70" r="10" fill="#fff" />
            <line x1="100" y1="80" x2="100" y2="145" stroke="#fff" stroke-width="5" />
            <!-- Curled arm -->
            <line x1="100" y1="90" x2="115" y2="110" stroke="#fff" stroke-width="4" />
            <g class="anim-curl">
                <line x1="115" y1="110" x2="105" y2="90" stroke="#ff2e3b" stroke-width="4" />
                <circle cx="105" cy="90" r="6" fill="#fff" />
            </g>
        </svg>
    `,
    "tricep-pushdown": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <!-- Standing body -->
            <circle cx="95" cy="70" r="10" fill="#fff" />
            <line x1="95" y1="80" x2="95" y2="140" stroke="#fff" stroke-width="5" />
            <!-- Arm pushing down -->
            <line x1="95" y1="85" x2="110" y2="105" stroke="#fff" stroke-width="4" />
            <g class="anim-pushdown">
                <line x1="110" y1="105" x2="115" y2="135" stroke="#ff2e3b" stroke-width="4" />
                <circle cx="115" cy="135" r="5" fill="#fff" />
            </g>
        </svg>
    `,
    "crunch": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="30" y1="150" x2="170" y2="150" stroke="#444" stroke-width="4" />
            <!-- Crunching figure -->
            <line x1="120" y1="150" x2="150" y2="120" stroke="#fff" stroke-width="4" />
            <line x1="150" y1="120" x2="120" y2="110" stroke="#fff" stroke-width="4" />
            <g class="anim-crunch">
                <line x1="120" y1="150" x2="70" y2="140" stroke="#fff" stroke-width="5" />
                <circle cx="60" cy="120" r="10" fill="#ff2e3b" />
            </g>
        </svg>
    `,
    "plank": `
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <rect width="200" height="200" fill="#1b1b1f" rx="12" />
            <line x1="30" y1="160" x2="170" y2="160" stroke="#444" stroke-width="4" />
            <!-- Perfectly straight body holding plank -->
            <g class="anim-plank">
                <circle cx="145" cy="110" r="10" fill="#ff2e3b" />
                <line x1="135" y1="115" x2="50" y2="135" stroke="#fff" stroke-width="5" />
                <!-- Support arms -->
                <line x1="125" y1="118" x2="125" y2="160" stroke="#fff" stroke-width="4" />
                <!-- Feet support -->
                <line x1="50" y1="135" x2="50" y2="160" stroke="#fff" stroke-width="4" />
            </g>
        </svg>
    `
};

// ==========================================
// CORE DATABASE INITIALIZATION
// ==========================================
function initDb() {
    // Check if exercises are already in localStorage, otherwise set default
    if (!localStorage.getItem("forca_maxima_exercises")) {
        localStorage.setItem("forca_maxima_exercises", JSON.stringify(DEFAULT_EXERCISES));
    }
    
    // Check if students are already in localStorage, otherwise set default
    if (!localStorage.getItem("forca_maxima_students")) {
        localStorage.setItem("forca_maxima_students", JSON.stringify(INITIAL_STUDENTS));
    }

    state.exercises = JSON.parse(localStorage.getItem("forca_maxima_exercises"));
    state.students = JSON.parse(localStorage.getItem("forca_maxima_students"));

    // Migrate student workouts if in old schema
    let migrated = false;
    state.students.forEach(student => {
        Object.keys(student.workouts).forEach(tab => {
            student.workouts[tab].forEach(ex => {
                if (ex.hasOwnProperty("sets") && !ex.hasOwnProperty("setsList")) {
                    const setsCount = ex.sets || 3;
                    ex.setsList = [];
                    for (let i = 0; i < setsCount; i++) {
                        ex.setsList.push({
                            reps: ex.reps || 10,
                            weight: ex.weight || 0,
                            done: ex.done || false
                        });
                    }
                    delete ex.sets;
                    delete ex.reps;
                    delete ex.weight;
                    migrated = true;
                }
            });
        });
    });
    if (migrated) {
        saveDb();
    }
}

function saveDb() {
    localStorage.setItem("forca_maxima_students", JSON.stringify(state.students));
}

// ==========================================
// APP START & VIEW ROUTING
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initDb();
    
    // Check if there is a query param or state for role, default to Aluno
    switchRole(state.role);
    
    // Populate forms with default student data
    loadStudentFormOnboarding();
});

// Switch role in Simulator Bar
function switchRole(role) {
    state.role = role;
    
    // Update visual active classes in simulator bar
    document.querySelectorAll(".role-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-role") === role) {
            btn.classList.add("active");
        }
    });

    // Update active nav links header group
    document.querySelectorAll(".nav-group").forEach(group => {
        group.classList.remove("active");
    });

    const userBadgeEl = document.getElementById("current-user-badge");
    const userNameEl = document.getElementById("current-user-name");

    if (role === "aluno") {
        document.getElementById("nav-aluno").classList.add("active");
        
        // Find active student name
        const student = state.students.find(s => s.id === state.currentStudentId);
        userNameEl.textContent = student ? student.name : "Aluno de Teste";
        
        renderAlunoDashboard();
        renderAlunoTreinos();
        loadStudentFormOnboarding();
        scrollToView("aluno-dashboard");
    } else if (role === "professor") {
        document.getElementById("nav-professor").classList.add("active");
        userNameEl.textContent = "Prof. Marcos Lima";
        
        renderProfessorDashboard();
        renderStudentTable();
        scrollToView("prof-dashboard");
    } else if (role === "admin") {
        document.getElementById("nav-admin").classList.add("active");
        userNameEl.textContent = "Diretor ADM";
        
        renderAdminDashboard();
        renderAdminFinanceTable();
        // The admin also shares the student list for editing
        renderStudentTable();
        scrollToView("admin-dashboard");
    }
}

// Single Page Application Navigation (View toggling)
function scrollToView(viewId) {
    // Hide all subviews
    document.querySelectorAll(".app-view").forEach(view => {
        view.classList.remove("active");
    });
    
    // Show target view
    const targetEl = document.getElementById(viewId);
    if (targetEl) {
        targetEl.classList.add("active");
        
        // Custom updates when opening specific views
        if (viewId === "aluno-dashboard") {
            const student = state.students.find(s => s.id === state.currentStudentId);
            const alertCard = document.getElementById("registration-alert");
            if (student && !student.onboardingComplete) {
                alertCard.classList.remove("hidden");
            } else {
                alertCard.classList.add("hidden");
            }
        }
    }

    // Remove active class from all links of active role
    const activeNavGroup = document.querySelector(".nav-group.active");
    if (activeNavGroup) {
        activeNavGroup.querySelectorAll(".nav-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + viewId) {
                link.classList.add("active");
            }
        });
    }
}

// ==========================================
// ALUNO ENVIRONMENT LOGIC
// ==========================================

function renderAlunoDashboard() {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    // 1. Check if onboarding form is completed
    const alertCard = document.getElementById("registration-alert");
    if (!student.onboardingComplete) {
        alertCard.classList.remove("hidden");
    } else {
        alertCard.classList.add("hidden");
    }

    // 2. Fill basic details
    document.getElementById("dash-student-name").textContent = student.name;
    document.getElementById("dash-stat-weight").textContent = student.weight > 0 ? `${student.weight} kg` : "--";
    
    // Capitalize goal name
    let goalText = "Nenhum";
    if (student.goal === "hipertrofia") goalText = "Hipertrofia";
    else if (student.goal === "emagrecimento") goalText = "Emagrecimento";
    else if (student.goal === "condicionamento") goalText = "Resistência";
    else if (student.goal === "saude") goalText = "Qualidade Vida";
    document.getElementById("dash-stat-goal").textContent = goalText;

    document.getElementById("dash-stat-days").textContent = `${student.frequency}x/sem`;

    // Payment Status badge
    const statusBadge = document.getElementById("dash-payment-status");
    statusBadge.className = "badge"; // reset
    if (student.paymentStatus === "pago") {
        statusBadge.classList.add("badge-success");
        statusBadge.innerHTML = `<i class="fa-solid fa-check-double"></i> Ativo`;
    } else {
        statusBadge.classList.add("badge-expired");
        statusBadge.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Pendente`;
    }

    // Plans card info
    let planText = "Mensal";
    let priceText = "99,90";
    if (student.activePlan === "semestral") {
        planText = "Semestral";
        priceText = "83,16";
    } else if (student.activePlan === "anual") {
        planText = "Anual";
        priceText = "74,91";
    }
    document.getElementById("dash-plan-name").textContent = planText;
    document.getElementById("dash-plan-price").textContent = priceText;
    document.getElementById("dash-billing-date").textContent = formatDate(student.nextBilling);

    // 3. Render Streak Indicators
    const daysContainer = document.querySelector(".week-days-container");
    daysContainer.innerHTML = "";
    const weekdayLetters = ["D", "S", "T", "Q", "Q", "S", "S"];
    
    student.streak.forEach((checked, idx) => {
        const dayDiv = document.createElement("div");
        dayDiv.className = `week-day ${checked ? "done" : ""}`;
        dayDiv.id = `day-${idx}`;
        dayDiv.innerHTML = `
            <span>${weekdayLetters[idx]}</span>
            <div class="circle" onclick="toggleStreakDay(${idx})"><i class="fa-solid fa-check"></i></div>
        `;
        daysContainer.appendChild(dayDiv);
    });

    // 4. Update Workout Progress Bar
    updateWorkoutProgressBar(student);
}

function toggleStreakDay(idx) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;
    
    student.streak[idx] = !student.streak[idx];
    saveDb();
    renderAlunoDashboard();
    
    if (student.streak[idx]) {
        showToast("Dia de treino registrado com sucesso! 💪");
    }
}

function updateWorkoutProgressBar(student) {
    // Calculate percentage of checked exercises on the current active sheet tab
    // Let's find out how many exercises are checked today
    const currentTab = getActiveWorkoutTab();
    const workoutList = student.workouts[currentTab] || [];
    
    const total = workoutList.length;
    const completed = workoutList.filter(ex => ex.done).length;
    
    const progressBar = document.getElementById("streak-progress-bar");
    const progressText = document.getElementById("streak-progress-text");
    
    if (total === 0) {
        progressBar.style.width = "0%";
        progressText.textContent = "Nenhum exercício na ficha de hoje.";
    } else {
        const percent = Math.round((completed / total) * 100);
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `${completed} de ${total} concluídos (${percent}%)`;
    }
}

// Get active workout tab letter (A, B, C)
function getActiveWorkoutTab() {
    const tabsContainer = document.getElementById("workout-tabs-container");
    const activeBtn = tabsContainer.querySelector(".tab-btn.active");
    if (activeBtn) {
        return activeBtn.getAttribute("data-tab");
    }
    return "A"; // default
}

function renderAlunoTreinos() {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    // Render Origin Toggles
    const teacherBtn = document.getElementById("btn-origin-teacher");
    const customBtn = document.getElementById("btn-origin-custom");
    if (student.workoutOrigin === "teacher") {
        teacherBtn.classList.add("active");
        customBtn.classList.remove("active");
        document.getElementById("workout-creator-info").innerHTML = `<i class="fa-solid fa-user-tie text-primary"></i> Montado pelo Professor: Marcos Lima (Atualizado em ${formatDate(student.workoutSheetDate)})`;
    } else {
        teacherBtn.classList.remove("active");
        customBtn.classList.add("active");
        document.getElementById("workout-creator-info").innerHTML = `<i class="fa-solid fa-hand-holding-hand text-secondary"></i> Ficha customizada pelo Aluno (Autônomo)`;
    }

    // Render Workout Sheet tabs
    const tabsContainer = document.getElementById("workout-tabs-container");
    tabsContainer.innerHTML = "";
    
    const workoutKeys = Object.keys(student.workouts);
    if (workoutKeys.length === 0) {
        // Init default empty workouts if none
        student.workouts = { "A": [] };
        saveDb();
    }

    Object.keys(student.workouts).forEach((tab, index) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${index === 0 ? "active" : ""}`;
        btn.setAttribute("data-tab", tab);
        btn.textContent = `Treino ${tab}`;
        btn.onclick = () => {
            tabsContainer.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            loadStudentExercisesList(tab);
        };
        tabsContainer.appendChild(btn);
    });

    // Load first tab exercises
    const firstTab = Object.keys(student.workouts)[0] || "A";
    loadStudentExercisesList(firstTab);
}

function loadStudentExercisesList(tabLetter) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    const exercisesList = student.workouts[tabLetter] || [];
    
    const container = document.getElementById("student-exercise-list");
    container.innerHTML = "";

    if (exercisesList.length === 0) {
        container.innerHTML = `
            <div class="card text-center p-8 text-muted">
                <i class="fa-solid fa-circle-exclamation text-2xl mb-2"></i>
                <p>Nenhum exercício cadastrado no Treino ${tabLetter} ainda.</p>
                <button class="btn btn-outline btn-sm mt-4" onclick="openExerciseCatalog()"><i class="fa-solid fa-plus"></i> Adicionar Exercício</button>
            </div>
        `;
        updateWorkoutProgressBar(student);
        return;
    }

    exercisesList.forEach((workoutEx, index) => {
        const details = state.exercises.find(e => e.id === workoutEx.id);
        if (!details) return;

        // Ensure setsList exists (robust migration fallback)
        if (!workoutEx.setsList) {
            workoutEx.setsList = [];
            const count = workoutEx.sets || 3;
            for (let i = 0; i < count; i++) {
                workoutEx.setsList.push({ reps: workoutEx.reps || 10, weight: workoutEx.weight || 10, done: false });
            }
            delete workoutEx.sets;
        }

        const isCompleted = workoutEx.setsList.every(s => s.done);
        workoutEx.done = isCompleted;

        const card = document.createElement("div");
        card.className = `exercise-card ${isCompleted ? "done-checked" : ""}`;
        
        // Render either visual SVG or Custom Uploaded Photo
        let visualContent = "";
        if (workoutEx.isCustom && workoutEx.customPhoto) {
            visualContent = `<img src="${workoutEx.customPhoto}" alt="${details.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">`;
        } else {
            visualContent = SVG_TEMPLATES[details.svgType] || "";
        }

        card.innerHTML = `
            <!-- Left: Visualization preview -->
            <div class="exercise-image-placeholder" onclick="${workoutEx.isCustom && workoutEx.customPhoto ? '' : `openExerciseDemo('${details.id}')`}">
                ${visualContent}
                ${workoutEx.isCustom && workoutEx.customPhoto ? '' : `<div class="play-overlay"><i class="fa-solid fa-play"></i></div>`}
            </div>

            <!-- Middle: Text details -->
            <div class="exercise-info">
                <h3 class="exercise-name">${details.name}</h3>
                <div class="exercise-meta">
                    <span><i class="fa-solid fa-bullseye"></i> Alvo: <strong>${details.target}</strong></span>
                    <span><i class="fa-solid fa-arrows-spin"></i> Recomendado: <strong>${workoutEx.setsList.length}x${workoutEx.setsList[0]?.reps || 10} (${workoutEx.setsList[0]?.weight || 0}kg)</strong></span>
                </div>

                <!-- Set-by-Set Logging Rows -->
                <div class="exercise-sets-tracker">
                    ${workoutEx.setsList.map((set, setIdx) => `
                        <div class="set-row ${set.done ? 'checked-done' : ''}">
                            <span class="set-label">Série ${setIdx + 1}</span>
                            
                            <div class="set-inputs">
                                <div class="set-input-group">
                                    <label>Carga</label>
                                    <input type="number" value="${set.weight}" onchange="updateSetWeight('${tabLetter}', ${index}, ${setIdx}, this.value)"> kg
                                </div>
                                <div class="set-input-group">
                                    <label>Reps</label>
                                    <input type="number" value="${set.reps}" onchange="updateSetReps('${tabLetter}', ${index}, ${setIdx}, this.value)">
                                </div>
                            </div>

                            <div class="set-checkbox-wrapper">
                                <label>
                                    <input type="checkbox" class="set-checkbox-input" ${set.done ? 'checked' : ''} onchange="toggleSetCheck('${tabLetter}', ${index}, ${setIdx}, this.checked)">
                                    <span class="set-checkmark"><i class="fa-solid fa-check"></i></span>
                                </label>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Quick Delete if Autonomous mode -->
            ${student.workoutOrigin === "custom" ? `
                <button class="btn-icon-danger" style="align-self: flex-start; margin-top: 5px;" onclick="removeExerciseFromCustomWorkout('${tabLetter}', ${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            ` : ""}
        `;
        container.appendChild(card);
    });

    updateWorkoutProgressBar(student);
}

function setWorkoutOrigin(origin) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.workoutOrigin = origin;
    student.workoutSheetDate = "2026-07-03"; // updated date
    saveDb();
    
    renderAlunoTreinos();
    showToast(`Modo de Treino alterado para: ${origin === 'teacher' ? 'Professor' : 'Autônomo'}`);
}

function removeExerciseFromCustomWorkout(tabLetter, index) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.workouts[tabLetter].splice(index, 1);
    saveDb();
    loadStudentExercisesList(tabLetter);
    showToast("Exercício removido do seu treino autônomo.");
}

// Onboarding Questionnaire handling
function loadStudentFormOnboarding() {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    if (!student.onboardingComplete) return; // Keep placeholders empty

    document.getElementById("personal-name").value = student.name;
    document.getElementById("personal-phone").value = student.phone;
    document.getElementById("personal-email").value = student.email;
    document.getElementById("physical-weight").value = student.weight > 0 ? student.weight : "";
    document.getElementById("physical-height").value = student.height > 0 ? student.height : "";
    document.getElementById("physical-frequency").value = student.frequency;
    document.getElementById("physical-goal").value = student.goal;
    document.getElementById("health-limitations").value = student.limitations;
    document.getElementById("health-conditions").value = student.conditions;
    
    // Select radio button
    const radio = document.querySelector(`input[name="preference-origin"][value="${student.workoutOrigin}"]`);
    if (radio) radio.checked = true;
}
function saveStudentRegistration(event) {
    event.preventDefault();

    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.name = document.getElementById("personal-name").value;
    student.phone = document.getElementById("personal-phone").value;
    student.email = document.getElementById("personal-email").value;
    student.weight = parseFloat(document.getElementById("physical-weight").value) || 0;
    student.height = parseInt(document.getElementById("physical-height").value) || 0;
    student.frequency = parseInt(document.getElementById("physical-frequency").value);
    student.goal = document.getElementById("physical-goal").value;
    student.limitations = document.getElementById("health-limitations").value || "Nenhuma limitação relatada.";
    student.conditions = document.getElementById("health-conditions").value || "Nenhum histórico médico relevante.";
    
    const selectedOrigin = document.querySelector('input[name="preference-origin"]:checked').value;
    student.workoutOrigin = selectedOrigin;
    student.onboardingComplete = true;

    saveDb();
    
    // Refresh student view & bar info
    document.getElementById("current-user-name").textContent = student.name;
    renderAlunoDashboard();
    renderAlunoTreinos();
    
    showToast("Avaliação Física e dados salvos com sucesso! 💾");
    
    if (student.workoutOrigin === "custom") {
        openAutonomousWizard();
    } else {
        scrollToView("aluno-dashboard");
    }
}

// Payment Selection & Operations
function selectPlan(planId, price) {
    state.selectedPlanId = planId;
    state.selectedPlanPrice = price;

    // Visual updates
    document.querySelectorAll(".plan-option-card").forEach(card => {
        card.classList.remove("active");
    });
    
    const activeCard = document.getElementById(`plan-${planId}`);
    if (activeCard) {
        activeCard.classList.add("active");
    }

    // Refresh dynamic text
    showToast(`Plano ${planId.toUpperCase()} selecionado.`);
}

function switchPaymentTab(method) {
    state.selectedPaymentMethod = method;
    
    const pixBtn = document.getElementById("tab-pix-btn");
    const ccBtn = document.getElementById("tab-cc-btn");
    const pixDiv = document.getElementById("checkout-pix");
    const ccDiv = document.getElementById("checkout-cc");

    if (method === "pix") {
        pixBtn.classList.add("active");
        ccBtn.classList.remove("active");
        pixDiv.classList.remove("hidden");
        ccDiv.classList.add("hidden");
    } else {
        pixBtn.classList.remove("active");
        ccBtn.classList.add("active");
        pixDiv.classList.add("hidden");
        ccDiv.classList.remove("hidden");
        
        // Hide success alert of credit card
        document.getElementById("cc-saved-success").classList.add("hidden");
    }
}

function copyPixKey() {
    const keyInput = document.getElementById("pix-key-val");
    keyInput.select();
    keyInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(keyInput.value)
        .then(() => {
            showToast("Código Copia e Cola copiado! 📋");
        })
        .catch(() => {
            showToast("Erro ao copiar.");
        });
}

function simulatePixPayment() {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.paymentStatus = "pago";
    student.activePlan = state.selectedPlanId;
    
    // Calculate new nextBilling date (add 1 month or 6 months or 12 months)
    const today = new Date();
    if (state.selectedPlanId === "mensal") {
        today.setMonth(today.getMonth() + 1);
    } else if (state.selectedPlanId === "semestral") {
        today.setMonth(today.getMonth() + 6);
    } else if (state.selectedPlanId === "anual") {
        today.setMonth(today.getMonth() + 12);
    }
    student.nextBilling = today.toISOString().split("T")[0];
    student.paymentMethod = "PIX";

    saveDb();
    
    // Show success feedback
    const successMsg = document.getElementById("pix-success-msg");
    successMsg.classList.remove("hidden");
    
    // Update dashboard visual
    renderAlunoDashboard();
    showToast("Pagamento PIX confirmado com sucesso! 💸");
    
    setTimeout(() => {
        successMsg.classList.add("hidden");
    }, 4000);
}

function saveCreditCard(event) {
    event.preventDefault();
    
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.paymentStatus = "pago";
    student.activePlan = state.selectedPlanId;
    student.paymentMethod = "Cartão de Crédito";
    
    const today = new Date();
    if (state.selectedPlanId === "mensal") {
        today.setMonth(today.getMonth() + 1);
    } else if (state.selectedPlanId === "semestral") {
        today.setMonth(today.getMonth() + 6);
    } else if (state.selectedPlanId === "anual") {
        today.setMonth(today.getMonth() + 12);
    }
    student.nextBilling = today.toISOString().split("T")[0];

    saveDb();
    
    // Show CC success box
    const ccSuccess = document.getElementById("cc-saved-success");
    ccSuccess.classList.remove("hidden");
    
    renderAlunoDashboard();
    showToast("Cartão de crédito salvo e mensalidade paga! 💳");

    // Clean inputs
    document.getElementById("cc-name").value = "";
    document.getElementById("cc-num").value = "";
    document.getElementById("cc-exp").value = "";
    document.getElementById("cc-cvv").value = "";

    setTimeout(() => {
        ccSuccess.classList.add("hidden");
    }, 4000);
}

// ==========================================
// PROFESSOR ENVIRONMENT LOGIC
// ==========================================

function renderProfessorDashboard() {
    // Total Students
    const total = state.students.length;
    document.getElementById("prof-stat-total-students").textContent = total;

    // Outdated sheets (last sheet updated > 90 days ago)
    const today = new Date();
    let outdatedCount = 0;
    
    state.students.forEach(s => {
        if (s.workoutOrigin === "teacher" && s.onboardingComplete) {
            const sheetDate = new Date(s.workoutSheetDate);
            const diffTime = Math.abs(today - sheetDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 90) {
                outdatedCount++;
            }
        }
    });

    document.getElementById("prof-stat-outdated-sheets").textContent = outdatedCount;
    
    // Today's training count simulator
    // Calculated based on how many checkins are done today
    const dayOfWeek = new Date().getDay();
    let todayTrained = 0;
    state.students.forEach(s => {
        if (s.streak[dayOfWeek]) todayTrained++;
    });
    document.getElementById("prof-stat-today-trainings").textContent = todayTrained;
}

function renderStudentTable() {
    const tableBody = document.getElementById("students-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("student-search-input").value.toLowerCase();
    const filterVal = document.getElementById("status-filter").value;

    const filtered = state.students.filter(s => {
        // Search filter
        const matchesSearch = s.name.toLowerCase().includes(searchVal) ||
                             s.phone.includes(searchVal) ||
                             (s.goal && s.goal.toLowerCase().includes(searchVal));

        if (!matchesSearch) return false;

        // Status sheet filter
        if (filterVal === "todos") return true;
        if (filterVal === "autonomo") return s.workoutOrigin === "custom";
        
        if (s.workoutOrigin === "custom") return false; // Exclude custom for standard teacher evaluations

        const sheetDate = new Date(s.workoutSheetDate);
        const diffTime = Math.abs(new Date() - sheetDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const isOutdated = diffDays > 90;

        if (filterVal === "vencida") return isOutdated;
        if (filterVal === "ok") return !isOutdated;

        return true;
    });

    if (filtered.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted" style="padding: 30px;">
                    Nenhum aluno encontrado correspondente aos filtros.
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(s => {
        let goalText = "Não definido";
        if (s.goal === "hipertrofia") goalText = "Hipertrofia";
        else if (s.goal === "emagrecimento") goalText = "Emagrecimento";
        else if (s.goal === "condicionamento") goalText = "Resistência";
        else if (s.goal === "saude") goalText = "Qualidade Vida";

        // Status check
        let statusBadge = "";
        if (s.workoutOrigin === "custom") {
            statusBadge = `<span class="badge badge-success" style="background-color:rgba(59, 130, 246, 0.12); color:var(--color-info); border-color:rgba(59, 130, 246, 0.2);"><i class="fa-solid fa-hand-holding-hand"></i> Autônomo</span>`;
        } else {
            const sheetDate = new Date(s.workoutSheetDate);
            const diffTime = Math.abs(new Date() - sheetDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays > 90) {
                statusBadge = `<span class="badge badge-expired"><i class="fa-solid fa-hourglass-half"></i> Vencida (+90d)</span>`;
            } else {
                statusBadge = `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Em dia</span>`;
            }
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <strong>${s.name}</strong>
                <span class="sub-text">${s.phone} | ${s.email}</span>
            </td>
            <td><strong>${goalText}</strong></td>
            <td><strong>${s.frequency}x por semana</strong></td>
            <td><strong>${s.onboardingComplete ? formatDate(s.workoutSheetDate) : "Aguardando Cadastro"}</strong></td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn btn-outline btn-sm" onclick="openSheetEditor('${s.id}')">
                    <i class="fa-solid fa-pencil"></i> Editar Ficha
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function filterStudentTable() {
    renderStudentTable();
}

// Student Workout Sheet Editor (Teacher view)
function openSheetEditor(studentId) {
    const student = state.students.find(s => s.id === studentId);
    if (!student) return;

    if (!student.onboardingComplete) {
        alert("Este aluno ainda não realizou o cadastro de avaliação física. Fale para ele completar os dados antes.");
        return;
    }

    state.editingStudentId = studentId;
    state.editingActiveTab = "A";

    // Setup title and description
    document.getElementById("editor-student-name").textContent = `Editando Ficha de: ${student.name}`;
    document.getElementById("editor-student-health-summary").textContent = `Peso: ${student.weight}kg | Altura: ${student.height}cm | WhatsApp: ${student.phone}`;

    let goalText = "Não definido";
    if (student.goal === "hipertrofia") goalText = "Ganho de Massa (Hipertrofia)";
    else if (student.goal === "emagrecimento") goalText = "Perda de Peso / Definição";
    else if (student.goal === "condicionamento") goalText = "Resistência / Condicionamento";
    else if (student.goal === "saude") goalText = "Qualidade de Vida / Reabilitação";

    document.getElementById("ed-student-goal").textContent = goalText;
    document.getElementById("ed-student-freq").textContent = `${student.frequency}x por semana`;
    
    const healthEl = document.getElementById("ed-student-health");
    healthEl.textContent = student.limitations || "Nenhuma limitação física relatada.";
    if (student.limitations && student.limitations.toLowerCase() !== "nenhuma" && student.limitations.toLowerCase() !== "nenhuma limitação física relatada.") {
        healthEl.className = "text-red";
        healthEl.style.fontWeight = "bold";
    } else {
        healthEl.className = "text-green";
    }

    // Render Editor Tabs A, B, C (Only show existing or default tabs)
    renderEditorTabs();

    // Open editor subview
    scrollToView("student-sheet-editor-container");

    // Load exercises
    loadEditorExercises();
}

function renderEditorTabs() {
    const student = state.students.find(s => s.id === state.editingStudentId);
    const container = document.getElementById("editor-tabs-container");
    container.innerHTML = "";

    Object.keys(student.workouts).forEach(tab => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${state.editingActiveTab === tab ? "active" : ""}`;
        btn.textContent = `Treino ${tab}`;
        btn.onclick = () => {
            state.editingActiveTab = tab;
            renderEditorTabs();
            loadEditorExercises();
        };
        container.appendChild(btn);
    });

    // Add New Tab Button (A, B, C, D...)
    const tabsCount = Object.keys(student.workouts).length;
    if (tabsCount < 5) {
        const letters = ["A", "B", "C", "D", "E"];
        const nextLetter = letters[tabsCount];
        const addBtn = document.createElement("button");
        addBtn.className = "tab-btn btn-outline";
        addBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Novo Treino (${nextLetter})`;
        addBtn.onclick = () => {
            student.workouts[nextLetter] = [];
            state.editingActiveTab = nextLetter;
            saveDb();
            renderEditorTabs();
            loadEditorExercises();
        };
        container.appendChild(addBtn);
    }
}

function loadEditorExercises() {
    const student = state.students.find(s => s.id === state.editingStudentId);
    const exercisesList = student.workouts[state.editingActiveTab] || [];
    
    const container = document.getElementById("editor-exercises-list");
    container.innerHTML = "";

    if (exercisesList.length === 0) {
        container.innerHTML = `
            <div class="text-center p-8 text-muted" style="width: 100%;">
                <i class="fa-solid fa-circle-plus text-2xl mb-2"></i>
                <p>Nenhum exercício neste Treino ${state.editingActiveTab} ainda.</p>
                <button class="btn btn-outline btn-sm mt-4" onclick="openExerciseCatalogForEditor()"><i class="fa-solid fa-plus"></i> Inserir Exercício</button>
            </div>
        `;
        return;
    }

    exercisesList.forEach((workoutEx, index) => {
        const details = state.exercises.find(e => e.id === workoutEx.id);
        if (!details) return;

        // Fallback check
        if (!workoutEx.setsList) {
            workoutEx.setsList = [];
            const count = workoutEx.sets || 3;
            for (let i = 0; i < count; i++) {
                workoutEx.setsList.push({ reps: workoutEx.reps || 10, weight: workoutEx.weight || 10, done: false });
            }
            delete workoutEx.sets;
        }

        const setsCount = workoutEx.setsList.length;
        const repsVal = workoutEx.setsList[0] ? workoutEx.setsList[0].reps : 10;
        const weightVal = workoutEx.setsList[0] ? workoutEx.setsList[0].weight : 0;

        const div = document.createElement("div");
        div.className = "editor-exercise-item";
        div.innerHTML = `
            <div class="editor-ex-details">
                <i class="fa-solid fa-bars drag-handle"></i>
                <div class="editor-ex-text">
                    <strong>${details.name}</strong>
                    <p>${details.target}</p>
                </div>
            </div>
            
            <div class="editor-ex-inputs">
                <div class="tracker-input-group">
                    <label>Séries</label>
                    <input type="number" value="${setsCount}" onchange="updateEditorExerciseSets(${index}, this.value)">
                </div>
                <div class="tracker-input-group">
                    <label>Reps</label>
                    <input type="number" value="${repsVal}" onchange="updateEditorExerciseReps(${index}, this.value)">
                </div>
                <div class="tracker-input-group">
                    <label>Peso (kg)</label>
                    <input type="number" value="${weightVal}" onchange="updateEditorExerciseWeight(${index}, this.value)">
                </div>
                <button class="btn-icon-danger" onclick="removeExerciseFromEditor(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

function updateEditorExerciseSets(index, val) {
    const student = state.students.find(s => s.id === state.editingStudentId);
    const workoutEx = student.workouts[state.editingActiveTab][index];
    const newSetsCount = parseInt(val) || 1;
    
    const currentSetsCount = workoutEx.setsList.length;
    const defaultReps = workoutEx.setsList[0] ? workoutEx.setsList[0].reps : 10;
    const defaultWeight = workoutEx.setsList[0] ? workoutEx.setsList[0].weight : 0;

    if (newSetsCount > currentSetsCount) {
        for (let i = currentSetsCount; i < newSetsCount; i++) {
            workoutEx.setsList.push({ reps: defaultReps, weight: defaultWeight, done: false });
        }
    } else if (newSetsCount < currentSetsCount) {
        workoutEx.setsList.splice(newSetsCount);
    }
}

function updateEditorExerciseReps(index, val) {
    const student = state.students.find(s => s.id === state.editingStudentId);
    const workoutEx = student.workouts[state.editingActiveTab][index];
    const newReps = parseInt(val) || 10;
    
    workoutEx.setsList.forEach(set => {
        set.reps = newReps;
    });
}

function updateEditorExerciseWeight(index, val) {
    const student = state.students.find(s => s.id === state.editingStudentId);
    const workoutEx = student.workouts[state.editingActiveTab][index];
    const newWeight = parseInt(val) || 0;
    
    workoutEx.setsList.forEach(set => {
        set.weight = newWeight;
    });
}

function removeExerciseFromEditor(index) {
    const student = state.students.find(s => s.id === state.editingStudentId);
    student.workouts[state.editingActiveTab].splice(index, 1);
    loadEditorExercises();
    showToast("Exercício retirado da ficha de edição.");
}

function saveStudentSheet() {
    const student = state.students.find(s => s.id === state.editingStudentId);
    if (!student) return;

    student.workoutSheetDate = new Date().toISOString().split("T")[0]; // updated today
    student.workoutOrigin = "teacher"; // reset back to teacher controlled since teacher just modified it!
    
    // Set all workout exercises checked status to false (new training period)
    Object.keys(student.workouts).forEach(tab => {
        student.workouts[tab].forEach(ex => {
            ex.done = false;
        });
    });

    saveDb();
    closeSheetEditor();
    
    // Refresh tables
    renderStudentTable();
    renderProfessorDashboard();
    
    showToast(`Ficha do aluno ${student.name} publicada com sucesso! 🚀`);
}

function closeSheetEditor() {
    state.editingStudentId = null;
    scrollToView("prof-alunos");
}

// ==========================================
// ADMIN (ADM) ENVIRONMENT LOGIC
// ==========================================

function renderAdminDashboard() {
    // 1. Calculate Estimated Revenue
    // Mensal R$ 99.90, Semestral R$ 499 (price per month R$ 83.16), Anual R$ 899 (price per month R$ 74.91)
    // For general finance calculations, let's sum all active student plans.
    let totalRevenue = 0;
    let paidCount = 0;
    let pendingCount = 0;

    state.students.forEach(s => {
        let planPrice = 99.90;
        if (s.activePlan === "semestral") planPrice = 83.16;
        else if (s.activePlan === "anual") planPrice = 74.91;

        if (s.paymentStatus === "pago") {
            totalRevenue += planPrice;
            paidCount++;
        } else {
            pendingCount++;
        }
    });

    // Formatting as BRL currency
    const totalRevenueStr = totalRevenue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("admin-stat-total-revenue").textContent = totalRevenueStr;
    document.getElementById("admin-stat-paid-count").textContent = `${paidCount} / ${state.students.length}`;
    document.getElementById("admin-stat-pending-count").textContent = pendingCount;
}

function renderAdminFinanceTable() {
    const tableBody = document.getElementById("admin-finance-table-body");
    tableBody.innerHTML = "";

    const searchVal = document.getElementById("admin-search-input").value.toLowerCase();
    const filterVal = document.getElementById("payment-status-filter").value;

    const filtered = state.students.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchVal);
        if (!matchesSearch) return false;

        if (filterVal === "todos") return true;
        if (filterVal === "pago") return s.paymentStatus === "pago";
        if (filterVal === "pendente") return s.paymentStatus === "pendente";

        return true;
    });

    if (filtered.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted" style="padding: 30px;">
                    Nenhum pagamento correspondente encontrado.
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(s => {
        let planLabel = "Mensal";
        let planPrice = 99.90;
        if (s.activePlan === "semestral") {
            planLabel = "Semestral";
            planPrice = 499.00;
        } else if (s.activePlan === "anual") {
            planLabel = "Anual";
            planPrice = 899.00;
        }

        const formattedPrice = planPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

        let statusBadge = "";
        if (s.paymentStatus === "pago") {
            statusBadge = `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> Confirmado</span>`;
        } else {
            statusBadge = `<span class="badge badge-expired"><i class="fa-solid fa-triangle-exclamation"></i> Pendente</span>`;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${s.name}</strong><span class="sub-text">${s.phone}</span></td>
            <td><strong>${planLabel}</strong></td>
            <td><strong>${formatDate(s.nextBilling)}</strong></td>
            <td><strong>${formattedPrice}</strong></td>
            <td><strong>${s.paymentMethod || "Não definido"}</strong></td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn ${s.paymentStatus === 'pago' ? 'btn-outline' : 'btn-secondary'} btn-sm" onclick="toggleStudentPaymentAdmin('${s.id}')">
                    <i class="fa-solid ${s.paymentStatus === 'pago' ? 'fa-xmark' : 'fa-check'}"></i> 
                    ${s.paymentStatus === 'pago' ? 'Marcar Pendente' : 'Confirmar Pago'}
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

function filterAdminFinanceTable() {
    renderAdminFinanceTable();
}

function toggleStudentPaymentAdmin(studentId) {
    const student = state.students.find(s => s.id === studentId);
    if (!student) return;

    if (student.paymentStatus === "pago") {
        student.paymentStatus = "pendente";
    } else {
        student.paymentStatus = "pago";
        // Bump billing date by 1 month as standard confirmation
        const today = new Date();
        today.setMonth(today.getMonth() + 1);
        student.nextBilling = today.toISOString().split("T")[0];
    }

    saveDb();
    
    // Refresh layouts
    renderAdminDashboard();
    renderAdminFinanceTable();
    
    // If the active logged student was edited, refresh dashboard
    if (studentId === state.currentStudentId && state.role === "aluno") {
        renderAlunoDashboard();
    }
    
    showToast(`Situação financeira de ${student.name} atualizada.`);
}

// ==========================================
// CATALOG AND DETAIL MODALS
// ==========================================

// Exercise Catalog for adding exercises (Either student or teacher editor)
function openExerciseCatalog() {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (student && student.workoutOrigin === "custom") {
        openAutonomousWizard();
        return;
    }

    const modal = document.getElementById("exercise-catalog-modal");
    modal.classList.remove("hidden");
    
    // Setup title
    document.getElementById("catalog-modal-title").textContent = "Adicionar ao Treino";

    // Load muscle group tabs
    renderCatalogMuscleGroups(false); // student context
}

function openExerciseCatalogForEditor() {
    const modal = document.getElementById("exercise-catalog-modal");
    modal.classList.remove("hidden");

    // Setup title
    const student = state.students.find(s => s.id === state.editingStudentId);
    document.getElementById("catalog-modal-title").textContent = `Inserir Exercício no Treino ${state.editingActiveTab} de ${student.name}`;

    // Load muscle group tabs
    renderCatalogMuscleGroups(true); // editor context
}

function closeExerciseCatalog() {
    document.getElementById("exercise-catalog-modal").classList.add("hidden");
}

function renderCatalogMuscleGroups(isEditor) {
    const container = document.getElementById("muscle-groups-container");
    container.innerHTML = "";

    const groups = [
        { id: "todos", name: "Todos" },
        { id: "peito", name: "Peito" },
        { id: "costas", name: "Costas" },
        { id: "pernas", name: "Pernas" },
        { id: "ombros", name: "Ombros" },
        { id: "bracos", name: "Braços" },
        { id: "abdomen", name: "Core" }
    ];

    groups.forEach((group, index) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${index === 0 ? "active" : ""}`;
        btn.textContent = group.name;
        btn.onclick = () => {
            container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            loadCatalogExercises(group.id, isEditor);
        };
        container.appendChild(btn);
    });

    // Initial load
    loadCatalogExercises("todos", isEditor);
}

function loadCatalogExercises(groupId, isEditor) {
    const container = document.getElementById("catalog-exercises-list");
    container.innerHTML = "";

    const filtered = state.exercises.filter(ex => {
        if (groupId === "todos") return true;
        return ex.muscleGroup === groupId;
    });

    filtered.forEach(ex => {
        const card = document.createElement("div");
        card.className = "catalog-item-card";
        card.innerHTML = `
            <div>
                <span class="catalog-item-name">${ex.name}</span>
                <span class="catalog-item-target"><i class="fa-solid fa-bullseye"></i> ${ex.target}</span>
            </div>
            
            <button class="btn btn-primary btn-sm mt-auto" onclick="addExerciseFromCatalog('${ex.id}', ${isEditor})">
                <i class="fa-solid fa-plus"></i> Inserir
            </button>
        `;
        container.appendChild(card);
    });
}

function addExerciseFromCatalog(exerciseId, isEditor) {
    const templateEx = state.exercises.find(e => e.id === exerciseId);
    if (!templateEx) return;

    // Build setsList
    const setsList = [];
    const setsCount = templateEx.defaultSets || 3;
    for (let i = 0; i < setsCount; i++) {
        setsList.push({
            reps: templateEx.defaultReps || 10,
            weight: templateEx.defaultWeight || 0,
            done: false
        });
    }

    if (isEditor) {
        // Teacher Editor mode
        const student = state.students.find(s => s.id === state.editingStudentId);
        const workoutList = student.workouts[state.editingActiveTab];
        
        const exists = workoutList.some(e => e.id === exerciseId);
        if (exists) {
            showToast("Este exercício já está na ficha do aluno!");
            return;
        }

        workoutList.push({
            id: exerciseId,
            isCustom: false,
            setsList: setsList,
            done: false
        });

        loadEditorExercises();
        closeExerciseCatalog();
        showToast("Exercício inserido na ficha de edição!");
    } else {
        // Student Autonomous mode (customizes their own worksheet)
        const student = state.students.find(s => s.id === state.currentStudentId);
        const activeTab = getActiveWorkoutTab();
        const workoutList = student.workouts[activeTab];

        const exists = workoutList.some(e => e.id === exerciseId);
        if (exists) {
            showToast("Exercício já adicionado ao seu treino!");
            return;
        }

        workoutList.push({
            id: exerciseId,
            isCustom: false,
            setsList: setsList,
            done: false
        });

        student.workoutOrigin = "custom";
        saveDb();

        renderAlunoTreinos();
        closeExerciseCatalog();
        showToast("Exercício adicionado à sua ficha autônoma! 🏋️");
    }
}

// Exercise demonstration detail modal
function openExerciseDemo(exerciseId) {
    const ex = state.exercises.find(e => e.id === exerciseId);
    if (!ex) return;

    const modal = document.getElementById("exercise-demo-modal");
    
    // Fill title & descriptions
    document.getElementById("demo-modal-title").textContent = ex.name;
    document.getElementById("demo-modal-desc").textContent = ex.description;
    document.getElementById("demo-modal-target").textContent = ex.target;
    document.getElementById("demo-modal-tip").textContent = ex.tip;

    // Load vector SVG visual
    const visualContainer = document.getElementById("demo-visual-container");
    visualContainer.innerHTML = SVG_TEMPLATES[ex.svgType] || "";

    modal.classList.remove("hidden");
}

function closeExerciseDemo() {
    document.getElementById("exercise-demo-modal").classList.add("hidden");
}

// ==========================================
// TOAST NOTIFICATIONS & DATE HELPERS
// ==========================================
function showToast(message) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");

    toastText.textContent = message;
    toast.classList.remove("hidden");

    // Clear previous timeouts if click is fast
    if (window.toastTimeout) {
        clearTimeout(window.toastTimeout);
    }

    window.toastTimeout = setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

function formatDate(dateStr) {
    if (!dateStr) return "--";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// ==========================================
// AUTONOMOUS WORKOUT BUILDER WIZARD (UPDATE 1)
// ==========================================
let wizardState = {
    selectedExerciseId: null,
    activeMuscleGroup: "todos",
    customPhotoBase64: null
};

function openAutonomousWizard() {
    const modal = document.getElementById("autonomous-setup-modal");
    modal.classList.remove("hidden");
    
    // Reset inputs
    document.getElementById("wizard-search-input").value = "";
    document.getElementById("wizard-config-card").style.display = "none";
    clearPreviewImage();
    
    renderWizardMuscleGroups();
    loadWizardCatalog("todos");
}

function closeAutonomousWizard() {
    document.getElementById("autonomous-setup-modal").classList.add("hidden");
    renderAlunoTreinos();
    renderAlunoDashboard();
    scrollToView("aluno-treinos");
}

function renderWizardMuscleGroups() {
    const container = document.getElementById("wizard-muscle-groups");
    container.innerHTML = "";

    const groups = [
        { id: "todos", name: "Todos" },
        { id: "peito", name: "Peito" },
        { id: "costas", name: "Costas" },
        { id: "pernas", name: "Pernas" },
        { id: "ombros", name: "Ombros" },
        { id: "bracos", name: "Braços" },
        { id: "abdomen", name: "Core" }
    ];

    groups.forEach((group, index) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${wizardState.activeMuscleGroup === group.id ? "active" : ""}`;
        btn.textContent = group.name;
        btn.onclick = () => {
            container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            wizardState.activeMuscleGroup = group.id;
            loadWizardCatalog(group.id);
        };
        container.appendChild(btn);
    });
}

function loadWizardCatalog(groupId) {
    const container = document.getElementById("wizard-catalog-list");
    container.innerHTML = "";

    const searchVal = document.getElementById("wizard-search-input").value.toLowerCase();

    const filtered = state.exercises.filter(ex => {
        const matchesMuscle = (groupId === "todos" || ex.muscleGroup === groupId);
        const matchesSearch = ex.name.toLowerCase().includes(searchVal) || ex.target.toLowerCase().includes(searchVal);
        return matchesMuscle && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="text-center text-muted p-4">Nenhum exercício encontrado.</div>`;
        return;
    }

    filtered.forEach(ex => {
        const card = document.createElement("div");
        card.className = `wizard-item-card ${wizardState.selectedExerciseId === ex.id ? "selected" : ""}`;
        card.innerHTML = `
            <div class="wizard-item-text">
                <strong>${ex.name}</strong>
                <span>${ex.target}</span>
            </div>
            <i class="fa-solid fa-chevron-right text-muted"></i>
        `;
        card.onclick = () => {
            container.querySelectorAll(".wizard-item-card").forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectExerciseInWizard(ex.id);
        };
        container.appendChild(card);
    });
}

function filterWizardCatalog() {
    loadWizardCatalog(wizardState.activeMuscleGroup);
}

function selectExerciseInWizard(exerciseId) {
    const ex = state.exercises.find(e => e.id === exerciseId);
    if (!ex) return;

    wizardState.selectedExerciseId = exerciseId;
    
    // Show configuration card
    const configCard = document.getElementById("wizard-config-card");
    configCard.style.display = "block";
    
    document.getElementById("wizard-selected-ex-id").value = exerciseId;
    document.getElementById("wizard-config-title").innerHTML = `<i class="fa-solid fa-dumbbell"></i> Configurar: ${ex.name}`;
    
    // Reset configs to defaults
    document.getElementById("wizard-ex-sets").value = ex.defaultSets || 4;
    document.getElementById("wizard-ex-reps").value = ex.defaultReps || 10;
    document.getElementById("wizard-ex-weight").value = ex.defaultWeight || 10;
}

function addExerciseFromWizard() {
    const exId = document.getElementById("wizard-selected-ex-id").value;
    const targetWorkout = document.getElementById("wizard-ex-workout").value;
    const sets = parseInt(document.getElementById("wizard-ex-sets").value) || 4;
    const reps = parseInt(document.getElementById("wizard-ex-reps").value) || 10;
    const weight = parseInt(document.getElementById("wizard-ex-weight").value) || 0;

    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    // Check duplication
    if (!student.workouts[targetWorkout]) {
        student.workouts[targetWorkout] = [];
    }

    const exists = student.workouts[targetWorkout].some(e => e.id === exId);
    if (exists) {
        showToast("Este exercício já está no Treino " + targetWorkout);
        return;
    }

    // Build setsList
    const setsList = [];
    for (let i = 0; i < sets; i++) {
        setsList.push({ reps: reps, weight: weight, done: false });
    }

    student.workouts[targetWorkout].push({
        id: exId,
        isCustom: false,
        setsList: setsList,
        done: false
    });

    student.workoutOrigin = "custom";
    saveDb();
    
    showToast("Exercício adicionado ao Treino " + targetWorkout + "! 🏋️");
}

// Image uploading & preview
function previewCustomImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        wizardState.customPhotoBase64 = e.target.result;
        
        // Show preview
        document.getElementById("custom-ex-image-preview").src = e.target.result;
        document.getElementById("custom-ex-image-preview-container").classList.remove("hidden");
    };
    reader.readAsDataURL(file);
}

function clearPreviewImage() {
    wizardState.customPhotoBase64 = null;
    document.getElementById("custom-ex-photo-file").value = "";
    document.getElementById("custom-ex-image-preview-container").classList.add("hidden");
    document.getElementById("custom-ex-image-preview").src = "";
}

function createCustomExercise(event) {
    event.preventDefault();

    const name = document.getElementById("custom-ex-name").value;
    const muscle = document.getElementById("custom-ex-muscle").value;
    const targetWorkout = document.getElementById("custom-ex-workout").value;
    const sets = parseInt(document.getElementById("custom-ex-sets").value) || 3;
    const reps = parseInt(document.getElementById("custom-ex-reps").value) || 12;
    const weight = parseInt(document.getElementById("custom-ex-weight").value) || 0;

    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    // Create unique ID
    const newExId = "ex-custom-" + Date.now();

    // 1. Add to global exercises database
    const newExerciseObj = {
        id: newExId,
        name: name,
        muscleGroup: muscle,
        target: "Exercício Personalizado (" + muscle.toUpperCase() + ")",
        defaultSets: sets,
        defaultReps: reps,
        defaultWeight: weight,
        description: "Exercício criado pelo aluno.",
        tip: "Acompanhe sua postura.",
        svgType: "custom"
    };

    state.exercises.push(newExerciseObj);
    localStorage.setItem("forca_maxima_exercises", JSON.stringify(state.exercises));

    // 2. Add to student workout
    if (!student.workouts[targetWorkout]) {
        student.workouts[targetWorkout] = [];
    }

    const setsList = [];
    for (let i = 0; i < sets; i++) {
        setsList.push({ reps: reps, weight: weight, done: false });
    }

    student.workouts[targetWorkout].push({
        id: newExId,
        isCustom: true,
        customPhoto: wizardState.customPhotoBase64,
        setsList: setsList,
        done: false
    });

    student.workoutOrigin = "custom";
    saveDb();

    // Reset Form
    document.getElementById("custom-ex-name").value = "";
    clearPreviewImage();

    // Reload catalog in wizard
    loadWizardCatalog(wizardState.activeMuscleGroup);
    
    showToast("Exercício '" + name + "' criado e adicionado ao Treino " + targetWorkout + "! 📸");
}

function toggleSetCheck(tabLetter, index, setIdx, isChecked) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.workouts[tabLetter][index].setsList[setIdx].done = isChecked;
    
    // Recalculate card completion status
    const workoutEx = student.workouts[tabLetter][index];
    const allDone = workoutEx.setsList.every(s => s.done);
    workoutEx.done = allDone;

    saveDb();

    // Reload workouts list to update visual styles
    loadStudentExercisesList(tabLetter);

    if (isChecked) {
        showToast(`Série ${setIdx + 1} concluída! 💪`);
        
        // Check if all exercises are done to update streak
        const tabList = student.workouts[tabLetter];
        const allExercisesDone = tabList.every(ex => ex.done);
        if (allExercisesDone) {
            const today = new Date().getDay();
            student.streak[today] = true;
            saveDb();
            renderAlunoDashboard();
            showToast("Treino Completo! Streak Semanal atualizado! 🌟");
        }
    }
}

function updateSetWeight(tabLetter, index, setIdx, weight) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.workouts[tabLetter][index].setsList[setIdx].weight = parseInt(weight) || 0;
    saveDb();
}

function updateSetReps(tabLetter, index, setIdx, reps) {
    const student = state.students.find(s => s.id === state.currentStudentId);
    if (!student) return;

    student.workouts[tabLetter][index].setsList[setIdx].reps = parseInt(reps) || 0;
    saveDb();
}
