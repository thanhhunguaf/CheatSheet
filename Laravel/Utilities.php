<?php
/**
 * Created by 142111. O.O
 */


class Utilities
{
    /**
     * @param $request
     * @return bool -> true is wrong, false is succeed
     */
    public function validateEmail(Request $request): bool
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        return $validator->fails();
    }

    /**
     * @param $request
     * @return bool
     */
    public function postLogout(Request $request): bool
    {
        $res = $request->user()->token()->revoke();
        return $res;
    }
}