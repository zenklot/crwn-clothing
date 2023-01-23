import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
import { ActionWithPayload, Action,withMacher } from "../../utils/reducer/reducer.utils";
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth"

export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>

export const setCurrentUser = withMacher((user : UserData) : SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

export type EmailSignIn = {
  email : string
  password: string
}

export type UserSignInData = EmailSignIn & {
  displayName: string
} 

export type UserSignUpData = {
  user: User,
  additionalDetails: AdditionalInformation
}

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SECTION>
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, EmailSignIn>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, UserSignInData>
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, UserSignUpData>
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>

export const checkUserSession = withMacher(() : CheckUserSession =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SECTION));

export const googleSignInStart = withMacher(() : GoogleSignInStart=>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMacher((email: string, password: string) : EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password }));

export const signInSuccess = withMacher((user: UserData & { id : String}) : SignInSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFailed = withMacher((error: Error): SignInFailed =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));

export const signUpStart = withMacher((email: string, password: string, displayName: string) : SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  }));


export const signUpFailed = withMacher((error: Error) : SignUpFailed =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signUpSuccess = withMacher((user:User, additionalDetails: AdditionalInformation) : SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails }));

export const signOutStart = withMacher(() : SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMacher(() : SignOutSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailed = withMacher((error: Error) : SignOutFailed =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
