--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Debian 12.12-1.pgdg110+1)
-- Dumped by pg_dump version 12.12 (Debian 12.12-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: address; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.address (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    street character varying NOT NULL,
    city_id uuid
);


ALTER TABLE public.address OWNER TO "user";

--
-- Name: city; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.city (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    country_id uuid
);


ALTER TABLE public.city OWNER TO "user";

--
-- Name: country; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.country (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.country OWNER TO "user";

--
-- Name: profile; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.profile (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying NOT NULL,
    user_id uuid,
    address_id uuid
);


ALTER TABLE public.profile OWNER TO "user";

--
-- Name: user; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."user" (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    username character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO "user";

--
-- Name: profile PK_3dd8bfc97e4a77c70971591bdcb; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY (id);


--
-- Name: city PK_b222f51ce26f7e5ca86944a6739; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY (id);


--
-- Name: country PK_bf6e37c231c4f4ea56dcd887269; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.country
    ADD CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: address PK_d92de1f82754668b5f5f5dd4fd5; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY (id);


--
-- Name: profile REL_d752442f45f258a8bdefeebb2f; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "REL_d752442f45f258a8bdefeebb2f" UNIQUE (user_id);


--
-- Name: profile REL_fb70f0dc1dda3ae5e1b7fb0c93; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "REL_fb70f0dc1dda3ae5e1b7fb0c93" UNIQUE (address_id);


--
-- Name: city FK_08af2eeb576770524fa05e26f39; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT "FK_08af2eeb576770524fa05e26f39" FOREIGN KEY (country_id) REFERENCES public.country(id);


--
-- Name: address FK_714a4ca3cfd66a718b5f7c3fee5; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT "FK_714a4ca3cfd66a718b5f7c3fee5" FOREIGN KEY (city_id) REFERENCES public.city(id);


--
-- Name: profile FK_d752442f45f258a8bdefeebb2f2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "FK_d752442f45f258a8bdefeebb2f2" FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: profile FK_fb70f0dc1dda3ae5e1b7fb0c93e; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "FK_fb70f0dc1dda3ae5e1b7fb0c93e" FOREIGN KEY (address_id) REFERENCES public.address(id);


--
-- PostgreSQL database dump complete
--

INSERT INTO public.country(
	id, name)
	VALUES ('35cd7a24-3891-11ed-a261-0242ac120002', 'Mexico');

INSERT INTO public.city(
	id, name, country_id)
	VALUES ('1f914780-3892-11ed-a261-0242ac120002', 'Guadalajara', '35cd7a24-3891-11ed-a261-0242ac120002');
