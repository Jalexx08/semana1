const mostrarRecetasCol = () => {
	let op = prompt(
		"Elige un Departamento: \n A-Cauca \n B - Meta \n C - Antioquia \n D - Cundinamarca  \n E -Atlantico"
	);

	if (op == null) {
		alert("Debe ingresar datos válidos");
	} else {
		op = op.toLowerCase();

		if (op != "a" && op != "b" && op != "c" && op != "d" && op != "e") {
			alert("Debe ser una opción entre A y E");
		} else {
			switch (op) {
				case "a":
					let opa = prompt(
						"Elige una ciudad: \n A-popayán \n B -Corinto  \n C -Toribio  \n D -Suarez "
					);

					if (opa == null) {
						alert("Debe ingresar datos válidos");
					} else {
						opa = opa.toLowerCase();

						if (opa != "a" && opa != "b" && opa != "c" && opa != "d") {
							alert("Debe ser una opción entre A y D");
						} else {
							switch (opa) {
								case "a":
									let opa1 = prompt(
										"Elige una comida típica: \n A-Carantanta \n B -Empanadas de Pipiani  \n C -Tripazo de maní"
									);
									if (opa1 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opa1 = opa1.toLowerCase();

										if (opa1 != "a" && opa1 != "b" && opa1 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opa1) {
												case "a":
													alert("Receta Carantanta");
													break;
												case "b":
													alert("receta Empanadas de Pipiani");
													break;
												case "c":
													alert("receta Tripazo de maní");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "b":
									let opb1 = prompt(
										"Elige una comida típica: \n A -Papa Rellena \n B -Tamales de Pipan  \n C -Salpicón Payanes "
									);
									if (opb1 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opb1 = opb1.toLowerCase();

										if (opb1 != "a" && opb1 != "b" && opb1 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opb1) {
												case "a":
													alert("Receta Papa Rellena");
													break;
												case "b":
													alert("Receta Tamales de Pipan");
													break;
												case "c":
													alert("Receta Salpicón Payanes");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "c":
									let opc1 = prompt(
										"Elige una comida típica: \n A-Sancocho de Gallina \n B -Sopa de Envueltos  \n C -Sopa de Masitas "
									);
									if (opc1 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opc1 = opc1.toLowerCase();

										if (opc1 != "a" && opc1 != "b" && opc1 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opc1) {
												case "a":
													alert("Receta Sancocho de Gallina");
													break;
												case "b":
													alert("Receta Sopa de Envueltos");
													break;
												case "c":
													alert("Receta Sopa de Masitas");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "d":
									let opd1 = prompt(
										"Elige una comida típica: \n A-Sopa de Mote \n B -Sopa de Orejas  \n C -Sopa de Tortilla "
									);
									if (opd1 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opd1 = opd1.toLowerCase();

										if (opd1 != "a" && opd1 != "b" && opd1 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opd1) {
												case "a":
													alert("Receta Sopa de Mote");
													break;
												case "b":
													alert("Receta Sopa de Orejas");
													break;
												case "c":
													alert("Receta Sopa de Tortilla");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;

								default:
									alert("Debe ser una opción entre A y C");
									break;
							}
						}
					}

					break;
				case "b":
					let opb = prompt(
						"Elige una ciudad: \n A-Villavicencio \n B -Acacías  \n C -Guamal  \n D -Granada "
					);

					if (opb == null) {
						alert("Debe ingresar datos válidos");
					} else {
						opb = opb.toLowerCase();

						if (opb != "a" && opb != "b" && opb != "c" && opb != "d") {
							alert("Debe ser una opción entre A y D");
						} else {
							switch (opb) {
								case "a":
									let opa2 = prompt(
										"Elige una comida típica: \n A-Arroz llanero \n B -Chigüiro a la Brasa  \n C -Cachama Asada a la Llanera"
									);
									if (opa2 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opa2 = opa2.toLowerCase();

										if (opa2 != "a" && opa2 != "b" && opa2 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opa2) {
												case "a":
													alert("Receta Arroz llanero");
													break;
												case "b":
													alert("Receta Chigüiro a la Brasa");
													break;
												case "c":
													alert("receta Cachama Asada a la Llanera");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "b":
									let opb2 = prompt(
										"Elige una comida típica: \n A-Carne a la Perra \n B -Carne a la Mamona  \n C -b1 "
									);
									if (opb2 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opb2 = opb2.toLowerCase();

										if (opb2 != "a" && opb2 != "b" && opb2 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opb2) {
												case "a":
													alert("Receta Carne a la Perra");
													break;
												case "b":
													alert("Receta Carne a la Mamona");
													break;
												case "c":
													alert("Receta Entreverado");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "c":
									let opc2 = prompt(
										"Elige una comida típica: \n A-Palo a Pique \n B -Pabellón Llanero  \n C -Casabe"
									);
									if (opc2 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opc2 = opc2.toLowerCase();

										if (opc2 != "a" && opc2 != "b" && opc2 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opc2) {
												case "a":
													alert("Receta Palo a Pique");
													break;
												case "b":
													alert("Receta Pabellón Llanero");
													break;
												case "c":
													alert("Receta Casabe");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "d":
									let opd2 = prompt(
										"Elige una comida típica: \n A-Sopa de Picadillo \n B -Tatuco  \n C -Capón de Ahuyama "
									);
									if (opd2 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opd2 = opd2.toLowerCase();

										if (opd2 != "a" && opd2 != "b" && opd2 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opd2) {
												case "a":
													alert("Receta Sopa de Picadillo");
													break;
												case "b":
													alert("Receta Tatuco");
													break;
												case "c":
													alert("Receta Capón de Ahuyama");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;

								default:
									alert("Debe ser una opción entre A y C");
									break;
							}
						}
					}

					break;
				case "c":
					let opc = prompt(
						"Elige una ciudad: \n A-Medellín \n B -Envigado  \n C -Bello  \n D -Sabaneta "
					);

					if (opc == null) {
						alert("Debe ingresar datos válidos");
					} else {
						opc = opc.toLowerCase();

						if (opc != "a" && opc != "b" && opc != "c" && opc != "d") {
							alert("Debe ser una opción entre A y D");
						} else {
							switch (opc) {
								case "a":
									let opa3 = prompt(
										"Elige una comida típica: \n A-Bandeja paisa \n B -Hogado  \n C -Parva "
									);
									if (opa3 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opa3 = opa3.toLowerCase();

										if (opa3 != "a" && opa3 != "b" && opa3 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opa3) {
												case "a":
													alert("Receta Bandeja paisa");
													break;
												case "b":
													alert("Receta Hogado");
													break;
												case "c":
													alert("receta Parva");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "b":
									let opb3 = prompt(
										"Elige una comida típica: \n A-Piononos \n B -Torta de chocolo  \n C -Dulce de papaya "
									);
									if (opb3 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opb3 = opb3.toLowerCase();

										if (opb3 != "a" && opb3 != "b" && opb3 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opb3) {
												case "a":
													alert("Receta Piononos");
													break;
												case "b":
													alert("Receta Torta de chocolo");
													break;
												case "c":
													alert("Receta Dulce de papaya");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "c":
									let opc3 = prompt(
										"Elige una comida típica: \n A-Frijoles antioqueños \n B -Carnes asadas al carbón  \n C -Cascos de guayaba"
									);
									if (opc3 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opc3 = opc3.toLowerCase();

										if (opc3 != "a" && opc3 != "b" && opc3 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opc3) {
												case "a":
													alert("Receta Frijoles antioqueños");
													break;
												case "b":
													alert("Receta Carnes asadas al carbón");
													break;
												case "c":
													alert("Receta Cascos de guayaba");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "d":
									let opd3 = prompt(
										"Elige una comida típica: \n A-Chorizo antioqueño \n B -Sancocho antioqueño  \n C -Muchacho sudado "
									);
									if (opd3 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opd3 = opd3.toLowerCase();

										if (opd3 != "a" && opd3 != "b" && opd3 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opd3) {
												case "a":
													alert("Receta Chorizo antioqueño");
													break;
												case "b":
													alert("Receta Sancocho antioqueño");
													break;
												case "c":
													alert("Receta Muchacho sudado");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;

								default:
									alert("Debe ser una opción entre A y C");
									break;
							}
						}
					}

					break;
				case "d":
					let opd = prompt(
						"Elige una ciudad: \n A-Bogotá \n B -Chía \n C -Zipaquirá  \n D -Soacha "
					);

					if (opd == null) {
						alert("Debe ingresar datos válidos");
					} else {
						opd = opd.toLowerCase();

						if (opd != "a" && opd != "b" && opd != "c" && opd != "d") {
							alert("Debe ser una opción entre A y D");
						} else {
							switch (opd) {
								case "a":
									let opa4 = prompt(
										"Elige una comida típica: \n A-Ajiaco Bogotano \n B -Fritanga Bogotana  \n C -Papas Chorreadas "
									);
									if (opa4 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opa4 = opa4.toLowerCase();

										if (opa4 != "a" && opa4 != "b" && opa4 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opa4) {
												case "a":
													alert("Receta Ajiaco Bogotano");
													break;
												case "b":
													alert("Receta Fritanga Bogotana");
													break;
												case "c":
													alert("Receta Papas Chorreadas");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "b":
									let opb4 = prompt(
										"Elige una comida típica: \n A-Puchero Bogotano \n B -Mazamorra Chiquita  \n C -Sorbete de Curuba"
									);
									if (opb4 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opb4 = opb4.toLowerCase();

										if (opb4 != "a" && opb4 != "b" && opb4 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opb4) {
												case "a":
													alert("Receta Puchero Bogotano");
													break;
												case "b":
													alert("Receta Mazamorra Chiquita");
													break;
												case "c":
													alert("Receta Sorbete de Curuba");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "c":
									let opc4 = prompt(
										"Elige una comida típica: \n A-Sobrebarriga Criolla \n B -Brevas con Arequipe  \n C -Changua"
									);
									if (opc4 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opc4 = opc4.toLowerCase();

										if (opc4 != "a" && opc4 != "b" && opc4 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opc4) {
												case "a":
													alert("Receta Sobrebarriga Criolla");
													break;
												case "b":
													alert("Receta Brevas con Arequipe");
													break;
												case "c":
													alert("Receta Changua");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "d":
									let opd4 = prompt(
										"Elige una comida típica: \n A-Postre de Natas \n B -El chocolate santafereño  \n C -Changua "
									);
									if (opd4 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opd4 = opd4.toLowerCase();

										if (opd4 != "a" && opd4 != "b" && opd4 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opd4) {
												case "a":
													alert("Receta Postre de Natas");
													break;
												case "b":
													alert("Receta El chocolate santafereño");
													break;
												case "c":
													alert("Receta Changua");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;

								default:
									alert("Debe ser una opción entre A y C");
									break;
							}
						}
					}
					break;
				case "e":
					let ope = prompt(
						"Elige una ciudad: \n A-Barranquilla \n B -Soledad  \n C -Malambo  \n D -Baranoa "
					);

					if (ope == null) {
						alert("Debe ingresar datos válidos");
					} else {
						ope = ope.toLowerCase();

						if (ope != "a" && ope != "b" && ope != "c" && ope != "d") {
							alert("Debe ser una opción entre A y D");
						} else {
							switch (ope) {
								case "a":
									let opa5 = prompt(
										"Elige una comida típica: \n A-Arroz de lisa \n B -Bollo de yuca  \n C -Sancocho de guandú con carne salada "
									);
									if (opa5 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opa5 = opa5.toLowerCase();

										if (opa5 != "a" && opa5 != "b" && opa5 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opa5) {
												case "a":
													alert("Receta Arroz de lisa");
													break;
												case "b":
													alert("Receta Bollo de yuca");
													break;
												case "c":
													alert(
														"receta Sancocho de guandú con carne salada"
													);
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "b":
									let opb5 = prompt(
										"Elige una comida típica: \n A-Bocachico en cabrito \n B -Enyucado  \n C -Butifarras"
									);
									if (opb5 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opb5 = opb5.toLowerCase();

										if (opb5 != "a" && opb5 != "b" && opb5 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opb5) {
												case "a":
													alert("Receta Bocachico en cabrito");
													break;
												case "b":
													alert("Receta Enyucado");
													break;
												case "c":
													alert("Receta Butifarras");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "c":
									let opc5 = prompt(
										"Elige una comida típica: \n A-Caribañola \n B -Arepa de huevo  \n C -Arroz con chipi chipi "
									);
									if (opc5 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opc5 = opc5.toLowerCase();

										if (opc5 != "a" && opc5 != "b" && opc5 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opc5) {
												case "a":
													alert("Receta Caribañola");
													break;
												case "b":
													alert("Receta Arepa de huevo");
													break;
												case "c":
													alert("Receta Arroz con chipi chipi");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;
								case "d":
									let opd5 = prompt(
										"Elige una comida típica: \n A-Pescado frito \n B -Arroz con coco  \n C -Arepa de Huevo "
									);
									if (opd5 == null) {
										alert("Debe ingresar datos válidos");
									} else {
										opd5 = opd5.toLowerCase();

										if (opd5 != "a" && opd5 != "b" && opd5 != "c") {
											alert("Debe ser una opción entre A y C");
										} else {
											switch (opd5) {
												case "a":
													alert("Receta Pescado frito");
													break;
												case "b":
													alert("Receta Arroz con coco");
													break;
												case "c":
													alert("Receta Arepa de Huevo");
													break;

												default:
													alert("Elige una opción correcta");
													break;
											}
										}
									}

									break;

								default:
									alert("Debe ser una opción entre A y C");
									break;
							}
						}
					}
					break;

				default:
					alert("Elige una opción correcta");

					break;
			}
		}
	}
};
