import {
  AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT,
  AUTH_USER_LOADING_GOOGLE_ACCOUNTS,
  AUTH_USER_SAVE_DATA_ACCOUNT_IN_STORAGE,
  AUTH_USER_SIGNOUT_FROM_ACCOUNT,
  AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT,
} from '../../const'

const initialState: object = {
  userAuthOrNoAuth: false,
  isLoading: false,
  userName: '',
  userPhoto: '',
  userEmail: '',
  userID: '',
  choiceSaveInStorage: false,
}

type IAuthReducerProps = {
  type: string
  userName: string | undefined | null
  userPhoto: string
  userEmail: string
  userID: string
  choiceSaveInStorage: boolean
}

export const authReducer = (
  state = initialState,
  {
    type,
    userName,
    userPhoto,
    userEmail,
    userID,
    choiceSaveInStorage,
  }: IAuthReducerProps,
) => {
  switch (type) {
    case AUTH_USER_LOADING_GOOGLE_ACCOUNTS:
      return {
        ...state,
        isLoading: true,
      }
    case AUTH_USER_SUCCESS_WITH_GOOGLE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: true,
        userName: userName,
        userPhoto: userPhoto,
        userEmail: userEmail,
        userID: userID,
      }
    case AUTH_USER_SIGNOUT_FROM_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: false,
        userName: '',
        userPhoto: '',
        userEmail: '',
        userID: '',
      }
    case AUTH_USER_ERROR_WITH_GOOGLE_ACCOUNT:
      return {
        ...state,
        isLoading: false,
        userAuthOrNoAuth: false,
      }
    case AUTH_USER_SAVE_DATA_ACCOUNT_IN_STORAGE:
      return {
        ...state,
        choiceSaveInStorage: choiceSaveInStorage,
      }
    default:
      return state
  }
}
