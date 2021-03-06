﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BIMManager.API.Helpers
{
    public class Validator
    {
        public static bool IsEmailValid(string email)
        {
            return new EmailAddressAttribute().IsValid(email);
        }
    }
}
