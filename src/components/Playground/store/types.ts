export interface IPlaygroundStepsStep {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsStep[]
  totalSuccessful: number
  totalUnsuccessful: number
}
