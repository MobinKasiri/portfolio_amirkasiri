const messages = {
   // HTTP Status Codes
   statusCodes: {
      // 2xx Success
      200: {
         code: 200,
         message: "درخواست موفقیت‌آمیز بود.",
      },
      201: {
         code: 201,
         message: "منبع با موفقیت ایجاد شد.",
      },
      204: {
         code: 204,
         message: "هیچ محتوایی برای نمایش وجود ندارد.",
      },

      // 4xx Client Errors
      400: {
         code: 400,
         message: "درخواست نامعتبر است.",
      },
      401: {
         code: 401,
         message: "دسترسی غیرمجاز. لطفاً وارد شوید.",
      },
      403: {
         code: 403,
         message: "شما مجوز دسترسی به این منبع را ندارید.",
      },
      404: {
         code: 404,
         message: "منبع درخواستی یافت نشد.",
      },
      409: {
         code: 409,
         message: "تعارض در درخواست. ممکن است منبع از قبل وجود داشته باشد.",
      },
      422: {
         code: 422,
         message: "داده‌های ارسالی نامعتبر هستند.",
      },
      429: {
         code: 429,
         message: "تعداد درخواست‌ها بیش از حد مجاز است. لطفاً بعداً تلاش کنید.",
      },

      // 5xx Server Errors
      500: {
         code: 500,
         message: "خطای سرور. لطفاً بعداً تلاش کنید.",
      },
      502: {
         code: 502,
         message: "خطای دروازه. سرور موقتاً در دسترس نیست.",
      },
      503: {
         code: 503,
         message: "سرویس موقتاً در دسترس نیست.",
      },
      504: {
         code: 504,
         message: "زمان درخواست به پایان رسید.",
      },
   },

   // Custom Error Messages
   errors: {
      invalidInput: "ورودی نامعتبر است.",
      unauthorized: "شما مجوز دسترسی به این بخش را ندارید.",
      notFound: "مورد درخواستی یافت نشد.",
      serverError: "خطای سرور رخ داده است.",
      networkError: "خطا در ارتباط با سرور.",
      duplicateEntry: "رکورد تکراری است.",
      validationError: "خطا در اعتبارسنجی داده‌ها.",
      sessionExpired: "نشست شما منقضی شده است. لطفاً دوباره وارد شوید.",
      permissionDenied: "شما مجوز انجام این عمل را ندارید.",
   },

   // Success Messages
   success: {
      operationSuccessful: "عملیات با موفقیت انجام شد.",
      dataSaved: "داده‌ها با موفقیت ذخیره شدند.",
      dataUpdated: "داده‌ها با موفقیت به‌روزرسانی شدند.",
      dataDeleted: "داده‌ها با موفقیت حذف شدند.",
      loginSuccessful: "ورود با موفقیت انجام شد.",
      logoutSuccessful: "خروج با موفقیت انجام شد.",
      fileUploaded: "فایل با موفقیت آپلود شد.",
      passwordChanged: "رمز عبور با موفقیت تغییر یافت.",
   },

   // Warning Messages
   warnings: {
      incompleteData: "داده‌های ارسالی ناقص هستند.",
      weakPassword: "رمز عبور ضعیف است. لطفاً رمز قوی‌تری انتخاب کنید.",
      unsavedChanges: "تغییرات ذخیره نشده‌ای وجود دارد. آیا مطمئن هستید که می‌خواهید ادامه دهید؟",
      sessionTimeout: "نشست شما به زودی منقضی می‌شود. لطفاً فعالیت خود را ادامه دهید.",
      deprecatedFeature: "این ویژگی منسوخ شده است و ممکن است در آینده حذف شود.",
      highUsage: "استفاده شما از سیستم به حد مجاز نزدیک شده است.",
   },
};

export default messages;
