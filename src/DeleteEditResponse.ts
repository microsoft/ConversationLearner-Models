export interface DeleteEditResponse {
  packageId: number
  trainingStatus: string
  // TrainDialogs invalidated by the Delete/Edit action
  trainDialogIds: string[]
}
