import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore';
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
} from '@aws-amplify/datastore';

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Todo = LazyLoading extends LazyLoadingDisabled
  ? EagerTodo
  : LazyTodo;

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(
    source: Todo,
    mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void,
  ): Todo;
};

type EagerDatoSensores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DatoSensores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userEmail?: string | null;
  readonly content?: (Content | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyDatoSensores = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DatoSensores, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userEmail?: string | null;
  readonly content: AsyncCollection<Content>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type DatoSensores = LazyLoading extends LazyLoadingDisabled
  ? EagerDatoSensores
  : LazyDatoSensores;

export declare const DatoSensores: (new (
  init: ModelInit<DatoSensores>,
) => DatoSensores) & {
  copyOf(
    source: DatoSensores,
    mutator: (
      draft: MutableModel<DatoSensores>,
    ) => MutableModel<DatoSensores> | void,
  ): DatoSensores;
};

type EagerContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datoSensoresID: string;
  readonly valor: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Content, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly datoSensoresID: string;
  readonly valor: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Content = LazyLoading extends LazyLoadingDisabled
  ? EagerContent
  : LazyContent;

export declare const Content: (new (init: ModelInit<Content>) => Content) & {
  copyOf(
    source: Content,
    mutator: (draft: MutableModel<Content>) => MutableModel<Content> | void,
  ): Content;
};

type EagerMotoruser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Motoruser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userEmail: string;
  readonly estado: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyMotoruser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Motoruser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userEmail: string;
  readonly estado: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Motoruser = LazyLoading extends LazyLoadingDisabled
  ? EagerMotoruser
  : LazyMotoruser;

export declare const Motoruser: (new (
  init: ModelInit<Motoruser>,
) => Motoruser) & {
  copyOf(
    source: Motoruser,
    mutator: (draft: MutableModel<Motoruser>) => MutableModel<Motoruser> | void,
  ): Motoruser;
};
