export interface IPlaygroundStepsStep {
  currentValue: string
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsStep[]
}
