export interface IPlaygroundStepsStep {
  currentValue: string | null
  enteredValue: string | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsStep[]
}
