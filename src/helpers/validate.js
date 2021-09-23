const options = {
  abortEarly: false,
  allowUnknown: true,
  errors: {
    wrap: {
      label: '',
    },
  },
};

export default function validate(schema, ctx) {
  const { value, error } = schema.validate(ctx.request.body, options);

  if (error) {
    const validationError = {
      message: 'ValidationError',
      errors: error.details.reduce(
        (obj, fieldError) => ({
          ...obj,
          [fieldError.context.key]: {
            message: fieldError.message,
          },
        }),
        {}
      ),
    };

    ctx.throw(400, validationError);
  }

  return value;
}
