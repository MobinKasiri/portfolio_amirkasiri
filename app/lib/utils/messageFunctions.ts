import messages from "./messages";

export const handleHttpError = (statusCode: number | undefined) => {
   const errorMessage =
      messages.statusCodes[statusCode as keyof typeof messages.statusCodes]?.message ||
      messages.errors.serverError;
   return errorMessage;
};

export const showSuccessMessage = (operation: keyof typeof messages.success) => {
   const successMessage = messages.success[operation];
   return successMessage;
};

export const showWarning = (warning: keyof typeof messages.warnings) => {
   const warningMessage = messages.warnings[warning];
   return warningMessage;
};
