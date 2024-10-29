interface TypeChart {
    [key: string]: number
}

export interface TypeChartAssisstant {
    status: string | null,
    chart: TypeChart[]
}