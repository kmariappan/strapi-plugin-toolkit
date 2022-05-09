export abstract class StrapiApiAbstract<T> {
  public abstract findMany(): unknown;
  public abstract findOne(): unknown;
  public abstract create(data: Partial<T>): unknown;
  public abstract update(data: Partial<T>): unknown;
  public abstract delete(id: string | number): unknown;
}
