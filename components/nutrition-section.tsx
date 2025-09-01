"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Shield, Heart, Brain, MinusCircle as Muscle, Eye } from "lucide-react"

const nutritionFacts = [
	{ nutrient: "Energía", amount: "105 kcal", percentage: 5, color: "bg-yellow-400" },
	{ nutrient: "Carbohidratos", amount: "18 g", percentage: 6, color: "bg-blue-400" },
	{ nutrient: "Azúcares", amount: "6.6 g", percentage: 7, color: "bg-pink-400" },
	{ nutrient: "Proteínas", amount: "2.1 g", percentage: 4, color: "bg-green-500" },
	{ nutrient: "Grasas totales", amount: "3.0 g", percentage: 5, color: "bg-orange-400" },
	{ nutrient: "– Saturadas", amount: "1.5 g", percentage: 8, color: "bg-orange-600" },
	{ nutrient: "Fibra", amount: "0.45 g", percentage: 2, color: "bg-emerald-500" },
]

const micronutrients = [
	{ nutrient: "Sodio", amount: "75 mg", percentage: 4, color: "bg-blue-300" },
	{ nutrient: "Calcio", amount: "12 mg", percentage: 1, color: "bg-indigo-300" },
	{ nutrient: "Hierro", amount: "0.45 mg", percentage: 3, color: "bg-red-300" },
	{ nutrient: "Fósforo", amount: "25.5 mg", percentage: 2, color: "bg-purple-300" },
	{ nutrient: "Magnesio", amount: "3.6 mg", percentage: 1, color: "bg-green-300" },
]

const healthBenefits = [
	{
		icon: Brain,
		title: "Potencia Mental",
		description: "Los ácidos grasos omega-3 mejoran la concentración y memoria, perfectos para estudiantes.",
		color: "text-purple-600",
	},
	{
		icon: Muscle,
		title: "Energía Duradera",
		description: "Proteínas de alta calidad que mantienen tu energía estable durante todo el día.",
		color: "text-orange-600",
	},
	{
		icon: Heart,
		title: "Corazón Saludable",
		description: "Grasas monoinsaturadas que cuidan tu sistema cardiovascular naturalmente.",
		color: "text-red-500",
	},
	{
		icon: Eye,
		title: "Visión Clara",
		description: "Rico en antioxidantes que protegen tus ojos del estrés digital diario.",
		color: "text-blue-600",
	},
	{
		icon: Shield,
		title: "Sistema Inmune",
		description: "Vitaminas y minerales que fortalecen tus defensas naturales.",
		color: "text-green-600",
	},
	{
		icon: Zap,
		title: "Metabolismo Activo",
		description: "Nutrientes que aceleran tu metabolismo y te mantienen en forma.",
		color: "text-yellow-600",
	},
]

