const servicosSenac = [
    {
        categoria: "Cabelos",
        servicos: [
            {
                nome: "Corte (masculino, feminino e infantil)",
                duracao: "60 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "10:00 - 11:00", "12:00 - 13:00", "14:00 - 15:00", "16:00 - 17:00"],
                    Rafael: ["9:00 - 10:00", "11:00 - 12:00", "13:00 - 14:00", "15:00 - 16:00", "17:00 - 18:00"],
                    Carlos: ["8:00 - 9:00", "10:00 - 11:00", "12:00 - 13:00", "14:00 - 15:00", "16:00 - 17:00"]
                }
            },
            {
                nome: "Coloração (tintura, mechas, reflexos, ombré hair, luzes)",
                duracao: "90 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Mariana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Hidratação (simples ou profunda)",
                duracao: "45 minutos",
                profissionais: {
                    Rafael: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Lúcia: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Reconstrução capilar",
                duracao: "75 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Rafael: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Progressiva ou selagem térmica",
                duracao: "120 minutos",
                profissionais: {
                    Rafael: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Ana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Penteados (simples, para eventos e ocasiões especiais)",
                duracao: "60 minutos",
                profissionais: {
                    Rafael: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Alisamentos (com produtos químicos ou térmicos)",
                duracao: "105 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Mariana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Relaxamento ou texturização",
                duracao: "90 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Mariana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"],
                    Carlos: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Tratamentos específicos (antiqueda, anti-frizz, entre outros)",
                duracao: "60 minutos",
                profissionais: {
                    Ana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Rafael: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"],
                    Lúcia: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            }
        ]
    },
    {
        categoria: "Estética Facial",
        servicos: [
            {
                nome: "Limpeza de pele (básica ou profunda)",
                duracao: "60 minutos",
                profissionais: {
                    Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Hidratação facial",
                duracao: "45 minutos",
                profissionais: {
                    Clara: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Mariana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Peeling facial (químico ou mecânico)",
                duracao: "75 minutos",
                profissionais: {
                    Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Tratamentos antiacne",
                duracao: "60 minutos",
                profissionais: {
                    Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Massagem facial relaxante",
                duracao: "45 minutos",
                profissionais: {
                    José: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Design de sobrancelhas (com pinça, linha ou henna)",
                duracao: "30 minutos",
                profissionais: {
                    Fernanda: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Depilação facial (com cera ou linha)",
                duracao: "45 minutos",
                profissionais: {
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            }
        ]
    },
    {
        categoria: "Estética Corporal",
        servicos: [
            {
                nome: "Massagens relaxantes e terapêuticas",
                duracao: "60 minutos",
                profissionais: {
                    José: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Drenagem linfática",
                duracao: "75 minutos",
                profissionais: {
                    Mariana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Esfoliação corporal",
                duracao: "45 minutos",
                profissionais: {
                    Clara: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Lúcia: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Tratamentos redutores de medidas",
                duracao: "90 minutos",
                profissionais: {
                    Clara: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Tratamentos para celulite e flacidez",
                duracao: "75 minutos",
                profissionais: {
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"],
                    Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Banhos de ofurô ou aromaterapia (em algumas unidades)",
                duracao: "60 minutos",
                profissionais: {
                    José: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            }
        ]
    },
    {
        categoria: "Maquiagem",
        servicos: [
            {
                nome: "Maquiagem social",
                duracao: "45 minutos",
                profissionais: {
                    Fernanda: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Maquiagem para eventos (festas, formaturas, casamentos)",
                duracao: "60 minutos",
                profissionais: {
                    Fernanda: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Maquiagem artística (em unidades com cursos especializados)",
                duracao: "90 minutos",
                profissionais: {
                    Fernanda: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            }
        ]
    },
    {
        categoria: "Mãos e Pés",
        servicos: [
            {
                nome: "Manicure e pedicure",
                duracao: "45 minutos",
                profissionais: {
                    Lúcia: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Esmaltação simples e decorada",
                duracao: "30 minutos",
                profissionais: {
                    Lúcia: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Spa para pés e mãos (hidratação e esfoliação)",
                duracao: "60 minutos",
                profissionais: {
                    Lúcia: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Aplicação de unhas postiças ou alongamento",
                duracao: "75 minutos",
                profissionais: {
                    Lúcia: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            }
        ]
    },
    {
        categoria: "Depilação",
        servicos: [
            {
                nome: "Depilação corporal e facial (cera quente ou fria)",
                duracao: "45 minutos",
                profissionais: {
                    Clara: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                nome: "Depilação com linha",
                duracao: "30 minutos",
                profissionais: {
                    Clara: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            }
        ]
    },
    {
        categoria: "Barbearia",
        servicos: [
            {
                nome: "Corte masculino",
                duracao: "45 minutos",
                profissionais: {
                    Carlos: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Paulo: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Aparar e modelar barba",
                duracao: "30 minutos",
                profissionais: {
                    Carlos: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                    Paulo: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                }
            },
            {
                nome: "Hidratação e tratamento para barba e cabelos masculinos",
                duracao: "60 minutos",
                profissionais: {
                    Carlos: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                }
            },
            {
                categoria: "Cursos e Consultorias",
                servicos: [
                    {
                        nome: "Consultorias personalizadas sobre cuidados de beleza",
                        duracao: "60 minutos",
                        profissionais: {
                            Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                            José: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
                        }
                    },
                    {
                        nome: "Atendimento especializado para análise capilar, de pele ou estética",
                        duracao: "75 minutos",
                        profissionais: {
                            Mariana: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"],
                            Ana: ["13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"],
                            Clara: ["8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00"]
                        }
                    }
                ]
            }
        ]
    }
];

const categoriasDoSalao = [
    "Cabelos",
    "Estética Facial",
    "Estética Corporal",
    "Maquiagem",
    "Mãos e Pés",
    "Depilação",
    "Barbearia"
];

const funcoesSalao = [
    "Corte de cabelo (corte feminino, corte masculino, corte infantil)",
    "Coloração de cabelo (tintura, luzes, reflexos, mechas, ombré hair)",
    "Hidratação e reconstrução capilar (hidratação profunda, tratamento de danos, reconstrução de fios)",
    "Alisamento (escova progressiva, alisamento definitivo, escova chapinha)",
    "Penteados (coques, tranças, penteado de festas, penteado de casamento)",
    "Manicure (corte e esmaltação de unhas, nail art)",
    "Pedicure (corte e esmaltação de unhas dos pés, cuidados com calos e cutículas)",
    "Design de sobrancelhas (modelagem, depilação, tintura de sobrancelhas)",
    "Depilação (depilação com cera, depilação a laser, depilação com linha)",
    "Massagem relaxante (massagem terapêutica, massagem com óleos essenciais)",
    "Limpeza de pele (limpeza profunda, esfoliação, hidratação facial)",
    "Maquiagem (maquiagem para eventos, maquiagem social, maquiagem para noivas)",
    "Tratamento capilar (laser capilar, terapia capilar com LED, cuidados específicos para queda de cabelo)",
    "Escova (escova simples, escova modeladora, escova de volume)",
    "Luzes (mechas, californiana, balayage)",
    "Botox capilar (tratamento para redução de frizz e hidratação)",
    "Permanente (permanente nos cabelos, permanente afro)",
    "Alongamento de cabelo (extensões de cabelo, aplique)",
    "Escova progressiva (escova alisante, selagem capilar)"
  ]

  const produtosConsumiveis = [
    { nome: "Shampoo Profissional", categoria: "Cabelo", quantidade: 10, unidade: "litros" },
    { nome: "Condicionador Hidratante", categoria: "Cabelo", quantidade: 8, unidade: "litros" },
    { nome: "Máscara de Hidratação", categoria: "Cabelo", quantidade: 5, unidade: "unidades" },
    { nome: "Tintura de Cabelo", categoria: "Cabelo", quantidade: 20, unidade: "caixas" },
    { nome: "Pó Descolorante", categoria: "Cabelo", quantidade: 15, unidade: "sachês" },
    { nome: "Água Oxigenada", categoria: "Cabelo", quantidade: 10, unidade: "litros" },
    { nome: "Creme para Pentear", categoria: "Cabelo", quantidade: 6, unidade: "unidades" },
    { nome: "Toalhas Descartáveis", categoria: "Higiene", quantidade: 200, unidade: "unidades" },
    { nome: "Lenços Umedecidos", categoria: "Higiene", quantidade: 100, unidade: "pacotes" },
    { nome: "Removedor de Esmalte", categoria: "Unhas", quantidade: 10, unidade: "litros" },
    { nome: "Esmaltes", categoria: "Unhas", quantidade: 50, unidade: "unidades" },
    { nome: "Lixa de Unha", categoria: "Unhas", quantidade: 100, unidade: "unidades" },
    { nome: "Algodão", categoria: "Higiene", quantidade: 10, unidade: "pacotes" },
    { nome: "Cera Depilatória", categoria: "Depilação", quantidade: 5, unidade: "quilos" },
    { nome: "Folhas para Depilação", categoria: "Depilação", quantidade: 300, unidade: "unidades" },
    { nome: "Óleo Pós-Depilatório", categoria: "Depilação", quantidade: 5, unidade: "frascos" },
    { nome: "Sérum Facial", categoria: "Estética", quantidade: 10, unidade: "frascos" },
    { nome: "Máscaras Faciais", categoria: "Estética", quantidade: 30, unidade: "unidades" }
  ];

  const equipamentosSalao = [
    { nome: "Secador de Cabelo", categoria: "Cabelo", quantidade: 5 },
    { nome: "Prancha (Chapinha)", categoria: "Cabelo", quantidade: 4 },
    { nome: "Babyliss", categoria: "Cabelo", quantidade: 3 },
    { nome: "Máquina de Corte", categoria: "Cabelo", quantidade: 4 },
    { nome: "Poltrona de Cabeleireiro", categoria: "Mobiliário", quantidade: 6 },
    { nome: "Espelho de Parede", categoria: "Mobiliário", quantidade: 6 },
    { nome: "Carrinho Auxiliar", categoria: "Mobiliário", quantidade: 4 },
    { nome: "Cadeira para Manicure", categoria: "Unhas", quantidade: 2 },
    { nome: "Cabine de Led/UV para Unhas", categoria: "Unhas", quantidade: 2 },
    { nome: "Aspirador de Pó para Unhas", categoria: "Unhas", quantidade: 1 },
    { nome: "Aquecedor de Cera", categoria: "Depilação", quantidade: 2 },
    { nome: "Mesa de Massagem", categoria: "Estética", quantidade: 1 },
    { nome: "Vaporizador Facial", categoria: "Estética", quantidade: 1 },
    { nome: "Autoclave", categoria: "Higiene e Esterilização", quantidade: 1 },
    { nome: "Lupa com Luz", categoria: "Estética", quantidade: 1 },
    { nome: "Torno para Unhas", categoria: "Unhas", quantidade: 1 },
    { nome: "Lavatório para Cabelo", categoria: "Mobiliário", quantidade: 2 },
    { nome: "Balança Digital", categoria: "Cabelo", quantidade: 1 }
  ];
  
  const listaDuracaoSalao = [
        "30 minutos",
        "45 minutos",
        "60 minutos",
        "75 minutos",
        "90 minutos",
        "105 minutos",
        "120 minutos",
        "135 minutos",
        "150 minutos",
        "165 minutos"
    ];

    const diasDaSemana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
      ];
      

export {servicosSenac, funcoesSalao, produtosConsumiveis, equipamentosSalao, categoriasDoSalao, listaDuracaoSalao, diasDaSemana};