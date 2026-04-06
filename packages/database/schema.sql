create table visa_country (
  id uuid primary key,
  name_ar text not null,
  name_en text not null,
  iso_code text not null unique,
  active boolean not null default true
);

create table visa_type (
  id uuid primary key,
  country_id uuid not null references visa_country(id),
  name text not null,
  channel text not null,
  active boolean not null default true
);

create table visa_request (
  id uuid primary key,
  visa_type_id uuid not null references visa_type(id),
  reference_code text not null unique,
  full_name text not null,
  email text not null,
  phone text not null,
  passport_number text not null,
  status text not null,
  submitted_at timestamptz,
  created_at timestamptz not null default now()
);

create table status_event (
  id uuid primary key,
  visa_request_id uuid not null references visa_request(id),
  from_status text,
  to_status text not null,
  note text not null,
  created_at timestamptz not null default now()
);
