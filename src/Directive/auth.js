import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";
import { ensureSignedIn } from "../helper/auth";

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args) {
      const [, , context] = args;

      ensureSignedIn(context.req);

      return resolve.apply(this, args);
    };
  }
}

export default AuthDirective;
