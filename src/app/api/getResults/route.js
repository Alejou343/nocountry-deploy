import { NextResponse } from "next/server";
export async function GET(request) {
  //recibir la id de la room
  //se debe obtener los resultados de las opciones y los votos
  const results = [{ option1: 3 }, { option2: 5 }, { option3: 2 }];
  return NextResponse.json({ results });
}
