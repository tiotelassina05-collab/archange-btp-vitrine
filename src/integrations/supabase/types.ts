export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          first_name: string
          id: string
          id_document: string | null
          id_document_type: string | null
          last_name: string
          nationality: string | null
          notes: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          first_name: string
          id?: string
          id_document?: string | null
          id_document_type?: string | null
          last_name: string
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          id_document?: string | null
          id_document_type?: string | null
          last_name?: string
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          active: boolean | null
          email: string
          id: string
          subscribed_at: string
        }
        Insert: {
          active?: boolean | null
          email: string
          id?: string
          subscribed_at?: string
        }
        Update: {
          active?: boolean | null
          email?: string
          id?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quote_requests: {
        Row: {
          address: string
          budget: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          mission: string
          phone: string
          project_type: string
          status: string | null
          updated_at: string
        }
        Insert: {
          address: string
          budget?: string | null
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          mission: string
          phone: string
          project_type: string
          status?: string | null
          updated_at?: string
        }
        Update: {
          address?: string
          budget?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          mission?: string
          phone?: string
          project_type?: string
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      reservations: {
        Row: {
          adults: number | null
          advance_payment: number | null
          check_in: string
          check_out: string
          children: number | null
          client_id: string | null
          confirmation_sent: boolean | null
          created_at: string
          created_by: string | null
          id: string
          notes: string | null
          payment_method: Database["public"]["Enums"]["payment_method"] | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          room_id: string | null
          total_amount: number
          updated_at: string
        }
        Insert: {
          adults?: number | null
          advance_payment?: number | null
          check_in: string
          check_out: string
          children?: number | null
          client_id?: string | null
          confirmation_sent?: boolean | null
          created_at?: string
          created_by?: string | null
          id?: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          room_id?: string | null
          total_amount: number
          updated_at?: string
        }
        Update: {
          adults?: number | null
          advance_payment?: number | null
          check_in?: string
          check_out?: string
          children?: number | null
          client_id?: string | null
          confirmation_sent?: boolean | null
          created_at?: string
          created_by?: string | null
          id?: string
          notes?: string | null
          payment_method?: Database["public"]["Enums"]["payment_method"] | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          room_id?: string | null
          total_amount?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reservations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reservations_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          amenities: string[] | null
          capacity: number | null
          category: Database["public"]["Enums"]["room_category"]
          created_at: string
          description: string | null
          id: string
          price_per_night: number
          room_number: string
          status: Database["public"]["Enums"]["room_status"] | null
          updated_at: string
        }
        Insert: {
          amenities?: string[] | null
          capacity?: number | null
          category: Database["public"]["Enums"]["room_category"]
          created_at?: string
          description?: string | null
          id?: string
          price_per_night: number
          room_number: string
          status?: Database["public"]["Enums"]["room_status"] | null
          updated_at?: string
        }
        Update: {
          amenities?: string[] | null
          capacity?: number | null
          category?: Database["public"]["Enums"]["room_category"]
          created_at?: string
          description?: string | null
          id?: string
          price_per_night?: number
          room_number?: string
          status?: Database["public"]["Enums"]["room_status"] | null
          updated_at?: string
        }
        Relationships: []
      }
      service_orders: {
        Row: {
          id: string
          notes: string | null
          order_date: string | null
          quantity: number | null
          reservation_id: string | null
          service_id: string | null
          total_price: number
          unit_price: number
        }
        Insert: {
          id?: string
          notes?: string | null
          order_date?: string | null
          quantity?: number | null
          reservation_id?: string | null
          service_id?: string | null
          total_price: number
          unit_price: number
        }
        Update: {
          id?: string
          notes?: string | null
          order_date?: string | null
          quantity?: number | null
          reservation_id?: string | null
          service_id?: string | null
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "service_orders_reservation_id_fkey"
            columns: ["reservation_id"]
            isOneToOne: false
            referencedRelation: "reservations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_orders_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          available: boolean | null
          category: string
          created_at: string
          description: string | null
          id: string
          name: string
          price: number | null
        }
        Insert: {
          available?: boolean | null
          category: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          price?: number | null
        }
        Update: {
          available?: boolean | null
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          price?: number | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: { Args: never; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "receptionniste"
      payment_method:
        | "especes"
        | "orange_money"
        | "mtn_momo"
        | "wave"
        | "moov_money"
        | "carte_bancaire"
      payment_status: "acompte" | "solde" | "impaye"
      room_category: "standard" | "suite_raffinee" | "suite_superieure"
      room_status: "libre" | "reservee" | "occupee" | "entretien"
      user_role: "admin" | "receptionniste" | "comptable"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "manager", "receptionniste"],
      payment_method: [
        "especes",
        "orange_money",
        "mtn_momo",
        "wave",
        "moov_money",
        "carte_bancaire",
      ],
      payment_status: ["acompte", "solde", "impaye"],
      room_category: ["standard", "suite_raffinee", "suite_superieure"],
      room_status: ["libre", "reservee", "occupee", "entretien"],
      user_role: ["admin", "receptionniste", "comptable"],
    },
  },
} as const