export function NutritionSection() {
	return (
		<section id="nutricion" className="py-24 px-6 bg-gradient-to-b from-white to-green-50/50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<Badge className="mb-6 bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold">
						Nutrición Científicamente Comprobada
					</Badge>
					<h2 className="text-5xl md:text-6xl font-black text-primary mb-8 text-balance">
						Cada Bocado es
						<span className="text-secondary block">Pura Nutrición</span>
					</h2>
					<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
						PANDICRUNCH no es solo delicioso, es una bomba nutricional diseñada por la naturaleza para alimentar tu
						cuerpo y mente con lo mejor de la selva amazónica.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
					{/* Nutrition Facts */}
					<Card className="tropical-shadow border-0 bg-white/90 backdrop-blur-sm">
						<CardContent className="p-8">
							<h3 className="text-3xl font-bold text-primary mb-8 text-center">
								Información Nutricional
								<span className="block text-lg font-normal text-muted-foreground mt-2">Por porción de 30g</span>
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{nutritionFacts.map((fact, index) => (
									<div key={index} className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="font-semibold text-primary">{fact.nutrient}</span>
											<span className="font-bold text-secondary">{fact.amount}</span>
										</div>
										<div className="relative">
											<Progress value={fact.percentage} className="h-2" />
											<div
												className={`absolute top-0 left-0 h-2 rounded-full ${fact.color} transition-all duration-1000`}
												style={{ width: `${fact.percentage}%` }}
											></div>
										</div>
										<p className="text-xs text-muted-foreground text-right">{fact.percentage}% VD*</p>
									</div>
								))}
							</div>
							<div className="mt-8">
								<h4 className="font-semibold text-primary mb-2">Micronutrientes (vitaminas y minerales)</h4>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{micronutrients.map((micro, idx) => (
										<div key={idx} className="space-y-2 mb-2">
											<div className="flex justify-between items-center">
												<span className="font-semibold text-primary">{micro.nutrient}</span>
												<span className="font-bold text-secondary">{micro.amount}</span>
											</div>
											<div className="relative">
												<Progress value={micro.percentage} className="h-2" />
												<div
													className={`absolute top-0 left-0 h-2 rounded-full ${micro.color} transition-all duration-1000`}
													style={{ width: `${micro.percentage}%` }}
												></div>
											</div>
											<p className="text-xs text-muted-foreground text-right">{micro.percentage}% VD*</p>
										</div>
									))}
								</div>
							</div>
							<p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
								*Valores Diarios estimados para visualización.<br />
								Macronutrientes = aportan energía<br />
								Micronutrientes = tiene algunos minerales, pero en cantidades bajas, no es fuente rica.
							</p>
						</CardContent>
					</Card>

					{/* Emotional, Cultural & Educational Contribution */}
					<div className="mb-8">
						<h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-8 text-center drop-shadow">
							Aportes del Pandisho
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Card className="border-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-green-100 shadow-lg rounded-2xl">
								<CardContent className="p-6">
									<h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
										Aporte químico <span className="text-xl">🍬</span>
									</h4>
									<ul className="list-disc ml-5 text-muted-foreground text-base space-y-2">
										<li>Contiene azúcares y carbohidratos; al comerlos, el cuerpo libera serotonina y dopamina, neurotransmisores relacionados con la sensación de placer y bienestar.</li>
										<li>El aroma y sabor dulces también estimulan recuerdos agradables en el cerebro.</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="border-0 bg-gradient-to-br from-green-100 via-secondary/10 to-primary/5 shadow-lg rounded-2xl">
								<CardContent className="p-6">
									<h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
										Aporte cultural y emocional <span className="text-xl">🌱</span>
									</h4>
									<ul className="list-disc ml-5 text-muted-foreground text-base space-y-2">
										<li>El pandisho es parte de la identidad amazónica peruana. Comerlo puede dar conexión cultural y sentido de pertenencia.</li>
										<li>Muchas veces se asocia a la infancia, la familia, compartir en comunidad o fiestas locales, lo que genera emociones positivas.</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="border-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-green-100 shadow-lg rounded-2xl">
								<CardContent className="p-6">
									<h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
										Efecto psicológico <span className="text-xl">😊</span>
									</h4>
									<ul className="list-disc ml-5 text-muted-foreground text-base space-y-2">
										<li>Comer un alimento que te gusta, aunque no sea el más nutritivo, puede dar una sensación de consuelo, alegría y satisfacción.</li>
										<li>Se le considera un “comfort food” (comida reconfortante).</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="border-0 bg-gradient-to-br from-secondary/10 via-green-100 to-primary/5 shadow-lg rounded-2xl">
								<CardContent className="p-6">
									<h4 className="font-bold text-primary mb-3 flex items-center gap-2 text-lg">
										Aporte educativo <span className="text-xl">🧠</span>
									</h4>
									<ul className="list-disc ml-5 text-muted-foreground text-base space-y-2">
										<li>Energía rápida para el cerebro: el cerebro funciona con glucosa como combustible. Los carbohidratos y azúcares del pandisho se convierten en glucosa, dando un “subidón” de energía mental útil en el corto plazo (por ejemplo, al estudiar antes de un examen).</li>
										<li>Bienestar y motivación: al liberar dopamina y serotonina (por el sabor dulce), puede mejorar el ánimo y la disposición para concentrarse un rato más.</li>
										<li>Valor cultural y emocional: sentirse conectado con tus raíces y tradiciones también puede dar confianza y orgullo, lo cual repercute en la motivación académica.</li>
									</ul>
								</CardContent>
							</Card>
						</div>
						<Card className="border-0 bg-gradient-to-r from-red-100 via-red-50 to-white mt-8 shadow-md rounded-2xl">
							<CardContent className="p-6">
								<h4 className="font-bold text-red-700 mb-3 flex items-center gap-2 text-lg">
									Limitaciones <span className="text-xl">⚠️</span>
								</h4>
								<ul className="list-disc ml-5 text-red-700 text-base space-y-2">
									<li>Esa energía es de corta duración; después puede dar bajón de cansancio o sueño.</li>
									<li>No aporta nutrientes esenciales para la memoria o la concentración a largo plazo (como omega-3, zinc, magnesio o vitaminas del grupo B en altas cantidades).</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Call to Action */}
				<Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 tropical-shadow">
					<CardContent className="p-12 text-center">
						<h3 className="text-4xl font-bold mb-6">¿Listo para Transformar tu Desayuno?</h3>
						<p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
							Únete a miles de estudiantes que ya descubrieron el poder nutricional de PANDICRUNCH
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Badge variant="secondary" className="px-4 py-2 text-sm">
								100% Natural
							</Badge>
							<Badge variant="secondary" className="px-4 py-2 text-sm">
								Sin Gluten
							</Badge>
							<Badge variant="secondary" className="px-4 py-2 text-sm">
								Rico en Proteína
							</Badge>
							<Badge variant="secondary" className="px-4 py-2 text-sm">
								Vegano
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}
